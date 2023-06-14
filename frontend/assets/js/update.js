const updateButton = $('.boxup-button.update')

updateButton.onclick = () => {
    let fullname = $('#fullname.boxup-style').value
    let sex = $('#sex.boxup-style').value
    let job = $('#job.boxup-style').value
    let birthday = $('#birthDay.boxup-style').value
    let country = $('#country.boxup-style').value
    let address = $('#address.boxup-style').value
    let oldMember = $('#oldMember.boxup-style').value
    let relateDay = $('#relationDay.boxup-style').value
    let relation = $('#relationship.boxup-style').value

    // Tạo một đối tượng Date mới
    let currentDate = new Date();
    // Lấy ngày, tháng và năm hiện tại
    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();
    // Định dạng ngày tháng năm theo định dạng "yyyy-mm-dd"
    let formattedDate = year + '-' + month + '-' + day;

}