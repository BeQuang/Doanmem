const submitSearch = $('.btn.form-btn.Brink-Pink-bg')

let memberCodeSearch = document.querySelector('#fullname.Brink-Pink-hover')
let idMemberCodeSearch
let memberCodeSearchoption = $('#oldMember.Brink-Pink-hover')

const deleteButton = $('.boxup-button.delete')
const updateButton = $('.boxup-button.update')

// memberCodeSearch.onblur = () => {
//     idMemberCodeSearch = memberCodeSearch.value
//     console.log(idMemberCodeSearch)
//     url = 'http://192.168.20.156:5002/member?name=' + encodeURIComponent(idMemberCodeSearch)
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             let members = data['members']
//             let htmls = ['<option value="-1">-- Option --</option>']
//             htmls.push(members.map((member) => {
//                 return `
//                         <option value="${member.id}">${member.id}</option> 
//                     `
//             }))

//             memberCodeSearchoption.innerHTML = htmls.join('\n')
//         })
//         .catch(error => {

//             // Handle any errors that occur
//         });


// }

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
        url += `id_old_member=${encodedIdMember}&`;
    }

    if (generationInput.trim() !== '') {
        const encodedRelation = encodeURIComponent(generationInput);
        url += `generation=${encodedRelation}&`;
    }

    // Xóa ký tự '&' cuối cùng trong URL nếu có
    if (url.endsWith('&')) {
        url = url.slice(0, -1);
    }

    console.log(memberCodeInput)
    let urlRelation = `http://192.168.20.156:5002/member?id=${memberCodeInput}&id_relation=02`
    fetch(urlRelation)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let member1 = data
            fetch(`http://192.168.20.156:5002/member?id=${member1['members'][0].id_old_member}`)
                .then(response => response.json())
                .then(data => {
                    let member2 = data 
                    console.log(member2)
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })

    // console.log(url);

    // if (fullnameInput.trim() === '' && birthdayInput.trim() === '' && memberCodeInput.trim() === '-1' && generationInput.trim() === '') {
    //     fetch('http://localhost:8084/all_members')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)

    //         })
    //         .catch(error => {
    //             // Handle any errors that occur
    //         });
    // } else {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            if (url === 'http://192.168.20.156:5002/member?') {
                fetch('http://192.168.20.156:5002/all_members')
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        let members = data['members']
                        console.log(members[0].id_old_member)


                        let htmls = [];
                        for (let i = 0; i < data['members'].length; i++) {
                            let urlCheck = `http://192.168.20.156:5002/member?id=${members[i].id}&id_relation=01`
                            fetch(urlCheck)
                                .then(response => response.json())
                                .then(data => {
                                    console.log(data)
                                    console.log(members)
                                    let dateTimeString = members[i].birthday;
                                    let dateArray = dateTimeString.split("T")[0].split("-");
                                    let formattedDate = dateArray.reverse().join("-");
                                    console.log(formattedDate)
                                    let parent
                                    if (data.code === 614) {
                                        parent = '-'
                                    } else {
                                        parent = data['members'][0].name
                                    }

                                    let html = `
                                            <div class="form-item" data-value="${members[i].id}">
                                                <div class="form-name idName">${members[i].name}</div>
                                                <div class="form-name">${formattedDate}</div>
                                                <div class="form-name">${parent}</div>
                                            </div>
                                            `
                                    htmls.push(html)


                                    formInfo.innerHTML = htmls.join('\n')
                                    messValid.style.display = 'none';
                                    document.querySelector('.form-search').style.display = 'block'
                                    let formItems = document.querySelectorAll('.form-item');
                                    formItems.forEach(formItem => {
                                        let dataValue = formItem.getAttribute('data-value');
                                        formItem.onclick = () => {
                                            boxup.style.display = 'flex'
                                            boxupContainer.classList.add('animate__bounceInDown')
                                            // console.log(dataValue)
                                            let urlMemberBoxup = 'http://192.168.20.156:5002/member?id=' + encodeURIComponent(dataValue)
                                            let urlEndBoxup = 'http://192.168.20.156:5002/end?id_member=' + encodeURIComponent(dataValue)
                                            let urlAchivementBoxup = 'http://192.168.20.156:5002/achievement?id_member=' + encodeURIComponent(dataValue)

                                            let idEnd
                                            let idAchievement

                                            fetch(urlMemberBoxup)
                                                .then(response => response.json())
                                                .then(data => {
                                                    let dateTimeString = data['members'][0].birthday;
                                                    let dateArray = dateTimeString.split("T");
                                                    let dateString = dateArray[0];

                                                    let dateTimeStringEnd = data['members'][0].create_at;
                                                    let dateArrayEnd = dateTimeStringEnd.split("T");
                                                    let dateStringEnd = dateArrayEnd[0];

                                                    // console.log(data['members'][0].birthday);
                                                    fullNameBoxup.value = data['members'][0].name
                                                    SexBoxup.value = data['members'][0].sex
                                                    jobBoxup.value = data['members'][0].id_job
                                                    birthDayBoxup.value = dateString
                                                    countryBoxup.value = data['members'][0].id_home_town
                                                    addressBoxup.value = data['members'][0].address
                                                    relationDayBoxup.value = dateStringEnd
                                                    if (!data['members'][0].id_relation) {
                                                        relationshipBoxup.value = '-1'
                                                    } else {
                                                        relationshipBoxup.value = data['members'][0].id_relation
                                                    }
                                                    generationBoxup.value = data['members'][0].generation
                                                    if (!data['members'][0].id_old_member) {
                                                        $('#oldMember.boxup-style').value = -1
                                                    } else {
                                                        oldMemberBoxup.value = data['members'][0].id_old_member
                                                    }
                                                })
                                                .catch(error => {
                                                    // Xử lý các lỗi xảy ra
                                                });

                                            console.log(urlEndBoxup)
                                            fetch(urlEndBoxup)
                                                .then(response => response.json())
                                                .then(data => {
                                                    console.log(data)
                                                    if (data.end.length === 0) {
                                                        deathDayBoxup.value = undefined
                                                        reasonDeathBoxup.value = -1
                                                        burialBoxup.value = -1
                                                    } else {
                                                        let dateTimeStringDeath = data['end'][0].dead_date;
                                                        let dateArrayDeath = dateTimeStringDeath.split("T");
                                                        let dateStringDeath = dateArrayDeath[0];

                                                        deathDayBoxup.value = dateStringDeath
                                                        reasonDeathBoxup.value = data['end'][0].id_reason
                                                        burialBoxup.value = data['end'][0].id_dead_location
                                                    }
                                                    idEnd = data['end'][0].id
                                                })
                                                .catch(error => {
                                                    // Xử lý các lỗi xảy ra
                                                });

                                            fetch(urlAchivementBoxup)
                                                .then(response => response.json())
                                                .then(data => {
                                                    if (data.achievements.length === 0) {
                                                        achivementBoxup.value = -1
                                                        achivementDayBoxup.value = undefined
                                                    } else {

                                                        let dateTimeStringAchivement = data['achievements'][0].date;
                                                        let dateArrayAchivement = dateTimeStringAchivement.split("T");
                                                        let dateStringAchivement = dateArrayAchivement[0];

                                                        achivementBoxup.value = data['achievements'][0].id_achievement_type
                                                        achivementDayBoxup.value = dateStringAchivement
                                                    }
                                                    idAchievement = data['achievements'][0].id
                                                })
                                                .catch(error => {
                                                    // Xử lý các lỗi xảy ra
                                                });

                                            deleteButton.onclick = async () => {
                                                console.log(idAchievement, idEnd)
                                                try {
                                                    await deleteForm(idEnd, 'http://192.168.20.156:5002/end');
                                                    await deleteForm(idAchievement, 'http://192.168.20.156:5002/achievement');
                                                    await deleteForm(dataValue, 'http://192.168.20.156:5002/member');

                                                    console.log('Các tác vụ xóa đã hoàn thành');
                                                } catch (error) {
                                                    console.log('Lỗi xảy ra', error);
                                                }
                                            };

                                            // Delete 

                                            // Update 
                                            updateButton.onclick = () => {
                                                console.log(idAchievement, idEnd)
                                                let fullname = $('#fullname.boxup-style').value
                                                let sex = $('#sex.boxup-style').value
                                                let job = $('#job.boxup-style').value
                                                let birthday = $('#birthDay.boxup-style').value
                                                let country = $('#country.boxup-style').value
                                                let address = $('#address.boxup-style').value
                                                let oldMember = $('#oldMember.boxup-style').value
                                                let relateDay = $('#relationDay.boxup-style').value
                                                let relation = $('#relationship.boxup-style').value
                                                let id = dataValue

                                                if (birthday > relateDay || oldMember != -1 && relation == -1 || relation != -1 && oldMember == -1) {
                                                    // console.log('sai')
                                                    $('.boxup-valid').style.display = 'flex'
                                                } else {
                                                    // console.log('dung')
                                                    $('.boxup-valid').style.display = 'none'

                                                    console.log(id, fullname, sex, job, birthday, country, address, oldMember, relateDay, relation)

                                                    let formUpdateMember = new FormData();
                                                    formUpdateMember.append('id', id);
                                                    formUpdateMember.append('name', fullname);
                                                    formUpdateMember.append('sex', sex);
                                                    formUpdateMember.append('birthday', birthday);
                                                    formUpdateMember.append('address', address);
                                                    formUpdateMember.append('id_relation', relation);
                                                    formUpdateMember.append('id_job', job);
                                                    formUpdateMember.append('id_home_town', country);
                                                    console.log(oldMember)
                                                    if (oldMember != -1) {
                                                        formUpdateMember.append('id_old_member', oldMember);
                                                    }
                                                    formUpdateMember.append('create_at', relateDay);

                                                    fetch('http://192.168.20.156:5002/member', {
                                                        method: 'PUT',
                                                        body: formUpdateMember
                                                    })
                                                        .then(response => response.json())
                                                        .then(data => {
                                                            console.log(data)
                                                            let toast = $('.toast')
                                                            toast.style.display = 'flex';

                                                            let mess = $('.toast-container')

                                                            mess.innerHTML = '<span class="toast-mess">Success</span>'
                                                            mess.classList.add('animate__zoomIn')

                                                        })
                                                        .catch(error => {

                                                            // Handle any errors that occur
                                                        });
                                                }


                                                let deathday = document.querySelector('#deathDay.boxup-style').value;
                                                let reasonDeath = document.querySelector('#reasonDeath.boxup-style').value;
                                                let burial = document.querySelector('#burial.boxup-style').value;

                                                let formUpdateEnd = new FormData();
                                                formUpdateEnd.append('id', idEnd);
                                                formUpdateEnd.append('name', fullname);
                                                formUpdateEnd.append('dead_date', deathday);
                                                formUpdateEnd.append('id_reason', reasonDeath);
                                                formUpdateEnd.append('id_dead_location', burial);
                                                formUpdateEnd.append('id_member', id);

                                                console.log(idEnd, fullname, deathday, reasonDeath, burial, id);

                                                fetch('http://192.168.20.156:5002/end', {
                                                    method: 'PUT',
                                                    body: formUpdateEnd
                                                })
                                                    .then(response => response.json())
                                                    .then(data => {
                                                        console.log(data)

                                                    })
                                                    .catch(error => {

                                                        // Handle any errors that occur
                                                    });



                                                let achivementType = document.querySelector('#achivement.boxup-style').value;
                                                let awardDay = document.querySelector('#achivementDay.boxup-style').value;

                                                let formUpdateAchievement = new FormData();
                                                formUpdateAchievement.append('id', idAchievement);
                                                formUpdateAchievement.append('name', fullname);
                                                formUpdateAchievement.append('date', awardDay);
                                                formUpdateAchievement.append('id_achievement_type', achivementType);
                                                formUpdateAchievement.append('id_member', id);

                                                fetch('http://192.168.20.156:5002/achievement', {
                                                    method: 'PUT',
                                                    body: formUpdateAchievement
                                                })
                                                    .then(response => response.json())
                                                    .then(data => {
                                                        console.log(data)

                                                    })
                                                    .catch(error => {

                                                        // Handle any errors that occur
                                                    });
                                            }
                                        }
                                    });
                                })
                                .catch(error => {
                                    // Handle any errors that occur
                                });

                        }
                        // console.log(htmls)


                    })
                    .catch(error => {
                        // Handle any errors that occur
                    });
            }
            else {

                if (data.code === 614) {
                    messValid.style.display = 'flex';
                    document.querySelector('.form-search').style.display = 'none'
                }
                else if (data.code === 1000) {
                    messValid.style.display = 'none';
                    document.querySelector('.form-search').style.display = 'block'
                }

                // console.log(data)
                let members = data['members']
                // console.log(members[0].id_old_member)


                let htmls = [];
                for (let i = 0; i < data['members'].length; i++) {
                    let urlCheck = `http://192.168.20.156:5002/member?id=${members[i].id}&id_relation=01`
                    fetch(urlCheck)
                        .then(response => response.json())
                        .then(data => {
                            // console.log(data)
                            // console.log(members)
                            let dateTimeString = members[i].birthday;
                            let dateArray = dateTimeString.split("T")[0].split("-");
                            let formattedDate = dateArray.reverse().join("-");
                            // console.log(formattedDate)
                            let parent
                            if (data.code === 614) {
                                parent = '-'
                            } else {
                                parent = data['members'][0].name
                            }

                            let html = `
                                    <div class="form-item" data-value="${members[i].id}">
                                        <div class="form-name idName">${members[i].name}</div>
                                        <div class="form-name">${formattedDate}</div>
                                        <div class="form-name">${parent}</div>
                                    </div>
                                    `
                            htmls.push(html)


                            formInfo.innerHTML = htmls.join('\n')
                            messValid.style.display = 'none';
                            document.querySelector('.form-search').style.display = 'block'
                            let formItems = document.querySelectorAll('.form-item');
                            formItems.forEach(formItem => {
                                let dataValue = formItem.getAttribute('data-value');
                                formItem.onclick = () => {
                                    boxup.style.display = 'flex'
                                    boxupContainer.classList.add('animate__bounceInDown')
                                    // console.log(dataValue)
                                    let urlMemberBoxup = 'http://192.168.20.156:5002/member?id=' + encodeURIComponent(dataValue)
                                    let urlEndBoxup = 'http://192.168.20.156:5002/end?id_member=' + encodeURIComponent(dataValue)
                                    let urlAchivementBoxup = 'http://192.168.20.156:5002/achievement?id_member=' + encodeURIComponent(dataValue)

                                    let idEnd
                                    let idAchievement

                                    fetch(urlMemberBoxup)
                                        .then(response => response.json())
                                        .then(data => {
                                            let dateTimeString = data['members'][0].birthday;
                                            let dateArray = dateTimeString.split("T");
                                            let dateString = dateArray[0];

                                            let dateTimeStringEnd = data['members'][0].create_at;
                                            let dateArrayEnd = dateTimeStringEnd.split("T");
                                            let dateStringEnd = dateArrayEnd[0];

                                            // console.log(data['members'][0].birthday);
                                            fullNameBoxup.value = data['members'][0].name
                                            SexBoxup.value = data['members'][0].sex
                                            jobBoxup.value = data['members'][0].id_job
                                            birthDayBoxup.value = dateString
                                            countryBoxup.value = data['members'][0].id_home_town
                                            addressBoxup.value = data['members'][0].address
                                            relationDayBoxup.value = dateStringEnd
                                            if (!data['members'][0].id_relation) {
                                                relationshipBoxup.value = -1
                                            } else {
                                                relationshipBoxup.value = data['members'][0].id_relation
                                            }
                                            console.log(data['members'][0].id_relation, '--', relationshipBoxup.value)
                                            generationBoxup.value = data['members'][0].generation
                                            if (!data['members'][0].id_old_member) {
                                                oldMemberBoxup.value = -1
                                            } else {
                                                oldMemberBoxup.value = data['members'][0].id_old_member
                                            }
                                        })
                                        .catch(error => {
                                            // Xử lý các lỗi xảy ra
                                        });

                                    console.log(urlEndBoxup)
                                    fetch(urlEndBoxup)
                                        .then(response => response.json())
                                        .then(data => {
                                            console.log(data)
                                            if (data.end.length === 0) {
                                                deathDayBoxup.value = undefined
                                                reasonDeathBoxup.value = -1
                                                burialBoxup.value = -1
                                            } else {
                                                let dateTimeStringDeath = data['end'][0].dead_date;
                                                let dateArrayDeath = dateTimeStringDeath.split("T");
                                                let dateStringDeath = dateArrayDeath[0];

                                                deathDayBoxup.value = dateStringDeath
                                                reasonDeathBoxup.value = data['end'][0].id_reason
                                                burialBoxup.value = data['end'][0].id_dead_location
                                            }
                                            idEnd = data['end'][0].id
                                        })
                                        .catch(error => {
                                            // Xử lý các lỗi xảy ra
                                        });

                                    fetch(urlAchivementBoxup)
                                        .then(response => response.json())
                                        .then(data => {
                                            if (data.achievements.length === 0) {
                                                achivementBoxup.value = -1
                                                achivementDayBoxup.value = undefined
                                            } else {

                                                let dateTimeStringAchivement = data['achievements'][0].date;
                                                let dateArrayAchivement = dateTimeStringAchivement.split("T");
                                                let dateStringAchivement = dateArrayAchivement[0];

                                                achivementBoxup.value = data['achievements'][0].id_achievement_type
                                                achivementDayBoxup.value = dateStringAchivement
                                            }
                                            idAchievement = data['achievements'][0].id
                                        })
                                        .catch(error => {
                                            // Xử lý các lỗi xảy ra
                                        });

                                    deleteButton.onclick = async () => {
                                        console.log(idAchievement, idEnd)
                                        try {
                                            await deleteForm(idEnd, 'http://192.168.20.156:5002/end');
                                            await deleteForm(idAchievement, 'http://192.168.20.156:5002/achievement');
                                            await deleteForm(dataValue, 'http://192.168.20.156:5002/member');

                                            console.log('Các tác vụ xóa đã hoàn thành');
                                        } catch (error) {
                                            console.log('Lỗi xảy ra', error);
                                        }
                                    };

                                    // Delete 

                                    // Update 
                                    updateButton.onclick = () => {
                                        console.log(idAchievement, idEnd)
                                        let fullname = $('#fullname.boxup-style').value
                                        let sex = $('#sex.boxup-style').value
                                        let job = $('#job.boxup-style').value
                                        let birthday = $('#birthDay.boxup-style').value
                                        let country = $('#country.boxup-style').value
                                        let address = $('#address.boxup-style').value
                                        let oldMember = $('#oldMember.boxup-style').value
                                        let relateDay = $('#relationDay.boxup-style').value
                                        let relation = $('#relationship.boxup-style').value
                                        let id = dataValue

                                        if (birthday > relateDay || oldMember != -1 && relation == -1 || relation != -1 && oldMember == -1) {
                                            // console.log('sai')
                                            $('.boxup-valid').style.display = 'flex'
                                        } else {
                                            // console.log('dung')
                                            $('.boxup-valid').style.display = 'none'

                                            console.log(id, fullname, sex, job, birthday, country, address, oldMember, relateDay, relation)

                                            let formUpdateMember = new FormData();
                                            formUpdateMember.append('id', id);
                                            formUpdateMember.append('name', fullname);
                                            formUpdateMember.append('sex', sex);
                                            formUpdateMember.append('birthday', birthday);
                                            formUpdateMember.append('address', address);
                                            formUpdateMember.append('id_relation', relation);
                                            formUpdateMember.append('id_job', job);
                                            formUpdateMember.append('id_home_town', country);
                                            console.log(oldMember)
                                            if (oldMember != -1) {
                                                formUpdateMember.append('id_old_member', oldMember);
                                            }
                                            formUpdateMember.append('create_at', relateDay);

                                            fetch('http://192.168.20.156:5002/member', {
                                                method: 'PUT',
                                                body: formUpdateMember
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    console.log(data)
                                                    let toast = $('.toast')
                                                    toast.style.display = 'flex';

                                                    let mess = $('.toast-container')

                                                    mess.innerHTML = '<span class="toast-mess">Success</span>'
                                                    mess.classList.add('animate__zoomIn')

                                                })
                                                .catch(error => {

                                                    // Handle any errors that occur
                                                });
                                        }


                                        let deathday = document.querySelector('#deathDay.boxup-style').value;
                                        let reasonDeath = document.querySelector('#reasonDeath.boxup-style').value;
                                        let burial = document.querySelector('#burial.boxup-style').value;

                                        let formUpdateEnd = new FormData();
                                        formUpdateEnd.append('id', idEnd);
                                        formUpdateEnd.append('name', fullname);
                                        formUpdateEnd.append('dead_date', deathday);
                                        formUpdateEnd.append('id_reason', reasonDeath);
                                        formUpdateEnd.append('id_dead_location', burial);
                                        formUpdateEnd.append('id_member', id);

                                        console.log(idEnd, fullname, deathday, reasonDeath, burial, id);

                                        fetch('http://192.168.20.156:5002/end', {
                                            method: 'PUT',
                                            body: formUpdateEnd
                                        })
                                            .then(response => response.json())
                                            .then(data => {
                                                console.log(data)

                                            })
                                            .catch(error => {

                                                // Handle any errors that occur
                                            });



                                        let achivementType = document.querySelector('#achivement.boxup-style').value;
                                        let awardDay = document.querySelector('#achivementDay.boxup-style').value;

                                        let formUpdateAchievement = new FormData();
                                        formUpdateAchievement.append('id', idAchievement);
                                        formUpdateAchievement.append('name', fullname);
                                        formUpdateAchievement.append('date', awardDay);
                                        formUpdateAchievement.append('id_achievement_type', achivementType);
                                        formUpdateAchievement.append('id_member', id);

                                        fetch('http://192.168.20.156:5002/achievement', {
                                            method: 'PUT',
                                            body: formUpdateAchievement
                                        })
                                            .then(response => response.json())
                                            .then(data => {
                                                console.log(data)

                                            })
                                            .catch(error => {

                                                // Handle any errors that occur
                                            });
                                    }
                                }
                            });
                        })
                        .catch(error => {
                            // Handle any errors that occur
                        });
                }



            }
        })
        .catch(error => {
            // Xử lý các lỗi xảy ra
        });
    // }


})