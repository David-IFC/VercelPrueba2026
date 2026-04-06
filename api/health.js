export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    message: "Todo funciona correctamente en Vercel.",
    timestamp: new Date().toISOString()
  });
}
