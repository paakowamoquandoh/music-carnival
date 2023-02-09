// Switch theme/add to local storage
let body = document.body;
const themeToggleBtn = body.querySelector('#theme-change-button');
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
    // Add light theme on click
    body.classList.toggle('light-theme');

    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});


// menu open and close
const selectedElement = function(element){
    return document.querySelector(element);
};

let menuToggler = selectedElement(".menuToggle");
let navbody = selectedElement("body");

menuToggler.addEventListener("click", function(){
    navbody.classList.toggle("open")
})