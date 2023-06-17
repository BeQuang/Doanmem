const submitAddMember = $('.btn.form-btn.Buttery-White-bg')
const submitNoticeTheEnd = $('.btn.form-btn.Prussian-Blue-bg')
const submitAddAchivement = $('.btn.form-btn.Yellow-bg')

const formValidAchivement = $('.form-valid.Yellow')
const formValidEnd = $('.form-valid.Prussian-Blue')
const formValidAddMember = $('.form-valid.Buttery-White')

let oldMemberCode = document.querySelector('#fullold.Buttery-White-hover')
let idOldMemberCode
let oldMemberCodeOption = $('#oldMember.Buttery-White-hover')

oldMemberCode.onblur = () => {
    idOldMemberCode = oldMemberCode.value
    console.log(idOldMemberCode)
    url = 'http://192.168.20.156:5002/member?name=' + encodeURIComponent(idOldMemberCode)
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

            oldMemberCodeOption.innerHTML = htmls.join('\n')
        })
        .catch(error => {

            // Handle any errors that occur
        });


}

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

    console.log(oldMember, relation)
    if (birthday > relationday || oldMember != -1 && relation == -1 || relation != -1 && oldMember == -1) {
        formValidAddMember.style.display = 'flex'
    }
    else {
        formValidAddMember.style.display = 'none'
        let formData = new FormData();
        formData.append('name', fullname);
        formData.append('sex', sex);
        formData.append('birthday', birthday);
        formData.append('address', address);
        formData.append('id_relation', relation);
        formData.append('id_job', job);
        formData.append('id_home_town', country);
        console.log(oldMember)
        if (oldMember != -1) {
            formData.append('id_old_member', oldMember);
        }
        formData.append('create_at', relationday);

        // console.log(fullname, oldMember, sex, relation, birthday, relationday, country, address, job)

        fetch('http://192.168.20.156:5002/member', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data here

                console.log(data.code)
                if (data.code === 614 || data.code === 900) {
                    formValidAddMember.style.display = 'flex'
                }
                else if (data.code === 1000) {
                    let toast = $('.toast')
                    toast.style.display = 'flex';

                    let mess = $('.toast-container')

                    mess.innerHTML = '<span class="toast-mess">Success</span>'
                    mess.classList.add('animate__zoomIn')
                    formValidAddMember.style.display = 'none'
                }

            })
            .catch(error => {

                // Handle any errors that occur
            });
    }




})

let memberCodeEnd = document.querySelector('#fullname.Prussian-Blue-hover')
let idMemberCodeEnd
let memberCodeEndoption = $('#oldMember.Prussian-Blue-hover')

memberCodeEnd.onblur = () => {
    idMemberCodeEnd = memberCodeEnd.value
    console.log(idMemberCodeEnd)
    url = 'http://192.168.20.156:5002/member?name=' + encodeURIComponent(idMemberCodeEnd)
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

            memberCodeEndoption.innerHTML = htmls.join('\n')
        })
        .catch(error => {

            // Handle any errors that occur
        });


}

submitNoticeTheEnd.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    const fullnameInput = document.querySelector('#fullname.Prussian-Blue-hover');
    const deathdayInput = document.querySelector('#deathDay.Prussian-Blue-hover');
    const reasonDeathInput = document.querySelector('#reasonDeath.Prussian-Blue-hover');
    const burialInput = document.querySelector('#burial.Prussian-Blue-hover');
    const oldMemberInput = document.querySelector('#oldMember.Prussian-Blue-hover');


    const fullname = fullnameInput.value;
    const deathday = deathdayInput.value;
    const reasonDeath = reasonDeathInput.value;
    const burial = burialInput.value;
    const oldMember = oldMemberInput.value;




    let formData = new FormData();
    formData.append('name', fullname);
    formData.append('dead_date', deathday);
    formData.append('id_reason', reasonDeath);
    formData.append('id_dead_location', burial);
    formData.append('id_member', oldMember);

    fetch('http://192.168.20.156:5002/end', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data here

            if (data.code === 614 || data.code === 900) {
                formValidEnd.style.display = 'flex'
            }
            else if (data.code === 1000) {
                let toast = $('.toast')
                toast.style.display = 'flex';

                let mess = $('.toast-container')

                mess.innerHTML = '<span class="toast-mess">Success</span>'
                mess.classList.add('animate__zoomIn')
                console.log(data.code)
                formValidEnd.style.display = 'none'
            }
        })
        .catch(error => {

            // Handle any errors that occur
        });


})

let memberCodeAchivement = document.querySelector('#fullname.Yellow-hover')
let idMemberCodeAchivement
let memberCodeAchivementoption = $('#oldMember.Yellow-hover')

memberCodeAchivement.onblur = () => {
    idMemberCodeAchivement = memberCodeAchivement.value
    console.log(idMemberCodeAchivement)
    url = 'http://192.168.20.156:5002/member?name=' + encodeURIComponent(idMemberCodeAchivement)
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

            memberCodeAchivementoption.innerHTML = htmls.join('\n')
        })
        .catch(error => {

            // Handle any errors that occur
        });


}

submitAddAchivement.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    const fullnameInput = document.querySelector('#fullname.Yellow-hover');
    const achivementTypeInput = document.querySelector('#achivement.Yellow-hover');
    const awardDayInput = document.querySelector('#achivementDay.Yellow-hover');
    const oldMemberInput = document.querySelector('#oldMember.Yellow-hover');


    const fullname = fullnameInput.value;
    const achivementType = achivementTypeInput.value;
    const awardDay = awardDayInput.value;
    const oldMember = oldMemberInput.value


    let formData = new FormData();
    formData.append('name', fullname);
    formData.append('date', awardDay);
    formData.append('id_achievement_type', achivementType);
    formData.append('id_member', oldMember);

    fetch('http://192.168.20.156:5002/achievement', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data here

            if (data.code === 614 || data.code === 900) {
                formValidAchivement.style.display = 'flex'
            }
            else if (data.code === 1000) {
                let toast = $('.toast')
                toast.style.display = 'flex';

                let mess = $('.toast-container')

                mess.innerHTML = '<span class="toast-mess">Success</span>'
                mess.classList.add('animate__zoomIn')
                console.log(data)
                formValidAchivement.style.display = 'none'
            }
        })
        .catch(error => {
            // Handle any errors that occur
        });


})