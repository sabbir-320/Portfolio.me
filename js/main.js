// nav menu section
const navMenu = document.querySelector(".nav-menu");
function openNavMenu(){
    navMenu.style.display = "block"
}
function closeNabMenu(){
    navMenu.style.display = "none"
}
function homeNav(e){
    currentActiveBtn(e)
    navMenu.style.display = "none"
}
function aboutNav(e){
    currentActiveBtn(e)
    navMenu.style.display = "none"
}
function servicesNav (e){
    currentActiveBtn(e)
    navMenu.style.display = "none"
}
function portfolioNav (e){
    currentActiveBtn(e)
    navMenu.style.display = "none"
}
function contactNav(e){
    currentActiveBtn(e)
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

function currentActiveBtn(targetedBtn){
    const currentActiveTab = document.querySelector(".active");
    currentActiveTab.className = currentActiveTab.className.replace("active", " ")
    currentActiveTab.className = currentActiveTab.className.replace("inner-shadow", "outer-shadow")
    targetedBtn.className+= " active inner-shadow"
}
function hideCurrentItem(){
    const displayBlock = document.querySelector(".display-block");
    displayBlock.classList.replace("display-block", "display-none")
}
