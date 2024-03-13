
const renderList = (data) => {

  const coursesList = document.getElementsByClassName("courses__list")[0];
  coursesList.innerHTML = "";

  data.forEach((item) => {
    let li = document.createElement("li");
    let productCard = document.createElement("div");
    let productCardInner = document.createElement("div");
    let productCardBox = document.createElement("div");
    let productCardLabel = document.createElement("span");
    let productCardHit = document.createElement("span");
    let productCardHitText = document.createElement("span");
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let productCardTitle = document.createElement("h2");
    let productCardImg = document.createElement("img");
    let productCardDate = document.createElement("span");
    let productCardShadowLink = document.createElement("a");
    
    li.classList.add("courses__item");
    productCard.classList.add("product-card");
    productCard.classList.add(item.classes[0]);
    productCardInner.classList.add("product-card__inner");
    productCardBox.classList.add("product-card__box");
    productCardLabel.classList.add("product-card__label");
    productCardLabel.textContent = item.label;
    productCardHit.classList.add("product-card__hit");
    productCardHitText.classList.add("product-card__hit-text");
    productCardHitText.textContent = "Хит продаж"
    svg.setAttribute("height", "12");
    svg.setAttribute("width", "12");
    svg.ariaHidden = "true";
    path.setAttribute("d", "M10 5H7.149l.867-5L1 7h2.851l-.867 5L10 5z");
    path.setAttribute("fill", "currentColor");
    svg.appendChild(path);
    productCardHit.append(svg);
    productCardHit.append(productCardHitText);
    productCardBox.append(productCardLabel);
    productCardTitle.classList.add("product-card__title");
    productCardTitle.textContent = item.title;
    productCardImg.classList.add("product-card__img");
    productCardImg.src = item.src;
    productCardImg.alt = item.alt;
    productCardImg.setAttribute("width", item.width);
    productCardImg.setAttribute("height", item.height);
    productCardDate.classList.add("product-card__date");
    productCardDate.textContent = item.date;
    productCardShadowLink.classList.add("product-card__shadow-link");
    productCardShadowLink.setAttribute("target", "_blank");
    productCardShadowLink.href = item.href;
    

    if (item.hit) {
      productCardBox.append(productCardHit);
    }
    productCardInner.append(productCardBox);
    productCardInner.append(productCardTitle);
    productCardInner.append(productCardImg);
    productCard.append(productCardInner);
    productCard.append(productCardDate);
    productCard.append(productCardShadowLink);
    li.append(productCard);
    coursesList.append(li);
  });

  coursesList.classList.add("is-active");
};

export { renderList };
