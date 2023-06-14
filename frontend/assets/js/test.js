fetch('http://192.168.20.156:5002/all_members')
    .then(response => {
        if (!response.ok) {
            throw new Error('Đã xảy ra lỗi');
        }
        return response.json();
    })
    .then(data => {
        const membersBySex = {};

        for (let i = 0; i < data['members'].length; i++) {
            const member = data['members'][i];
            const sex = member.sex;

            if (!membersBySex[sex]) {
                membersBySex[sex] = [];
            }

            membersBySex[sex].push(member);
        }

        console.log(membersBySex);
    })


    for (let i = 0; i < memberByName.length; i++) {
        console.log(memberByName[i].name);
        if (memberByName[i].name === `${fullname}`){
            let plaques = []
            plaques.push(memberByName[i])
        }
    }