$(document).ready(function () {
    const divs = document.querySelectorAll('[id^="img-div"]');

    console.log(divs)
    // Variable to store the currently hovered div
    let hoveredDiv = null;

    // Loop through the divs and add event listeners
    divs.forEach((div) => {
      div.addEventListener('mouseover', () => {
        hoveredDiv = div;
        console.log('Hovering over ' + div.id);
      });

      div.addEventListener('mouseout', () => {
        hoveredDiv = null;
        console.log('Mouse left ' + div.id);
        div.id.style.height = "55px";
      });
    });
  });