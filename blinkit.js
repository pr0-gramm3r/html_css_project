const words = ["'milk'", "'fresh bread'", "'organic eggs'", "'potato chips'"];
const slider = document.querySelector(".slider");
let currentIndex = 0;

// 1. Setup: Inject words + a clone of the first word for seamless looping
function setupSlider() {
  const allWords = [...words, words[0]]; 
  slider.innerHTML = allWords
    .map(word => `<div class="item">${word}</div>`)
    .join('');
}

function startSliding() {
  setInterval(() => {
    currentIndex++;
    
    // Move the slider up
    slider.style.transform = `translateY(-${currentIndex * 24}px)`;

    // If we reached the cloned last item
    if (currentIndex === words.length) {
      setTimeout(() => {
        // Disable transition, jump back to top, then re-enable
        slider.style.transition = 'none';
        currentIndex = 0;
        slider.style.transform = `translateY(0)`;
        
        // Force a reflow to make sure the "none" transition applies
        slider.offsetHeight; 
        slider.style.transition = 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)';
      }, 600); // Wait for the transition to finish before jumping
    }
  }, 2000); // Change word every second
}

setupSlider();
startSliding();