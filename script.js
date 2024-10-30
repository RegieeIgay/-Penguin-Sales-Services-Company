// JavaScript for Scroll Animation and Navbar Link Click
document.addEventListener('DOMContentLoaded', function() {
    const bridalSection = document.getElementById('bridalCarServices');
    const towingSection = document.getElementById('towingServices');
    const truckingSection = document.getElementById('truckingServices');
    const heavySection = document.getElementById('heavyEquipment');
    const generalSection = document.getElementById('general');
    const hotelSection = document.getElementById('hotel');
    const autoSection = document.getElementById('auto');
    const homeTitles = document.querySelectorAll('.animated-text');

    // Check if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    // Activate animation when the sections are in the viewport
    function handleScroll() {
        if (isInViewport(bridalSection)) {
            bridalSection.classList.add('animate');
        } else {
            bridalSection.classList.remove('animate'); // Reset for re-triggering
        }

        if (isInViewport(towingSection)) {
            towingSection.classList.add('animate');
        } else {
            towingSection.classList.remove('animate'); // Reset for re-triggering
        }

        if (isInViewport(truckingSection)) {
            truckingSection.classList.add('animate');
        } else {
            truckingSection.classList.remove('animate'); // Reset for re-triggering
        }

        if (isInViewport(heavySection)) {
            heavySection.classList.add('animate');
        } else {
            heavySection.classList.remove('animate'); // Reset for re-triggering
        } 

        if (isInViewport(generalSection)) {
            generalSection.classList.add('animate');
        } else {
            generalSection.classList.remove('animate'); // Reset for re-triggering
        }

        if (isInViewport(hotelSection)) {
            hotelSection.classList.add('animate');
        } else {
            hotelSection.classList.remove('animate'); // Reset for re-triggering
        }

        if (isInViewport(autoSection)) {
            autoSection.classList.add('animate');
        } else {
            autoSection.classList.remove('animate'); // Reset for re-triggering
        }

        homeTitles.forEach(title => {
            if (isInViewport(title)) {
                title.classList.add('animate');
            } else {
                title.classList.remove('animate'); // Reset for re-triggering
            }
        });
    }

    // Function to navigate to a section and trigger animation
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Trigger animation for the target section
        setTimeout(() => {
            if (targetId === 'bridalCarServices') {
                bridalSection.classList.add('animate');
            } else if (targetId === 'towingServices') {
                towingSection.classList.add('animate');
            } else if (targetId === 'truckingServices') {
                truckingSection.classList.add('animate');
            } else if (targetId === 'heavyEquipment') {
                heavySection.classList.add('animate');
            } else if (targetId === 'general') {
                 generalSection.classList.add('animate');
            } else if (targetId === 'hotel') {
                hotelSection.classList.add('animate');
           } else if (targetId === 'auto') {
            autoSection.classList.add('animate');
       }
        }, 300); // Delay for the scroll to complete
    }

    // Add 'animate' class to sections on page load
    function addInitialAnimations() {
        bridalSection.classList.add('animate');
        towingSection.classList.add('animate');
        truckingSection.classList.add('animate');
        heavySection.classList.add('animate');
        generalSection.classList.add('animate');
        hotelSection.classList.add('animate');
        autoSection.classList.add('animate');

        homeTitles.forEach(title => {
            title.classList.add('animate');
        });
    }

    // Call the function to add animations on page load
    addInitialAnimations();

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', scrollToSection);
    });
});

function showBridalInquiryForm() {
    document.getElementById('bridalCarContent').style.display = 'none';
    document.getElementById('bridalInquiryForm').style.display = 'block';
}

function hideBridalInquiryForm() {
    document.getElementById('bridalCarContent').style.display = 'block';
    document.getElementById('bridalInquiryForm').style.display = 'none';
}


function showTowingInquiryForm() {
    document.getElementById('towingContent').classList.add('d-none');
    document.getElementById('towingInquiryForm').classList.remove('d-none');
}

function hideTowingInquiryForm() {
    document.getElementById('towingContent').classList.remove('d-none');
    document.getElementById('towingInquiryForm').classList.add('d-none');
}

function showTruckingInquiryForm() {
    document.getElementById('truckingContent').classList.add('d-none');
    document.getElementById('truckingInquiryForm').classList.remove('d-none'); 
}

function hideTruckingInquiryForm() {
    document.getElementById('truckingInquiryForm').classList.add('d-none'); 
    document.getElementById('truckingContent').classList.remove('d-none'); 
}

function showHeavyEquipmentInquiryForm() {
    document.getElementById('heavyEquipmentContent').classList.add('d-none'); 
    document.getElementById('heavyEquipmentInquiryForm').classList.remove('d-none'); 
}

function hideHeavyEquipmentInquiryForm() {
    document.getElementById('heavyEquipmentInquiryForm').classList.add('d-none');
    document.getElementById('heavyEquipmentContent').classList.remove('d-none'); 
}

function showConstructionInquiryForm() {
    document.getElementById("constructionContent").style.display = "none";
    document.getElementById("constructionInquiryForm").style.display = "block";
}

function showConstructionContent() {
    document.getElementById("constructionInquiryForm").style.display = "none";
    document.getElementById("constructionContent").style.display = "block";
}


  function showFurnitureInquiryForm() {
    document.getElementById('furnitureContent').classList.add('d-none'); 
    document.getElementById('furnitureInquiryForm').classList.remove('d-none'); 
}


function hideFurnitureInquiryForm() {
    document.getElementById('furnitureInquiryForm').classList.add('d-none');
    document.getElementById('furnitureContent').classList.remove('d-none');
}

  
  function showAutoPartsInquiryForm() {
    document.getElementById('autoPartsContent').classList.add('d-none'); 
    document.getElementById('autoPartsInquiryForm').classList.remove('d-none'); 
}


function hideAutoPartsInquiryForm() {
    document.getElementById('autoPartsInquiryForm').classList.add('d-none'); 
    document.getElementById('autoPartsContent').classList.remove('d-none'); 
}