const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const addAchivement = $('.btn-achivement')
const noticeTheEnd = $('.btn-end')
const addMember = $('.btn-add')
const searchMember = $('.btn-search')
const makeAnnualReport = $('.btn-report')

const listitems = $$('.introduction-btn')
const names = $$('.introduction-board__title')

const boards = $$('.introduction-container')

const boardAddAchivement = $('.introduction-container.Yellow-border')
const boardNoticeTheEnd = $('.introduction-container.Prussian-Blue-border')
const boardAddMember = $('.introduction-container.Buttery-White-border')
const boardSearchMember = $('.introduction-container.Brink-Pink-border')
const boardMakeAnnualReport = $('.introduction-container.Saimon-border')

// const boardAddAchivementAdmin = $('.introduction-container--admin.Yellow-border')
// const boardNoticeTheEndAdmin = $('.introduction-container--admin.Prussian-Blue-border')
// const boardAddMemberAdmin = $('.introduction-container--admin.Buttery-White-border')
// const boardSearchMemberAdmin = $('.introduction-container--admin.Brink-Pink-border')
// const boardMakeAnnualReportAdmin = $('.introduction-container--admin.Saimon-border')

const colorBgYellow = '--primary-Yellow-color'
const colorBgPrussianBlue = '--primary-Prussian-Blue-color'
const colorBgButteryWhite = '--primary-Buttery-White-color'
const colorBgBrinkPink = '--primary-Brink-Pink-color'
const colorBgSaimon = '--primary-Saimon-color'

const colorTextWhite = '--white-color'
const colorTextBlack = '--black-color'

buttonForm = function(
    button,
    colorBg,
    colorText,
    board
) {
    button.onclick = () => {
        console.log('helo')
        listitems.forEach((item) => {
            item.style.backgroundColor = `var(${colorBg})`
            item.style.color = `var(${colorText})` 
            item.classList.remove('animate__bounceIn')
        })

        button.classList.add('animate__bounceIn')
    
        names.forEach((name) => {
            name.classList.remove('animate__bounceIn')
        })
    
        names.forEach((name) => {
            name.classList.add('animate__bounceIn')
        })
        
        $('.introduction-container.active').classList.remove('active')
        
        board.classList.add('active')
    }
    
}

buttonForm(
    addAchivement,
    colorBgYellow,
    colorTextBlack,
    boardAddAchivement
)

buttonForm(
    noticeTheEnd,
    colorBgPrussianBlue,
    colorTextWhite,
    boardNoticeTheEnd
)

buttonForm(
    addMember,
    colorBgButteryWhite,
    colorTextBlack,
    boardAddMember
)

buttonForm(
    searchMember,
    colorBgBrinkPink,
    colorTextBlack,
    boardSearchMember
)

buttonForm(
    makeAnnualReport,
    colorBgSaimon,
    colorTextBlack,
    boardMakeAnnualReport
)

const buttons = $$('.board-btn')
let infoboards = $$('.introduction-board')
let infoForms = $$('.introduction-form')

let buttonClose = $('.introduction-icon')

buttons.forEach((item) => {
    item.onclick = () => {
        infoboards.forEach((item) => {
            item.style.display = 'none'
        })

        infoForms.forEach((item) => {
            item.style.display = 'flex'
        })

        buttonClose.style.display = 'block'
    }
})

buttonClose.onclick = () => {
    infoboards.forEach((item) => {
        item.style.display = 'flex'
    })

    infoForms.forEach((item) => {
        item.style.display = 'none'
    })

    buttonClose.style.display = 'none'
}