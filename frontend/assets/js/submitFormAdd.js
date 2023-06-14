const submitAddMember = $('.introduction-buttonform.Buttery-White-bg')
const submitNoticeTheEnd = $('.introduction-buttonform.Prussian-Blue-bg')
const submitAddAchivement = $('.introduction-buttonform.Yellow-bg')

submitAddMember.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    const fullnameInput = document.querySelector('#fullname.Buttery-White-hover');
    const idMemberInput = document.querySelector('.input-search.idMember.Buttery-White-hover');
    const sexInput = document.querySelector('#sex.Buttery-White-hover');
    const relationInput = document.querySelector('.input-search.relationship.Buttery-White-hover');
    const birthdayInput = document.querySelector('#dateBirth.Buttery-White-hover');
    const relationdayInput = document.querySelector('#dateRelationship.Buttery-White-hover');
    const countryInput = document.querySelector('.input-search.country.Buttery-White-hover');
    const addressInput = document.querySelector('#address.Buttery-White-hover');
    const jobInput = document.querySelector('.input-search.job.Buttery-White-hover');


    const fullname = fullnameInput.value;
    const oldMember = idMemberInput.value;
    const sex = sexInput.value;
    const relation = relationInput.value;
    const birthday = birthdayInput.value;
    const relationday = relationdayInput.value;
    const country = countryInput.value;
    const address = addressInput.value;
    const job = jobInput.value;

    // Tạo một đối tượng Date mới
    const currentDate = new Date();
    // Lấy ngày, tháng và năm hiện tại
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    // Định dạng ngày tháng năm theo định dạng "yyyy-mm-dd"
    const formattedDate = year + '-' + month + '-' + day;

    const urlJob = 'http://localhost:8084/job?name=' + encodeURIComponent(job);
    const urlCountry = 'http://localhost:8084/home_town?name=' + encodeURIComponent(country);
    const urlRelation = 'http://localhost:8084/relation?name=' + encodeURIComponent(relation);

    console.log(oldMember)

    console.log(urlRelation, urlCountry, urlJob)
    if (oldMember) {
        const urlMember = 'http://localhost:8084/member?name=' + encodeURIComponent(oldMember);
        console.log(urlMember)
        Promise.all([
            fetch(urlJob).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => data['job'][0].id),

            fetch(urlCountry).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => data['home_town'][0].id),

            fetch(urlRelation).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => data['relation'][0].id),
            fetch(urlMember).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => data['members'][0].id)
        ])
            .then(([idJob, idCountry, idRelation, idMember]) => {
                let formData = new FormData();
                formData.append('name', fullname);
                formData.append('sex', sex);
                formData.append('birthday', birthday);
                formData.append('address', address);
                formData.append('id_relation', idRelation);
                formData.append('id_job', idJob);
                formData.append('id_home_town', idCountry);
                formData.append('id_old_member', idMember);
                formData.append('create_at', relationday);

                console.log(formData);
                console.log(fullname, sex, birthday, address, idRelation, idCountry, idMember, relationday);

                fetch('http://localhost:8084/member', {
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

                    })
                    .catch(error => {
                        // Handle any errors that occur
                    });
            })
        // .catch(error => {
        //     console.log('Lỗi:', error.message);
        // });

        render.start();
    }
    else {
        Promise.all([
            fetch(urlJob).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => data['job'][0].id),

            fetch(urlCountry).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => data['home_town'][0].id),

            fetch(urlRelation).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => data['relation'][0].id),
        ])
            .then(([idJob, idCountry, idRelation]) => {
                let formData = new FormData();
                formData.append('name', fullname);
                formData.append('sex', sex);
                formData.append('birthday', birthday);
                formData.append('address', address);
                formData.append('id_relation', idRelation);
                formData.append('id_job', idJob);
                formData.append('id_home_town', idCountry);
                formData.append('create_at', formattedDate);

                console.log(formData);
                console.log(fullname, sex, birthday, address, idRelation, idCountry, formattedDate);

                fetch('http://localhost:8084/member', {
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

                    })
                    .catch(error => {
                        // Handle any errors that occur
                    });
            })
        // .catch(error => {
        //     console.log('Lỗi:', error.message);
        // });

        render.start();
    }

})

submitNoticeTheEnd.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    const fullnameInput = document.querySelector('#fullname.Prussian-Blue-hover');
    const idMemberInput = document.querySelector('.input-search.idMember.Prussian-Blue-hover');
    const deathdayInput = document.querySelector('#dateDeath.Prussian-Blue-hover');
    const reasonDeathInput = document.querySelector('.input-search.reasonDeath.Prussian-Blue-hover');
    const burialInput = document.querySelector('.input-search.burial.Prussian-Blue-hover');


    const fullname = fullnameInput.value;
    const idMember = idMemberInput.value;
    const deathday = deathdayInput.value;
    const reasonDeath = reasonDeathInput.value;
    const burial = burialInput.value;

    const urlReasonDeath = 'http://localhost:8084/reason?name=' + encodeURIComponent(reasonDeath);
    const urlBurial = 'http://localhost:8084/dead_location?name=' + encodeURIComponent(burial);

    console.log(fullname, deathday, reasonDeath, burial)

    Promise.all([
        fetch(urlReasonDeath).then(response => {
            if (!response.ok) {
                throw new Error('Đã xảy ra lỗi');
            }
            return response.json();
        }).then(data => data['reasons'][0].id),

        fetch(urlBurial).then(response => {
            if (!response.ok) {
                throw new Error('Đã xảy ra lỗi');
            }
            return response.json();
        }).then(data => data['dead_locations'][0].id),
    ])
        .then(([idReasonDeath, idBurial]) => {
            let formData = new FormData();
            formData.append('name', fullname);
            formData.append('dead_date', deathday);
            formData.append('id_reason', idReasonDeath);
            formData.append('id_dead_location', idBurial);

            fetch('http://localhost:8084/end', {
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
                })
                .catch(error => {
                    // Handle any errors that occur
                });
        })
        .catch(error => {
            console.log('Lỗi:', error.message);
        });
})

submitAddAchivement.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    const fullnameInput = document.querySelector('#fullname.Yellow-hover');
    const idMemberInput = document.querySelector('.input-search.idMember.Yellow-hover');
    const achivementTypeInput = document.querySelector('.input-search.achivement.Yellow-hover');
    const awardDayInput = document.querySelector('#dateAward.Yellow-hover');


    const fullname = fullnameInput.value;
    const idMember = idMemberInput.value;
    const achivementType = achivementTypeInput.value;
    const awardDay = awardDayInput.value;

    const urlAchivementType = 'http://localhost:8084/achievement_type?name=' + encodeURIComponent(achivementType);

    Promise.all([
        fetch(urlAchivementType).then(response => {
            if (!response.ok) {
                throw new Error('Đã xảy ra lỗi');
            }
            return response.json();
        }).then(data => data['achievement_types'][0].id),
    ])
        .then(([idAchivementType]) => {
            let formData = new FormData();
            formData.append('name', fullname);
            formData.append('date', awardDay);
            formData.append('id_achievement_type', idAchivementType);

            fetch('http://localhost:8084/achievement', {
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
                })
                .catch(error => {
                    // Handle any errors that occur
                });
        })
        .catch(error => {
            console.log('Lỗi:', error.message);
        });
})