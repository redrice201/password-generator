let passwordlowercase = "abcdefghijklmnopqrstuvwxyz";
let passworduppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordnumbers = "0123456789";
let passwordsymbols = "~`!@#$%^&*()_+?/";

let result1 = document.getElementById("result1");

let result = document.getElementById("result12");

result.style.transition = "none";
result.style.animation = "";

function strongpassword() {
  let uppercase = 0;
  let lowercase = 0;
  let numbers = 0;
  let symbols = 0;
  let passwordstrong1 = 0;

  let passwordstrong = document.getElementById("passwordstrong").value;

  for (let t = 0; t < passwordstrong.length; t++) {
    const char = passwordstrong[t];

    if (passwordlowercase.includes(char)) {
      lowercase++;
    }
    if (passworduppercase.includes(char)) {
      uppercase++;
    }
    if (passwordsymbols.includes(char)) {
      symbols++;
    }
    if (passwordnumbers.includes(char)) {
      numbers++;
    }
  }

  if (uppercase >= 4) {
    passwordstrong1++;
  }
  if (lowercase >= 4) {
    passwordstrong1++;
  }

  if (symbols >= 4) {
    passwordstrong1++;
  }

  if (numbers >= 4) {
    passwordstrong1++;
  }

  if (passwordstrong1 === 0) {
    result.style.animation = "none";
    result.offsetHeight;
    result.style.width = "0%";
    result1.innerHTML = ` `;
  } else if (passwordstrong1 === 1) {
    result.style.animation = "none";
    result.offsetHeight;
    result.style.backgroundColor = "red";
    result.style.animationName = "wipe-in-right";
    result.style.animationDuration = "0.5s";

    result1.style.color = "red";
    result.style.width = "25%";
    result1.innerHTML = `<p> Weak </p>`;
  } else if (passwordstrong1 === 2) {
    result.style.animation = "none";
    result.offsetHeight;
    result.style.width = "50%";
    result.style.backgroundColor = "rgb(250, 42, 42)";

    result1.style.color = "rgb(250, 42, 42)";
    result.style.animationName = "wipe-in-right";
    result.style.animationDuration = "0.5s";

    result1.innerHTML = `<p> Medium </p>`;
  } else if (passwordstrong1 === 3) {
    result.style.animation = "none";
    result.offsetHeight;
    result.style.width = "75%";
    result.style.backgroundColor = "rgb(23, 124, 23)";

    result1.style.color = "rgb(23, 124, 23)";
    result.style.animationName = "wipe-in-right";
    result.style.animationDuration = "0.5s";

    result1.innerHTML = `<p> Strong </p>`;
  } else if (passwordstrong1 === 4) {
    result.style.animation = "none";
    result.offsetHeight;
    result.style.width = "100%";
    result.style.backgroundColor = "green";

    result1.style.color = "green";
    result.style.animationName = "wipe-in-right";
    result.style.animationDuration = "0.5s";

    result1.innerHTML = `<p> Very Strong </p>`;
  }
}

document
  .getElementById("passwordbutton")
  .addEventListener("click", strongpassword);
