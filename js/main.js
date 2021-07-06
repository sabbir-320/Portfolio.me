// nav menu section
const navMenu = document.querySelector(".nav-menu");
function openNavMenu(){
    navMenu.style.display = "block"
}
function closeNabMenu(){
    navMenu.style.display = "none"
}
function homeNav(e){
    currentActiveBtnMenu(e)
    navMenu.style.display = "none"
}
function aboutNav(e){
    currentActiveBtnMenu(e)
    navMenu.style.display = "none"
}
function servicesNav (e){
    currentActiveBtnMenu(e)
    navMenu.style.display = "none"
}
function portfolioNav (e){
    currentActiveBtnMenu(e)
    navMenu.style.display = "none"
}
function contactNav(e){
    currentActiveBtnMenu(e)
    navMenu.style.display = "none"
}
// about tabs section
function skillsTab(e){
    currentActiveBtn(e)
    hideCurrentItem()
    const skillsWrapper = document.querySelector(".skills-wrapper");
    skillsWrapper.className = skillsWrapper.className.replace("display-none", "display-block",)
}
function expTab(e){
    currentActiveBtn(e)
    hideCurrentItem()
    const expWrapper = document.querySelector(".exp-wrapper");
    expWrapper.className = expWrapper.className.replace("display-none", "display-block",)
}
function educationTab(e){
    currentActiveBtn(e)
    hideCurrentItem()
    const educationWrapper = document.querySelector(".education-wrapper");
    educationWrapper.className = educationWrapper.className.replace("display-none", "display-block",)
}
function currentActiveBtnMenu(targetedBtn){
    const currentActiveTab = document.querySelector(".active");
    currentActiveTab.className = currentActiveTab.className.replace("active", " ")
    targetedBtn.className+= " active"
}

function currentActiveBtn(targetedBtn){
    const currentActiveTab = document.querySelector(".activeTabBtn");
    currentActiveTab.className = currentActiveTab.className.replace("activeTabBtn", " ")
    targetedBtn.className+= " activeTabBtn"
}
function hideCurrentItem(){
    const displayBlock = document.querySelector(".display-block");
    displayBlock.classList.replace("display-block", "display-none")
}
