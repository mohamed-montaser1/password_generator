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
  navigator.clipboard.writeText(screen.value).then(() => alert("copied!"));
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
  let symbols_string = "!@#$%^&*()_|";

  let result = "";
  let count = 0;

  if (uppercase) count += 1;
  if (lowercase) count += 1;
  if (numbers) count += 1;
  if (symbols) count += 1;

  if (!uppercase && !lowercase && !numbers && !symbols) {
    strength = "Please Enter One Or More";
    return;
  }

  for (let i = 1; i <= password_length_number; i++) {
    if (uppercase) {
      result +=
        uppercase_string[Math.floor(Math.random() * uppercase_string.length)];
    }
    if (lowercase) {
      result +=
        lowercase_string[Math.floor(Math.random() * lowercase_string.length)];
    }
    if (numbers) {
      result +=
        numbers_string[Math.floor(Math.random() * numbers_string.length)];
    }
    if (symbols) {
      result +=
        symbols_string[Math.floor(Math.random() * symbols_string.length)];
    }
  }

  result = result.slice(0, result.length / count);
  screen.value = result;

  if (result.length < 7) {
    strength = "Too Week";
    password_strength.classList.add("too-week");
    password_strength.classList.remove("week");
    password_strength.classList.remove("medium");
    password_strength.classList.remove("hard");
  } else if (result.length >= 7 && result.length < 10) {
    strength = "Week";
    password_strength.classList.add("week");
    password_strength.classList.remove("medium");
    password_strength.classList.remove("hard");
    password_strength.classList.remove("too-week");
  } else if (result.length >= 10 && result.length < 20) {
    strength = "medium";
    password_strength.classList.add("medium");
    password_strength.classList.remove("week");
    password_strength.classList.remove("hard");
    password_strength.classList.remove("too-week");
  } else {
    strength = "Hard";
    password_strength.classList.add("hard");
    password_strength.classList.remove("medium");
    password_strength.classList.remove("week");
    password_strength.classList.remove("too-week");
  }

  password_strength.innerText = strength;
};
