const clockContainer = document.querySelector(".status-bar__column"),
  clockTitle = clockContainer.querySelector(".status-bar__clock");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 12 ? `오전` : "오후"} ${
    hours < 10 ? `0${hours}` : `${hours > 12 ? `0${hours - 12}` : `${hours}`}`
  }:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

hours < 12 ? `오전` : "오후";
