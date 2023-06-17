let buttonSetting = $('.tooltip-item.tooltip-settings')
let setting = $('#mainContainer')
let settingClose = $('.setting-icon')
let containerSetting = $('#settingContainer')
let bgSetting = $('#mainContainer')

document.querySelector(".tooltip-settings").addEventListener('click', (event) => {
    setting.style.display = 'block';
    containerSetting.classList.add('animate__fadeInDown')
})
buttonSetting.onclick = () => {
    setting.style.display = 'flex'
    containerSetting.classList.add('animate__fadeInDown')
}

settingClose.onclick = () => {
    setting.style.display = 'none'
    containerSetting.classList.remove('animate__fadeInDown')
}

containerSetting.addEventListener('click', function (event) {
    event.stopPropagation()
})

bgSetting.onclick = () => {
    setting.style.display = 'none'
    containerSetting.classList.remove('animate__fadeInDown')
}

const promise1 = fetch('http://192.168.20.156:5002/all_home_towns').then(response => response.json());
const promise2 = fetch('http://192.168.20.156:5002/all_jobs').then(response => response.json());
const promise3 = fetch('http://192.168.20.156:5002/all_realtions').then(response => response.json());
const promise4 = fetch('http://192.168.20.156:5002/all_reasons').then(response => response.json());
const promise5 = fetch('http://192.168.20.156:5002/all_dead_locations').then(response => response.json());
const promise6 = fetch('http://192.168.20.156:5002/all_achievement_types').then(response => response.json());


