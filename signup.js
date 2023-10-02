const checkValidation = () => {
  let id = document.getElementById('id').value;
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password1 = document.getElementById('password1').value;
  let password2 = document.getElementById('password2').value;
  const modal = document.querySelector('.modal-wrapper');
  const close = document.getElementById('close');

  console.log(id);
  console.log(name);
  console.log(email);
  console.log(password1);
  console.log(password2);

  let isValid = true;

  //id가 빈칸일 때
  if (!id) {
    isValid = false;
    document.getElementById('error_id').style = 'display:block';
  } else {
    document.getElementById('error_id').style = 'visibility: hidden';
  }

  //name
  if (!name || name.length > 5) {
    isValid = false;
    document.getElementById('error_name').style = 'display:block';
  } else {
    document.getElementById('error_name').style = 'visibility: hidden';
  }

  //email
  if (!email) {
    isValid = false;
    document.getElementById('error_email').style = 'display:block';
  } else {
    document.getElementById('error_email').style = 'visibility: hidden';
  }

  //password1
  if (!password1) {
    isValid = false;
    document.getElementById('error_password1').style = 'display:block';
  } else {
    document.getElementById('error_password1').style = 'visibility: hidden';
  }

  //password2
  if (password1 != password2) {
    isValid = false;
    document.getElementById('error_password2').style = 'display:block';
  } else {
    document.getElementById('error_password2').style = 'visibility: hidden';
  }

  console.log(isValid);

  //isValid == true;
  if (isValid == true) {
    modal.style = 'display: flex';
  }
  close.onclick = () => {
    modal.style = 'display: none';
    location.href = 'index.html';
  };
};
