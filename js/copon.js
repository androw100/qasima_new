// بيانات الفئات والكوبونات
var all_categories = [];
var all_coupons = [];
var filtered_coupons = [];

// عرض بيانات الفئات
function displayCategories() {
  var box = "";
  if (Array.isArray(all_categories)) {
    for (var i = 0; i < all_categories.length; i++) {
      box += `
      
        <div class="item" data-id="${all_categories[i].id}" data-name="${all_categories[i].name}">
          <img id="cat-img" src="${all_categories[i].photo}" alt="${all_categories[i].name}">
          <p>${all_categories[i].name}</p>
        </div>
      `;
    }
  } else {
    console.error("Expected an array for all_categories");
  }
  console.log("HTML to display:", box);
  var rowDataElement = document.getElementById("row_data");
  if (rowDataElement) {
    rowDataElement.innerHTML = box;
    initializeOwlCarousel();
    addEventListeners();
  } else {
    console.error('Element with id "row_data" not found');
  }
}

// إضافة مستمعات الأحداث للعناصر
function addEventListeners() {
  document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", function () {
      var categoryId = this.getAttribute("data-id");
      fetchCouponsByCategory(categoryId);
    });
  });
}

// جلب بيانات الفئات
async function fetchCategories() {
  try {
    var response = await fetch("http://localhost:3001/api/categories");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    var data = await response.json();
    console.log("Categories fetched:", data);
    if (data && data.data) {
      all_categories = data.data;
      displayCategories();
    } else {
      console.error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

// جلب بيانات الكوبونات لجميع الفئات
async function fetchCoupons() {
  try {
    var response = await fetch("http://localhost:3001/api/home/0");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    var data = await response.json();
    console.log("Coupons fetched:", data);
    if (data && data.data) {
      all_coupons = data.data;
      displayCoupons(all_coupons); // عرض جميع الكوبونات مبدئيًا
    } else {
      console.error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching coupons:", error);
  }
}

// جلب بيانات الكوبونات حسب الفئة
async function fetchCouponsByCategory(categoryId) {
  try {
    var response = await fetch(`http://localhost:3001/api/home/${categoryId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    var data = await response.json();
    console.log(`Coupons fetched for category ${categoryId}:`, data);
    if (data && data.data) {
      displayCoupons(data.data);
    } else {
      console.error("No data found in response");
    }
  } catch (error) {
    console.error(`Error fetching coupons for category ${categoryId}:`, error);
  }
}

// عرض بيانات الكوبونات
function displayCoupons(coupons) {
  var box = "";
  if (Array.isArray(coupons)) {
    for (var i = 0; i < coupons.length; i++) {
      box += `

<div class="col-12 mt-5">
        <div class="copon-card d-flex justify-content-between align-items-center">
            <div class="name-copon d-flex">
                <div class="copon-img">
                    <img class="img-fluid" src="${coupons[i].image}" alt="${coupons[i].title}">
                </div>
                <div class="main-name-copon">
                    <h3>${coupons[i].title}</h3>
                    <p>${coupons[i].discount_percent}</p>
                </div>
            </div>
            <div class="option p-3 mt-3">
                <ul class="d-flex text-center align-items-center justify-content-center">
                    <li class="text-center no no1">
                        <a class="m-1" href="#">
                            <i class="fa-regular fa-heart"></i>
                        </a>
                    </li>
                    <li class="text-center no no2">
                        <a class="m-1" href="#">
                          <i class="fa-solid fa-share-nodes"></i>
                        </a>
                    </li>
                    
                    <li class="text-center">
                        <button id="toggle-button-${i}" onclick="toggleDetails(${i})">
                            <img id="toggle-icon-${i}" src="./images/down.svg" alt="عرض المزيد">
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div id="details-${i}" class="details">
         <div class="container text-center">
            <p class="pt-3">${coupons[i].description}</p>
            <div class="container text-center">
            <div class="row align-items-center justify-content-center">
    <div class="col-5 m-3  copy">
     <img class="img-fluid m-3" src="./images/teckit.svg" alt="">
انسخ الكود من التطبيق    </div>
   
    <div class="col-5 m-3 copy ">
     <i class="fa-solid fa-cart-shopping m-3"></i>
     تسوق الان
    </div>
  </div>
</div>
        </div>
         </div>
    </div>
      `;
    }
  } else {
    console.error("Expected an array for coupons");
  }
  console.log("HTML to display:", box);
  var rowDataElement = document.getElementById("category-container");
  if (rowDataElement) {
    rowDataElement.innerHTML = box;
  } else {
    console.error('Element with id "category-container" not found');
  }
}
function toggleDetails(index) {
  var details = document.getElementById(`details-${index}`);
  var icon = document.getElementById(`toggle-icon-${index}`);
  if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
      icon.src = "./images/up.svg"; // استبدال السهم إلى أعلى
      icon.alt = "عرض أقل";
  } else {
      details.style.display = "none";
      icon.src = "./images/down.svg"; // استبدال السهم إلى أسفل
      icon.alt = "عرض المزيد";
  }
}



// تهيئة Owl Carousel
function initializeOwlCarousel() {
  $("#row_data").owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 6 },
    },
  });
}

// فتح القائمة الجانبية
function openNav() {
  var mySidenav = document.getElementById("mySidenav");
  var main = document.getElementById("main");
  if (mySidenav && main) {
    mySidenav.style.width = "100%";
    main.style.marginLeft = "250px";
  } else {
    console.error('Elements with id "mySidenav" or "main" not found');
  }
}

// غلق القائمة الجانبية
function closeNav() {
  var mySidenav = document.getElementById("mySidenav");
  var main = document.getElementById("main");
  if (mySidenav && main) {
    mySidenav.style.width = "0";
    main.style.marginLeft = "0";
  } else {
    console.error('Elements with id "mySidenav" or "main" not found');
  }
}

// تهيئة AOS
AOS.init();

// عرض المزيد من العناصر
document
  .getElementById("show-more-btn")
  ?.addEventListener("click", function () {
    let hiddenCards = document.querySelectorAll(".hidden-card");
    hiddenCards.forEach(function (card) {
      card.classList.remove("hidden-card");
    });
    this.style.display = "none";
  });

// استدعاء دوال الجلب
fetchCategories();
fetchCoupons();

function toggleCard() {
  const card = document.querySelector('.card');
  card.classList.toggle('open');
}

