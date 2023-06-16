deleteForm = function (
    id,
    link,
) {
    let formData = new FormData();
    formData.append('id', id);
    let toastContainer = document.querySelector('.toast-container');
    let toast = document.querySelector('.toast');
    let boxup = document.querySelector('.boxup');
    let formSearch = document.querySelector('.form-search');
    let fullnameInput = document.querySelector('#fullname.Brink-Pink-hover');
    let birthDayInput = document.querySelector('#birthDay.Brink-Pink-hover');
    let oldMemberInput = document.querySelector('#oldMember.Brink-Pink-hover');
    let generationInput = document.querySelector('#generation.Brink-Pink-hover');

    fetch(link, {
        method: 'DELETE',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data here
            if (data.code === 900) {
                deleteForm(id, link)
            }
            console.log(link, data)
            toastContainer.classList.remove('animate__bounceIn');
            toastContainer.classList.add('animate__bounceIn')

            toast.style.display = 'flex';
            toastContainer.innerHTML = '<span class="toast-mess">Success</span>'

            boxup.style.display = 'none';
            formSearch.style.display = 'none'

            fullnameInput.value = ''
            birthDayInput.value = ''
            oldMemberInput.value = '-1'
            generationInput.value = ''
        })
        .catch(error => {
            // Handle any errors that occur
        });
}