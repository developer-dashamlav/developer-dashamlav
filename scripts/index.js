window.addEventListener('load', function () {
    // Code to run when the entire page is fully loaded
    console.log('Page has been fully loaded.');

    // GSAP goes here.
    gsap.to(".loader_text", {
        y: -150, 
        opacity: 0,
        skewY: -5,
        ease: 'power4.out',
        duration: 0.5, 
        delay: 2,
        stagger: 0.05
    });
    gsap.to("nav", {
        opacity: 1,
        y: 0,
        delay: 2.5,
        duration: 2,
        ease: "power4.out"
    });
    gsap.to(".hero_section", {
        opacity: 1,
        y: 0,
        delay: 3,
        duration: 2,
        ease: "power4.out"
    });


    // Locomotive scroll initilized here.
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
        const scroller = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            smoothMobile: 10,   // Adjust this value to make it faster on mobile
            lerp: 0.15,         // Adjust this value to make it faster
            touchMultiplier: 3
        });
    }

    // Add the Theme switching function here.
    function addThemeSwitchEventListener() {
        const themeSwitch = document.getElementById('theme_switch');
        const body = document.body;
        function loadThemeCSS(fileName) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = fileName;
            document.head.appendChild(link);
        }
        themeSwitch.addEventListener('click', function() {
            if (body.classList.contains('light_theme')) {
                body.classList.remove('light_theme');
                body.classList.add('dark_theme');
                body.style.backgroundColor = '#161616';
                console.log("bravo6 going dark!")
                loadThemeCSS('./styles/dark_theme.css');
            } else {
                body.classList.remove('dark_theme');
                body.classList.add('light_theme');
                body.style.backgroundColor = '#f5f5f5';
                console.log("Morning Sunshine...")
                loadThemeCSS('./styles/light_theme.css');
            }
        });
    }
    addThemeSwitchEventListener();

    // Change the title of hero section.
    // Array of strings to be used as replacements
    const titles = ['Social Media', 'Advertising', 'E-Commerce', 'Marketplace', 'Analytics'];

    // Function to update the element text every 2 seconds
    function updateTitle() {
    const titleElement = document.getElementById('hero_dynamic_title');
    let index = 0;
    setInterval(() => {
        titleElement.textContent = titles[index];
        index = (index + 1) % titles.length;
    }, 1000); // 2 seconds interval
    }
    updateTitle();

    if(this.document.getElementById("background")){
        const backgroundElement = document.getElementById('background_image');

        // Add a scroll event listener to the window
        window.addEventListener('scroll', function () {
          // Get the scroll position from the top of the window
          const scrollPosition = window.scrollY;
        
          // Get the height of the viewport
          const viewportHeight = window.innerHeight;
        
          // Check if the scroll position has reached 100vh
          if (scrollPosition >= viewportHeight) {
            // Blur the background once the scroll position reaches 100vh
            backgroundElement.style.filter = 'blur(10px)'; // You can adjust the blur value
          } else {
            // Remove the blur effect if the scroll position is less than 100vh
            backgroundElement.style.filter = 'none';
          }
        });

    }else{
        console.log("cannot find background!")
    }

    // Open and close the menu...
    const menuTriggers = document.querySelectorAll('.menu_trigger');
    const mobileMenu = document.querySelector('.mobile_menu');
    
    let isMenuOpen = false;
    
    menuTriggers.forEach(function (menuTrigger) {
        menuTrigger.addEventListener('click', function () {
        isMenuOpen = !isMenuOpen;
    
        if (isMenuOpen) {
            mobileMenu.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
        } else {
            mobileMenu.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
        }
        });
    });

    var logo = document.getElementById("background")
    var body_scroll_wrapper = this.document.getElementById("body_scroll")
    window.addEventListener('scroll', () => {
        if (body_scroll_wrapper.scrollY > 150) {
            console.log("applying the styles")
            logo.style.filter = 'blur(100px) saturate(100%)';
        } else {
            logo.style.filter = 'none';
        }
    });
    
});





// const loader = document.getElementById("loader")
// window.addEventListener('load', function() {
//     loader.classList.toggle = "close"
//     console.log("page loaded")
//     // loader.style.height = "0px";
//     loader.style.opacity = "0";
//     // loader.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
// })





// let isClipPathSet = false;

