function loginTrigger() {
    boardLogin.style.display = 'flex'
    containerLogin.classList.add('animate__fadeInDown')
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

let messValids = $$('.form-valid')

buttonForm = function(
    name,
    button,
    colorBg,
    colorText,
    board
) {
    button.onclick = () => {
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

        messValids.forEach((message) => {
            message.style.display = 'none'
        })

        infoboards.forEach((item) => {
            item.style.display = 'flex'
        })

        infoForms.forEach((item) => {
            item.style.display = 'none'
        })

        buttonClose.style.display = 'none'
    }
    
}

buttonForm(
    "addAchivement",
    addAchivement,
    colorBgYellow,
    colorTextBlack,
    boardAddAchivement
)

buttonForm(
    "noticeTheEnd",
    noticeTheEnd,
    colorBgPrussianBlue,
    colorTextWhite,
    boardNoticeTheEnd
)

buttonForm(
    "addMember",
    addMember,
    colorBgButteryWhite,
    colorTextBlack,
    boardAddMember
)

buttonForm(
    "searchMember",
    searchMember,
    colorBgBrinkPink,
    colorTextBlack,
    boardSearchMember
)

buttonForm(
    "makeAnnualReport",
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
        if(!getCookie("loggedIn") && (item.id === "add-achivement-start" || item.id === "add-end-start" || item.id === "add-member-start")) {
            loginTrigger();
        } else {
            infoboards.forEach((item) => {
                item.style.display = 'none'
            })
    
            infoForms.forEach((item) => {
                item.style.display = 'flex'
            })
    
            buttonClose.style.display = 'block'
        }
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