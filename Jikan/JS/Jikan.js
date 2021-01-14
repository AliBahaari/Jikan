// Modal

var currentModal, behindLayer;

function openModal(Modal) {
	currentModal = document.getElementById(Modal);
	currentModal.style.display = "block";
	behindLayer = document.createElement('div');
	behindLayer.id = 'Layer';
	behindLayer.style.cssText = `
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		position: fixed;
		opacity: 0.6;
		z-index: 7500;
		background: #000;
	`;
	document.body.appendChild(behindLayer);
	behindLayer.onclick = function() {
		currentModal.style.display = "none";
		document.body.removeChild(behindLayer);
	};
}

function closeModal(Modal) {
	currentModal = document.getElementById(Modal);
	currentModal.style.display = "none";
	document.body.removeChild(behindLayer);
}

// Navbar

function toggleNavbar(navbarSelector) {
    var navbarTarget = document.getElementById(navbarSelector);
    if (navbarTarget.style.display == "block") {
        navbarTarget.style.display = "none";
    } else {
        navbarTarget.style.display = "block";
    }
}

// Slider

var totalSlides,
    totalDots,
    slideIndex = 1;

function sliderConfig(sliderItem = 'sldItem', sliderDots = '.sldDot span') {
    totalSlides = document.getElementsByClassName(sliderItem);
    totalDots = document.querySelectorAll(sliderDots);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    if (n > totalSlides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = totalSlides.length;
    }
    for (i = 0; i < totalSlides.length; i++) {
        totalSlides[i].style.display = "none";
    }
    for (i = 0; i < totalDots.length; i++) {
        totalDots[i].className = totalDots[i].className.replace(" sldActiveDot", "");
    }
    totalSlides[slideIndex - 1].style.display = "block";
    totalDots[slideIndex - 1].className += " sldActiveDot";
}

sliderConfig();

showSlides(slideIndex);

// Tab

function openTab(event, tabContent) {

    var preContents = document.querySelectorAll(".tabContainer div");
    for (i = 0; i < preContents.length; i++) {
        preContents[i].style.display = "none";
    }

    var tabLinks = document.querySelectorAll(".tab ul li");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("tabActive", "");
    }

    document.getElementById(tabContent).style.display = "block";
    event.currentTarget.className += "tabActive";
}

document.getElementById("defaultTabOpen").click();
