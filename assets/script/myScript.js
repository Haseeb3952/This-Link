const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const dynamicContent = document.getElementById("dynamic-content");

// Array of content to switch between
const contentArray = [
  'We have <span class="tw-text-customColor"> over 80 years </span> of experience designing and constructing high-quality pipe systems worldwide.',
  'With <span class="tw-text-customColor">over 50 years</span> of exceptional plumbing expertise, we deliver durable and efficient solutions.',
  'Our team has <span class="tw-text-customColor"> over 30 years </span> of service, offering unmatched pipeline construction and maintenance.',
];

let currentIndex = 0;

// Function to update content with animation
function updateContent(newIndex, direction) {
  // Determine the direction of the slide
  const slideOutClass =
    direction === "right" ? "slide-out-left" : "slide-out-right";
  const slideInClass =
    direction === "right" ? "slide-in-right" : "slide-in-left";

  // Slide out the current content
  dynamicContent.classList.add(slideOutClass);

  // Wait for the slide-out animation to finish
  setTimeout(() => {
    // Update the content index and apply the new content
    currentIndex = newIndex;
    dynamicContent.innerHTML = contentArray[currentIndex];

    // Remove the slide-out class before adding the slide-in class
    dynamicContent.classList.remove(slideOutClass);

    // Add the slide-in class for the new content
    dynamicContent.classList.add(slideInClass);

    // Wait for the slide-in animation to finish
    setTimeout(() => {
      // Remove the slide-in class after the animation completes
      dynamicContent.classList.remove(slideInClass);
    }, 300); // Delay to match the CSS transition duration
  }, 300); // Delay to match the CSS transition duration for sliding out
}

// Left arrow click event
leftArrow.addEventListener("click", () => {
  let newIndex =
    currentIndex === 0 ? contentArray.length - 1 : currentIndex - 1;
  updateContent(newIndex, "left");
});

// Right arrow click event
rightArrow.addEventListener("click", () => {
  let newIndex =
    currentIndex === contentArray.length - 1 ? 0 : currentIndex + 1;
  updateContent(newIndex, "right");
});
