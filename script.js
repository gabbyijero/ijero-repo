function toggleDropdown() {
    const menu = document.getElementById('accountMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function goToCart() {
    alert("Navigating to cart...");
}

function search() {
    const query = document.getElementById('searchBar').value;
    alert("Searching for: " + query);
}

// const slides = document.querySelectorAll('.banner-slide');
// const dots = document.querySelectorAll('.dot');
// let currentSlide = 0;
// let slideInterval = setInterval(nextSlide, 3000);

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         if (i === index) {
//             slide.classList.add('active');
//         } 
//         else {
//             slide.classList.remove('active');
//         }
//         dots[i].classList.toggle('active', i === index);
//       });
//     }

//     function nextSlide() {
//       currentSlide = (currentSlide + 1) % slides.length;
//       showSlide(currentSlide);
//     }

//     function prevSlide() {
//       currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//       showSlide(currentSlide);
//     }

//     dots.forEach((dot, i) => {
//       dot.addEventListener('click', () => {
//         currentSlide = i;
//         showSlide(currentSlide);
//         resetInterval();
//       });
//     });

//     function resetInterval() {
//       clearInterval(slideInterval);
//       slideInterval = setInterval(nextSlide, 3000);
//     }

//     showSlide(currentSlide);