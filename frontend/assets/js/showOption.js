showOption = function (
    clickElement,
    inputElement,
    optionsElement,
    boxElement,
    addclass,
) {
    clickElement.onclick = () => {
        boxElement.style.display = "block";
    
        let options = optionsElement.getElementsByTagName('option')
        let htmls = "";
        for (var i = 0; i < options.length; i++) {
            htmls += `<div class="select-option__type ${addclass}">` + options[i].text + `</div>`;
        }
        boxElement.innerHTML = htmls
    }
    
    // Thêm sự kiện "click" vào các tùy chọn
    boxElement.addEventListener("click", function (event) {
        let target = event.target;
        if (target.tagName === "DIV") {
            // Lấy giá trị của tùy chọn và gán vào ô input
            let optionText = target.textContent;
            inputElement.value = optionText;
    
            // Ẩn bảng tùy chọn
            boxElement.style.display = "none";
        }
    });
    
    // Ẩn bảng tùy chọn khi click bất kỳ nơi nào trên trang
    document.addEventListener("click", function (event) {
        let targetElement = event.target; // Phần tử được click
    
        // Kiểm tra xem click có trong phạm vi của thẻ input hay không
        let isClickInsideInput = clickElement.contains(targetElement);
    
        if (!isClickInsideInput) {
            // Nếu click không trong phạm vi của thẻ input, ẩn bảng tùy chọn
            boxElement.style.display = "none";
        }
    });
}

const clickRelation = $('.introduction-position.relationship')
const inputSearchRelation = $('.input-search.relationship')
const optionListRelation = $('#relationship')
const boxRelation = $('.select-option.relationship')

const clickSearchMemberRelation = $('.introduction-position.relationship.Brink-Pink')
const inputSearchMemberSearchRelation = $('.input-search.relationship.Brink-Pink-hover')
const boxSearchMemberRelation = $('.select-option.relationship.Brink-Pink-hover')

showOption(
    clickRelation,
    inputSearchRelation,
    optionListRelation,
    boxRelation
)

showOption(
    clickSearchMemberRelation,
    inputSearchMemberSearchRelation,
    optionListRelation,
    boxSearchMemberRelation
)

const clickCountry = $('.introduction-position.country')
const inputSearchCountry = $('.input-search.country')
const optionListCountry = $('#country')
const boxCountry = $('.select-option.country')

showOption(
    clickCountry,
    inputSearchCountry,
    optionListCountry,
    boxCountry
)

const clickJob = $('.introduction-position.job')
const inputSearchJob = $('.input-search.job')
const optionListJob = $('#job')
const boxJob = $('.select-option.job')

showOption(
    clickJob,
    inputSearchJob,
    optionListJob,
    boxJob
)

const clickReasonDeath = $('.introduction-position.reasonDeath')
const inputSearchReasonDeath = $('.input-search.reasonDeath')
const optionListReasonDeath = $('#reasonDeath')
const boxReasonDeath = $('.select-option.reasonDeath')

showOption(
    clickReasonDeath,
    inputSearchReasonDeath,
    optionListReasonDeath,
    boxReasonDeath
)

const clickBurial = $('.introduction-position.burial')
const inputSearchBurial = $('.input-search.burial')
const optionListBurial = $('#burial')
const boxBurial = $('.select-option.burial')

showOption(
    clickBurial,
    inputSearchBurial,
    optionListBurial,
    boxBurial
)

const clickAchivement = $('.introduction-position.achivement')
const inputSearchAchivement = $('.input-search.achivement')
const optionListAchivement = $('#achivement')
const boxAchivement = $('.select-option.achivement')

showOption(
    clickAchivement,
    inputSearchAchivement,
    optionListAchivement,
    boxAchivement
)


const clickIdMemberAddAchivement = $('.introduction-position.idMemberAddAchivement')
const inputSearchIdMemberAddAchivement = $('.input-search.idMember.Yellow-hover')
const optionListIdMemberAddAchivement = $('#idMember.Yellow-hover')
const boxIdMemberAddAchivement = $('.select-option.idMember.Yellow-hover')

