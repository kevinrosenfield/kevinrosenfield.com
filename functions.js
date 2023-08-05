$(document).ready(function () {
    const divs = document.querySelectorAll('[id^="img-div"]');

    console.log(divs)
    // Variable to store the currently hovered div
    let hoveredDiv = null;

    // Loop through the divs and add event listeners
    divs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
        const hoveredElement = event.target; // The element you hovered over
        const childrenOfHoveredElement = hoveredElement.querySelectorAll(':not(img)'); // Select all children except those with the 'img' tag
      });

      div.addEventListener('mouseover', (event) => {
        const hoveredElement = event.target; // The element you hovered over
        const childrenOfHoveredElement = hoveredElement.querySelectorAll(':not(img)'); // Select all children except those with the 'img' tag
    
        // Add mouseout event listener to each child element
        childrenOfHoveredElement.forEach((child) => {
            child.addEventListener('mouseout', () => {
                hoveredDiv = null;
                console.log('Mouse left ' + child.id);
                child.style.height = "55px";
            });
        });
    });
});
});