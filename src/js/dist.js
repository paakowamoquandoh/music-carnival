//DOM elements
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next'
};

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//remove class from a set of items
const removeClasses = (elemSet, className) => {
  
  elemSet.forEach(elem => {
    
    elem.classList.remove(className);
    
  });
  
};

//return exect parent node of the element
const findParent = (elem, parentClass) => {
  
  let currentNode = elem;

  while(! (currentNode.classList.contains(parentClass))) {
    currentNode = currentNode.parentNode;
  }
  
  return currentNode;
  
};

//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = (activeStepNum) => {
  
  //remove active state from all the state
  removeClasses(DOMstrings.stepsBtns, 'js-active');
  
  //set picked items to active
  DOMstrings.stepsBtns.forEach((elem, index) => {
    
    if(index <= (activeStepNum) ) {
      elem.classList.add('js-active');
    }
    
  });
};

//get active panel
const getActivePanel = () => {
  
  let activePanel;
  
  DOMstrings.stepFormPanels.forEach(elem => {
    
    if(elem.classList.contains('js-active')) {
      
      activePanel = elem;
      
    }
    
  });
  
  return activePanel;
                                    
};

//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {
  
  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, 'js-active');
  
  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if(index === (activePanelNum)) {
      
      elem.classList.add('js-active');
   
      setFormHeight(elem);
      
    }
  })
  
};

//set form height equal to current panel height
const formHeight = (activePanel) => {
  
  const activePanelHeight = activePanel.offsetHeight;
  
  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
  
};

const setFormHeight = () => {
  const activePanel = getActivePanel();

  formHeight(activePanel);
}

//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.addEventListener('click', e => {
  
  //check if click target is a step button
  const eventTarget = e.target;
  
  if(!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }
  
  //get active button step number
  const activeStep = getActiveStep(eventTarget);
  
  //set all steps before clicked (and clicked too) to active
  setActiveStep(activeStep);
  
  //open active panel
  setActivePanel(activeStep);
});

//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {
  
  const eventTarget = e.target;
  
  //check if we clicked on `PREV` or NEXT` buttons
  if(! ( (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) || (eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)) ) ) 
  {
    return;
  }
  
  //find active panel
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
  
  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
  
  //set active step and active panel onclick
  if(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
    activePanelNum--;
  
  } else {
    
    activePanelNum++;
  
  }
  
  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);
  
});

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);

//changing animation via animation select !!!YOU DON'T NEED THIS CODE (if you want to change animation type, just change form panels data-attr)

const setAnimationType = (newType) => {
  DOMstrings.stepFormPanels.forEach(elem => {
    elem.dataset.animation = newType;
  })
};

//selector onchange - changing animation
const animationSelect = document.querySelector('.pick-animation__select');

// animationSelect.addEventListener('change', () => {
//   const newAnimationType = animationSelect.value;
  
//   setAnimationType(newAnimationType);
// });


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



