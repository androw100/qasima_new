import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

// إعداد CORS
app.use(cors({
  origin: '*', // يسمح بالطلبات من جميع النطاقات، تأكد من ضبطه بشكل أكثر أماناً في الإنتاج
  methods: ['GET', 'POST'], // تحديد الأساليب المسموح بها
}));

// Route لجلب الفئات
app.get('/api/categories', async (req, res) => {
  try {
    const response = await fetch('https://qasimahapp.com/api/categories');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// Route لجلب بيانات الفئة حسب ID
app.get('/api/home/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    const response = await fetch(`https://qasimahapp.com/api/home/${categoryId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// تشغيل السيرفر
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
