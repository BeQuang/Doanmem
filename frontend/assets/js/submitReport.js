const reportClose = $('.report-close')
const report = $('.report')
const containerReport = $('.report-container')
const bgReport = $('.report')




reportClose.onclick = () => {
    report.style.display = 'none'
    containerReport.classList.remove('animate__fadeInDown')
}

containerReport.addEventListener('click', function (event) {
    event.stopPropagation()
})

bgReport.onclick = () => {
    report.style.display = 'none'
    containerReport.classList.remove('animate__fadeInDown')
}