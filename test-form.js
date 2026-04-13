const formData = new FormData();
formData.append("access_key", "7552b74e-86cd-4617-9107-cdfd1bf0cd23");
formData.append("name", "Test User");
formData.append("email", "test@example.com");
formData.append("message", "This is a test message to verify the form integration.");

fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formData,
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Origin": "http://localhost:5173",
    "Referer": "http://localhost:5173/"
  }
})
.then(res => res.json())
.then(console.log)
.catch(console.error);
