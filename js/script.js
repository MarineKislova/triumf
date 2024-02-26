window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  console.log("DOM fully loaded and parsed");

  //burger menu

  const shownMenu = document.querySelector("[data-openMenu]");
  const parentMenu = document.querySelector(".header__burger-menu");
  const closeMenu = document.querySelector("[data-closeMenu]");

  function showMenu() {
    parentMenu.style.display = "block";
  }
  function hideMenu() {
    parentMenu.style.display = "none";
  }

  shownMenu.addEventListener("click", showMenu);
  closeMenu.addEventListener("click", hideMenu);

  parentMenu.addEventListener("click", (e) => {
    if (e.target === parentMenu) {
      hideMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideMenu();
    }
  });

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

  //   modal-request
  const showModalRequest = document.querySelectorAll("[data-openrequestform]");
  const hideModalRequest = document.querySelectorAll("[data-closerequestform]");
  const modalRequest = document.querySelector(".modal-request");

  function openModalRequest() {
    modalRequest.style.display = "block";
  }

  function closeModalRequest() {
    modalRequest.style.display = "none";
  }

  showModalRequest.forEach((btn) => {
    btn.addEventListener("click", openModalRequest);
  });

  hideModalRequest.forEach((btn) => {
    btn.addEventListener("click", closeModalRequest);
  });

  modalRequest.addEventListener("click", (e) => {
    if (e.target === modalRequest) {
      closeModalRequest();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModalRequest();
    }
  });

  //catalog cards

  class CatalogCards {
    constructor(src, alt, id, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.id = id;
      this.parentCard = document.querySelector(parentSelector);
    }

    renderCatalog() {
      const imagesCatalog = document.createElement("div");

      imagesCatalog.innerHTML = `

      <div class="catalog__content_image" id="${this.id}">
      <img src="${this.src}" alt="${this.alt}"" />
      
      `;
      this.parentCard.append(imagesCatalog);
    }
  }

  //visor cards
  new CatalogCards(
    "img/catalog/visors/visors_1.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/visors/visors_2.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/visors/visors_3.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/visors/visors_4.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/visors/visors_5.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/visors/visors_6.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/visors/visors_7.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/visors/visors_8.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/visors/visors_9.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/visors/visors_10.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/visors/visors_11.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/visors/visors_12.png",
    "visor",
    "visor",
    "#visor .catalog__content_body"
  ).renderCatalog();

  //canopy cards

  new CatalogCards(
    "img/catalog/canopy/canopy_1.png",
    "canopy",
    "#canopy",
    "#canopy .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/canopy/canopy_2.png",
    "canopy",
    "#canopy",
    "#canopy .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/canopy/canopy_3.png",
    "canopy",
    "#canopy",
    "#canopy .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/canopy/canopy_4.png",
    "canopy",
    "#canopy",
    "#canopy .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/canopy/canopy_5.png",
    "canopy",
    "#canopy",
    "#canopy .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/canopy/canopy_6.png",
    "canopy",
    "#canopy",
    "#canopy .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/canopy/canopy_7.png",
    "canopy",
    "#canopy",
    "#canopy .catalog__content_body"
  ).renderCatalog();

  //gates cards
  new CatalogCards(
    "img/catalog/gates/gates-1.png",
    "gates",
    "#gates",
    "#gates .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/gates/gates-2.png",
    "gates",
    "#gates",
    "#gates .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/gates/gates-3.png",
    "gates",
    "#gates",
    "#gates .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/gates/gates-4.png",
    "gates",
    "#gates",
    "#gates .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/gates/gates-5.png",
    "gates",
    "#gates",
    "#gates .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/gates/gates-6.png",
    "gates",
    "#gates",
    "#gates .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/gates/gates-7.png",
    "gates",
    "#gates",
    "#gates .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/gates/gates-8.png",
    "gates",
    "#gates",
    "#gates .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/gates/gates-9.png",
    "gates",
    "#gates",
    "#gates .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/gates/gates-10.png",
    "gates",
    "#gates",
    "#gates .catalog__content_body"
  ).renderCatalog();

  //alcove cards
  new CatalogCards(
    "img/catalog/alcove/alcove_1.png",
    "alcove",
    "#alcove",
    "#alcove .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/alcove/alcove_2.png",
    "alcove",
    "#alcove",
    "#alcove .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/alcove/alcove_3.png",
    "alcove",
    "#alcove",
    "#alcove .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/alcove/alcove_4.png",
    "alcove",
    "#alcove",
    "#alcove .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/alcove/alcove_5.png",
    "alcove",
    "#alcove",
    "#alcove .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/alcove/alcove_6.png",
    "alcove",
    "#alcove",
    "#alcove .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/alcove/alcove_7.png",
    "alcove",
    "#alcove",
    "#alcove .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/alcove/alcove_8.png",
    "alcove",
    "#alcove",
    "#alcove .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/alcove/alcove_9.png",
    "alcove",
    "#alcove",
    "#alcove .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/alcove/alcove_10.png",
    "alcove",
    "#alcove",
    "#alcove .catalog__content_body"
  ).renderCatalog();

  //barbecues cards
  new CatalogCards(
    "img/catalog/barbecues/barbecues_1.png",
    "barbecues",
    "#barbecues",
    "#barbecues .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/barbecues/barbecues_2.png",
    "barbecues",
    "#barbecues",
    "#barbecues .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/barbecues/barbecues_3.png",
    "barbecues",
    "#barbecues",
    "#barbecues .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/barbecues/barbecues_4.png",
    "barbecues",
    "#barbecues",
    "#barbecues .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/barbecues/barbecues_5.png",
    "barbecues",
    "#barbecues",
    "#barbecues .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/barbecues/barbecues_6.png",
    "barbecues",
    "#barbecues",
    "#barbecues .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/barbecues/barbecues_7.png",
    "barbecues",
    "#barbecues",
    "#barbecues .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/barbecues/barbecues_8.png",
    "barbecues",
    "#barbecues",
    "#barbecues .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/barbecues/barbecues_9.png",
    "barbecues",
    "#barbecues",
    "#barbecues .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/barbecues/barbecues_10.png",
    "barbecues",
    "#barbecues",
    "#barbecues .catalog__content_body"
  ).renderCatalog();

  //lattice cards
  new CatalogCards(
    "img/catalog/lattice/lattice_1.png",
    "lattice",
    "#lattice",
    "#lattice .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/lattice/lattice_2.png",
    "lattice",
    "#lattice",
    "#lattice .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/lattice/lattice_3.png",
    "lattice",
    "#lattice",
    "#lattice .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/lattice/lattice_4.png",
    "lattice",
    "#lattice",
    "#lattice .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/lattice/lattice_5.png",
    "lattice",
    "#lattice",
    "#lattice .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/lattice/lattice_6.png",
    "lattice",
    "#lattice",
    "#lattice .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/lattice/lattice_7.png",
    "lattice",
    "#lattice",
    "#lattice .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/lattice/lattice_1.png",
    "lattice",
    "#lattice",
    "#lattice .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/lattice/lattice_9.png",
    "lattice",
    "#lattice",
    "#lattice .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/lattice/lattice_10.png",
    "lattice",
    "#lattice",
    "#lattice .catalog__content_body"
  ).renderCatalog();

  //stairs cards
  new CatalogCards(
    "img/catalog/stairs/stairs_1.png",
    "stairs",
    "#stairs",
    "#stairs .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/stairs/stairs_2.png",
    "stairs",
    "#stairs",
    "#stairs .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/stairs/stairs_3.png",
    "stairs",
    "#stairs",
    "#stairs .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/stairs/stairs_4.png",
    "stairs",
    "#stairs",
    "#stairs .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/stairs/stairs_5.png",
    "stairs",
    "#stairs",
    "#stairs .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/stairs/stairs_6.png",
    "stairs",
    "#stairs",
    "#stairs .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/stairs/stairs_7.png",
    "stairs",
    "#stairs",
    "#stairs .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/stairs/stairs_8.png",
    "stairs",
    "#stairs",
    "#stairs .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/stairs/stairs_9.png",
    "stairs",
    "#stairs",
    "#stairs .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/stairs/stairs_10.png",
    "stairs",
    "#stairs",
    "#stairs .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/stairs/stairs_11.png",
    "stairs",
    "#stairs",
    "#stairs .catalog__content_body"
  ).renderCatalog();

  //railing cards
  new CatalogCards(
    "img/catalog/railing/railing_1.png",
    "railing",
    "#railing",
    "#railing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/railing/railing_2.png",
    "railing",
    "#railing",
    "#railing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/railing/railing_3.png",
    "railing",
    "#railing",
    "#railing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/railing/railing_4.png",
    "railing",
    "#railing",
    "#railing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/railing/railing_5.png",
    "railing",
    "#railing",
    "#railing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/railing/railing_6.png",
    "railing",
    "#railing",
    "#railing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/railing/railing_7.png",
    "railing",
    "#railing",
    "#railing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/railing/railing_8.png",
    "railing",
    "#railing",
    "#railing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/railing/railing_9.png",
    "railing",
    "#railing",
    "#railing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/railing/railing_10.png",
    "railing",
    "#railing",
    "#railing .catalog__content_body"
  ).renderCatalog();

  //fencing cards
  new CatalogCards(
    "img/catalog/fencing/fencing_1.png",
    "fencing",
    "#fencing",
    "#fencing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/fencing/fencing_2.png",
    "fencing",
    "#fencing",
    "#fencing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/fencing/fencing_3.png",
    "fencing",
    "#fencing",
    "#fencing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/fencing/fencing_4.png",
    "fencing",
    "#fencing",
    "#fencing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/fencing/fencing_5.png",
    "fencing",
    "#fencing",
    "#fencing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/fencing/fencing_6.png",
    "fencing",
    "#fencing",
    "#fencing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/fencing/fencing_7.png",
    "fencing",
    "#fencing",
    "#fencing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/fencing/fencing_8.png",
    "fencing",
    "#fencing",
    "#fencing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/fencing/fencing_9.png",
    "fencing",
    "#fencing",
    "#fencing .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/fencing/fencing_10.png",
    "fencing",
    "#fencing",
    "#fencing .catalog__content_body"
  ).renderCatalog();

  //other cards
  new CatalogCards(
    "img/catalog/other/other_1.png",
    "other",
    "#other",
    "#other .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/other/other_2.png",
    "other",
    "#other",
    "#other .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/other/other_3.png",
    "other",
    "#other",
    "#other .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/other/other_4.png",
    "other",
    "#other",
    "#other .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/other/other_5.png",
    "other",
    "#other",
    "#other .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/other/other_6.png",
    "other",
    "#other",
    "#other .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/other/other_7.png",
    "other",
    "#other",
    "#other .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/other/other_8.png",
    "other",
    "#other",
    "#other .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/other/other_9.png",
    "other",
    "#other",
    "#other .catalog__content_body"
  ).renderCatalog();
  new CatalogCards(
    "img/catalog/other/other_10.png",
    "other",
    "#other",
    "#other .catalog__content_body"
  ).renderCatalog();
});
