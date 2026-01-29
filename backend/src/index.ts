import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'VYUHA Backend is running' });
});

// Example API endpoint
app.get('/api', (req: Request, res: Response) => {
  res.json({ 
    message: 'Welcome to VYUHA API',
    version: '0.1.0'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
