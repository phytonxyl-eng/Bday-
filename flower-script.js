let selectedOption = null;

function selectColor(element, colorType) {
    // Deselect all checkmarks
    const allIcons = document.querySelectorAll('.selected-icon');
    allIcons.forEach(icon => {
        icon.style.display = 'none';
    });

    // Select the current option
    const icon = element.querySelector('.selected-icon');
    icon.style.display = 'block';
    
    selectedOption = colorType; // Store the selected color type
    
    // Enable and style the Open Gift button
    const openBtn = document.getElementById('open-gift-btn');
    openBtn.disabled = false;
    openBtn.style.backgroundColor = '#f77f98'; 
    
    // Attach the action to navigate to the final page with the color as a parameter
    openBtn.onclick = function() {
        // Navigates to the final-flower.html and adds "?color=grass" or "?color=flower" to the URL
        window.location.href = `final-flower.html?color=${selectedOption}`;
    };
}
