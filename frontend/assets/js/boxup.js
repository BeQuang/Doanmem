// const boxupButton = $('.infoSearch-list')
const boxup = $('.boxup')

const boxupClose = $('.boxup-icon')
const containerBoxup = $('.boxup-container')
const bgBoxup = $('.boxup')

// let inputSearch = $('#fullname.form-control.Brink-Pink-hover')
// let fullnameBoxup = $('.boxup-fullname')
// let sexBoxup = $('.boxup-sex')
// let jobBoxup = $('.boxup-job')
// let dateBirthBoxup = $('.boxup-dateBirth')
// let countryBoxup = $('.boxup-country')
// let addressBoxup = $('.boxup-address')
// let relateWithBoxup = $('.boxup-relateWith')
// let dateRelationshipBoxup = $('.boxup-dateRelationship')
// let relationshipBoxup = $('.boxup-relationship')
// let dateDeathBoxup = $('.boxup-dateDeath')
// let reasonDeathBoxup = $('.boxup-reasonDeath')
// let burialBoxup = $('.boxup-burial')
// let achivementBoxup = $('.boxup-achivement')
// let dateAchivementBoxup = $('.boxup-achivementDay')
// let generationBoxup = $('.boxup-generation')


// const assignValue = document.querySelector('#dateBirth.form-control.Brink-Pink-hover')

// boxupButton.onclick = (e) => {
//     const infoSearchBoxes = document.querySelectorAll('.infoSearch-box');
//     let id
//     console.log(infoSearchBoxes)

//     infoSearchBoxes.forEach((box) => {
//         console.log(box)
//         box.onclick = (e) => {
//             const targetBox = e.currentTarget
//             id = targetBox.getAttribute('data-value');
//             console.log(id)

//             let urlMember = 'http://localhost:8084/member?id=' + encodeURIComponent(id)
//             fetch(urlMember)
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json();
//                     }
//                     throw new Error("Lỗi khi lấy thông tin thành viên");
//                 })
//                 .then(data => {
//                     // Lấy ngày sinh từ object
//                     let formatBirthday = data.members[0].birthday.split("T")[0];
//                     sexBoxup.value = data['members'][0].sex
//                     dateBirthBoxup.value = formatBirthday
//                     addressBoxup.value = data['members'][0].address
//                     generationBoxup.value = data['members'][0].generation
//                     let fomatDateRelationship = data.members[0].create_at.split("T")[0]
//                     dateRelationshipBoxup.value = fomatDateRelationship

//                     let relateWithValue = data['members'][0].id_old_member; // Giá trị thuộc tính "relateWith"
//                     console.log(relateWithValue)
//                     let urlAllMember = 'http://localhost:8084/all_members'
//                     fetch(urlAllMember)
//                         .then(response => {
//                             if (response.ok) {
//                                 return response.json();
//                             }
//                             throw new Error("Lỗi khi lấy thông tin thành viên");
//                         })
//                         .then(data => {
//                             let check = false
//                             for (let i = 0; i < data['members'].length; i++) {
//                                 if (data['members'][i].id === relateWithValue) {
//                                     relateWithBoxup.value = data['members'][i].name
//                                     check = true
//                                     break;
//                                 }
//                             }
//                             if (!check) {
//                                 relateWithBoxup.value = undefined
//                             }
//                         })
//                         .catch(error => {
//                             console.error(error);
//                         })

//                     let jobValue = data['members'][0].id_job; // Giá trị thuộc tính "job"
//                     let selectElementJob = document.getElementById("job"); // Truy cập vào phần tử select
//                     console.log(jobValue)
//                     // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//                     for (let i = 0; i < selectElementJob.options.length; i++) {
//                         let option = selectElementJob.options[i];
//                         if (option.value === jobValue.toString()) {
//                             let jobLabel = option.text;
//                             jobBoxup.value = jobLabel
//                             break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//                         }
//                     }

//                     let countryValue = data['members'][0].id_home_town; // Giá trị thuộc tính "job"
//                     let selectElementCountry = document.getElementById("country"); // Truy cập vào phần tử select
//                     // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//                     for (let i = 0; i < selectElementCountry.options.length; i++) {
//                         let option = selectElementCountry.options[i];
//                         if (option.value === countryValue.toString()) {
//                             let countryLabel = option.text;
//                             countryBoxup.value = countryLabel
//                             break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//                         }
//                     }

