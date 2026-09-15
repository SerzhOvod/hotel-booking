import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'db.json');

app.use(cors());
app.use(express.json());

function getDatabase() {
  const data = fs.readFileSync(dbPath, 'utf-8');

  return JSON.parse(data);
}

// GET
app.get('/api/destinations', (req, res) => {
  const db = getDatabase();

  res.json(db.destination);
});

// POST
app.post('/api/hotels/search', (req, res) => {
  const db = getDatabase();

  const { destination, checkIn, checkOut, adults, children } = req.body;

  console.log('Search request:', req.body);

  const selectedDestination = db.destination.find(
    item => item.value === Number(destination),
  );

  if (!selectedDestination) {
    return res.status(404).json({
      message: 'Destination not found',
    });
  }

  const hotels = db.hotels.filter(
    hotel => hotel.city === selectedDestination.label,
  );

  res.json({
    search: {
      destination: selectedDestination,
      checkIn,
      checkOut,
      adults,
      children,
    },
    hotels,
  });
});

// LISTEN
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
