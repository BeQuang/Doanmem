const deleteButton = $('.boxup-button.delete')

deleteButton.onclick = () => {
    let fullnameValue = $('#fullname.form-control.Brink-Pink-hover').value

    let urlMember = 'http://localhost:8084/member?name=' + encodeURIComponent(fullnameValue)
    fetch(urlMember)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Lỗi khi lấy thông tin thành viên");
        })
        .then(data => {
            console.log(data)
            let idValue = data['members'][0].id
            console.log(idValue)

            let formData = new FormData();
            formData.append('id', idValue);

            fetch('http://localhost:8084/member', {
                method: 'DELETE',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    // Handle the response data here
                    console.log(data)
                })
                .catch(error => {
                    // Handle any errors that occur
                });

            fetch('http://localhost:8084/end', {
                method: 'DELETE',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    // Handle the response data here
                    console.log(data)
                })
                .catch(error => {
                    // Handle any errors that occur
                });

            fetch('http://localhost:8084/achievement', {
                method: 'DELETE',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    // Handle the response data here
                    console.log(data)
                })
                .catch(error => {
                    // Handle any errors that occur
                });

            let boxup = $('.boxup')
            let mess = $('.toast-container')
            let toast = $('.toast')

            boxup.style.display = 'none'
            mess.innerHTML = `<h1 class="toast-mess">Đã xóa thành công</h1>`
            toast.style.display = 'flex'
        })
        .catch(error => {
            console.error(error);
        })
}