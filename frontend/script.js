
const sign = localStorage.getItem("zodiacSign") || "aries";
fetch("https://your-backend-url.onrender.com/api/horoscope/" + sign)
  .then(res => res.json())
  .then(data => {
    document.getElementById("horoscope").innerText = data.horoscope;
  });
