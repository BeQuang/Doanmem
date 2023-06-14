const submitSearch = $('.btn.form-btn.Brink-Pink-bg')

submitSearch.addEventListener('click', function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    let fullnameInput = document.querySelector('#fullname.Brink-Pink-hover').value;
    let idMemberInput = document.querySelector('#oldMember.Brink-Pink-hover').value;
    let birthdayInput = document.querySelector('#birthDay.Brink-Pink-hover').value;
    let relationInput = document.querySelector('#relationship.Brink-Pink-hover').value;

    let messValid = document.querySelector('.form-valid.Brink-Pink')
    let formInfo = document.querySelector('.form-info')
    let boxup = document.querySelector('.boxup')
    let boxupContainer = document.querySelector('.boxup-container')

    let url = 'http://192.168.20.156:5002/member?';

    if (fullnameInput.trim() !== '') {
        const encodedFullname = encodeURIComponent(fullnameInput);
        url += `name=${encodedFullname}&`;
    }

    if (birthdayInput.trim() !== '') {
        const encodedBirthday = encodeURIComponent(birthdayInput);
        url += `birthday=${encodedBirthday}&`;
    }

    if (idMemberInput.trim() !== '-1') {
        const encodedIdMember = encodeURIComponent(idMemberInput);
        url += `id_old_member=${encodedIdMember}&`;
    }

    if (relationInput.trim() !== '-1') {
        const encodedRelation = encodeURIComponent(relationInput);
        url += `id_relation=${encodedRelation}&`;
    }

    // Xóa ký tự '&' cuối cùng trong URL nếu có
    if (url.endsWith('&')) {
        url = url.slice(0, -1);
    }

    console.log(url);


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.code === 614) {
                messValid.style.display = 'flex';
                document.querySelector('.form-search').style.display = 'none'
            }
            else if (data.code === 1000) {
                messValid.style.display = 'none';
                document.querySelector('.form-search').style.display = 'block'
            }

            let htmls = [];
            for (let i = 0; i < data['members'].length; i++) {
                let dateTimeString = data['members'][i].birthday;
                let dateArray = dateTimeString.split("T")[0].split("-");
                let formattedDate = dateArray.reverse().join("-");

                let countrySelect = document.getElementById("country");
                let selectedValue = data['members'][i].id_home_town;

                let selectedOption = Array.from(countrySelect.options).find(option => option.value === selectedValue);
                let selectedText = selectedOption ? selectedOption.textContent : "";

                let html = `
                <div class="form-item" data-value="${data['members'][i].id}">
                    <div class="form-name">${data['members'][i].name}</div>
                    <div class="form-name">${formattedDate}</div>
                    <div class="form-name">${selectedText}</div>
                </div>
                `
                htmls.push(html)
                console.log(htmls)
            }

            formInfo.innerHTML = htmls.join('\n')
            
            let formItems = document.querySelectorAll('.form-item');
            formItems.forEach(formItem => {
              let dataValue = formItem.getAttribute('data-value');
              formItem.onclick = () => {
                boxup.style.display = 'flex'
                boxupContainer.classList.add('animate__bounceInDown')
              }
            });


        })
        .catch(error => {
            // Xử lý các lỗi xảy ra
        });

})