function productSlider() {
  const productSlider = document.querySelector(".product-slider");
  const sliderFront = productSlider.querySelector(".slider-front");
  const frontImage = productSlider.querySelector(".slider-front__image");
  const sliderBottom = productSlider.querySelector(".slider-bottom");
  const fullProductSlider = document.querySelector(".full-product-slider");

  sliderFront.addEventListener("click", () => {
    const cloneSlider = productSlider.cloneNode(true);
    const closeButton = document.createElement("div");
    closeButton.classList.add("close-button", "close-slider");
    const line1 = document.createElement("div");
    const line2 = document.createElement("div");
    line1.classList.add("line");
    line2.classList.add("line");
    closeButton.append(line1, line2);
    cloneSlider.classList.add("product-slider__full");
    fullProductSlider.firstElementChild.append(closeButton, cloneSlider);
    fullProductSlider.classList.add("full-product-slider__open");

    cloneSlider.addEventListener("click", (event) => {
      const clonedFrontImg = cloneSlider.querySelector(".slider-front__image");
      const clonedImgBottom = event.target.closest(".slider-bottom__img-container");
      if (clonedImgBottom) {
        const clonedImgSrc = clonedImgBottom.firstElementChild.getAttribute("src");
        clonedFrontImg.setAttribute("src", clonedImgSrc);
      }
    });

    closeButton.addEventListener("click", () => {
      fullProductSlider.firstElementChild.innerHTML = "";
      fullProductSlider.classList.remove("full-product-slider__open");
    });
  });

  sliderBottom.addEventListener("click", (event) => {
    const clickedElement = event.target.closest(".slider-bottom__img-container");
    if (clickedElement || event.target.tagName === "IMG") {
      const clickedImgSrc = clickedElement.firstElementChild.getAttribute("src");
      if (clickedImgSrc) frontImage.setAttribute("src", clickedImgSrc);
    }
  });
  
  fullProductSlider.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target === fullProductSlider.closest(".full-product-slider")) {
      fullProductSlider.firstElementChild.innerHTML = "";
      fullProductSlider.classList.remove("full-product-slider__open");
    }
  });
}

productSlider();