Promise.all([promise1, promise2, promise3, promise4, promise5, promise6])
    .then(arrayData => {
        let [countrys, jobs, relations, reasons, burials, achievements] = arrayData

        let TablesInfo = {
            QUEQUAN: [['MaQueQuan', 'TenQueQuan']],
            NGHENGHIEP: [['MaNgheNghiep', 'TenNgheNghiep']],
            QUANHE: [['MaQuanHe', 'TenQuanHe']],
            NGUYENNHAN: [['MaNguyenNhan', 'TenNguyenNhan']],
            DIADIEMMAITANG: [['MaDiaDiemMaiTang', 'TenDiaDiemMaiTang'],],
            LOAITHANHTICH: [['MaThanhTich', 'TenThanhTich']],
        }

        for (let i = 0; i < countrys['home_towns'].length; i++) {
            let dataCountry = [`${countrys['home_towns'][i].id}`, `${countrys['home_towns'][i].name}`]
            TablesInfo.QUEQUAN.push(dataCountry)
        }
        for (let i = 0; i < jobs['jobs'].length; i++) {
            let dataJob = [`${jobs['jobs'][i].id}`, `${jobs['jobs'][i].name}`]
            TablesInfo.NGHENGHIEP.push(dataJob)
        }
        for (let i = 0; i < relations['realtions'].length; i++) {
            let dataRelation = [`${relations['realtions'][i].id}`, `${relations['realtions'][i].name}`]
            TablesInfo.QUANHE.push(dataRelation)
        }
        for (let i = 0; i < reasons['reasons'].length; i++) {
            let dataReason = [`${reasons['reasons'][i].id}`, `${reasons['reasons'][i].name}`]
            TablesInfo.NGUYENNHAN.push(dataReason)
        }
        for (let i = 0; i < burials['dead_locations'].length; i++) {
            let dataBurial = [`${burials['dead_locations'][i].id}`, `${burials['dead_locations'][i].name}`]
            TablesInfo.DIADIEMMAITANG.push(dataBurial)
        }
        for (let i = 0; i < achievements['achievement_types'].length; i++) {
            let dataAchievement = [`${achievements['achievement_types'][i].id}`, `${achievements['achievement_types'][i].name}`]
            TablesInfo.LOAITHANHTICH.push(dataAchievement)
        }

        const Setting = {
            Tables: [
                'QUEQUAN',
                'NGHENGHIEP',
                'QUANHE',
                'NGUYENNHAN',
                'DIADIEMMAITANG',
                'LOAITHANHTICH'
            ],

            edit: function (
                id,
                value,
                type,
                types,
                codeTitle,
                nameTitle,
                typeValue
            ) {
                let formData = new FormData();
                // console.log(IDtoDelete, inputtTag.value)
                formData.append('id', id);
                formData.append('name', value);
                fetch(`http://192.168.20.156:5002/${type}`, {
                    method: 'PUT',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        // Handle the response data here
                        console.log(data)
                        let toast = $('.toast')
                        toast.style.display = 'flex';
                        let mess = $('.toast-container')
                        mess.innerHTML = '<span class="toast-mess">Success</span>'
                        mess.classList.remove('animate__zoomIn')
                        mess.classList.add('animate__zoomIn')
                        fetch(`http://192.168.20.156:5002/${types}`)
                            .then(response => response.json())
                            .then(data => {
                                // console.log(data)
                                let table = [[codeTitle, nameTitle]]
                                for (let i = 0; i < data[typeValue].length; i++) {
                                    let dataAdd = [`${data[typeValue][i].id}`, `${data[typeValue][i].name}`]
                                    table.push(dataAdd)
                                }
                                console.log(table)
                                const tableList = $('.tableList')
                                tableListInnerHTML = [`
                                <li class="columnTitle">
                                    <div class="tableItemContainer">
                                        <div class="firstColumn">
                                        ${table[0][0]}
                                        </div>
                                        <div class="secondColumn">
                                        ${table[0][1]}
                                        </div>
                                        <div class="buttonBox">
                                            <div class="addButton">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                    </div> 
                                </li>`]
                                for (let i = 1; i < table.length; i++) {
                                    tableListInnerHTML.push(`
                                    <li class="tableContent">
                                        <div class="tableItemContainer">
                                            <div class="firstColumn">
                                            ${table[i][0]}
                                            </div>
                                            <div class="secondColumn">
                                            ${table[i][1]}
                                            </div>
                                            <div class="buttonBox">
                                                <div class="editButton">
                                                    <i class="fa-solid fa-pen"></i>
                                                </div>
                                                <div class="deleteButton">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`)
                                }

                                console.log(tableListInnerHTML)
                                tableList.innerHTML = tableListInnerHTML.join('')
                                ButtonEvent()
                            })
                            .catch(error => {

                                // Handle any errors that occur
                            });
                    })
                    .catch(error => {

                        // Handle any errors that occur
                    });
            },

            delete: function (
                id,
                type,
                types,
                codeTitle,
                nameTitle,
                typeValue
            ) {
                let formData = new FormData();
                // console.log(IDtoDelete, inputtTag.value)
                formData.append('id', id);
                fetch(`http://192.168.20.156:5002/${type}`, {
                    method: 'DELETE',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        // Handle the response data here
                        console.log(data)
                        let toast = $('.toast')
                        toast.style.display = 'flex';
                        let mess = $('.toast-container')
                        mess.innerHTML = '<span class="toast-mess">Success</span>'
                        mess.classList.remove('animate__zoomIn')
                        mess.classList.add('animate__zoomIn')
                        fetch(`http://192.168.20.156:5002/${types}`)
                            .then(response => response.json())
                            .then(data => {
                                // console.log(data)
                                let table = [[codeTitle, nameTitle]]
                                for (let i = 0; i < data[typeValue].length; i++) {
                                    let dataAdd = [`${data[typeValue][i].id}`, `${data[typeValue][i].name}`]
                                    table.push(dataAdd)
                                }
                                console.log(table)
                                const tableList = $('.tableList')
                                tableListInnerHTML = [`
                                <li class="columnTitle">
                                    <div class="tableItemContainer">
                                        <div class="firstColumn">
                                        ${table[0][0]}
                                        </div>
                                        <div class="secondColumn">
                                        ${table[0][1]}
                                        </div>
                                        <div class="buttonBox">
                                            <div class="addButton">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                    </div> 
                                </li>`]
                                for (let i = 1; i < table.length; i++) {
                                    tableListInnerHTML.push(`
                                    <li class="tableContent">
                                        <div class="tableItemContainer">
                                            <div class="firstColumn">
                                            ${table[i][0]}
                                            </div>
                                            <div class="secondColumn">
                                            ${table[i][1]}
                                            </div>
                                            <div class="buttonBox">
                                                <div class="editButton">
                                                    <i class="fa-solid fa-pen"></i>
                                                </div>
                                                <div class="deleteButton">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`)
                                }

                                console.log(tableListInnerHTML)
                                tableList.innerHTML = tableListInnerHTML.join('')
                                ButtonEvent()
                            })
                            .catch(error => {

                                // Handle any errors that occur
                            });
                    })
                    .catch(error => {
                        // Handle any errors that occur
                    });
            },

            update: function (
                value,
                type,
                types,
                codeTitle,
                nameTitle,
                typeValue
            ) {
                let formData = new FormData();
                formData.append('name', value)
                fetch(`http://192.168.20.156:5002/${type}`, {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        let toast = $('.toast')
                        toast.style.display = 'flex';
                        let mess = $('.toast-container')
                        mess.innerHTML = '<span class="toast-mess">Success</span>'
                        mess.classList.remove('animate__zoomIn')
                        mess.classList.add('animate__zoomIn')
                        fetch(`http://192.168.20.156:5002/${types}`)
                            .then(response => response.json())
                            .then(data => {
                                // console.log(data)
                                let table = [[codeTitle, nameTitle]]
                                for (let i = 0; i < data[typeValue].length; i++) {
                                    let dataAdd = [`${data[typeValue][i].id}`, `${data[typeValue][i].name}`]
                                    table.push(dataAdd)
                                }
                                console.log(table)
                                const tableList = $('.tableList')
                                tableListInnerHTML = [`
                                <li class="columnTitle">
                                    <div class="tableItemContainer">
                                        <div class="firstColumn">
                                        ${table[0][0]}
                                        </div>
                                        <div class="secondColumn">
                                        ${table[0][1]}
                                        </div>
                                        <div class="buttonBox">
                                            <div class="addButton">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                    </div> 
                                </li>`]
                                for (let i = 1; i < table.length; i++) {
                                    tableListInnerHTML.push(`
                                    <li class="tableContent">
                                        <div class="tableItemContainer">
                                            <div class="firstColumn">
                                            ${table[i][0]}
                                            </div>
                                            <div class="secondColumn">
                                            ${table[i][1]}
                                            </div>
                                            <div class="buttonBox">
                                                <div class="editButton">
                                                    <i class="fa-solid fa-pen"></i>
                                                </div>
                                                <div class="deleteButton">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`)
                                }

                                console.log(tableListInnerHTML)
                                tableList.innerHTML = tableListInnerHTML.join('')
                                ButtonEvent()
                            })
                            .catch(error => {

                                // Handle any errors that occur
                            });
                    })
                    .catch(error => {

                        // Handle any errors that occur
                    });

            },

            render: function () {
                // console.log(TablesInfo)
                const SelectBox = $('.chooseTableContainer select')
                var optionListHTML = '<option value="default" disabled selected hidden>Choose Table</option>'
                optionListHTML = this.Tables.reduce((savedValue, current, index) => { return savedValue + `<option value="${index}" >${current}</option>` }, optionListHTML)
                // console.log(optionListHTML);
                SelectBox.innerHTML = optionListHTML
            },
            handleEvents: function () {
                var editButtons = $$('.buttonBox .editButton')
                var deleteButtons = $$('.buttonBox .deleteButton')
                const ChooseButton = $('#settingContainer .Button')
                const SelectBox = $('.chooseTableContainer select')
                ChooseButton.onclick = () => {
                    // console.log('Oke')
                    const SelectValue = this.Tables[SelectBox.value]
                    // console.log(SelectValue)
                    // Gọi API trả về bảng value
                    data = TablesInfo[SelectValue]
                    // console.log(data)
                    const tableList = $('.tableList')
                    tableListInnerHTML = ''
                    tableListInnerHTML = data.reduce((savedValue, [ID, Content], index) => {
                        if (index == 0) return savedValue +
                            `<li class="columnTitle">
                                    <div class="tableItemContainer" data-check="${SelectValue}">
                                        <div class="firstColumn">
                                        ${ID}
                                        </div>
                                        <div class="secondColumn">
                                        ${Content}
                                        </div>
                                        <div class="buttonBox">
                                            <div class="addButton">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                    </div> 
                                </li>`

                        return savedValue + `
                            <li class="tableContent" data-check="${SelectValue}>
                                <div class="tableItemContainer">
                                    <div class="firstColumn">
                                        ${ID}
                                    </div>
                                    <div class="secondColumn">
                                        ${Content}
                                    </div>
                                    <div class="buttonBox">
                                        <div class="editButton">
                                            <i class="fa-solid fa-pen"></i>
                                        </div>
                                        <div class="deleteButton">
                                            <i class="fa-solid fa-xmark"></i>
                                        </div>
                                    </div>
                                </div>
                                
                            </li>`
                    }, tableListInnerHTML)
                    tableList.innerHTML = tableListInnerHTML
                    const DataTable = $('.tableContainer')
                    DataTable.classList.remove('displayNone')
                    ButtonEvent()
                    // console.log(editButtons)

                }
                // console.log(editButtons)
                ButtonEvent = () => {
                    // console.log('oks')
                    editButtons = $$('.buttonBox .editButton')
                    deleteButtons = $$('.buttonBox .deleteButton')
                    editButtons.forEach((element) => {
                        element.onclick = () => {
                            let typeSubmit = $('#ChooseTable').value
                            // console.log(typeSubmit)

                            const editPopup = $('.popUpEdit')
                            editPopup.style.display = 'flex'
                            const title = $('.popUpEditContainer .Title')
                            // ID của thằng cần edit nè
                            IDtoDelete = element.parentNode.previousElementSibling.previousElementSibling.innerText
                            // Bảng của thằng cần edit nè
                            currentTable = this.Tables[$('select').value]
                            title.innerText = `Type new value for ID ${IDtoDelete} of ${currentTable}:`
                            const submitButton = $('#settingContainer .buttonContainer .submitButton')
                            submitButton.onclick = () => {
                                // update xong gọi render lại
                                // console.log(IDtoDelete,currentTable)
                                const inputtTag = $('.popUpEditContainer input')
                                console.log(inputtTag.value)
                                if (inputtTag.value.trim() === '') {
                                    $('.popUpEditContainer-valid').style.display = 'flex'
                                }
                                else {
                                    $('.popUpEditContainer-valid').style.display = 'none'
                                    console.log(typeSubmit)
                                    switch (typeSubmit) {
                                        case '0':
                                            Setting.edit(IDtoDelete, inputtTag.value, 'home_town', 'all_home_towns', 'MaQueQuan', 'TenQueQuan', 'home_towns')
                                            break;
                                        case '1':
                                            Setting.edit(IDtoDelete, inputtTag.value, 'job', 'all_jobs', 'MaNgheNghiep', 'TenNgheNghiep', 'jobs')
                                            break;
                                        case '2':
                                            Setting.edit(IDtoDelete, inputtTag.value, 'relation', 'all_realtions', 'MaQuanHe', 'TenQuanHe', 'realtions')
                                            break;
                                        case '3':
                                            Setting.edit(IDtoDelete, inputtTag.value, 'reason', 'all_reasons', 'MaNguyenNhan', 'TenNguyenNhan', 'reasons')
                                            break;
                                        case '4':
                                            Setting.edit(IDtoDelete, inputtTag.value, 'dead_location', 'all_dead_locations', 'MaDiaDiemMaiTang', 'TenDiaDiemMaiTang', 'dead_locations')
                                            break;
                                        case '5':
                                            Setting.edit(IDtoDelete, inputtTag.value, 'achievement_type', 'all_achievement_types', 'MaThanhTich', 'TenThanhTich', 'achievement_types')
                                            break;
                                    }
                                    // Nhớ kiểm tra input hợp lệ không
                                    console.log(inputtTag.value)
                                    inputtTag.value = ''
                                    editPopup.style.display = 'none'
                                }
                            }
                        };

                    });
                    deleteButtons.forEach((element) => {
                        element.onclick = () => {
                            let typeSubmit = $('#ChooseTable').value
                            const deletePopup = $('.popUpDelete')
                            deletePopup.style.display = 'flex'
                            const deleteButton = $('#settingContainer .buttonContainer .deleteButton')
                            deleteButton.onclick = () => {
                                // Xoá xong gọi render lại
                                // ID của thằng cần xoá nè
                                IDtoDelete = element.parentNode.previousElementSibling.previousElementSibling.innerText
                                // Bảng của thằng cần xoá nè
                                currentTable = this.Tables[$('select').value]
                                // console.log(IDtoDelete,currentTable)
                                switch (typeSubmit) {
                                    case '0':
                                        console.log(IDtoDelete)
                                        Setting.delete(IDtoDelete, 'home_town', 'all_home_towns', 'MaQueQuan', 'TenQueQuan', 'home_towns')
                                        break;
                                    case '1':
                                        Setting.delete(IDtoDelete, 'job', 'all_jobs', 'MaNgheNghiep', 'TenNgheNghiep', 'jobs')
                                        break;
                                    case '2':
                                        Setting.delete(IDtoDelete, 'relation', 'all_realtions', 'MaQuanHe', 'TenQuanHe', 'realtions')
                                        break;
                                    case '3':
                                        Setting.delete(IDtoDelete, 'reason', 'all_reasons', 'MaNguyenNhan', 'TenNguyenNhan', 'reasons')
                                        break;
                                    case '4':
                                        Setting.delete(IDtoDelete, 'dead_location', 'all_dead_locations', 'MaDiaDiemMaiTang', 'TenDiaDiemMaiTang', 'dead_locations')
                                        break;
                                    case '5':
                                        Setting.delete(IDtoDelete, 'achievement_type', 'all_achievement_types', 'MaThanhTich', 'TenThanhTich', 'achievement_types')
                                        break;
                                }
                                deletePopup.style.display = 'none'
                            }
                            const cancelButton = $('.popUpDelete .buttonContainer .cancelButton')
                            cancelButton.onclick = () => {
                                deletePopup.style.display = 'none'
                            }
                        };

                    });
                    const addButton = $('.columnTitle .buttonBox .addButton')
                    addButton.onclick = () => {
                        let typeSubmit = $('#ChooseTable').value
                        const addPopup = $('.popUpAdd')
                        addPopup.style.display = 'flex'
                        const Addtitle = $('.popUpAddContainer .Title')
                        // Bảng của thằng cần add nè
                        currentTable = this.Tables[$('select').value]
                        Addtitle.innerText = `Add new value to table ${currentTable}:`
                        const submitButton = $('.popUpAdd .buttonContainer .submitButton')
                        submitButton.onclick = () => {
                            // update xong gọi render lại
                            // console.log(IDtoDelete,currentTable)
                            const inputtTag = $('.popUpAddContainer input')
                            // Nhớ kiểm tra input hợp lệ không
                            console.log(inputtTag.value)
                            if (inputtTag.value.trim() === '') {
                                $('.popUpEditContainer-valid').style.display = 'flex'
                            } else {
                                switch (typeSubmit) {
                                    case '0':
                                        Setting.update(inputtTag.value, 'home_town', 'all_home_towns', 'MaQueQuan', 'TenQueQuan', 'home_towns')
                                        break;
                                    case '1':
                                        Setting.update(inputtTag.value, 'job', 'all_jobs', 'MaNgheNghiep', 'TenNgheNghiep', 'jobs')
                                        break;
                                    case '2':
                                        Setting.update(inputtTag.value, 'relation', 'all_realtions', 'MaQuanHe', 'TenQuanHe', 'realtions')
                                        break;
                                    case '3':
                                        Setting.update(inputtTag.value, 'reason', 'all_reasons', 'MaNguyenNhan', 'TenNguyenNhan', 'reasons')
                                        break;
                                    case '4':
                                        Setting.update(inputtTag.value, 'dead_location', 'all_dead_locations', 'MaDiaDiemMaiTang', 'TenDiaDiemMaiTang', 'dead_locations')
                                        break;
                                    case '5':
                                        Setting.update(inputtTag.value, 'achievement_type', 'all_achievement_types', 'MaThanhTich', 'TenThanhTich', 'achievement_types')
                                        break;
                                }
                                console.log(inputtTag.value)
                                inputtTag.value = ''
                                addPopup.style.display = 'none'
                            }
                        }
                    }
                }

            },

            start: function () {
                // console.log(this.Tables);
                this.render();
                this.handleEvents();
            }
        }

        Setting.start()

    })
    .catch(error => {
        // Xử lý lỗi nếu có
        console.log('Đã xảy ra lỗi:', error);
    });





let popupAdd = $('.popUpAdd')

let popupAddClose = $('.popUpAddContainer-icon')
let containerPopupAdd = $('.popUpAddContainer')
let bgPopupAdd = $('.popUpAdd')

popupAddClose.onclick = () => {
    popupAdd.style.display = 'none'
    containerPopupAdd.classList.remove('animate__fadeInDown')
}

containerPopupAdd.addEventListener('click', function (event) {
    event.stopPropagation()
})

bgPopupAdd.onclick = () => {
    popupAdd.style.display = 'none'
    containerPopupAdd.classList.remove('animate__fadeInDown')
}

let popupEdit = $('.popUpEdit')
let popupEditClose = $('.popUpEditContainer-icon')
let containerPopupEdit = $('.popUpEditContainer')

popupEditClose.onclick = () => {
    popupEdit.style.display = 'none'
    containerPopupEdit.classList.remove('animate__fadeInDown')
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
