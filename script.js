var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

function servButton() {
  const serv = document.querySelectorAll(".next-show");
  const btnSrv = document.querySelector(".srvc-btn");

  btnSrv.addEventListener("click", () => {
    serv.forEach((item) => {
      item.classList.toggle("next-open-show");
    });
    if (btnSrv.textContent === "Show More") {
      btnSrv.textContent = "Show Less";
    } else {
      btnSrv.textContent = "Show More";
    }
  });
}

servButton();
