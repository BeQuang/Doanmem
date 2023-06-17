let reportSubmit = document.querySelector('.btn.form-btn.Saimon-bg')

let reportClose = $('.report-close')
let report = $('.report')
let containerReport = $('.report-container')
let bgReport = $('.report')
let reportUpDown = $('.report-updown')
let reportAchivements = $('.report-achivement')
let textUpDownFrom = $('.report-updown__from')
let textUpDownTo = $('.report-updown__to')
let textAchivementFrom = $('.report-achivement__from')
let textAchivementTo = $('.report-achivement__to')
let menuAchivement = $('.report-menu.achivement')
let menuUpdown = $('.report-menu.updown')

let messValid = $('.form-valid.Saimon')

reportSubmit.onclick = () => {
    let fromValue = $('#fromYear.Saimon-hover').value
    let toValue = $('#toYear.Saimon-hover').value
    let reportOptionValue = $('#report.Saimon-hover').value

    console.log(fromValue, toValue, reportOptionValue)

    if (!fromValue || !toValue || fromValue >= 2024 || fromValue >= toValue || toValue >= 2024) {
        messValid.style.display = 'block'
    }
    else {
        if (reportOptionValue == 1) {
            reportAchivements.style.display = 'flex'
            reportUpDown.style.display = 'none'
            messValid.style.display = 'none'
            let urlAchievement = `http://192.168.20.156:5002/achievement_members_report?start_year=${fromValue}&end_year=${toValue}`

            report.style.display = 'flex'
            containerReport.classList.add('animate__bounceInDown')
            textAchivementFrom.innerText = fromValue
            textAchivementTo.innerText = toValue

            fetch(urlAchievement)
                .then(response => response.json())
                .then(data => {
                    // Handle the response data here
                    console.log(data['result'][0].TENLOAITHANHTICH)
                    let count = 0

                    let results = data['result']
                    let htmls = []
                    htmls.push(results.map((result) => {
                        return `
                        <div class="report-list">
                            <div class="report-stt2">${count=count+1}</div>
                            <div class="report-type">${result.TENLOAITHANHTICH}</div>
                            <div class="report-count">${result.COUNT_OCCURRENCES}</div>
                        </div>
                        `
                    }))

                    console.log(htmls)

                    menuAchivement.innerHTML = htmls.join('\n')


                })
                .catch(error => {
                    // Handle any errors that occur
                });
        }
        else if (reportOptionValue == 0) {
            reportUpDown.style.display = 'flex'
            reportAchivements.style.display = 'none'
            messValid.style.display = 'none'
            let urlUpDown = `http://192.168.20.156:5002/increase_and_decrease_members?start_year=${fromValue}&end_year=${toValue}`

            report.style.display = 'flex'
            containerReport.classList.add('animate__bounceInDown')
            textAchivementFrom.innerText = fromValue
            textAchivementTo.innerText = toValue

            fetch(urlUpDown)
                .then(response => response.json())
                .then(data => {
                    // Handle the response data here
                    console.log(data)
                    let count = 0

                    let results = data['result']
                    let htmls = []
                    htmls.push(results.map((result) => {
                        return `
                        <div class="report-list">
                            <div class="report-stt">${count=count+1}</div>
                            <div class="report-year">${result.Year}</div>
                            <div class="report-birth">${result.Births}</div>
                            <div class="report-married">${result.Marriages}</div>
                            <div class="report-dead">${result.Deaths}</div>
                        </div>
                        `
                    }))

                    console.log(htmls)

                    menuUpdown.innerHTML = htmls.join('\n')


                })
                .catch(error => {
                    // Handle any errors that occur
                });
        }
        else {
            messValid.style.display = 'block'
        }

    }
}


reportClose.onclick = () => {
    report.style.display = 'none'
    containerReport.classList.remove('animate__bounceInDown')
}

containerReport.addEventListener('click', function (event) {
    event.stopPropagation()
})

bgReport.onclick = () => {
    report.style.display = 'none'
    containerReport.classList.remove('animate__bounceInDown')
}