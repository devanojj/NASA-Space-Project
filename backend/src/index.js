import express from 'express';
import dotenv  from 'dotenv';
import { fetchApod } from './services/nasa.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;


app.get('/api/apod', async (req, res) => {
  try {
    const data = await fetchApod(req.query.date);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch' });
  }
});

app.listen(port, () =>
  console.log(`🚀 API listening on http://localhost:${port}`)
);