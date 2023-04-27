let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

setInterval(countdown, 1000);

function countdown() {
      var now = new Date();
      var newYear = new Date("2023-5-4");
      var nextYear = newYear.getFullYear() + 1;
      var daysLeft = (newYear - now) / (1000*60*60*24);
      var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
      var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
      var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

      currentTime = now.toLocaleString();
      newYear = newYear.setFullYear(nextYear);
      daysLeftBox.textContent = Math.floor(daysLeft);
      hrsLeftBox.textContent = Math.floor(hrsLeft);
      minsLeftBox.textContent = Math.floor(minsLeft);
      secsLeftBox.textContent = Math.floor(secsLeft);
}