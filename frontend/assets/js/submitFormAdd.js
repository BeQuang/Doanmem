const submitAddMember = $('.btn.form-btn.Buttery-White-bg')
const submitNoticeTheEnd = $('.btn.form-btn.Prussian-Blue-bg')
const submitAddAchivement = $('.btn.form-btn.Yellow-bg')

const formValidAchivement = $('.form-valid.Yellow')
const formValidEnd = $('.form-valid.Prussian-Blue')
const formValidAddMember = $('.form-valid.Buttery-White')

submitAddMember.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    const fullnameInput = document.querySelector('#fullname.Buttery-White-hover');
    const idMemberInput = document.querySelector('#oldMember.Buttery-White-hover');
    const sexInput = document.querySelector('#sex.Buttery-White-hover');
    const relationInput = document.querySelector('#relationship.Buttery-White-hover');
    const birthdayInput = document.querySelector('#birthDay.Buttery-White-hover');
    const relationdayInput = document.querySelector('#relationDay.Buttery-White-hover');
    const countryInput = document.querySelector('#country.Buttery-White-hover');
    const addressInput = document.querySelector('#address.Buttery-White-hover');
    const jobInput = document.querySelector('#job.Buttery-White-hover');


    const fullname = fullnameInput.value;
    const oldMember = idMemberInput.value;
    const sex = sexInput.value;
    const relation = relationInput.value;
    const birthday = birthdayInput.value;
    const relationday = relationdayInput.value;
    const country = countryInput.value;
    const address = addressInput.value;
    const job = jobInput.value;

    console.log(fullname, oldMember, sex, relation, birthday, relationday, country, address, job)


    let formData = new FormData();
    formData.append('name', fullname);
    formData.append('sex', sex);
    formData.append('birthday', birthday);
    formData.append('address', address);
    formData.append('id_relation', relation);
    formData.append('id_job', job);
    formData.append('id_home_town', country);
    if (oldMember === -1){
        formData.append('id_old_member', oldMember);
    }
    formData.append('create_at', relationday);


    fetch('http://192.168.20.156:5002/member', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data here
            let toast = $('.toast')
            toast.style.display = 'flex';

            let mess = $('.toast-container')

            mess.innerHTML = '<span class="toast-mess">Success</span>'
            mess.classList.add('animate__zoomIn')

            console.log(data.code)
            if (data.code === 614 || data.code === 900) {
                formValidAddMember.style.display = 'flex'
            }
            else if (data.code === 1000) {
                formValidAddMember.style.display = 'none'
            }

        })
        .catch(error => {

            // Handle any errors that occur
        });

})


submitNoticeTheEnd.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    const fullnameInput = document.querySelector('#fullname.Prussian-Blue-hover');
    const deathdayInput = document.querySelector('#deathDay.Prussian-Blue-hover');
    const reasonDeathInput = document.querySelector('#reasonDeath.Prussian-Blue-hover');
    const burialInput = document.querySelector('#burial.Prussian-Blue-hover');


    const fullname = fullnameInput.value;
    const deathday = deathdayInput.value;
    const reasonDeath = reasonDeathInput.value;
    const burial = burialInput.value;


    let formData = new FormData();
    formData.append('name', fullname);
    formData.append('dead_date', deathday);
    formData.append('id_reason', reasonDeath);
    formData.append('id_dead_location', burial);

    fetch('http://192.168.20.156:5002/end', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data here
            let toast = $('.toast')
            toast.style.display = 'flex';

            let mess = $('.toast-container')

            mess.innerHTML = '<span class="toast-mess">Success</span>'
            mess.classList.add('animate__zoomIn')
            console.log(data.code)

            if (data.code === 614 || data.code === 900) {
                formValidEnd.style.display = 'flex'
            }
            else if (data.code === 1000) {
                formValidEnd.style.display = 'none'
            }
        })
        .catch(error => {

            // Handle any errors that occur
        });


})

submitAddAchivement.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    const fullnameInput = document.querySelector('#fullname.Yellow-hover');
    const achivementTypeInput = document.querySelector('#oldMember.Yellow-hover');
    const awardDayInput = document.querySelector('#achivementDay.Yellow-hover');


    const fullname = fullnameInput.value;
    const achivementType = achivementTypeInput.value;
    const awardDay = awardDayInput.value;


    let formData = new FormData();
    formData.append('name', fullname);
    formData.append('date', awardDay);
    formData.append('id_achievement_type', achivementType);

    fetch('http://192.168.20.156:5002/achievement', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data here
            let toast = $('.toast')
            toast.style.display = 'flex';

            let mess = $('.toast-container')

            mess.innerHTML = '<span class="toast-mess">Success</span>'
            mess.classList.add('animate__zoomIn')
            console.log(data)

            if (data.code === 614 || data.code === 900) {
                formValidAchivement.style.display = 'flex'
            }
            else if (data.code === 1000) {
                formValidAchivement.style.display = 'none'
            }
        })
        .catch(error => {
            // Handle any errors that occur
        });


})