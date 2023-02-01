const clock = document.querySelector("#clock");

function onClock() {
  const date = new Date();
  clock.innerText = date.toLocaleTimeString();
}

onClock();
setInterval(onClock, 1000);
