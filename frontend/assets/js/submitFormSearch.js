const submitSearch = $('.btn.form-btn.Brink-Pink-bg')

let memberCodeSearch = document.querySelector('#fullname.Brink-Pink-hover')
let idMemberCodeSearch
let memberCodeSearchoption = $('#oldMember.Brink-Pink-hover')

memberCodeSearch.onblur = () => {
    idMemberCodeSearch = memberCodeSearch.value
    console.log(idMemberCodeSearch)
    url = 'http://192.168.20.156:5002/member?name=' + encodeURIComponent(idMemberCodeSearch)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let members = data['members']
            let htmls = ['<option value="-1">-- Option --</option>']
            htmls.push(members.map((member) => {
                return `
                        <option value="${member.id}">${member.id}</option> 
                    `
            }))

            memberCodeSearchoption.innerHTML = htmls.join('\n')
        })
        .catch(error => {

            // Handle any errors that occur
        });


}

submitSearch.addEventListener('click', function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    let fullnameInput = document.querySelector('#fullname.Brink-Pink-hover').value;
    let memberCodeInput = document.querySelector('#oldMember.Brink-Pink-hover').value;
    let birthdayInput = document.querySelector('#birthDay.Brink-Pink-hover').value;
    let generationInput = document.querySelector('#generation.Brink-Pink-hover').value;

    let messValid = document.querySelector('.form-valid.Brink-Pink')
    let formInfo = document.querySelector('.form-info')
    let boxup = document.querySelector('.boxup')
    let boxupContainer = document.querySelector('.boxup-container')

    let fullNameBoxup = document.querySelector('#fullname.boxup-style')
    let SexBoxup = document.querySelector('#sex.boxup-style')
    let jobBoxup = document.querySelector('#job.boxup-style')
    let birthDayBoxup = document.querySelector('#birthDay.boxup-style')
    let countryBoxup = document.querySelector('#country.boxup-style')
    let addressBoxup = document.querySelector('#address.boxup-style')
    let oldMemberBoxup = document.querySelector('#oldMember.boxup-style')
    let relationDayBoxup = document.querySelector('#relationDay.boxup-style')
    let relationshipBoxup = document.querySelector('#relationship.boxup-style')
    let deathDayBoxup = document.querySelector('#deathDay.boxup-style')
    let reasonDeathBoxup = document.querySelector('#reasonDeath.boxup-style')
    let burialBoxup = document.querySelector('#burial.boxup-style')
    let achivementBoxup = document.querySelector('#achivement.boxup-style')
    let achivementDayBoxup = document.querySelector('#achivementDay.boxup-style')
    let generationBoxup = document.querySelector('#generation.boxup-style')


    let url = 'http://192.168.20.156:5002/member?';

    if (fullnameInput.trim() !== '') {
        const encodedFullname = encodeURIComponent(fullnameInput);
        url += `name=${encodedFullname}&`;
    }

    if (birthdayInput.trim() !== '') {
        const encodedBirthday = encodeURIComponent(birthdayInput);
        url += `birthday=${encodedBirthday}&`;
    }

    if (memberCodeInput.trim() !== '-1') {
        const encodedIdMember = encodeURIComponent(memberCodeInput);
        url += `id=${encodedIdMember}&`;
    }

    if (generationInput.trim() !== '') {
        const encodedRelation = encodeURIComponent(generationInput);
        url += `generation=${encodedRelation}&`;
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

                let relateSelect = document.getElementById("relationship");
                let selectedValue = data['members'][i].id_home_town;

                let selectedOption = Array.from(relateSelect.options).find(option => option.value === selectedValue);
                let selectedText = selectedOption ? selectedOption.textContent : "";

                let html = `
                <div class="form-item" data-value="${data['members'][i].id}">
                    <div class="form-name idName">${data['members'][i].name}</div>
                    <div class="form-name">${formattedDate}</div>
                    <div class="form-name">${selectedText}</div>
                </div>
                `
                htmls.push(html)
            }

            formInfo.innerHTML = htmls.join('\n')

            let formItems = document.querySelectorAll('.form-item');
            formItems.forEach(formItem => {
                let dataValue = formItem.getAttribute('data-value');
                formItem.onclick = () => {
                    boxup.style.display = 'flex'
                    boxupContainer.classList.add('animate__bounceInDown')

                    let valueElement = formItem.querySelector('.form-name.idName');
                    let valueMember = valueElement.textContent;

                    let urlMemberBoxup = 'http://192.168.20.156:5002/member?id=' + encodeURIComponent(dataValue)
                    let urlEndBoxup = 'http://192.168.20.156:5002/end?name=' + encodeURIComponent(valueMember)
                    let urlAchivementBoxup = 'http://192.168.20.156:5002/achievement?name=' + encodeURIComponent(valueMember)
                    fetch(urlMemberBoxup)
                        .then(response => response.json())
                        .then(data => {
                            let dateTimeString = data['members'][0].birthday;
                            let dateArray = dateTimeString.split("T");
                            let dateString = dateArray[0];

                            let dateTimeStringEnd = data['members'][0].create_at;
                            let dateArrayEnd = dateTimeStringEnd.split("T");
                            let dateStringEnd = dateArrayEnd[0];

                            console.log(data['members'][0].birthday);
                            fullNameBoxup.value = data['members'][0].name
                            SexBoxup.value = data['members'][0].sex
                            jobBoxup.value = data['members'][0].id_job
                            birthDayBoxup.value = dateString
                            countryBoxup.value = data['members'][0].id_home_town
                            addressBoxup.value = data['members'][0].address
                            oldMemberBoxup.value = data['members'][0].id_old_member
                            relationDayBoxup.value = dateStringEnd
                            relationshipBoxup.value = data['members'][0].id_relation
                            generationBoxup.value = data['members'][0].generation
                        })
                        .catch(error => {
                            // Xử lý các lỗi xảy ra
                        });

                    fetch(urlEndBoxup)
                        .then(response => response.json())
                        .then(data => {
                            let dateTimeStringDeath = data['end'][0].dead_date;
                            let dateArrayDeath = dateTimeStringDeath.split("T");
                            let dateStringDeath = dateArrayDeath[0];

                            console.log(data);
                            deathDayBoxup.value = dateStringDeath
                            reasonDeathBoxup.value = data['end'][0].id_reason
                            burialBoxup.value = data['end'][0].id_dead_location
                        })
                        .catch(error => {
                            // Xử lý các lỗi xảy ra
                        });

                    fetch(urlAchivementBoxup)
                        .then(response => response.json())
                        .then(data => {
                            let dateTimeStringAchivement = data['achievements'][0].id_achievement_type;
                            let dateArrayAchivement = dateTimeStringAchivement.split("T");
                            let dateStringAchivement = dateArrayAchivement[0];


                            console.log(data);
                            achivementBoxup.value = dateStringAchivement
                            achivementDayBoxup.value = data['achievements'][0].date
                        })
                        .catch(error => {
                            // Xử lý các lỗi xảy ra
                        });
                }
            });


        })
        .catch(error => {
            // Xử lý các lỗi xảy ra
        });

})