let password_length = document.getElementById("password-length");
let range_input = document.getElementById("range-input");
let screen = document.getElementById("screen");
let generate_new_password = document.getElementById("generate");
let copy_password = document.getElementById("copy-text");

let password_length_number;

// Update The Password Length
range_input.oninput = () => {
  password_length.innerText = +range_input.value;
  password_length_number = +range_input.value;
};

// copy_password_Text
copy_password.onclick = () => {
  if (screen.value === "") {
    alert("Please Generate Password First");
    return;
  }
  navigator.clipboard.writeText(screen.value).then(() => alert("copied!"))
};

// generate password
generate_new_password.onclick = () => {
  let uppercase = document.getElementById("uppercase").checked;
  let lowercase = document.getElementById("lowercase").checked;
  let numbers = document.getElementById("numbers").checked;
  let symbols = document.getElementById("symbols").checked;
  let password_strength = document.getElementById("password-strength");
  let strength = "";

  let uppercase_string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase_string = "abcdefghijklmnopqrstuvwxyz";
  let numbers_string = "1234567890";
  let symbols_string = "/@!#$%^";

  let result = "";

  for (let i = 1; i <= password_length_number; i++) {
    if (uppercase) {
      result +=
        uppercase_string[Math.floor(Math.random() * uppercase_string.length)];
    } else if (lowercase) {
      result +=
        lowercase_string[Math.floor(Math.random() * lowercase_string.length)];
    } else if (numbers) {
      result +=
        numbers_string[Math.floor(Math.random() * numbers_string.length)];
    } else if (symbols) {
      result +=
        symbols_string[Math.floor(Math.random() * symbols_string.length)];
    }
  }

  screen.value = result;

  password_strength.innerText = strength;
};
