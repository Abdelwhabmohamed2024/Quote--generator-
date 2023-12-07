var cartona = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
];

function generateQuote() {
  
  var generate = Math.floor(Math.random() * cartona.length);

  
  document.getElementById("geny").innerText = cartona[generate];

  
  var button = document.getElementById("rate");
  var colors = ["red","green", "brown"];
  var btnColors = colors[Math.floor(Math.random() * colors.length)];
  button.style.backgroundColor = btnColors;
}