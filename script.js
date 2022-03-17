const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");

const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

const productButton = document.querySelector(".product-button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png"
      },
      {
        code: "darkblue",
        img: "./img/air2.png"
      }
    ]
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png"
      },
      {
        code: "green",
        img: "./img/jordan2.png"
      }
    ]
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png"
      },
      {
        code: "green",
        img: "./img/blazer2.png"
      }
    ]
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png"
      },
      {
        code: "lightgray",
        img: "./img/crater2.png"
      }
    ]
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png"
      },
      {
        code: "black",
        img: "./img/hippie2.png"
      }
    ]
  }
];

let chosenProduct = products[0];

let activeMenu = chosenProduct.title;

function initialActiveMenu() {
  if (activeMenu === menuItems[0].id) {
    menuItems[0].classList.add("active-menu");
  } else {
    menuItems[0].classList.remove("active-menu");
  }
}
initialActiveMenu();

menuItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * i}vw)`;

    // change the chose product
    chosenProduct = products[i];

    // change active menu variable
    activeMenu = chosenProduct.title;

    // change text of current product
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = `$${chosenProduct.price}`;
    currentProductImg.src = chosenProduct.colors[0].img;

    if (activeMenu === item.id) {
      menuItems.forEach((item) => item.classList.remove("active-menu"));
      item.classList.add("active-menu");
    } else {
      item.classList.remove("active-menu");
    }

    // change the color box for each product
    currentProductColors.forEach((color, i) => {
      color.style.backgroundColor = chosenProduct.colors[i].code;
    });
  });
});

currentProductColors.forEach((color, i) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[i].img;
  });
});

currentProductSizes.forEach((size, i) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
