$(document).ready(function () {
    const divs = document.querySelectorAll('[id^="img-div"]');

    console.log(divs)
    // Variable to store the currently hovered div
    let hoveredDiv = null;

    // Loop through the divs and add event listeners
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
        // Get all children of the currently hovered div (except those with the 'img' tag)
        const childrenOfHoveredElement = div.querySelectorAll(':not(img)');
    
        // Apply your desired changes to the children here
        childrenOfHoveredElement.forEach((child) => {
            // For example, set the background color of each child to red
            child.style.backgroundColor = '55px';
        });
    });
    
        div.addEventListener('mouseleave', () => {
        // Revert the changes when the mouse leaves the currently hovered div
        const childrenOfHoveredElement = div.querySelectorAll(':not(img)');
        childrenOfHoveredElement.forEach((child) => {
            child.style.height = 0; // Remove the background color
        });
    });
}); 
});