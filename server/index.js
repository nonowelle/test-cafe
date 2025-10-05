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
    // Ici, tu peux ajouter des vérifications (captcha, regex email, etc.)
    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(req.body),
    });

    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error("Erreur proxy:", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () =>
  console.log(`✅ Proxy en ligne sur http://localhost:${port}`)
);
