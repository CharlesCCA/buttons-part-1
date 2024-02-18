const header = 'HELLO CLASS!';
const para1 = 'Do you think coding is fun?';

document.querySelector('.header').innerHTML = header;
document.querySelector('.para1').innerHTML = para1;

function handleYesButtonClick() {
  document.querySelector('.para2').innerHTML = 'AWESOME! I\'m glad you\'re in my class!';
};

document.querySelector('.yes').addEventListener("click", handleYesButtonClick);

function handleNoButtonClick() {
  document.querySelector('.para2').innerHTML = 'Well, thank you for trying it out with me this year!';
}

document.querySelector('.no').addEventListener("click", handleNoButtonClick);

function handleClearButtonClick() {
  document.querySelector('.para2').innerHTML = '';
}

document.querySelector('.clear').addEventListener("click", handleClearButtonClick);

function handleBlueBackgroundClick() {
  document.querySelector('body').style.backgroundColor = "midnightblue";
}

document.querySelector('.blueBG').addEventListener("click", handleBlueBackgroundClick);

function handleCourierNewFontClick() {
  document.querySelector('body').style.fontFamily = "Courier New";
}

document.querySelector('.georgiaFont').addEventListener("click", handleCourierNewFontClick);


