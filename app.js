import express from 'express';
const app = express();
const port = process.env.Port || 3000;


app.get('/', (req, res) => {
  const payload = {
    name: "Chioma Princess Ohwo",
    role: "Backend Developer in Training",
    message: "Excited to build my first API!"
  };
  res.type('application/json');
  res.send(JSON.stringify(payload, null, 2));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


