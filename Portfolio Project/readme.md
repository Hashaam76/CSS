// Variables
$website-width: 1280px;
$primary-color: #ffbc00;
$light-color: #f4f4f4;
$medium-color: #ccc;
$dark-color: #333;
$bg-image: url(../Images/showcase.jpg);

// Set Text Color
@function set-text-color($color) {
  @if (lightness($color) > 50) {
@return #000;
} @else {
@return #fff;
}
}

<!-- Javascript for text change -->

class TypeWriter {
constructor(txtElement, words, wait = 3000) {
this.txtElement = txtElement;
this.words = words;
this.txt = '';
this.wordIndex = 0;
this.wait = parseInt(wait, 10);
this.type();
this.isDeleting = false;
}

type() {
// Current index of word
const current = this.wordIndex % this.words.length;
// Get full text of current word
const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);

}
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
const txtElement = document.querySelector('.txt-type');
const words = JSON.parse(txtElement.getAttribute('data-words'));
const wait = txtElement.getAttribute('data-wait');
// Init TypeWriter
new TypeWriter(txtElement, words, wait);
}

<!-- Use Javascript and apply like this -->

class="txt-type"
data-wait="1500"
data-words='["Photographer", "Designer", "UI/UX Dev"]'
