const  password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm-password');
const sumbit_button = document.querySelector('button');
const fields = document.querySelectorAll('.field');
const password_error = document.createElement('div');
const password_field = fields[4];
password_error.textContent ='* Passwords do not match';
password_error.setAttribute('style' , 'color: red; font-size: 0.8rem')
password_field.appendChild(password_error);



function check_password_match() {
	if (password.validity.valueMissing || confirm_password.validity.valueMissing) {
    return;
  }
	if (password.value !== confirm_password.value) {

		if (!password_field.contains(password_error)) 
			password_field.appendChild(password_error);
		
		if (!password.classList.contains('error')) {
			password.classList.add('error');
			confirm_password.classList.add('error');
		}
		sumbit_button.disabled = true;
		return;
	}
	if (password_field.contains(password_error)) 
		password_field.removeChild(password_error);
		
	if (password.classList.contains('error')) {
		password.classList.remove('error');
		confirm_password.classList.remove('error');
	}
	sumbit_button.disabled = false;
}

password.addEventListener('input', check_password_match);
confirm_password.addEventListener('input', check_password_match);

