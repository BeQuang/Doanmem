const boxup = $('.boxup')

const boxupClose = $('.boxup-icon')
const containerBoxup = $('.boxup-container')
const bgBoxup = $('.boxup')

boxupClose.onclick = () => {
    boxup.style.display = 'none'
    containerBoxup.classList.remove('animate__fadeInDown')
}

containerBoxup.addEventListener('click', function (event) {
    event.stopPropagation()
})

bgBoxup.onclick = () => {
    boxup.style.display = 'none'
    containerBoxup.classList.remove('animate__fadeInDown')
}