// function toggleMenu() {
//     const menuElement = document.querySelector('.menu');
//     const currentClipPath = menuElement.style.clipPath;
//     if (!currentClipPath || currentClipPath === 'circle(0% at 50% 50%)') {
//         menuElement.style.clipPath = 'circle(75% at 50% 50%)';
//     } else {
//         menuElement.style.clipPath = 'circle(0% at 50% 50%)';
//     }
// }

// window.addEventListener('resize', function() {
//     const menuElement = document.querySelector('.menu');
//     if (window.innerWidth <= 768) {
//         menuElement.style.clipPath = 'circle(0% at 50% 50%)';
//     } else {
//         menuElement.style.clipPath = 'circle(75% at 50% 50%)';
//     }
// });

// document.getElementById('menu_toggle_switch').addEventListener('click', toggleMenu);

// // Dynamically injecting thr content with JS.
// const accordionItems = document.querySelectorAll('.accordian_item');
// accordionItems.forEach((item) => {
//     item.addEventListener('click', () => {
//         // Toggle the 'open' class
//         item.classList.toggle('open');

//         // If the item is open, inject dynamic content
//         if (item.classList.contains('open')) {
//             const dynamicContent = document.createElement('div');
//             dynamicContent.innerHTML = `<ul>
//                     <li>
//                         <img src="./assets/1A.svg" alt="Product Image">
//                         <h4>Product Listing Optimization</h4>
//                     </li>
//                     <li>
//                         <img src="./assets/1B.svg" alt="Product Image">
//                         <h4>Inventory Management</h4>
//                     </li>
//                     <li>
//                         <img src="./assets/1C.svg" alt="Product Image">
//                         <h4>Competitive Analysis</h4>
//                     </li>
//                     <li>
//                         <img src="./assets/1D.svg" alt="Product Image">
//                         <h4>Pricing Strategies</h4>
//                     </li>
//                     <li>
//                         <img src="./assets/1E.svg" alt="Product Image">
//                         <h4>Review and Rating Management</h4>
//                     </li>
//                 </ul>`; // Add your content

//             // Append the dynamic content to the container
//             console.log("injecting the content")
//             item.querySelector('.accordian_item_container').appendChild(dynamicContent);
//         } else {
//             // Clear dynamic content if the item is closed
//             item.querySelector('.accordian_item_container').innerHTML = '';
//         }
//     });
// });

// const accordianItems = document.querySelectorAll('.accordian_item');
// const colors = ['#38662B', '#003200', '#005E00']; // Add your HEX color codes here
// let currentColorIndex = 0;

// accordianItems.forEach((accordianItem, index) => {
// let content = accordianItem.querySelector('ul');
// let contentHeight = content.scrollHeight;
// if (index !== 0) {
//     content.style.maxHeight = '0';
//     content.style.opacity = '0';
// } else {
//     accordianItem.classList.add('open');
// }

// accordianItem.addEventListener('click', function (event) {
//     event.stopPropagation();
//     if (content.style.maxHeight === '0px') {
//     accordianItems.forEach((item) => {
//         let itemContent = item.querySelector('ul');
//         itemContent.style.maxHeight = '0';
//         itemContent.style.opacity = '0';
//         item.classList.remove('open');
//     });
//     content.style.maxHeight = contentHeight + 'px';
//     content.style.opacity = '1';
//     accordianItem.classList.add('open');
//     // document.body.style.backgroundColor = colors[index];
//     } else {
//     content.style.maxHeight = '0';
//     content.style.opacity = '0';
//     accordianItem.classList.remove('open');
//     // document.body.style.backgroundColor = colors[index];
//     }
// });
// });

// document.addEventListener('click', function (event) {
// const isClickInside = Array.from(accordianItems).some(item => item.contains(event.target));
// if (!isClickInside) {
//     document.body.style.backgroundColor = '#161616';
// }
// });


// Array of strings to be used as replacements
// const titles = ['Social Media', 'Advertising', 'E-Commerce', 'Marketplace', 'Content', 'SEO', 'Analytics'];

// // Function to update the element text every 2 seconds
// function updateTitle() {
// const titleElement = document.getElementById('hero_dynamic_title');
// let index = 0;
// setInterval(() => {
//     titleElement.textContent = titles[index];
//     index = (index + 1) % titles.length;
// }, 1000); // 2 seconds interval
// }

// Call the function to initiate the text update
// updateTitle();

// const logo = document.getElementById('logo_background');