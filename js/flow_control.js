
//Control Variables
const sbNav = document.getElementById("sb");
const sbButton = document.getElementById("sbBar");
const cNav = document.getElementById("closeNav");
const showExerciseButtons = document.querySelectorAll(".exerciseButton");
const showExerciseOptions = document.querySelectorAll(".optionButton");
const elementsToHide = document.querySelectorAll(".toggleSection");
const ansField = document.querySelectorAll(".ansInput");

function showNav(){
    sbNav.style.display = "block";
}

function hideNav(){
    sbNav.style.display = "none";
}

function showExercise(event){
    const button = event.target;
    const elementId = button.getAttribute("data-element");
    const targetElement = document.getElementById(elementId);

    if(targetElement){
        if(targetElement.style.display === "none" || targetElement.style.display === ""){
            targetElement.style.display = "block";
        } else {
            targetElement.style.display = "none";
        }
    }
}

function hideAllSection(){
    elementsToHide.forEach(element => {
        element.style.display = "none";
    });
}

function showSelectedOption(event){
    const _button = event.target;
    const _elementId = _button.getAttribute("data-element");
    const _targetElement = document.getElementById(_elementId);
    hideAllSection();
    if(_targetElement){
        if(_targetElement.style.display === "none" || _targetElement.style.display === ""){
            _targetElement.style.display = "block";
        } else {
            _targetElement.style.display = "none";
        }
    }
}


sbButton.addEventListener("click", showNav);
cNav.addEventListener("click", hideNav);
showExerciseButtons.forEach(button => {
    button.addEventListener("click", showExercise);
});
showExerciseOptions.forEach(button => {
    button.addEventListener("click", showSelectedOption);
});
ansField.forEach(input => {
    var absLength = parseInt(input.getAttribute('data-element'));
    var maxLength = parseInt(input.getAttribute('maxlength'));
    input.style.width = maxLength * absLength + 'px';
});
