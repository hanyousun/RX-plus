/* 셀렉트 박스 */
const selectBoxElements = document.querySelectorAll(".select");
function toggleSelectBox(selectBox) {
   selectBox.classList.toggle("active");
}
function selectOption(optionElement) {
   const selectBox = optionElement.closest(".select");
   const selectedElement = selectBox.querySelector(".selected-value");
   selectedElement.textContent = optionElement.textContent;
}
selectBoxElements.forEach((selectBoxElement) => {
   selectBoxElement.addEventListener("click", function (e) {
      const targetElement = e.target;
      const isOptionElement = targetElement.classList.contains("option");
      if (isOptionElement) {
         selectOption(targetElement);
      }
      toggleSelectBox(selectBoxElement);
   });
});
document.addEventListener("click", function (e) {
   const targetElement = e.target;
   const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");
   if (isSelect) {
      return;
   }
   const allSelectBoxElements = document.querySelectorAll(".select");
   allSelectBoxElements.forEach((boxElement) => {
      boxElement.classList.remove("active");
   });
});

/* 셀렉트 박스 */
const optionFir = document.querySelectorAll(".select>ul>li");
const optionSec = document.querySelectorAll(".join-content-input>div");
const select01 = document.querySelector(".join-content-input > .select-option01");
const select02 = document.querySelector(".join-content-input > .select-option02");
const select03 = document.querySelector(".join-content-input > .select-option03");
const select04 = document.querySelector(".join-content-input > .select-option04");
optionFir.forEach((element) => {
   element.addEventListener("click", function (e) {
      const optionClass01 = e.target.classList;
      const optionContain01 = optionClass01[1];
      if (optionContain01.indexOf("select-option01") > -1) {
         select01.style.display = "block";
      } else {
         select01.style.display = "none";
      }
      if (optionContain01.indexOf("select-option02") > -1) {
         select02.style.display = "block";
      } else {
         select02.style.display = "none";
      }
      if (optionContain01.indexOf("select-option03") > -1) {
         select03.style.display = "block";
      } else {
         select03.style.display = "none";
      }
      if (optionContain01.indexOf("select-option04") > -1) {
         select04.style.display = "block";
      } else {
         select04.style.display = "none";
      }
   });
});

/* 회원 메뉴 현재 페이지 활성화 표시 */
const activeMenuId = document.querySelector(".join-content-menu")?.dataset.activeMenu;
if (activeMenuId) {
   document.getElementById(activeMenuId)?.classList.add("active");
}

/* 전체 체크 */
function checkAll(checkAll) {
   const checkboxes = document.getElementsByName("login-chk");

   checkboxes.forEach((checkbox) => {
      checkbox.checked = checkAll.checked;
   });
}
