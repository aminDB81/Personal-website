const typed = new Typed(".auto-type", {
  strings: ["برنامه نویس فرانت اند هستم", "طراح سایت هستم"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});

const scrollButton = document.getElementById("scrollButton");
const scrollTarget = document.getElementById("scrollTarget");
scrollButton.addEventListener("click", () => {
  scrollTarget.scrollIntoView({ behavior: "smooth" });
});
// container
const targetElement = document.getElementById("conter-area");
// Create the intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // If the target element is in view
    if (entry.isIntersecting) {
      let valueDisplays = document.querySelectorAll(".num");
      let interval = 7000;
      valueDisplays.forEach((valueDisplays) => {
        let statrtValue = 0;
        let endValue = parseInt(valueDisplays.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          statrtValue += 1;
          valueDisplays.textContent = statrtValue;
          if (statrtValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
      // Stop observing once the element is in view
      observer.unobserve(targetElement);
    }
  });
});
// Start observing the target element
observer.observe(targetElement);
