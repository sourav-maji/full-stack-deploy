import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",

      // Add production url ( with domain)
    ],
    credentials :true,
    methods :["GET","POST","PATCH","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// API route

app.get("/", (req, res) => {
  res.json({
    message: "Hello , welcome home!!",
  });
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from chaicode server" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening at  http://localhost:${PORT}`);
});
