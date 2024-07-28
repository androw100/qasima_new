// var all_data = [];

// async function categories() {
//     try {
//         var response = await fetch('https://qasimahapp.com/api/categories');
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         var data = await response.json();
//         all_data = data.data;
//         display_data();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// function display_data() {
//     var box = '';
//     for (var i = 0; i < all_data.length; i++) {
//         box += `
//             <div class="col">
//                 <img src="${all_data[i].photo}" class="iiii" alt="${all_data[i].name}">
//             </div>
//         `;
//     }
//     document.getElementById('row_data').innerHTML = box;
// }

// categories();

// var all_data = [];

// async function categories() {
//     try {
//         var response = await fetch('https://cors-anywhere.herokuapp.com/https://qasimahapp.com/api/categories');
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         var data = await response.json();
//         all_data = data.data;
//         display_data();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// function display_data() {
//     var box = '';
//     for (var i = 0; i < all_data.length; i++) {
//         box += `
//             <div class="col">
//                 <img src="${all_data[i].photo}" class="iiii" alt="${all_data[i].name}">
//             </div>
//         `;
//     }
//     document.getElementById('row_data').innerHTML = box;
// }

// categories();

// var all_data = [];

// async function categories() {
//     try {
//         var response = await fetch('https://qasimahapp.com/api/categories');
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         var data = await response.json();
//         all_data = data;
//         display_data();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// function display_data() {
//     var box = '';
//     for (var i = 0; i < all_data.length; i++) {
//         box += `
//             <div class="col">
//                 <img src="${all_data[i].photo}" class="iiii" alt="${all_data[i].name}">
//             </div>
//         `;
//     }
//     document.getElementById('row_data').innerHTML = box;
// }

// categories();

var all_data = [];

async function categories() {
    try {
        var response = await fetch('http://localhost:3000/api/categories');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        var data = await response.json();
        console.log('Data fetched:', data); // تحقق من البيانات في وحدة التحكم
        all_data = data.data;
        display_data();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function display_data() {
    var box = '';
    for (var i = 0; i < all_data.length; i++) {
        box += `
            <div class="col">
                <img src="${all_data[i].photo}" class="iiii" alt="${all_data[i].name}">
                <p>${all_data[i].name}</p>
            </div>
        `;
    }
    console.log('HTML to display:', box); // تحقق من الكود HTML في وحدة التحكم
    document.getElementById('row_data').innerHTML = box;
}

categories();




// // var all_data = [];

// // async function categories() {
// //     try {
// //         var response = await fetch('https://qasimahapp.com/api/categories');
// //         if (!response.ok) {
// //             throw new Error(`HTTP error! status: ${response.status}`);
// //         }
// //         var data = await response.json();
// //         console.log('Data received:', data); // عرض البيانات المستلمة في وحدة التحكم
// //         all_data = data;
// //         display_data();
// //     } catch (error) {
// //         console.error('Error fetching data:', error);
// //     }
// // }

// // function display_data() {
// //     var box = '';
// //     for (var i = 0; i < all_data.length; i++) {
// //         box += `
// //             <div class="col">
// //                 <img src="${all_data[i].photo}" class="iiii" alt="">
// //             </div>
// //         `;
// //     }
// //     document.getElementById('row_data').innerHTML = box;
// // }

// // all_categories();






// // function openNav() {
// //     document.getElementById("mySidenav").style.width = "100%";
// //     document.getElementById("main").style.marginLeft = "250px";
// // }

// // function closeNav() {
// //     document.getElementById("mySidenav").style.width = "0";
// //     document.getElementById("main").style.marginLeft = "0";
// // }

// // AOS.init();

// // document.getElementById('show-more-btn').addEventListener('click', function() {
// //     let hiddenCards = document.querySelectorAll('.hidden-card');
// //     hiddenCards.forEach(function(card) {
// //       card.classList.remove('hidden-card');
// //     });
// //     this.style.display = 'none';
// //   });


// //   fetch('https://qasimahapp.com/api/home/0')
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(err => console.error(err));




// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.getElementById('category-container');

//     fetch('https://qasimahapp.com/api/categories')
//         .then(response => response.json())
//         .then(data => {
//             if (data.value && data.data) {
//                 data.data.forEach(item => {
//                     const div = document.createElement('div');
//                     div.className = 'category';

//                     div.innerHTML = `
//                         <img src="${item.photo}" alt="${item.name}">
//                         <p>${item.name}</p>
//                     `;

//                     container.appendChild(div);
//                 });
//             } else {
//                 container.innerHTML = '<p>فشل في تحميل البيانات</p>';
//             }
//         })
//         .catch(error => {
//             console.error('حدث خطأ أثناء تحميل البيانات:', error);
//             container.innerHTML = '<p>فشل في تحميل البيانات</p>';
//         });
// });