//                     let relationValue = data['members'][0].id_relation; // Giá trị thuộc tính "job"
//                     let selectElementRelation = document.getElementById("relationship"); // Truy cập vào phần tử select
//                     // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//                     for (let i = 0; i < selectElementRelation.options.length; i++) {
//                         let option = selectElementRelation.options[i];
//                         if (option.value === relationValue.toString()) {
//                             let relationLabel = option.text;
//                             relationshipBoxup.value = relationLabel
//                             break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//                         }
//                     }
//                 })
//                 .catch(error => {
//                     console.error(error);
//                 })

//             fetch(urlMember)
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json();
//                     }
//                     throw new Error("Lỗi khi lấy thông tin thành viên");
//                 })
//                 .then(data => data['members'][0].name)
//                 .then(valueMember => {
//                     let urlBurial = 'http://localhost:8084/end?name=' + encodeURIComponent(valueMember)
//                     fetch(urlBurial)
//                         .then(response => {
//                             if (response.ok) {
//                                 return response.json();
//                             }
//                             throw new Error("Lỗi khi lấy thông tin thành viên");
//                         })
//                         .then(data => {
//                             if (data['end'].length !== 0) {
//                                 console.log(data);
//                                 const deathDay = data.end[0].dead_date.split("T")[0];

//                                 dateDeathBoxup.value = deathDay

//                                 let reasonDeathValue = data.end[0].id_reason; // Giá trị thuộc tính "sex"
//                                 let selectElementReasonDeath = document.getElementById("reasonDeath"); // Truy cập vào phần tử select
//                                 // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//                                 for (let i = 0; i < selectElementReasonDeath.options.length; i++) {
//                                     let option = selectElementReasonDeath.options[i];
//                                     if (option.value === reasonDeathValue.toString()) {
//                                         let reasonDeathLabel = option.text; // Lấy giá trị "Nữ"
//                                         reasonDeathBoxup.value = reasonDeathLabel
//                                         break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//                                     }
//                                 }

//                                 let burialValue = data.end[0].id_dead_location; // Giá trị thuộc tính "sex"
//                                 let selectElementBurial = document.getElementById("burial"); // Truy cập vào phần tử select
//                                 // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//                                 for (let i = 0; i < selectElementBurial.options.length; i++) {
//                                     let option = selectElementBurial.options[i];
//                                     if (option.value === burialValue.toString()) {
//                                         let burialLabel = option.text; // Lấy giá trị "Nữ"
//                                         burialBoxup.value = burialLabel
//                                         break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//                                     }
//                                 }
//                             }
//                             else {
//                                 dateDeathBoxup.value = undefined;
//                                 reasonDeathBoxup.value = undefined;
//                                 burialBoxup.value = undefined;
//                             }
//                         })
//                         .catch(error => {
//                             console.error(error);
//                         })
//                         .catch(error => {
//                             console.error(error);
//                         })
//                 })

//             fetch(urlMember)
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json();
//                     }
//                     throw new Error("Lỗi khi lấy thông tin thành viên");
//                 })
//                 .then(data => data['members'][0].name)
//                 .then(valueMember => {
//                     let urlAchiement = 'http://localhost:8084/achievement?name=' + encodeURIComponent(valueMember)
//                     fetch(urlAchiement)
//                         .then(response => {
//                             if (response.ok) {
//                                 return response.json();
//                             }
//                             throw new Error("Lỗi khi lấy thông tin thành viên");
//                         })
//                         .then(data => {
//                             if (data['achievements'].length !== 0) {
//                                 console.log(data);
//                                 const achivementDay = data.achievements[0].date.split("T")[0];

//                                 dateAchivementBoxup.value = achivementDay

