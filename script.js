const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const togglePassword = document.querySelector('.togglePassword');
const open = document.querySelector('.open-eye');
const close = document.querySelector('.close-eye');
const modal = document.querySelector('.modal');

togglePassword.addEventListener('click', function(){
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
   if (password.getAttribute("type") === "password") {
     open.classList.remove("show");
     close.classList.add("show");
     open.classList.add("hide");
     close.classList.remove("hide");
   } else {
    open.classList.remove("hide");
    close.classList.add("hide");
    open.classList.add("show");
    close.classList.remove("show");
   }
});
const validatePassword = (password) => { 
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/;
    return regex.test(password);
  }

form.addEventListener('submit', (e) => {
     e.preventDefault();
     checkInput();
   if (checkInput()) {
    modal.style.display = "flex";
   }
});


const setError = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
 
    small.innerText = message;
    formControl.classList.add('error');
    formControl.classList.remove('success');
};
  
const setSuccess = (input) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = '';
    formControl.classList.add('success');
    formControl.classList.remove('error');
};

const isValidEmail = email => {
    var RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return RegEmail.test(String(email).toLowerCase());
}

const checkInput = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordVal2 = password2.value.trim();
   
    //username Validation
    if (usernameValue === '') {
        setError(username, 'Please provide your username');
    } 
    else if (usernameValue.length < 6) {
        setError(username, 'Username should be more than 6 characters');
    }
    else {
        setSuccess(username);
    }

    //email Validation
    if (emailValue === '') {
        setError(email, 'Please provide your email address');
    } 
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Please provide a valid email address');
    }
    else {
        setSuccess(email);
    }

    //passsword validation
    if (passwordValue === '') {
        setError(password, 'Please enter your password');
    } 
    else if (!passwordValue.match(validatePassword)) {
        setError(password, 'must contain at least 1 lowercase alphabetical character,1 uppercase alphabetical character,1 numeric character,1 special character and must be eight characters or longer')
    }
    else {
        setSuccess(password);
    }
    


    //Confirm password validation
    if (passwordVal2 === '') {
        setError(password2, 'Please enter your password');
    } 
    else if (passwordVal2 !== passwordValue) {
        setError(password2, 'Password is not equal');
    }
    else {
        setSuccess(password2);
    }
}
