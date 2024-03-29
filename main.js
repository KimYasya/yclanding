let stagesCards = document.querySelectorAll(".stages__item"),
  stagesLeftBtn = document.querySelector(".stages__left-btn"),
  stagesRightBtn = document.querySelector(".stages__right-btn"),
  stagesDontsElements = document.querySelectorAll(".stages__dots svg"),
  currentStagesCard = 0;
function resetStagesClass() {
  stagesCards.forEach((e) => e.classList.remove("stages__item-active")),
    stagesDontsElements.forEach((e) =>
      e.classList.remove("stages__dots-active")
    );
}
function activeStagesClass(e) {
  stagesCards[e].classList.add("stages__item-active"),
    stagesDontsElements[e].classList.add("stages__dots-active"),
    (stagesLeftBtn.disabled = 0 === e),
    (stagesRightBtn.disabled = 4 === e);
}
stagesDontsElements.forEach((e, t) =>
  e.addEventListener("click", function () {
    resetStagesClass(), activeStagesClass(t), (currentStagesCard = t);
  })
),
  stagesLeftBtn.addEventListener("click", function () {
    currentStagesCard--,
      resetStagesClass(),
      activeStagesClass(currentStagesCard);
  }),
  stagesRightBtn.addEventListener("click", function () {
    currentStagesCard++,
      resetStagesClass(),
      activeStagesClass(currentStagesCard);
  });
let membersLeftBtn = document.querySelector("#members__leftBtn"),
  membersRightBtn = document.querySelector("#members__rightBtn"),
  membersCurrentSlideElement = document.querySelector("#members__currentSlide"),
  membersTotalSlideElement = document.querySelector("#members__totalSlide"),
  membersSlideElements = document.querySelectorAll(".members__main-card"),
  membersCurrentSlide = 0,
  membersTotalSlide = membersSlideElements.length,
  slidesPerView = window.innerWidth <= 1200 ? 1 : 3;
function updateSlides() {
  membersSlideElements.forEach((e) => (e.style.display = "none"));
  for (
    let e = membersCurrentSlide;
    e < membersCurrentSlide + slidesPerView;
    e++
  ) {
    membersSlideElements[e % membersTotalSlide].style.display = "block";
  }
}
function updateCurrentSlide() {
  membersCurrentSlideElement.innerHTML = membersCurrentSlide + 1;
}
(membersTotalSlideElement.innerHTML = membersTotalSlide),
  membersLeftBtn.addEventListener("click", function () {
    (membersCurrentSlide =
      (membersCurrentSlide - slidesPerView + membersTotalSlide) %
      membersTotalSlide),
      updateCurrentSlide(),
      updateSlides();
  }),
  membersRightBtn.addEventListener("click", function () {
    (membersCurrentSlide =
      (membersCurrentSlide + slidesPerView) % membersTotalSlide),
      updateCurrentSlide(),
      updateSlides();
  }),
  setInterval(function () {
    (membersCurrentSlide =
      (membersCurrentSlide + slidesPerView) % membersTotalSlide),
      updateCurrentSlide(),
      updateSlides();
  }, 4e3),
  document.addEventListener("DOMContentLoaded", function () {
    updateSlides(), updateCurrentSlide();
  }),
  window.addEventListener("resize", function () {
    (slidesPerView = window.innerWidth <= 1200 ? 1 : 3),
      (membersCurrentSlide = 0),
      updateSlides(),
      updateCurrentSlide();
  });
