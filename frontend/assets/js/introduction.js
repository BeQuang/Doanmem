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


// 


// const infoSearchError = $('.infoSearch-valid')
// const listSearch = $('.infoSearch')

// buttonSubmit = function (
    //     colorBg,
    //     colorText,
    //     boardElement,
    //     boardAdminElement
    // ) {
    //     buttonClick.onclick = () => {
//     buttonClick,
//         listitems.forEach((item) => {
//             item.style.backgroundColor = `var(${colorBg})`
//             item.style.color = `var(${colorText})`
//             item.style.padding = '26px 0'
//             item.classList.remove('animate__zoomIn')
//         })
    

    
//         $('.introduction-board.active').classList.remove('active')
//         $('.introduction-board--admin.active').classList.remove('active')
    
//         buttonClick.style.padding = '40px 0'
//         buttonClick.classList.add('animate__zoomIn')
    
//         boardElement.classList.add('active')
//         boardAdminElement.classList.add('active')

//         infoSearchError.style.display = 'none'
//         listSearch.style.display = 'none'
//     }
    
// }

// const buttonForms = $$('.introduction-button--admin')

// const forms = $$('.introduction-find')
// const descriptions = $$('.introduction-description')
// const buttons = $$('.introduction-button--admin')

// const back = $('.introduction-icon')
// const buttonclose = $('.fa-solid.fa-arrow-left')

// const formSearchNumber = $('.introduction-board--admin.Brink-Pink-border')
// const buttonFormsearchNumber = $('.introduction-buttonform.Brink-Pink-bg')

// const boxListSearch = $('.infoSearch');

// buttonForms.forEach((item) => {
//     item.onclick = () => {
//         descriptions.forEach((description) => {
//             description.style.display = 'none'
//         })
//         buttons.forEach((button) => {
//             button.style.display = 'none'
//         })
    
//         forms.forEach((form) => {
//             form.style.display = 'block'
//         })
    
//         back.style.display = 'block'
//     }
// })

// buttonclose.onclick = () => {
//     forms.forEach((form) => {
//         form.style.display = 'none'
//     })

//     back.style.display = 'none'

//     descriptions.forEach((description) => {
//         description.style.display = 'block'
//     })
//     buttons.forEach((button) => {
//         button.style.display = 'block'
//     })
//     boxListSearch.style.display = 'none'
//     infoSearchError.style.display = 'none'
// }