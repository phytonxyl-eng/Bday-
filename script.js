// Function to open the short wish pop-up
function openWishPopUp() {
    document.getElementById('wish-popup').style.display = 'flex';
}

// Function to close the short wish pop-up
// Function to close the short wish pop-up
// Function to open the short wish pop-up
function openWishPopUp() {
    document.getElementById('wish-popup').style.display = 'flex';
}

// Function to close the short wish pop-up
function closeWishPopUp(event) {
    const popup = document.getElementById('wish-popup');
    
    // Check if the click occurred on the overlay OR the close button (by class)
    if (event.target.classList.contains('popup-overlay') || event.target.id === 'close-wish-btn') {
        popup.style.display = 'none';
    }
}

// Now, we attach the event listener for the 'X' button separately
// (This line needs to run AFTER the HTML loads, so place it near the bottom of script.js)
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-wish-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            document.getElementById('wish-popup').style.display = 'none';
        });
    }
});

   


// Keep the rest of your script.js code unchanged (openVideoGift, etc.)


// Function for the Video Gift button (currently shows an alert)
// Function for the Video Gift button
// Function for the Video Gift button
function openVideoGift() {
    // This line tells the browser to load the new HTML file
    window.location.href = 'video-gift.html'; 
}

// Keep the Flower Gift function as an alert for now
// Function for the Flower Gift button
function openFlowerGift() {
    // This line tells the browser to load the new HTML file
    window.location.href = 'flower-gift.html'; 
}
