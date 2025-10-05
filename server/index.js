import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

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
