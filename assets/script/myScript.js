const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const dynamicContent = document.getElementById("dynamic-content");

const contentArray = [
  'We have <span class="tw-text-customColor"> over 80 years </span> of experience designing and constructing high-quality pipe systems worldwide.',
  'With <span class="tw-text-customColor">over 50 years</span> of exceptional plumbing expertise, we deliver durable and efficient solutions.',
  'Our team has <span class="tw-text-customColor"> over 30 years </span> of service, offering unmatched pipeline construction and maintenance.',
];

let currentIndex = 0;

function updateContent(newIndex, direction) {
  const slideOutClass =
    direction === "right" ? "slide-out-left" : "slide-out-right";
  const slideInClass =
    direction === "right" ? "slide-in-right" : "slide-in-left";

  dynamicContent.classList.add(slideOutClass);

  setTimeout(() => {
    currentIndex = newIndex;
    dynamicContent.innerHTML = contentArray[currentIndex];

    dynamicContent.classList.remove(slideOutClass);

    dynamicContent.classList.add(slideInClass);

    setTimeout(() => {
      dynamicContent.classList.remove(slideInClass);
    }, 300);
  }, 300);
}

leftArrow.addEventListener("click", () => {
  let newIndex =
    currentIndex === 0 ? contentArray.length - 1 : currentIndex - 1;
  updateContent(newIndex, "left");
});

rightArrow.addEventListener("click", () => {
  let newIndex =
    currentIndex === contentArray.length - 1 ? 0 : currentIndex + 1;
  updateContent(newIndex, "right");
});

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

document.getElementById("playIcon").addEventListener("click", function () {
  const videoURL = "https://www.youtube.com/embed/_qEG9X3G7q0";

  document.getElementById("youtubeVideo").src = videoURL;

  var myModal = new bootstrap.Modal(document.getElementById("videoModal"));
  myModal.show();
});

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

  dateRangeSelector.addEventListener("click", function () {
    if (datePickerContainer.style.display === "block") {
      datePickerContainer.style.display = "none";
    } else {
      datePickerContainer.style.display = "block";
    }
  });

  function calculateDays(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  }

  function formatDate(date) {
    const options = { month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  applyButton.addEventListener("click", function () {
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    if (startDate && endDate) {
      const daysCount = calculateDays(startDate, endDate);
      daysCountSpan.textContent = `${daysCount} Days`;
      dateRangeSpan.textContent = `${formatDate(startDate)} - ${formatDate(
        endDate
      )}`;
      datePickerContainer.style.display = "none";
    }
  });
});

const today = new Date().toISOString().split("T")[0];

document.getElementById("date-input").value = today;
