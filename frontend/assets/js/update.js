const updateButton = $('.boxup-button.update')

updateButton.onclick = () => {
    let fullname = $('.boxup-fullname').value
    let sex = $('.boxup-sex').value
    let job = $('.boxup-job').value
    let birthday = $('.boxup-dateBirth').value
    let country = $('.boxup-country').value
    let address = $('.boxup-address').value
    let oldMember = $('.boxup-relateWith').value
    let relation = $('.boxup-relationship').value

    // Tạo một đối tượng Date mới
    let currentDate = new Date();
    // Lấy ngày, tháng và năm hiện tại
    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();
    // Định dạng ngày tháng năm theo định dạng "yyyy-mm-dd"
    let formattedDate = year + '-' + month + '-' + day;


    let urlJob = 'http://localhost:8084/job?name=' + encodeURIComponent(job);
    let urlCountry = 'http://localhost:8084/home_town?name=' + encodeURIComponent(country);
    let urlRelation = 'http://localhost:8084/relation?name=' + encodeURIComponent(relation);
    let urlYou = 'http://localhost:8084/member?name=' + encodeURIComponent(fullname);

    console.log(oldMember)

    // if (oldMember === 'undefined') {
    //     Promise.all([
    //         fetch(urlJob).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['job'][0].id),

    //         fetch(urlCountry).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['home_town'][0].id),

    //         fetch(urlRelation).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['relation'][0].id),
    //         fetch(urlYou).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['members'][0].id)
    //     ])
    //         .then(([idJob, idCountry, idRelation, idFullName]) => {
    //             let formData = new FormData();
    //             formData.append('id', idFullName);
    //             formData.append('name', fullname);
    //             formData.append('sex', sex);
    //             formData.append('birthday', birthday);
    //             formData.append('address', address);
    //             formData.append('id_relation', idRelation);
    //             formData.append('id_job', idJob);
    //             formData.append('id_home_town', idCountry);
    //             formData.append('create_at', formattedDate);

    //             console.log(formData);
    //             console.log(fullname, sex, birthday, address, idRelation, idCountry, formattedDate);

    //             fetch('http://localhost:8084/member', {
    //                 method: 'PUT',
    //                 body: formData
    //             })
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     // Handle the response data here
    //                     console.log(data)

    //                 })
    //                 .catch(error => {
    //                     // Handle any errors that occur
    //                 });
    //         })
    //         .catch(error => {
    //             console.log('Lỗi:', error.message);
    //         });

    //     render.start();
    // }
    // else {
    //     let urlMember = 'http://localhost:8084/member?name=' + encodeURIComponent(oldMember);
    //     Promise.all([
    //         fetch(urlJob).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['job'][0].id),

    //         fetch(urlCountry).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['home_town'][0].id),

    //         fetch(urlRelation).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['relation'][0].id),
    //         fetch(urlMember).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['members'][0].id),
    //         fetch(urlYou).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['members'][0].id)
    //     ])
    //         .then(([idJob, idCountry, idRelation, idMember, idFullName]) => {
    //             let formData = new FormData();
    //             formData.append('id', idFullName);
    //             formData.append('name', fullname);
    //             formData.append('sex', sex);
    //             formData.append('birthday', birthday);
    //             formData.append('address', address);
    //             formData.append('id_relation', idRelation);
    //             formData.append('id_job', idJob);
    //             formData.append('id_home_town', idCountry);
    //             formData.append('id_old_member', idMember);
    //             formData.append('create_at', formattedDate);

    //             console.log(formData);
    //             console.log(fullname, sex, birthday, address, idRelation, idCountry, idMember, formattedDate);

    //             fetch('http://localhost:8084/member', {
    //                 method: 'PUT',
    //                 body: formData
    //             })
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     // Handle the response data here
    //                     console.log(data)

    //                 })
    //                 .catch(error => {
    //                     // Handle any errors that occur
    //                 });
    //         })
    //         .catch(error => {
    //             console.log('Lỗi:', error.message);
    //         });

    //     render.start();
    // }

    // let deathday = $('.boxup-dateDeath').value
    // let reasonDeath = $('.boxup-reasonDeath').value
    // let burial = $('.boxup-burial').value

    // if (reasonDeath !== undefined && burial !== undefined) {
    //     let urlReasonDeath = 'http://localhost:8084/reason?name=' + encodeURIComponent(reasonDeath);
    //     let urlBurial = 'http://localhost:8084/dead_location?name=' + encodeURIComponent(burial);
    //     let urlDeath = 'http://localhost:8084/end?name=' + encodeURIComponent(fullname);

    //     console.log(fullname, deathday, reasonDeath, burial)

    //     Promise.all([
    //         fetch(urlReasonDeath).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['reasons'][0].id),

    //         fetch(urlBurial).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['dead_locations'][0].id),
    //         fetch(urlDeath).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Đã xảy ra lỗi');
    //             }
    //             return response.json();
    //         }).then(data => data['end'][0].id)
    //     ])
    //         .then(([idReasonDeath, idBurial, idDeath]) => {
    //             let formData = new FormData();
    //             formData.append('id', idDeath);
    //             formData.append('name', fullname);
    //             formData.append('dead_date', deathday);
    //             formData.append('id_reason', idReasonDeath);
    //             formData.append('id_dead_location', idBurial);

    //             fetch('http://localhost:8084/end', {
    //                 method: 'PUT',
    //                 body: formData
    //             })
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     // Handle the response data here
    //                     console.log(data)
    //                 })
    //                 .catch(error => {
    //                     // Handle any errors that occur
    //                 });
    //         })
    //         .catch(error => {
    //             console.log('Lỗi:', error.message);
    //         });
    // }

    let achivementType = $('.boxup-achivement').value
    let awardDay = $('.boxup-achivementDay').value

    if (achivementType !== undefined) {
        let urlAchivementType = 'http://localhost:8084/achievement_type?name=' + encodeURIComponent(achivementType);
        let urlAchiement = 'http://localhost:8084/achievement?name=' + encodeURIComponent(fullname);
        console.log(urlAchivementType)

        Promise.all([
            fetch(urlAchivementType).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => data['achievement_types'][0].id),
            fetch(urlAchiement).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => data['achievements'][0].id)
        ])
            .then(([idAchivementType, idAchivement]) => {
                let formData = new FormData();
                formData.append('id', idAchivement);
                formData.append('name', fullname);
                formData.append('date', awardDay);
                formData.append('id_achievement_type', idAchivementType);

                fetch('http://localhost:8084/achievement', {
                    method: 'PUT',
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
            })
            .catch(error => {
                console.log('Lỗi:', error.message);
            });
    }
}