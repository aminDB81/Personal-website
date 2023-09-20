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
