const bgToast = $('.toast')
const containerToast = $('.toast-container')

containerToast.addEventListener('click', function (event) {
    event.stopPropagation()
})

bgToast.onclick = () => {
    bgToast.style.display = 'none'
    containerToast.classList.remove('animate__zoomIn')
}