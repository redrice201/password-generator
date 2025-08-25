document.getElementById("generate").addEventListener("click", randompassword);

function randompassword() {
  let length = document.getElementById("length").value;
  if (length < 100) {
    let passwordlowercase = "abcdefghijklmnopqrstuvwxyz";
    let passworduppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordnumbers = "0123456789";
    let passwordsymbols = "~`!@#$%^&*()_+?/";

    let lowercase = document.getElementById("lowercase");
    let uppercase = document.getElementById("uppercase");
    let includenumbers = document.getElementById("includenumbers");
    let includesymbols = document.getElementById("includesymbols");
    let texterror = document.getElementById("texterror");

    let displayerror = document.getElementById("error");

    let password = "";
    let result = document.getElementById("result");
    let showpassword = "";
    if (length > 0) {
      if (lowercase.checked) {
        password += passwordlowercase;
      }
      if (uppercase.checked) {
        password += passworduppercase;
      }
      if (includenumbers.checked) {
        password += passwordnumbers;
      }
      if (includesymbols.checked) {
        password += passwordsymbols;
      }

      if (
        !lowercase.checked &&
        !uppercase.checked &&
        !includenumbers.checked &&
        !includenumbers.checked &&
        !includesymbols.checked
      ) {
        error.style.display = "block";
        texterror.textContent =
          "You need to choose what you want to include in your Password first";

        setTimeout(() => {
          error.style.display = "none";
        }, 6000);
      } else {
        for (let i = 0; i < length; i++) {
          let random = Math.floor(Math.random() * password.length);

          showpassword += password[random];
        }
      }
    } else {
      error.style.display = "block";
      texterror.textContent = "Add number of Characters you needed";
      setTimeout(() => {
        error.style.display = "none";
      }, 6000);
    }

    result.textContent = showpassword;
  } else {
    error.style.display = "block";
    texterror.textContent = "Maximum length is 100 characters";

    setTimeout(() => {
      error.style.display = "none";
    }, 6000);
  }
}
