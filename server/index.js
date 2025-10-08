import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
const allowedOrigins = (process.env.ALLOWED_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map(o => o.trim());

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.post("/form", async (req, res) => {
  try {
    console.log(req.body)
    // Ici, tu peux ajouter des vérifications (captcha, regex email, etc.)
    // Beaucoup de Google Apps Script attendent un POST form-urlencoded (e.parameter)
   

    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
console.log('Réponse brute:', text);
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

const port = Number(process.env.PORT) || 3000;
app.listen(port, () =>
  console.log(`✅ Proxy en ligne sur http://localhost:${port}`)
);