showOption(
    clickIdMemberAddAchivement,
    inputSearchIdMemberAddAchivement,
    optionListIdMemberAddAchivement,
    boxIdMemberAddAchivement
)


const clickIdMemberNoticeTheEnd = $('.introduction-position.idMemberNoticeTheEnd')
const inputSearchIdMemberNoticeTheEnd = $('.input-search.idMember.Prussian-Blue-hover')
const optionListIdMemberNoticeTheEnd = $('#idMember.Prussian-Blue-hover')
const boxIdMemberNoticeTheEnd = $('.select-option.idMember.Prussian-Blue-hover')

showOption(
    clickIdMemberNoticeTheEnd,
    inputSearchIdMemberNoticeTheEnd,
    optionListIdMemberNoticeTheEnd,
    boxIdMemberNoticeTheEnd
)


const clickIdMemberAddMember = $('.introduction-position.idMemberAddMember')
const inputSearchIdMemberAddMember = $('.input-search.idMember.Buttery-White-hover')
const optionListIdMemberAddMember = $('#idMember.Buttery-White-hover')
const boxIdMemberAddMember = $('.select-option.idMember.Buttery-White-hover')


showOption(
    clickIdMemberAddMember,
    inputSearchIdMemberAddMember,
    optionListIdMemberAddMember,
    boxIdMemberAddMember
)

const clickCountryBoxup = $('.introduction-position.boxup-option__country')
const inputSearchCountryBoxup = $('.input-search.boxup-option__country')
const optionListCountryBoxup = $('#country')
const boxCountryBoxup = $('.select-option.boxup-option__country')

showOption(
    clickCountryBoxup,
    inputSearchCountryBoxup,
    optionListCountryBoxup,
    boxCountryBoxup,
    addclass = 'boxup-style'
)

const clickReasonDeathBoxup = $('.introduction-position.boxup-option__reasonDeath')
const inputSearchReasonDeathBoxup = $('.input-search.boxup-reasonDeath')
const optionListReasonDeathBoxup = $('#reasonDeath')
const boxReasonDeathBoxup = $('.select-option.boxup-option__reasonDeath')

showOption(
    clickReasonDeathBoxup,
    inputSearchReasonDeathBoxup,
    optionListReasonDeathBoxup,
    boxReasonDeathBoxup,
    addclass = 'boxup-style'
)

const clickJobBoxup = $('.introduction-position.boxup-option__job')
const inputSearchJobBoxup = $('.input-search.boxup-job')
const optionListJobBoxup = $('#job')
const boxJobBoxup = $('.select-option.boxup-option__job')

showOption(
    clickJobBoxup,
    inputSearchJobBoxup,
    optionListJobBoxup,
    boxJobBoxup,
    addclass = 'boxup-style'
)

const clickRelationshipBoxup = $('.introduction-position.boxup-option__relationship')
const inputSearchRelationshipBoxup = $('.input-search.boxup-relationship')
const optionListRelationshipBoxup = $('#relationship')
const boxRelationshipBoxup = $('.select-option.boxup-option__relationship')

showOption(
    clickRelationshipBoxup,
    inputSearchRelationshipBoxup,
    optionListRelationshipBoxup,
    boxRelationshipBoxup,
    addclass = 'boxup-style'
)

const clickBurialBoxup = $('.introduction-position.boxup-option__burial')
const inputSearchBurialBoxup = $('.input-search.boxup-burial')
const optionListBurialBoxup = $('#burial')
const boxBurialBoxup = $('.select-option.boxup-option__burial')

showOption(
    clickBurialBoxup,
    inputSearchBurialBoxup,
    optionListBurialBoxup,
    boxBurialBoxup,
    addclass = 'boxup-style'
)

const clickAchivementBoxup = $('.introduction-position.boxup-option__achivement')
const inputSearchAchivementBoxup = $('.input-search.boxup-achivement')
const optionListAchivementBoxup = $('#achivement')
const boxAchivementBoxup = $('.select-option.boxup-option__achivement')

showOption(
    clickAchivementBoxup,
    inputSearchAchivementBoxup,
    optionListAchivementBoxup,
    boxAchivementBoxup,
    addclass = 'boxup-style'
)