"use strict";
//selection
const caption = document.querySelector(".captions");
const bold = document.querySelector(".bold-btn");
const italic = document.querySelector(".italic-btn");
const capBtn = document.querySelector(".cap-btn");
const copyBtn = document.querySelector(".copy-btn");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
//bold text
bold.addEventListener("click", function () {
  caption.classList.toggle("bold");
});
//italic text
italic.addEventListener("click", function () {
  caption.classList.toggle("italic");
});
//caption array
let captionArr = [
  "Life is simple. It’s just not easy.",
  "You can regret a lot of things but you’ll never regret being kind.",
  "I don’t know where I’m going, but I’m on my way.",
  "All about the vibe.",
  "Escape the ordinary.",
  "Don’t dream of it. Train for it.",
  "Live more, worry less.",
  "I put the ‘Pro’ in procrastinate.",
  "Another fine day ruined by responsibilities.",
  "Just because you’re awake doesn’t mean you should stop dreaming.",
  "Be yourself, there’s no one better.",
  "All you need is love.",
  "We ain’t picture perfect but we worth the picture still.",
  "I'm just tryna live life through a new lens.",
  "Together we’re alone.",
  "For a dreamer, nights the only time of day.",
  "Happiness exists when you don’t know a thing.",
  "I ain’t scared of the fall. I’ve felt the ground before.",
  "I can't feel feel my face when I'm with you, but I love it.",
  "Paint me a picture with your true colours.",
  "This ain't ordinary life.",
  "We don't pray for love, we just pray for cars",
  "You may say I’m a dreamer, but I’m not the only one.– John Lennon",
  "It’s a beautiful day. Don’t let it get away.",
  "Love is just a word but you bring it definition.",
  "I live for the nights that I can’t remember with the people that I won’t forget.",
  "Life imitates art.",
  "Feels so good being bad.",
  "Memes are the only thing saving me right now.",
  "We don’t remember days; we remember moments.",
  "At the end of the day, all we have is who we are.",
  "And if you’re ever feeling lonely, just look at the moon. Someone somewhere is looking at it, too.",
  "Focus on the good.",
  "The dream is free, the hustle is sold separately.",
  "Sometimes, we survive by forgetting.",
  " Caught between a dream and a movie scene.",
  " I'm a fool for you.",
  "We're only good for the night time..",
  "I question myself all the time.",
  "People change and things go wrong, but just remember, life goes on.",
  "Stand by those who stand by you.",
  "Don’t count the number of friends you have, but the number of friends you can count on.",
  "Time goes by living without you. Hope you know, I’ve been thinking about you.",
  "Well, I'm way too young to be getting old.",
  "Hey, one of these days we'll all get by, don't be afraid, don't fall.",
  "So tired of being so tired.",
  "Ever since I can remember I've been keeping it together, but I'm feeling strange.",
  "No new friends.",
  "I'm here for a good time not a long time",
  "Make the most out of tonight, and worry 'bout it all tomorrow",
  "Know yourself, know your worth",
  "Nobody said it was easy, no one said it would be this hard.",
  "Happiness is not out there, it’s in you.",
];
let randomCaption = Math.trunc(Math.random() * captionArr.length) + 0;
console.log(randomCaption);
//random caption
capBtn.addEventListener("click", function () {
  let randomCaption = Math.trunc(Math.random() * captionArr.length) + 0;
  caption.textContent = ` “ ${captionArr[randomCaption]} ” `;
  console.log(randomCaption);
});
//copy button
copyBtn.addEventListener("click", function () {
  let text = document.getElementById("textx").innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
  console.log(text);
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 1000);
});
prevBtn.addEventListener("click", function () {
  console.log("ok");
  caption.textContent = ` “ ${captionArr[IndexCap - 1]} ” `;
});