//                                 let achivementValue = data.achievements[0].id_achievement_type; // Giá trị thuộc tính "sex"
//                                 let selectElementAchivement = document.getElementById("achivement"); // Truy cập vào phần tử select
//                                 // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//                                 for (let i = 0; i < selectElementAchivement.options.length; i++) {
//                                     let option = selectElementAchivement.options[i];
//                                     if (option.value === achivementValue.toString()) {
//                                         let achivementLabel = option.text; // Lấy giá trị "Nữ"
//                                         achivementBoxup.value = achivementLabel
//                                         break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//                                     }
//                                 }
//                             }
//                             else {
//                                 dateAchivementBoxup.value = undefined;
//                                 achivementBoxup.value = undefined;
//                             }
//                         })
//                         .catch(error => {
//                             console.error(error);
//                         })
//                         .catch(error => {
//                             console.error(error);
//                         })
//                 })

//         }
//     });

//     function handleClick(event) {
//         const targetBox = event.currentTarget;
//         const value = targetBox.getAttribute('data-value');
//         console.log(value);
//     }


//     // boxup.style.display = 'flex'
//     // containerBoxup.classList.add('animate__fadeInDown')

//     // $('.boxup-fullname').value = $('#fullname.form-control.Brink-Pink-hover').value
//     // valueMember = $('.boxup-fullname').value

//     // let urlMember = 'http://localhost:8084/member?name=' + encodeURIComponent(valueMember)
//     // fetch(urlMember)
//     //     .then(response => {
//     //         if (response.ok) {
//     //             return response.json();
//     //         }
//     //         throw new Error("Lỗi khi lấy thông tin thành viên");
//     //     })
//     //     .then(data => {
//     //         // Lấy ngày sinh từ object
//     //         let formatBirthday = data.members[0].birthday.split("T")[0];
//     //         sexBoxup.value = data['members'][0].sex
//     //         dateBirthBoxup.value = formatBirthday
//     //         addressBoxup.value = data['members'][0].address
//     //         generationBoxup.value = data['members'][0].generation

//     //         let relateWithValue = data['members'][0].id_old_member; // Giá trị thuộc tính "relateWith"
//     //         console.log(relateWithValue)
//     //         let urlAllMember = 'http://localhost:8084/all_members'
//     //         fetch(urlAllMember)
//     //             .then(response => {
//     //                 if (response.ok) {
//     //                     return response.json();
//     //                 }
//     //                 throw new Error("Lỗi khi lấy thông tin thành viên");
//     //             })
//     //             .then(data => {
//     //                 let check = false
//     //                 for (let i = 0; i < data['members'].length; i++) {
//     //                     if (data['members'][i].id === relateWithValue) {
//     //                         relateWithBoxup.value = data['members'][i].name
//     //                         check = true
//     //                         break;
//     //                     }
//     //                 }
//     //                 if (!check) {
//     //                     relateWithBoxup.value = undefined
//     //                 }
//     //             })
//     //             .catch(error => {
//     //                 console.error(error);
//     //             })

//     //         let jobValue = data['members'][0].id_job; // Giá trị thuộc tính "job"
//     //         let selectElementJob = document.getElementById("job"); // Truy cập vào phần tử select
//     //         console.log(jobValue)
//     //         // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//     //         for (let i = 0; i < selectElementJob.options.length; i++) {
//     //             let option = selectElementJob.options[i];
//     //             if (option.value === jobValue.toString()) {
//     //                 let jobLabel = option.text;
//     //                 jobBoxup.value = jobLabel
//     //                 break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//     //             }
//     //         }

//     //         let countryValue = data['members'][0].id_home_town; // Giá trị thuộc tính "job"
//     //         let selectElementCountry = document.getElementById("country"); // Truy cập vào phần tử select
//     //         // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//     //         for (let i = 0; i < selectElementCountry.options.length; i++) {
//     //             let option = selectElementCountry.options[i];
//     //             if (option.value === countryValue.toString()) {
//     //                 let countryLabel = option.text;
//     //                 countryBoxup.value = countryLabel
//     //                 break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//     //             }
//     //         }

