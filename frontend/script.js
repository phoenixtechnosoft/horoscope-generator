const sign = localStorage.getItem("zodiacSign") || "aries";
fetch("https://horoscope-generator-gx3s.onrender.com/api/horoscope/" + sign)
  .then(res => res.json())
  .then(data => {
    document.getElementById("horoscope").innerText = data.horoscope;
  })
  .catch(err => {
    document.getElementById("horoscope").innerText = "Failed to load horoscope.";
    console.error(err);
  });
