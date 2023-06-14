const optionJob = $('#job')
const optionAchivementType = $('#achivement')
const optionCountry = $('#country')
const optionReasonDeath = $('#reasonDeath')
const optionRelation = $('#relationship')
const optionDeathLocation = $('#burial')
const optionIdMemberAddAchivement = $('#idMember.Yellow-hover')
const optionIdMemberNoticeTheEnd = $('#idMember.Prussian-Blue-hover')
const optionIdMemberAddMember = $('#idMember.Buttery-White-hover')

const render = {
    // Tải thông tin id thành viên  
    get_IdMember: async () => {
        fetch('http://localhost:8084/all_members')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let members = data['members']
                let htmls = members.map((member) => {
                    return `
                        <option value="${member.name}">${member.name}</option> 
                    `
                })

                optionIdMemberAddAchivement.innerHTML = htmls.join('\n')
                optionIdMemberNoticeTheEnd.innerHTML = htmls.join('\n')
                optionIdMemberAddMember.innerHTML = htmls.join('\n')
                
            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin loại thành tích 
    get_achiementType: async () => {
        fetch('http://localhost:8084/all_achievement_types')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let achiementTypes = data['achievement_types']
                let htmls = achiementTypes.map((achiementType) => {
                    return `
                        <option value="${achiementType.id}">${achiementType.name}</option> 
                    `
                })

                optionAchivementType.innerHTML = htmls.join('\n')
                
            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin địa điểm chôn cất 
    get_deathLocation: async () => {
        fetch('http://localhost:8084/all_dead_locations')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let deathLocations = data['dead_locations']
                let htmls = deathLocations.map((deathLocation) => {
                    return `
                        <option value="${deathLocation.id}">${deathLocation.name}</option> 
                    `
                })

                optionDeathLocation.innerHTML = htmls.join('\n')
                
            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin tình trạng quan hệ 
    get_relationship: async () => {
        fetch('http://localhost:8084/all_realtions')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let realtions = data['realtions']
                let htmls = realtions.map((realtion) => {
                    return `
                        <option value="${realtion.id}">${realtion.name}</option> 
                    `
                })

                optionRelation.innerHTML = htmls.join('\n')
                
            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin nguyên nhân chết
    get_reasonDeath: async () => {
        fetch('http://localhost:8084/all_reasons')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let countries = data['reasons']
                let htmls = countries.map((country) => {
                    return `
                        <option value="${country.id}">${country.name}</option> 
                    `
                })

                optionReasonDeath.innerHTML = htmls.join('\n')
                
            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin Quê quán
    get_country: async () => {
        fetch('http://localhost:8084/all_home_towns')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let countries = data['home_towns']
                let htmls = countries.map((country) => {
                    return `
                        <option value="${country.id}">${country.name}</option> 
                    `
                })

                optionCountry.innerHTML = htmls.join('\n')
                
            })
            .catch(error => {
                // Handle any errors that occur
            });
    },

    // Tải thông tin nghề nghiệp
    get_job: async () => {
        fetch('http://localhost:8084/all_jobs')
            .then(response => response.json())
            .then(data => {
                // console.log(data[''])
                let jobs = data['jobs']
                let htmls = jobs.map((job) => {
                    return `
                        <option value="${job.id}">${job.name}</option> 
                    `
                })

                optionJob.innerHTML = htmls.join('\n')
                
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