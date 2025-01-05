const axios = require('axios');

async function sendFollower(username) {
  try {
    const response = await axios.post('https://api.tiktok.com/follow', {
      username: username,
      // Auth ve diğer gerekli bilgileri eklemeniz gerekebilir
    });

    if (response.data.success) {
      console.log(`${username} adlı kullanıcıya takipçi gönderildi.`);
    } else {
      console.log('Bir hata oluştu:', response.data.error);
    }
  } catch (error) {
    console.error('API hatası:', error);
  }
}

sendFollower('kullanici_adiniz');

