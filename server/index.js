import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

// --- Middleware ---
app.use(express.json());

// --- CORS ---
// Si frontend et backend sont sur le même domaine, tu peux commenter cors
const allowedOrigins = (process.env.ALLOWED_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map(o => o.trim());

app.use(cors());

// --- Form endpoint ---
app.post("/form", async (req, res) => {
  try {
    console.log("Form reçu :", req.body);

    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    console.log('Réponse brute Google Script:', text);

    try {
      const result = JSON.parse(text);
      res.json(result);
    } catch (e) {
      console.error("Réponse non JSON :", text);
      res.status(500).json({ error: "Réponse non JSON reçue du Google Script" });
    }
  } catch (error) {
    console.error("Erreur proxy:", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

// --- Serve frontend static files ---
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

// --- SPA routing fallback ---
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// --- Start server ---
const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log(`✅ Serveur en ligne sur le port ${port}`));
