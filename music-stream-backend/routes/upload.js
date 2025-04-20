import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
 });

router.post('/', upload.single('audio'), (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).send('No file uploaded');

  return res.status(200).json({
    url: `/uploads/${file.filename}`,
    filename: file.filename
  })
});

export default router;