//     //         let relationValue = data['members'][0].id_relation; // Giá trị thuộc tính "job"
//     //         let selectElementRelation = document.getElementById("relationship"); // Truy cập vào phần tử select
//     //         // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//     //         for (let i = 0; i < selectElementRelation.options.length; i++) {
//     //             let option = selectElementRelation.options[i];
//     //             if (option.value === relationValue.toString()) {
//     //                 let relationLabel = option.text;
//     //                 relationshipBoxup.value = relationLabel
//     //                 break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//     //             }
//     //         }
//     //     })
//     //     .catch(error => {
//     //         console.error(error);
//     //     })
//     // let urlBurial = 'http://localhost:8084/end?name=' + encodeURIComponent(valueMember)
//     // fetch(urlBurial)
//     //     .then(response => {
//     //         if (response.ok) {
//     //             return response.json();
//     //         }
//     //         throw new Error("Lỗi khi lấy thông tin thành viên");
//     //     })
//     //     .then(data => {
//     //         if (data['end'].length !== 0) {
//     //             console.log(data);
//     //             const deathDay = data.end[0].dead_date.split("T")[0];

//     //             dateDeathBoxup.value = deathDay

//     //             let reasonDeathValue = data.end[0].id_reason; // Giá trị thuộc tính "sex"
//     //             let selectElementReasonDeath = document.getElementById("reasonDeath"); // Truy cập vào phần tử select
//     //             // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//     //             for (let i = 0; i < selectElementReasonDeath.options.length; i++) {
//     //                 let option = selectElementReasonDeath.options[i];
//     //                 if (option.value === reasonDeathValue.toString()) {
//     //                     let reasonDeathLabel = option.text; // Lấy giá trị "Nữ"
//     //                     reasonDeathBoxup.value = reasonDeathLabel
//     //                     break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//     //                 }
//     //             }

//     //             let burialValue = data.end[0].id_dead_location; // Giá trị thuộc tính "sex"
//     //             let selectElementBurial = document.getElementById("burial"); // Truy cập vào phần tử select
//     //             // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//     //             for (let i = 0; i < selectElementBurial.options.length; i++) {
//     //                 let option = selectElementBurial.options[i];
//     //                 if (option.value === burialValue.toString()) {
//     //                     let burialLabel = option.text; // Lấy giá trị "Nữ"
//     //                     burialBoxup.value = burialLabel
//     //                     break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//     //                 }
//     //             }
//     //         }
//     //         else {
//     //             dateDeathBoxup.value = undefined;
//     //             reasonDeathBoxup.value = undefined;
//     //             burialBoxup.value = undefined;
//     //         }
//     //     })
//     //     .catch(error => {
//     //         console.error(error);
//     //     })

//     // let urlAchiement = 'http://localhost:8084/achievement?name=' + encodeURIComponent(valueMember)
//     // fetch(urlAchiement)
//     //     .then(response => {
//     //         if (response.ok) {
//     //             return response.json();
//     //         }
//     //         throw new Error("Lỗi khi lấy thông tin thành viên");
//     //     })
//     //     .then(data => {
//     //         if (data['achievements'].length !== 0) {
//     //             console.log(data);
//     //             const achivementDay = data.achievements[0].date.split("T")[0];

//     //             dateAchivementBoxup.value = achivementDay

//     //             let achivementValue = data.achievements[0].id_achievement_type; // Giá trị thuộc tính "sex"
//     //             let selectElementAchivement = document.getElementById("achivement"); // Truy cập vào phần tử select
//     //             // Lặp qua các tùy chọn trong phần tử select để tìm giá trị tương ứng
//     //             for (let i = 0; i < selectElementAchivement.options.length; i++) {
//     //                 let option = selectElementAchivement.options[i];
//     //                 if (option.value === achivementValue.toString()) {
//     //                     let achivementLabel = option.text; // Lấy giá trị "Nữ"
//     //                     achivementBoxup.value = achivementLabel
//     //                     break; // Dừng vòng lặp nếu đã tìm thấy giá trị tương ứng
//     //                 }
//     //             }
//     //         }
//     //         else {
//     //             dateAchivementBoxup.value = undefined;
//     //             achivementBoxup.value = undefined;
//     //         }
//     //     })
//     //     .catch(error => {
//     //         console.error(error);
//     //     })
// }

boxupClose.onclick = () => {
    boxup.style.display = 'none'
    containerBoxup.classList.remove('animate__fadeInDown')
    inputSearch.value = ''
}

containerBoxup.addEventListener('click', function (event) {
    event.stopPropagation()
})

bgBoxup.onclick = () => {
    boxup.style.display = 'none'
    containerBoxup.classList.remove('animate__fadeInDown')
    inputSearch.value = ''
}