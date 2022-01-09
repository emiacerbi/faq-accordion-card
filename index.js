// Get all Accordion and Content
let accLabel = document.querySelectorAll(".card__main__accordion__label");
let accContent = document.querySelectorAll(".card__main__accordion__content");

for (let i = 0; i < accLabel.length; i++) {
    // Execute whenever an accordion is clicked 
    accLabel[i].onclick = function() {
      if (this.nextElementSibling.style.maxHeight) {
        hideContent();     // Hide All open Contents 
      } else {
        showContent(this);  // Show the Content
      } 
    };
  }
  
  // Function to Show a Content
  function showContent(elem) {
    hideContent();
    elem.classList.add("active");
    elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
  }
  
  // Function to Hide all shown Contents
  function hideContent() {
    for (let i = 0; i < accContent.length; i++) {
      accContent[i].style.maxHeight = null;
      accLabel[i].classList.remove("active");
      // accContent[i].classList.remove('first');
  }
}