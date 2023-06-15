let searchInput = document.querySelector('#inputoldMember.input-option');
let mySelect = document.querySelector('#oldMember.Buttery-White-hover');
const originalOptions = Array.from(mySelect.options);

searchInput.addEventListener('input', () => {

    let searchTerm = searchInput.value.toLowerCase();

    // Xóa tất cả các tùy chọn hiện có
    while (mySelect.options.length > 0) {
        mySelect.remove(0);
    }

    // Thêm lại các tùy chọn đã lọc hoặc tất cả các tùy chọn nếu không có nội dung nhập
    let filteredOptions = originalOptions.filter(option => {
        return option.text.toLowerCase().includes(searchTerm);
    });

    console.log(filteredOptions, originalOptions)

    let optionsToAdd = searchTerm ? filteredOptions : originalOptions;

    optionsToAdd.forEach(option => {
        mySelect.add(option);
    });
});

searchInput.addEventListener('click', () => {
});

