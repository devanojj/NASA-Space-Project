import express from 'express';
import dotenv  from 'dotenv';
import { fetchApod } from './services/nasa.js';
import cors from 'cors'
import helmet from 'helmet';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(helmet({
  contentSecurityPolicy: false
}));

app.use(cors({
  origin: 'https://witty-hill-082a98a03.1.azurestaticapps.net'
}))

app.get('/api/apod', async (req, res) => {
  try {
    const data = await fetchApod(req.query.date);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch' });
  }
});

app.listen(port, () => console.log(`API listening on port ${port}`));