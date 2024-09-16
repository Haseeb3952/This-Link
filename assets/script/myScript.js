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

// Go to Top Button Hide on Top of the Page

const goTopBtn = document.getElementById("go-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    goTopBtn.classList.add("show");
  } else {
    goTopBtn.classList.remove("show");
  }
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Video on Screen

document.getElementById("playIcon").addEventListener("click", function () {
  // Replace with your desired YouTube video URL
  const videoURL = "https://www.youtube.com/embed/_qEG9X3G7q0";

  document.getElementById("youtubeVideo").src = videoURL;

  // Show the modal
  var myModal = new bootstrap.Modal(document.getElementById("videoModal"));
  myModal.show();
});

// Clear video when modal is hidden
document
  .getElementById("videoModal")
  .addEventListener("hidden.bs.modal", function () {
    document.getElementById("youtubeVideo").src = "";
  });

document.addEventListener("DOMContentLoaded", function () {
  const dateRangeSelector = document.getElementById("dateRangeSelector");
  const datePickerContainer = document.getElementById("datePickerContainer");
  const startDateInput = document.getElementById("startDate");
  const endDateInput = document.getElementById("endDate");
  const applyButton = document.getElementById("applyButton");
  const daysCountSpan = document.getElementById("daysCount");
  const dateRangeSpan = document.getElementById("dateRange");

  // Toggle date picker visibility
  dateRangeSelector.addEventListener("click", function () {
    if (datePickerContainer.style.display === "block") {
      datePickerContainer.style.display = "none";
    } else {
      datePickerContainer.style.display = "block";
    }
  });

  // Function to calculate the difference in days
  function calculateDays(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Including start date
    return diffDays;
  }

  // Function to format the date to a readable format (e.g., May 19)
  function formatDate(date) {
    const options = { month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  // Apply the selected dates and update the display
  applyButton.addEventListener("click", function () {
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    if (startDate && endDate) {
      const daysCount = calculateDays(startDate, endDate);
      daysCountSpan.textContent = `${daysCount} Days`;
      dateRangeSpan.textContent = `${formatDate(startDate)} - ${formatDate(
        endDate
      )}`;
      datePickerContainer.style.display = "none"; // Hide the picker after selection
    }
  });
});
