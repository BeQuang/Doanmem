
document.querySelector('.login-button').addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút đăng nhập

    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const login = document.querySelector('.nav-login-title');
    // const logout = document.querySelector('.nav-logout');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Kiểm tra thông tin đăng nhập
    if (username === 'admin' && password === 'admin') {
        login.innerHTML='admin';
        window.location.reload();

        // Thiết lập cookie khi đăng nhập thành công (tuỳ chọn)
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);
        document.cookie = 'loggedIn=' + true + '; expires=' + expirationDate.toUTCString() + '; path=/';
    } else {
        if(username !== 'admin') {
            if(username === '') document.querySelector('#username-error').innerHTML = 'Username is required!';
            document.querySelector('#username-error').style.display = 'block';
            document.querySelector('#username').style.borderColor = "#FF7F75";
            document.querySelector('#username').style.backgroundColor = '#FFF2F2';
        };

        if(password !== 'admin') {
            if(password === '') document.querySelector('#password-error').innerHTML = 'Password is required!';
            document.querySelector('#password-error').style.display = 'block';
            document.querySelector('#password').style.borderColor = "#FF7F75";
            document.querySelector('#password').style.backgroundColor = '#FFF2F2';
        };
    };

});

document.querySelector(".tooltip-logout").addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút đăng xuất
  
    var expirationDate = new Date(); // Lấy thời điểm hiện tại
    expirationDate.setDate(expirationDate.getDate() - 1); // Đặt thời gian hết hạn là ngày hôm qua
  
    document.cookie = 'loggedIn=; expires=' + expirationDate.toUTCString() + '; path=/'; // Xóa cookie bằng cách đặt thời gian hết hạn là ngày hôm qua

    window.location.reload();
});
