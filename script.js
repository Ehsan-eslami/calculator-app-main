
// script.js
function setCookie(name, value, days) {
let expires = "";
if (days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  expires = "; expires=" + date.toUTCString();
}
document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
const value = "; " + document.cookie;
const parts = value.split("; " + name + "=");
if (parts.length === 2) return parts.pop().split(";").shift();
}

function changeTheme(theme) {
const themeClass = getCookie('themeClass') || 'light';
document.body.classList.remove(themeClass);
document.body.classList.add(theme);
setCookie('themeClass', theme, 365);
}

// Set the theme on page load based on the cookie
(function() {
const themeClass = getCookie('themeClass') || 'light';
document.body.classList.add(themeClass);
})();
