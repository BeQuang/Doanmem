const submitSearchMember = $('.introduction-buttonform.Brink-Pink-bg')

submitSearchMember.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    const fullnameInput = document.querySelector('#fullname.Brink-Pink-hover');
    const dateBirthInput = document.querySelector('#dateBirth.Brink-Pink-hover');
    const relationNameInput = document.querySelector('#relationName.Brink-Pink-hover');
    const relationInput = document.querySelector('.input-search.relationship.Brink-Pink-hover');


    let fullname = fullnameInput.value;
    let dateBirth = dateBirthInput.value;
    let relationName = relationNameInput.value;
    let relation = relationInput.value;

    const urlRelation = 'http://localhost:8084/relation?name=' + encodeURIComponent(relation);
    const urlRelationName = 'http://localhost:8084/member?name=' + encodeURIComponent(relationName);

    // Hàm để định dạng ngày tháng thành chuỗi "dd-mm-yyyy"
    function formatDate(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return day + "-" + month + "-" + year;
    }

    function errorHandling(box = $('.infoSearch'), Error = $('.infoSearch-valid')) {
        box.style.display = 'none'
        let html = `
        <i class="fa-solid fa-circle-exclamation"></i>
        <span class="infoSearch-error">Không tìm thấy</span>
        `
        Error.innerHTML = html
        Error.style.display = 'block'
    }

    function successHandling(
        name,
        birthday,
        country,
        searchList = $('.infoSearch-list'),
        boxSearch = $('.infoSearch'),
        error = $('.infoSearch-valid')
    ) {
        let html = `
        <div class="infoSearch-box">
            <h1 class="infoSearch-item item__name">${name}</h1>
            <h1 class="infoSearch-item item__birth">${birthday}</h1>
            <h1 class="infoSearch-item item__country">${country}</h1>
        </div>
        `
        searchList.innerHTML = html
        boxSearch.style.display = 'block'
        error.style.display = 'none'
    }

    function queryFullName() {
        fetch('http://localhost:8084/all_members')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            })
            .then(data => {
                let check = false
                const membersByName = {};

                for (let i = 0; i < data['members'].length; i++) {
                    const member = data['members'][i];
                    const name = member.name;

                    if (!membersByName[name]) {
                        membersByName[name] = [];
                    }

                    membersByName[name].push(member);
                }

                console.log(membersByName);
                for (let key in membersByName) {
                    if (key === `${fullname}`) {
                        let plaques = membersByName[key];
                        let htmls = []
                        plaques.forEach((element) => {
                            // Truy cập vào từng phần tử trong mảng
                            // Lấy ngày sinh từ object
                            let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                            let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                            console.log(element);

                            let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);

                            async function fetchData() {
                                try {
                                    const response = await fetch(urlCountry);
                                    const data = await response.json();
                                    return data['home_town'][0].name;
                                } catch (error) {
                                    console.error('Fetch error:', error);
                                }
                            }
                            (async () => {
                                const result = await fetchData();
                                // Sử dụng kết quả từ fetchData()
                                console.log(result);
                                let html = `
                                <div class="infoSearch-box"  data-value="${element.id}">
                                    <h1 class="infoSearch-item item__name">${fullname}</h1>
                                    <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                    <h1 class="infoSearch-item item__country">${result}</h1>
                                </div>
                                `
                                htmls.push(html)
                                $('.infoSearch-list').innerHTML = htmls.join('');
                                $('.infoSearch').style.display = 'block';
                                $('.infoSearch-valid').style.display = 'none';
                            })();
                        });
                        console.log(htmls)
                        check = true
                    }
                }
                if (!check) {
                    throw new Error('Đã xảy ra lỗi');
                }
                else {
                    document.querySelectorAll('.infoSearch-box')
                    console.log(document.querySelectorAll('.infoSearch-box'))
                }
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryBirth() {
        fetch('http://localhost:8084/all_members')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            })
            .then(data => {
                let check = false
                const membersByBirth = {};

                for (let i = 0; i < data['members'].length; i++) {
                    const member = data['members'][i];
                    const birth = member.birthday;

                    if (!membersByBirth[birth]) {
                        membersByBirth[birth] = [];
                    }

                    membersByBirth[birth].push(member);
                }

                console.log(membersByBirth);
                dateBirth = dateBirth + 'T00:00:00';
                for (let key in membersByBirth) {
                    if (key === `${dateBirth}`) {
                        let plaques = membersByBirth[key];
                        let htmls = []
                        plaques.forEach((element) => {
                            console.log(element)
                            // Truy cập vào từng phần tử trong mảng
                            // Lấy ngày sinh từ object
                            let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                            let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                            console.log(element);

                            let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);

                            async function fetchData() {
                                try {
                                    const response = await fetch(urlCountry);
                                    const data = await response.json();
                                    return data['home_town'][0].name;
                                } catch (error) {
                                    console.error('Fetch error:', error);
                                }
                            }
                            (async () => {
                                const result = await fetchData();
                                // Sử dụng kết quả từ fetchData()
                                console.log(result);
                                let html = `
                                <div class="infoSearch-box"  data-value="${element.id}">
                                    <h1 class="infoSearch-item item__name">${element.name}</h1>
                                    <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                    <h1 class="infoSearch-item item__country">${result}</h1>
                                </div>
                                `
                                htmls.push(html)
                                $('.infoSearch-list').innerHTML = htmls.join('');
                                $('.infoSearch').style.display = 'block';
                                $('.infoSearch-valid').style.display = 'none';
                            })();
                        });
                        console.log(htmls)
                        check = true
                    }
                    if (!check) {
                        errorHandling()
                    }
                }
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryOldMember() {
        fetch(urlRelationName)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(data => {
                if (data.code === 1000) {
                    return data['members'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(idRelationName => {
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdOldMember = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_old_member = member.id_old_member;

                            if (!membersByIdOldMember[id_old_member]) {
                                membersByIdOldMember[id_old_member] = [];
                            }

                            membersByIdOldMember[id_old_member].push(member);
                        }

                        console.log(membersByIdOldMember);
                        for (let key in membersByIdOldMember) {
                            if (key === `${idRelationName}`) {
                                let plaques = membersByIdOldMember[key];
                                let htmls = []
                                plaques.forEach((element) => {
                                    // Truy cập vào từng phần tử trong mảng
                                    // Lấy ngày sinh từ object
                                    let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                    let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                    console.log(element);

                                    let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);

                                    async function fetchData() {
                                        try {
                                            const response = await fetch(urlCountry);
                                            const data = await response.json();
                                            return data['home_town'][0].name;
                                        } catch (error) {
                                            console.error('Fetch error:', error);
                                        }
                                    }
                                    (async () => {
                                        const result = await fetchData();
                                        // Sử dụng kết quả từ fetchData()
                                        console.log(result);
                                        let html = `
                                <div class="infoSearch-box"  data-value="${element.id}">
                                    <h1 class="infoSearch-item item__name">${element.name}</h1>
                                    <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                    <h1 class="infoSearch-item item__country">${result}</h1>
                                </div>
                                `
                                        htmls.push(html)
                                        $('.infoSearch-list').innerHTML = htmls.join('');
                                        $('.infoSearch').style.display = 'block';
                                        $('.infoSearch-valid').style.display = 'none';
                                    })();
                                });
                                console.log(htmls)
                                check = true
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryRelate() {
        fetch(urlRelation)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(data => {
                if (data.code === 1000) {
                    return data['relation'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(idRelate => {
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdRelate = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_relation = member.id_relation;

                            if (!membersByIdRelate[id_relation]) {
                                membersByIdRelate[id_relation] = [];
                            }

                            membersByIdRelate[id_relation].push(member);
                        }

                        console.log(membersByIdRelate);
                        for (let key in membersByIdRelate) {
                            if (key === `${idRelate}`) {
                                let plaques = membersByIdRelate[key];
                                let htmls = []
                                plaques.forEach((element) => {
                                    // Truy cập vào từng phần tử trong mảng
                                    // Lấy ngày sinh từ object
                                    let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                    let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                    console.log(element);

                                    let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);

                                    async function fetchData() {
                                        try {
                                            const response = await fetch(urlCountry);
                                            const data = await response.json();
                                            return data['home_town'][0].name;
                                        } catch (error) {
                                            console.error('Fetch error:', error);
                                        }
                                    }
                                    (async () => {
                                        const result = await fetchData();
                                        // Sử dụng kết quả từ fetchData()
                                        console.log(result);
                                        let html = `
                                <div class="infoSearch-box"  data-value="${element.id}">
                                    <h1 class="infoSearch-item item__name">${element.name}</h1>
                                    <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                    <h1 class="infoSearch-item item__country">${result}</h1>
                                </div>
                                `
                                        htmls.push(html)
                                        $('.infoSearch-list').innerHTML = htmls.join('');
                                        $('.infoSearch').style.display = 'block';
                                        $('.infoSearch-valid').style.display = 'none';
                                    })();
                                });
                                console.log(htmls)
                                check = true
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryFullName_Birth() {
        fetch('http://localhost:8084/all_members')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            })
            .then(data => {
                let check = false
                const membersByName = {};

                for (let i = 0; i < data['members'].length; i++) {
                    const member = data['members'][i];
                    const name = member.name;

                    if (!membersByName[name]) {
                        membersByName[name] = [];
                    }

                    membersByName[name].push(member);
                }

                console.log(membersByName);
                for (let key in membersByName) {
                    if (key === `${fullname}`) {
                        let memberByBirth = membersByName[key];

                        console.log(memberByBirth);

                        dateBirth = dateBirth + 'T00:00:00';
                        console.log(dateBirth)
                        for (let i = 0; i < memberByBirth.length; i++) {
                            console.log(memberByBirth[i].birthday);
                            if (memberByBirth[i].birthday === `${dateBirth}`) {
                                let plaques = []
                                plaques.push(memberByBirth[i]);
                                let htmls = []

                                console.log(plaques)
                                plaques.forEach((element) => {
                                    // Truy cập vào từng phần tử trong mảng
                                    // Lấy ngày sinh từ object
                                    let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                    let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                    console.log(element);

                                    let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);

                                    async function fetchData() {
                                        try {
                                            const response = await fetch(urlCountry);
                                            const data = await response.json();
                                            return data['home_town'][0].name;
                                        } catch (error) {
                                            console.error('Fetch error:', error);
                                        }
                                    }
                                    (async () => {
                                        const result = await fetchData();
                                        // Sử dụng kết quả từ fetchData()
                                        console.log(result);
                                        let html = `
                                    <div class="infoSearch-box"  data-value="${element.id}">
                                        <h1 class="infoSearch-item item__name">${fullname}</h1>
                                        <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                        <h1 class="infoSearch-item item__country">${result}</h1>
                                    </div>
                                    `
                                        htmls.push(html)
                                        $('.infoSearch-list').innerHTML = htmls.join('');
                                        $('.infoSearch').style.display = 'block';
                                        $('.infoSearch-valid').style.display = 'none';
                                    })();
                                });
                                console.log(htmls)
                                check = true
                            }
                        }
                    }

                }
                if (!check) {
                    errorHandling()
                }
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryFullName_OldMember() {
        fetch(urlRelationName)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(data => {
                if (data.code === 1000) {
                    return data['members'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(idRelationName => {
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdOldMember = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_old_member = member.id_old_member;

                            if (!membersByIdOldMember[id_old_member]) {
                                membersByIdOldMember[id_old_member] = [];
                            }

                            membersByIdOldMember[id_old_member].push(member);
                        }

                        console.log(membersByIdOldMember);
                        for (let key in membersByIdOldMember) {
                            if (key === `${idRelationName}`) {
                                let memberByName = membersByIdOldMember[key];

                                for (let i = 0; i < memberByName.length; i++) {
                                    console.log(memberByName[i].name);
                                    if (memberByName[i].name === `${fullname}`) {
                                        let plaques = []
                                        plaques.push(memberByName[i])
                                        let htmls = []
                                        plaques.forEach((element) => {
                                            // Truy cập vào từng phần tử trong mảng
                                            // Lấy ngày sinh từ object
                                            let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                            let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                            console.log(element);

                                            let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);

                                            async function fetchData() {
                                                try {
                                                    const response = await fetch(urlCountry);
                                                    const data = await response.json();
                                                    return data['home_town'][0].name;
                                                } catch (error) {
                                                    console.error('Fetch error:', error);
                                                }
                                            }
                                            (async () => {
                                                const result = await fetchData();
                                                // Sử dụng kết quả từ fetchData()
                                                console.log(result);
                                                let html = `
                                        <div class="infoSearch-box"  data-value="${element.id}">
                                            <h1 class="infoSearch-item item__name">${element.name}</h1>
                                            <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                            <h1 class="infoSearch-item item__country">${result}</h1>
                                        </div>
                                        `
                                                htmls.push(html)
                                                $('.infoSearch-list').innerHTML = htmls.join('');
                                                $('.infoSearch').style.display = 'block';
                                                $('.infoSearch-valid').style.display = 'none';
                                            })();
                                        });
                                        console.log(htmls)
                                        check = true
                                    }
                                }
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryFullName_Relate() {
        fetch(urlRelation)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(data => {
                if (data.code === 1000) {
                    return data['relation'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(idRelate => {
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdRelate = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_relation = member.id_relation;

                            if (!membersByIdRelate[id_relation]) {
                                membersByIdRelate[id_relation] = [];
                            }

                            membersByIdRelate[id_relation].push(member);
                        }

                        console.log(membersByIdRelate);
                        for (let key in membersByIdRelate) {
                            if (key === `${idRelate}`) {
                                let memberByName = membersByIdRelate[key];

                                for (let i = 0; i < memberByName.length; i++) {
                                    console.log(memberByName[i].name);
                                    if (memberByName[i].name === `${fullname}`) {
                                        let plaques = []
                                        plaques.push(memberByName[i])
                                        let htmls = []
                                        plaques.forEach((element) => {
                                            // Truy cập vào từng phần tử trong mảng
                                            // Lấy ngày sinh từ object
                                            let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                            let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                            console.log(element);

                                            let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);

                                            async function fetchData() {
                                                try {
                                                    const response = await fetch(urlCountry);
                                                    const data = await response.json();
                                                    return data['home_town'][0].name;
                                                } catch (error) {
                                                    console.error('Fetch error:', error);
                                                }
                                            }
                                            (async () => {
                                                const result = await fetchData();
                                                // Sử dụng kết quả từ fetchData()
                                                console.log(result);
                                                let html = `
                                        <div class="infoSearch-box"  data-value="${element.id}">
                                            <h1 class="infoSearch-item item__name">${element.name}</h1>
                                            <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                            <h1 class="infoSearch-item item__country">${result}</h1>
                                        </div>
                                        `
                                                htmls.push(html)
                                                $('.infoSearch-list').innerHTML = htmls.join('');
                                                $('.infoSearch').style.display = 'block';
                                                $('.infoSearch-valid').style.display = 'none';
                                            })();
                                        });
                                        console.log(htmls)
                                        check = true
                                    }
                                }
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryBirth_OldMember() {
        fetch(urlRelationName)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(data => {
                if (data.code === 1000) {
                    return data['members'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(idRelationName => {
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdOldMember = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_old_member = member.id_old_member;

                            if (!membersByIdOldMember[id_old_member]) {
                                membersByIdOldMember[id_old_member] = [];
                            }

                            membersByIdOldMember[id_old_member].push(member);
                        }

                        console.log(membersByIdOldMember);
                        for (let key in membersByIdOldMember) {
                            if (key === `${idRelationName}`) {
                                let memberByBirth = membersByIdOldMember[key];

                                dateBirth = dateBirth + 'T00:00:00';
                                for (let i = 0; i < memberByBirth.length; i++) {
                                    console.log(memberByBirth[i].birthday);
                                    if (memberByBirth[i].birthday === `${dateBirth}`) {
                                        let plaques = []
                                        plaques.push(memberByBirth[i])
                                        let htmls = []
                                        plaques.forEach((element) => {
                                            // Truy cập vào từng phần tử trong mảng
                                            // Lấy ngày sinh từ object
                                            let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                            let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                            console.log(element);

                                            let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);

                                            async function fetchData() {
                                                try {
                                                    const response = await fetch(urlCountry);
                                                    const data = await response.json();
                                                    return data['home_town'][0].name;
                                                } catch (error) {
                                                    console.error('Fetch error:', error);
                                                }
                                            }
                                            (async () => {
                                                const result = await fetchData();
                                                // Sử dụng kết quả từ fetchData()
                                                console.log(result);
                                                let html = `
                                        <div class="infoSearch-box"  data-value="${element.id}">
                                            <h1 class="infoSearch-item item__name">${element.name}</h1>
                                            <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                            <h1 class="infoSearch-item item__country">${result}</h1>
                                        </div>
                                        `
                                                htmls.push(html)
                                                $('.infoSearch-list').innerHTML = htmls.join('');
                                                $('.infoSearch').style.display = 'block';
                                                $('.infoSearch-valid').style.display = 'none';
                                            })();
                                        });
                                        console.log(htmls)
                                        check = true
                                    }
                                }
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryBirth_Relate() {
        fetch(urlRelation)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(data => {
                if (data.code === 1000) {
                    return data['relation'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(idRelate => {
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdRelate = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_relation = member.id_relation;

                            if (!membersByIdRelate[id_relation]) {
                                membersByIdRelate[id_relation] = [];
                            }

                            membersByIdRelate[id_relation].push(member);
                        }

                        console.log(membersByIdRelate);
                        for (let key in membersByIdRelate) {
                            if (key === `${idRelate}`) {
                                let memberByBirth = membersByIdRelate[key];

                                dateBirth = dateBirth + 'T00:00:00';
                                for (let i = 0; i < memberByBirth.length; i++) {
                                    console.log(memberByBirth[i].birthday);
                                    if (memberByBirth[i].birthday === `${dateBirth}`) {
                                        let plaques = []
                                        plaques.push(memberByBirth[i])
                                        let htmls = []
                                        plaques.forEach((element) => {
                                            // Truy cập vào từng phần tử trong mảng
                                            // Lấy ngày sinh từ object
                                            let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                            let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                            console.log(element);

                                            let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);

                                            async function fetchData() {
                                                try {
                                                    const response = await fetch(urlCountry);
                                                    const data = await response.json();
                                                    return data['home_town'][0].name;
                                                } catch (error) {
                                                    console.error('Fetch error:', error);
                                                }
                                            }
                                            (async () => {
                                                const result = await fetchData();
                                                // Sử dụng kết quả từ fetchData()
                                                console.log(result);
                                                let html = `
                                        <div class="infoSearch-box"  data-value="${element.id}">
                                            <h1 class="infoSearch-item item__name">${element.name}</h1>
                                            <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                            <h1 class="infoSearch-item item__country">${result}</h1>
                                        </div>
                                        `
                                                htmls.push(html)
                                                $('.infoSearch-list').innerHTML = htmls.join('');
                                                $('.infoSearch').style.display = 'block';
                                                $('.infoSearch-valid').style.display = 'none';
                                            })();
                                        });
                                        console.log(htmls)
                                        check = true
                                    }
                                }
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryOldMember_Relate() {
        Promise.all([
            fetch(urlRelation).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => {
                if (data.code === 1000) {
                    return data['relation'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            }),

            fetch(urlRelationName).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => {
                if (data.code === 1000) {
                    return data['members'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            }),
        ])
            .then(([idRelation, idOldMember]) => {
                console.log(idRelation, idOldMember)
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdRelate = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_relation = member.id_relation;

                            if (!membersByIdRelate[id_relation]) {
                                membersByIdRelate[id_relation] = [];
                            }

                            membersByIdRelate[id_relation].push(member);
                        }

                        console.log(membersByIdRelate);
                        for (let key in membersByIdRelate) {
                            if (key === `${idRelation}`) {
                                let memberByOldMember = membersByIdRelate[key];
                                for (let i = 0; i < memberByOldMember.length; i++) {
                                    console.log(memberByOldMember[i].id_old_member);
                                    if (memberByOldMember[i].id_old_member === `${idOldMember}`){
                                        let plaques = []
                                        plaques.push(memberByOldMember[i])
                                        let htmls = []
                                        plaques.forEach((element) => {
                                            // Truy cập vào từng phần tử trong mảng
                                            // Lấy ngày sinh từ object
                                            let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                            let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                            console.log(element);
        
                                            let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);
        
                                            async function fetchData() {
                                                try {
                                                    const response = await fetch(urlCountry);
                                                    const data = await response.json();
                                                    return data['home_town'][0].name;
                                                } catch (error) {
                                                    console.error('Fetch error:', error);
                                                }
                                            }
                                            (async () => {
                                                const result = await fetchData();
                                                // Sử dụng kết quả từ fetchData()
                                                console.log(result);
                                                let html = `
                                    <div class="infoSearch-box"  data-value="${element.id}">
                                        <h1 class="infoSearch-item item__name">${element.name}</h1>
                                        <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                        <h1 class="infoSearch-item item__country">${result}</h1>
                                    </div>
                                    `
                                                htmls.push(html)
                                                $('.infoSearch-list').innerHTML = htmls.join('');
                                                $('.infoSearch').style.display = 'block';
                                                $('.infoSearch-valid').style.display = 'none';
                                            })();
                                        });
                                        console.log(htmls)
                                        check = true
                                    }
                                }
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryFullName_Birth_OldMember() {
        fetch(urlRelationName)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(data => {
                if (data.code === 1000) {
                    return data['members'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(idRelationName => {
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdOldMember = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_old_member = member.id_old_member;

                            if (!membersByIdOldMember[id_old_member]) {
                                membersByIdOldMember[id_old_member] = [];
                            }

                            membersByIdOldMember[id_old_member].push(member);
                        }

                        console.log(membersByIdOldMember);
                        for (let key in membersByIdOldMember) {
                            if (key === `${idRelationName}`) {
                                let memberByBirth = membersByIdOldMember[key];

                                dateBirth = dateBirth + 'T00:00:00';
                                for (let i = 0; i < memberByBirth.length; i++) {
                                    console.log(memberByBirth[i].birthday);
                                    if (memberByBirth[i].birthday === `${dateBirth}`) {
                                        let memberByName = []
                                        memberByName.push(memberByBirth[i])
                                        for (let j = 0; j < memberByName.length; j++) {
                                            console.log(memberByName[j].name);
                                            if (memberByName[j].name === `${fullname}`){
                                                let plaques = []
                                                plaques.push(memberByName[j])
                                                let htmls = []
                                                plaques.forEach((element) => {
                                                    // Truy cập vào từng phần tử trong mảng
                                                    // Lấy ngày sinh từ object
                                                    let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                                    let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                                    console.log(element);
        
                                                    let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);
        
                                                    async function fetchData() {
                                                        try {
                                                            const response = await fetch(urlCountry);
                                                            const data = await response.json();
                                                            return data['home_town'][0].name;
                                                        } catch (error) {
                                                            console.error('Fetch error:', error);
                                                        }
                                                    }
                                                    (async () => {
                                                        const result = await fetchData();
                                                        // Sử dụng kết quả từ fetchData()
                                                        console.log(result);
                                                        let html = `
                                                <div class="infoSearch-box"  data-value="${element.id}">
                                                    <h1 class="infoSearch-item item__name">${element.name}</h1>
                                                    <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                                    <h1 class="infoSearch-item item__country">${result}</h1>
                                                </div>
                                                `
                                                        htmls.push(html)
                                                        $('.infoSearch-list').innerHTML = htmls.join('');
                                                        $('.infoSearch').style.display = 'block';
                                                        $('.infoSearch-valid').style.display = 'none';
                                                    })();
                                                });
                                                console.log(htmls)
                                                check = true
                                            }
                                        }
                                    }
                                }
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryFullName_Birth_Relate() {
        fetch(urlRelation)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(data => {
                if (data.code === 1000) {
                    return data['relation'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            })
            .then(idRelate => {
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdRelate = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_relation = member.id_relation;

                            if (!membersByIdRelate[id_relation]) {
                                membersByIdRelate[id_relation] = [];
                            }

                            membersByIdRelate[id_relation].push(member);
                        }

                        console.log(membersByIdRelate);
                        for (let key in membersByIdRelate) {
                            if (key === `${idRelate}`) {
                                let memberByBirth = membersByIdRelate[key];

                                dateBirth = dateBirth + 'T00:00:00';
                                for (let i = 0; i < memberByBirth.length; i++) {
                                    console.log(memberByBirth[i].birthday);
                                    if (memberByBirth[i].birthday === `${dateBirth}`) {
                                        let memberByName = []
                                        memberByName.push(memberByBirth[i])
                                        for (let j = 0; j < memberByName.length; j++) {
                                            console.log(memberByName[j].name);
                                            if (memberByName[j].name === `${fullname}`){
                                                let plaques = []
                                                plaques.push(memberByName[j])
                                                let htmls = []
                                                plaques.forEach((element) => {
                                                    // Truy cập vào từng phần tử trong mảng
                                                    // Lấy ngày sinh từ object
                                                    let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                                    let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                                    console.log(element);
        
                                                    let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);
        
                                                    async function fetchData() {
                                                        try {
                                                            const response = await fetch(urlCountry);
                                                            const data = await response.json();
                                                            return data['home_town'][0].name;
                                                        } catch (error) {
                                                            console.error('Fetch error:', error);
                                                        }
                                                    }
                                                    (async () => {
                                                        const result = await fetchData();
                                                        // Sử dụng kết quả từ fetchData()
                                                        console.log(result);
                                                        let html = `
                                                <div class="infoSearch-box"  data-value="${element.id}">
                                                    <h1 class="infoSearch-item item__name">${element.name}</h1>
                                                    <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                                    <h1 class="infoSearch-item item__country">${result}</h1>
                                                </div>
                                                `
                                                        htmls.push(html)
                                                        $('.infoSearch-list').innerHTML = htmls.join('');
                                                        $('.infoSearch').style.display = 'block';
                                                        $('.infoSearch-valid').style.display = 'none';
                                                    })();
                                                });
                                                console.log(htmls)
                                                check = true
                                            }
                                        }
                                    }
                                }
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryBirth_OldMember_Relate() {
        Promise.all([
            fetch(urlRelation).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => {
                if (data.code === 1000) {
                    return data['relation'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            }),

            fetch(urlRelationName).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => {
                if (data.code === 1000) {
                    return data['members'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            }),
        ])
            .then(([idRelation, idOldMember]) => {
                console.log(idRelation, idOldMember)
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdRelate = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_relation = member.id_relation;

                            if (!membersByIdRelate[id_relation]) {
                                membersByIdRelate[id_relation] = [];
                            }

                            membersByIdRelate[id_relation].push(member);
                        }

                        console.log(membersByIdRelate);
                        for (let key in membersByIdRelate) {
                            if (key === `${idRelation}`) {
                                let memberByOldMember = membersByIdRelate[key];
                                for (let i = 0; i < memberByOldMember.length; i++) {
                                    console.log(memberByOldMember[i].id_old_member);
                                    if (memberByOldMember[i].id_old_member === `${idOldMember}`){
                                        let memberByBirth = []
                                        memberByBirth.push(memberByOldMember[i])
                                        dateBirth = dateBirth + 'T00:00:00';
                                        console.log(dateBirth)
                                        for (let j = 0; j < memberByBirth.length; j++) {
                                            console.log(memberByBirth[j].birthday);
                                            if (memberByBirth[j].birthday === `${dateBirth}`){
                                                let plaques = []
                                                plaques.push(memberByBirth[j])
                                                let htmls = []
                                                plaques.forEach((element) => {
                                                    // Truy cập vào từng phần tử trong mảng
                                                    // Lấy ngày sinh từ object
                                                    let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                                    let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                                    console.log(element);
                
                                                    let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);
                
                                                    async function fetchData() {
                                                        try {
                                                            const response = await fetch(urlCountry);
                                                            const data = await response.json();
                                                            return data['home_town'][0].name;
                                                        } catch (error) {
                                                            console.error('Fetch error:', error);
                                                        }
                                                    }
                                                    (async () => {
                                                        const result = await fetchData();
                                                        // Sử dụng kết quả từ fetchData()
                                                        console.log(result);
                                                        let html = `
                                            <div class="infoSearch-box"  data-value="${element.id}">
                                                <h1 class="infoSearch-item item__name">${element.name}</h1>
                                                <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                                <h1 class="infoSearch-item item__country">${result}</h1>
                                            </div>
                                            `
                                                        htmls.push(html)
                                                        $('.infoSearch-list').innerHTML = htmls.join('');
                                                        $('.infoSearch').style.display = 'block';
                                                        $('.infoSearch-valid').style.display = 'none';
                                                    })();
                                                });
                                                console.log(htmls)
                                                check = true
                                            }
                                        }
                                    }
                                }
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryFullName_OldMember_Relate() {
        Promise.all([
            fetch(urlRelation).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => {
                if (data.code === 1000) {
                    return data['relation'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            }),

            fetch(urlRelationName).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => {
                if (data.code === 1000) {
                    return data['members'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            }),
        ])
            .then(([idRelation, idOldMember]) => {
                console.log(idRelation, idOldMember)
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdRelate = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_relation = member.id_relation;

                            if (!membersByIdRelate[id_relation]) {
                                membersByIdRelate[id_relation] = [];
                            }

                            membersByIdRelate[id_relation].push(member);
                        }

                        console.log(membersByIdRelate);
                        for (let key in membersByIdRelate) {
                            if (key === `${idRelation}`) {
                                let memberByOldMember = membersByIdRelate[key];
                                for (let i = 0; i < memberByOldMember.length; i++) {
                                    console.log(memberByOldMember[i].id_old_member);
                                    if (memberByOldMember[i].id_old_member === `${idOldMember}`){
                                        let memberByName = []
                                        memberByName.push(memberByOldMember[i])
                                        for (let k = 0; k < memberByName.length; k++) {
                                            console.log(memberByName[k].name);
                                            if (memberByName[k].name === `${fullname}`){
                                                let plaques = []
                                                plaques.push(memberByName[k])
                                                let htmls = []
                                                plaques.forEach((element) => {
                                                    // Truy cập vào từng phần tử trong mảng
                                                    // Lấy ngày sinh từ object
                                                    let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                                    let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                                    console.log(element);
                
                                                    let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);
                
                                                    async function fetchData() {
                                                        try {
                                                            const response = await fetch(urlCountry);
                                                            const data = await response.json();
                                                            return data['home_town'][0].name;
                                                        } catch (error) {
                                                            console.error('Fetch error:', error);
                                                        }
                                                    }
                                                    (async () => {
                                                        const result = await fetchData();
                                                        // Sử dụng kết quả từ fetchData()
                                                        console.log(result);
                                                        let html = `
                                            <div class="infoSearch-box"  data-value="${element.id}">
                                                <h1 class="infoSearch-item item__name">${element.name}</h1>
                                                <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                                <h1 class="infoSearch-item item__country">${result}</h1>
                                            </div>
                                            `
                                                        htmls.push(html)
                                                        $('.infoSearch-list').innerHTML = htmls.join('');
                                                        $('.infoSearch').style.display = 'block';
                                                        $('.infoSearch-valid').style.display = 'none';
                                                    })();
                                                });
                                                console.log(htmls)
                                                check = true
                                            }
                                        }
                                    }
                                }
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

    function queryAll() {
        Promise.all([
            fetch(urlRelation).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => {
                if (data.code === 1000) {
                    return data['relation'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            }),

            fetch(urlRelationName).then(response => {
                if (!response.ok) {
                    throw new Error('Đã xảy ra lỗi');
                }
                return response.json();
            }).then(data => {
                if (data.code === 1000) {
                    return data['members'][0].id
                }
                throw new Error("Lỗi khi lấy thông tin thành viên");
            }),
        ])
            .then(([idRelation, idOldMember]) => {
                console.log(idRelation, idOldMember)
                fetch('http://localhost:8084/all_members')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Đã xảy ra lỗi');
                        }
                        return response.json();
                    })
                    .then(data => {
                        let check = false
                        const membersByIdRelate = {};

                        for (let i = 0; i < data['members'].length; i++) {
                            const member = data['members'][i];
                            const id_relation = member.id_relation;

                            if (!membersByIdRelate[id_relation]) {
                                membersByIdRelate[id_relation] = [];
                            }

                            membersByIdRelate[id_relation].push(member);
                        }

                        console.log(membersByIdRelate);
                        for (let key in membersByIdRelate) {
                            if (key === `${idRelation}`) {
                                let memberByOldMember = membersByIdRelate[key];
                                for (let i = 0; i < memberByOldMember.length; i++) {
                                    console.log(memberByOldMember[i].id_old_member);
                                    if (memberByOldMember[i].id_old_member === `${idOldMember}`){
                                        let memberByBirth = []
                                        memberByBirth.push(memberByOldMember[i])
                                        dateBirth = dateBirth + 'T00:00:00';
                                        console.log(dateBirth)
                                        for (let j = 0; j < memberByBirth.length; j++) {
                                            console.log(memberByBirth[j].birthday);
                                            if (memberByBirth[j].birthday === `${dateBirth}`){
                                                let memberByName = []
                                                memberByName.push(memberByBirth[j])
                                                for (let k = 0; k < memberByName.length; k++) {
                                                    console.log(memberByName[k].name);
                                                    if (memberByName[k].name === `${fullname}`){
                                                        let plaques = []
                                                        plaques.push(memberByName[k])
                                                        console.log(memberByName[k])
                                                        let htmls = []
                                                        plaques.forEach((element) => {
                                                            // Truy cập vào từng phần tử trong mảng
                                                            // Lấy ngày sinh từ object
                                                            let birthday = new Date(element.birthday); // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
                                                            let formattedBirthday = formatDate(birthday); // Gọi hàm để định dạng ngày sinh
                                                            console.log(element);
                        
                                                            let urlCountry = 'http://localhost:8084/home_town?id=' + encodeURIComponent(element.id_home_town);
                        
                                                            async function fetchData() {
                                                                try {
                                                                    const response = await fetch(urlCountry);
                                                                    const data = await response.json();
                                                                    return data['home_town'][0].name;
                                                                } catch (error) {
                                                                    console.error('Fetch error:', error);
                                                                }
                                                            }
                                                            (async () => {
                                                                const result = await fetchData();
                                                                // Sử dụng kết quả từ fetchData()
                                                                console.log(result);
                                                                let html = `
                                                    <div class="infoSearch-box"  data-value="${element.id}">
                                                        <h1 class="infoSearch-item item__name">${element.name}</h1>
                                                        <h1 class="infoSearch-item item__birth">${formattedBirthday}</h1>
                                                        <h1 class="infoSearch-item item__country">${result}</h1>
                                                    </div>
                                                    `
                                                                htmls.push(html)
                                                                $('.infoSearch-list').innerHTML = htmls.join('');
                                                                $('.infoSearch').style.display = 'block';
                                                                $('.infoSearch-valid').style.display = 'none';
                                                            })();
                                                        });
                                                        console.log(htmls)
                                                        check = true
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (!check) {
                                errorHandling()
                            }
                        }
                    })
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
                errorHandling()
            });
    }

console.log(urlRelationName, urlRelation)

if (!relation && !relationName && !fullname && dateBirth) {
    queryBirth()
}
else if (!relation && !relationName && fullname && !dateBirth) {
    queryFullName()
}
else if (!relation && relationName && !fullname && !dateBirth) {
    queryOldMember()
}
else if (relation && !relationName && !fullname && !dateBirth) {
    queryRelate()
}
else if (fullname && dateBirth && !relation && !relationName) {
    queryFullName_Birth()
}
else if (fullname && relationName && !relation && !dateBirth) {
    queryFullName_OldMember()
}
else if (fullname && !relationName && relation && !dateBirth) {
    queryFullName_Relate()
}
else if (!fullname && relationName && !relation && dateBirth) {
    queryBirth_OldMember()
}
else if (!fullname && !relationName && relation && dateBirth) {
    queryBirth_Relate()
}
else if (!fullname && relationName && relation && !dateBirth) {
    queryOldMember_Relate()
}
else if (fullname && dateBirth && !relation && relationName) {
    queryFullName_Birth_OldMember()
}
else if (fullname && !relationName && relation && dateBirth) {
    queryFullName_Birth_Relate()
}
else if (!fullname && relationName && relation && dateBirth) {
    queryBirth_OldMember_Relate()
}
else if (fullname && relationName && relation && !dateBirth) {
    queryFullName_OldMember_Relate()
}
else if (fullname && relation && relationName && dateBirth) {
    queryAll()
}

})  