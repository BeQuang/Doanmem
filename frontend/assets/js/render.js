const optionJob = $('#job')
const optionAchivementType = $('#achivement')
const optionCountry = $('#country')
const optionReasonDeath = $('#reasonDeath')
const optionRelationAddMember = $('#relationship.Buttery-White-hover')
const optionRelationSearch = $('#relationship.Brink-Pink-hover')
const optionDeathLocation = $('#burial')
const optionIdMemberAddAchivement = $('#oldMember.Yellow-hover')
const optionIdMemberNoticeTheEnd = $('#oldMember.Prussian-Blue-hover')
const optionIdMemberAddMember = $('#oldMember.Buttery-White-hover')
const optionIdMemberSearch = $('#oldMember.Brink-Pink-hover')

const optionJobBox = $('#job.boxup-style')
const optionCountryBox = $('#country.boxup-style')
const optionOldMemberBox = $('#oldMember.boxup-style')
const optionRelateBox = $('#relationship.boxup-style')
const optionReasonBox = $('#reasonDeath.boxup-style')
const optionBurialBox = $('#burial.boxup-style')
const optionAchivementBox = $('#achivement.boxup-style')

const render = {
    // Tải thông tin id thành viên  
    get_IdMember: async () => {
        fetch('http://192.168.20.156:5002/all_members')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let htmls = ['<option value="-1">-- Option --</option>']

                optionIdMemberAddAchivement.innerHTML = htmls.join('\n')
                optionIdMemberNoticeTheEnd.innerHTML = htmls.join('\n')
                optionIdMemberAddMember.innerHTML = htmls.join('\n')

            })
            .catch(error => {
                // Handle any errors that occur
            });
        fetch('http://192.168.20.156:5002/all_members')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let members = data['members']
                let htmls = ['<option value="-1">-- Option --</option>']
                htmls.push(members.map((member) => {
                    return `
                        <option value="${member.id}">${member.name}</option> 
                    `
                }))

                optionIdMemberSearch.innerHTML = htmls.join('\n')
                optionOldMemberBox.innerHTML = htmls.join('\n')

            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin loại thành tích 
    get_achiementType: async () => {
        fetch('http://192.168.20.156:5002/all_achievement_types')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let achiementTypes = data['achievement_types']
                let htmls = ['<option value="-1">-- Option --</option>']
                htmls.push(achiementTypes.map((achiementType) => {
                    return `
                        <option value="${achiementType.id}">${achiementType.name}</option> 
                    `
                }))

                optionAchivementType.innerHTML = htmls.join('\n')
                optionAchivementBox.innerHTML = htmls.join('\n')

            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin địa điểm chôn cất 
    get_deathLocation: async () => {
        fetch('http://192.168.20.156:5002/all_dead_locations')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let deathLocations = data['dead_locations']
                let htmls = ['<option value="-1">-- Option --</option>']
                htmls.push(deathLocations.map((deathLocation) => {
                    return `
                        <option value="${deathLocation.id}">${deathLocation.name}</option> 
                    `
                }))

                optionDeathLocation.innerHTML = htmls.join('\n')
                optionBurialBox.innerHTML = htmls.join('\n')

            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin tình trạng quan hệ 
    get_relationship: async () => {
        fetch('http://192.168.20.156:5002/all_realtions')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let realtions = data['realtions']
                let htmls = ['<option value="-1">-- Option --</option>']
                htmls.push(realtions.map((realtion) => {
                    return `
                        <option value="${realtion.id}">${realtion.name}</option> 
                    `
                }))

                optionRelationAddMember.innerHTML = htmls.join('\n')
                optionRelationSearch.innerHTML = htmls.join('\n')
                optionRelateBox.innerHTML = htmls.join('\n')

            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin nguyên nhân chết
    get_reasonDeath: async () => {
        fetch('http://192.168.20.156:5002/all_reasons')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let countries = data['reasons']
                let htmls = ['<option value="-1">-- Option --</option>']
                htmls.push(countries.map((country) => {
                    return `
                        <option value="${country.id}">${country.name}</option> 
                    `
                }))

                optionReasonDeath.innerHTML = htmls.join('\n')
                optionReasonBox.innerHTML = htmls.join('\n')

            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin Quê quán
    get_country: async () => {
        fetch('http://192.168.20.156:5002/all_home_towns')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let countries = data['home_towns']
                let htmls = ['<option value="-1">-- Option --</option>']
                htmls.push(countries.map((country) => {
                    return `
                        <option value="${country.id}">${country.name}</option> 
                    `
                }))

                optionCountry.innerHTML = htmls.join('\n')
                optionCountryBox.innerHTML = htmls.join('\n')

            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin nghề nghiệp
    get_job: async () => {
        fetch('http://192.168.20.156:5002/all_jobs')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let jobs = data['jobs']
                let htmls = ['<option value="-1">-- Option --</option>']
                htmls.push(jobs.map((job) => {
                    return `
                        <option value="${job.id}">${job.name}</option> 
                    `
                }))

                optionJob.innerHTML = htmls.join('\n')
                optionJobBox.innerHTML = htmls.join('\n')

            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    start: function () {
        // Tải thông tin id thành viên
        this.get_IdMember()

        // Tải thông tin loại thành tích 
        this.get_achiementType()

        // Tải thông tin tình trạng quan hệ
        this.get_relationship()

        // Tải thông tin địa điểm chôn cất
        this.get_deathLocation()

        // Tải thông tin nguyên nhân chết
        this.get_reasonDeath()

        // Tải thông tin Quê quán
        this.get_country()

        // Tải thông tin nghề nghiệp
        this.get_job()
    }
}

render.start()