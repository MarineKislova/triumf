window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  console.log("DOM fully loaded and parsed");

  //   modalForm

  const showModalForm = document.querySelectorAll("[data-openform]");
  const hideModalForm = document.querySelectorAll("[data-closeform]");
  const modalForm = document.querySelector(".modal-form");

  function openModalForm() {
    modalForm.style.display = "block";
  }

  function closeModalForm() {
    modalForm.style.display = "none";
  }

  showModalForm.forEach((btn) => {
    btn.addEventListener("click", openModalForm);
  });

  hideModalForm.forEach((btn) => {
    btn.addEventListener("click", closeModalForm);
  });

  modalForm.addEventListener("click", (e) => {
    if (e.target === modalForm) {
      closeModalForm();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModalForm();
    }
  });

  //catalog
  const tablinksCatalog = document.querySelectorAll(".tablink");
  const tabContentCatalog = document.querySelectorAll(".catalog__content");
  const parentCatalog = document.querySelector(".catalog__menu");

  function hideCatalog() {
    tabContentCatalog.forEach((item) => {
      item.classList.remove("show");
      item.classList.add("hide");
    });
    tablinksCatalog.forEach((item) => {
      item.classList.remove("tablink_active");
    });
  }

  function showCatalog(i = 0) {
    tabContentCatalog[i].classList.remove("hide");
    tabContentCatalog[i].classList.add("show");
    tablinksCatalog[i].classList.add("tablink_active");
  }

  hideCatalog();
  showCatalog();

  parentCatalog.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tablink")) {
      tablinksCatalog.forEach((item, i) => {
        if (e.target === item) {
          hideCatalog();
          showCatalog(i);
        }
      });
    }
  });
});
