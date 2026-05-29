import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

// Rate limiter: maximum 20 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 20 requests per windowMs
  message: { error: "Слишком много запросов. Пожалуйста, подождите немного перед следующей отправкой." },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Trust the proxy to correctly resolve IPs for rate limiting
  app.set("trust proxy", 1);

  app.use(express.json());

  // API route for Telegram notifications (handles both dev and php paths)
  app.post(["/api/contact", "/contact.php"], contactLimiter, async (req, res) => {
    const { name, phone, message, page } = req.body;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram configuration is missing!");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const text = `
🆕 <b>Новая заявка с сайта!</b>
👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
💬 <b>Сообщение:</b> ${message || 'Нет сообщения'}
📄 <b>Страница:</b> ${page || 'Главная'}
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "HTML",
        }),
      });

      if (response.ok) {
        res.json({ success: true });
      } else {
        const errorData = await response.json();
        console.error("Telegram API error:", errorData);
        res.status(500).json({ error: "Failed to send message to Telegram" });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
