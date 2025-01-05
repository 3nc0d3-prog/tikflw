const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('TikTok Takipçi Gönderim Botu Çalışıyor!');
});

app.post('/send-follower', async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.post('https://api.tiktok.com/follow', {
      username: username,
    });

    if (response.data.success) {
      res.json({ message: `${username} adlı kullanıcıya takipçi gönderildi.` });
    } else {
      res.json({ error: response.data.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'API hatası: ' + error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
