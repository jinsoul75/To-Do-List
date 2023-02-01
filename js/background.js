const backgrounds = [
  "salmon",
  "sandybrwon",
  "seagreen",
  "skyblue",
  "darkkhaki",
  "hotpink",
];

console.log(Math.floor(Math.random() * backgrounds.length));
document.body.style.backgroundColor =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];
