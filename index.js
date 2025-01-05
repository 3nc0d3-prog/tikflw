const axios = require('axios');

async function sendFollower(username) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      username: username,
      followers: 10, // Örnek bir veri
    });

    if (response.status === 201) {
      console.log(`${username} adlı kullanıcıya takipçi gönderildi (simüle).`);
    } else {
      console.log('Bir hata oluştu:', response.data);
    }
  } catch (error) {
    console.error('API hatası:', error.message);
  }
}

sendFollower('kullanici_adiniz');
