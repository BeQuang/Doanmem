
document.querySelector('.login-button').addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút đăng nhập

    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const admins = document.querySelectorAll('.admin');
    const noAdmins = document.querySelectorAll('.no-admin');
    const formLogin = document.querySelector('.login');
    const logout = document.querySelector('.nav-logout');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Kiểm tra thông tin đăng nhập
    if (username === 'admin' && password === 'admin') {
        admins.forEach((admin) => {
            admin.style.display = 'block';
        })
        noAdmins.forEach((admin) => {
            admin.style.display = 'none';
        })
        formLogin.style.display = 'none';
        logout.style.display = 'flex'
    } else {
        admins.forEach((admin) => {
            admin.style.display = 'none';
        })
        noAdmins.forEach((admin) => {
            admin.style.display = 'block';
        })
        logout.style.display = 'none'
    }

    // Thiết lập cookie khi đăng nhập thành công (tuỳ chọn)
    if (username === 'admin' && password === 'admin') {
        const cookieValue = 'loggedIn=true';
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);
        document.cookie = 'loggedIn=' + cookieValue + '; expires=' + expirationDate.toUTCString() + '; path=/';
    }

    // Xóa giá trị trường đăng nhập
    usernameInput.value = '';
    passwordInput.value = '';
});

document.querySelector('.logout-button').addEventListener('click', function(event) {
    const admins = document.querySelectorAll('.admin');
    const noAdmins = document.querySelectorAll('.no-admin');
    const logout = document.querySelector('.nav-logout');
    
    admins.forEach((admin) => {
        admin.style.display = 'none';
    })
    noAdmins.forEach((admin) => {
        admin.style.display = 'block';
    })

    logout.style.display = 'none'

    
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút đăng xuất
  
    var expirationDate = new Date(); // Lấy thời điểm hiện tại
    expirationDate.setDate(expirationDate.getDate() - 1); // Đặt thời gian hết hạn là ngày hôm qua
  
    document.cookie = 'loggedIn=; expires=' + expirationDate.toUTCString() + '; path=/'; // Xóa cookie bằng cách đặt thời gian hết hạn là ngày hôm qua
  });
  
