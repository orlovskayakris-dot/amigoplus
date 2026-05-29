<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$name = isset($input['name']) ? $input['name'] : 'Не указано';
$phone = isset($input['phone']) ? $input['phone'] : 'Не указано';
$message = (isset($input['message']) && trim($input['message']) !== '') ? $input['message'] : 'Нет сообщения';
$page = isset($input['page']) ? $input['page'] : 'Не указана';

// --- ВНИМАНИЕ: НАСТРОЙКИ TELEGRAM ---
// Вставьте сюда ваши данные от бота (они скрыты от пользователей браузера)
$botToken = ''; // Например: '123456789:ABCdefGHIjklMNOpqrSTUvwxYZ'
$chatId = '';   // Например: '123456789' либо '-1001234567890' (для групп)

if (empty($botToken) || empty($chatId)) {
    http_response_code(500);
    echo json_encode(['error' => 'Server configuration error']);
    exit;
}

$text = "📩 Новая заявка с сайта!\n\n";
$text .= "👤 Имя: " . $name . "\n";
$text .= "📞 Телефон: " . $phone . "\n";
if ($message !== 'Нет сообщения') {
    $text .= "💬 Сообщение: " . $message . "\n";
}
$text .= "\n🌐 Страница: " . $page;

$telegramUrl = "https://api.telegram.org/bot" . $botToken . "/sendMessage";

$postFields = [
    'chat_id' => $chatId,
    'text' => $text,
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $telegramUrl);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    http_response_code(200);
    echo json_encode(['status' => 'success']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Telegram request failed', 'details' => $response]);
}
?>
