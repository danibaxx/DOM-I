const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
    logo.setAttribute('src', siteContent["nav"]["img-src"])

// Images set
let ctaImg = document.getElementById('cta-img');
    ctaImg.src= siteContent['cta']['img-src'];

let midImg = document.getElementById('middle-img');
    midImg.src= siteContent['main-content']['middle-img-src'];

// set h1 within CTA
let firstHOne = document.querySelector('h1');
    firstHOne.textContent = siteContent['cta']['h1'];
    // console.log(firstHOne);

// button in CTA
let topBtn = document.querySelector('button');
    topBtn.textContent = siteContent['cta']['button'];
    // console.log(topBtn);

// nav items
let navItems = document.querySelectorAll("nav a");
    console.log(navItems);
navItems.forEach((nav, i) => {
    nav.innerHTML = siteContent.nav[`nav-item-${i + 1}`];
    });

// nav style
navItems.forEach((nav, i) => {
  nav.style.color = "green";
  console.log(navItems);
});

// 2 new nav items
// let newNavItems = document.createElement('nav a');
//   newNavItems.innerHTML = 'Hi';
//   document.body.prepend(newNavItems);



// main content p's
let mainContent = document.getElementsByClassName('main-content')[0];

    mainContent.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['features-h4'];

    mainContent.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['features-content'];

    mainContent.getElementsByTagName('h4')[1].innerHTML = siteContent['main-content']['about-h4'];

    mainContent.getElementsByTagName('p')[1].innerHTML = siteContent['main-content']['about-content'];

    mainContent.getElementsByTagName('h4')[2].innerHTML = siteContent['main-content']['services-h4'];

    mainContent.getElementsByTagName('p')[2].innerHTML = siteContent['main-content']['services-content'];

    mainContent.getElementsByTagName('h4')[3].innerHTML = siteContent['main-content']['product-h4'];

    mainContent.getElementsByTagName('p')[3].innerHTML = siteContent['main-content']['product-content'];

    mainContent.getElementsByTagName('h4')[4].innerHTML = siteContent['main-content']['vision-h4'];

    mainContent.getElementsByTagName('p')[4].innerHTML = siteContent['main-content']['vision-content'];

// contact info
let contactInfo = document.getElementsByClassName('contact')[0];

    contactInfo.getElementsByTagName('h4')[0].innerHTML = siteContent['contact']['contact-h4'];

    contactInfo.getElementsByTagName('p')[0].innerHTML = siteContent['contact']['address'];

    contactInfo.getElementsByTagName('p')[1].innerHTML = siteContent['contact']['phone'];

    contactInfo.getElementsByTagName('p')[2].innerHTML = siteContent['contact']['email'];


// footer
let ftr = document.querySelector('footer');
    ftr.textContent = siteContent['footer']['copyright'];
