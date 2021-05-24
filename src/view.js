

// Switch arrow function switches arrow direction on projects dropdown
const switchArrow = () => {
    const arrow = document.getElementById('arrow');
    if (arrow.getAttribute('src') == "images/arrow-down.svg") {
        arrow.src = "images/arrow-up.svg";
    } else if (arrow.getAttribute('src') == "images/arrow-up.svg") {
        arrow.src = "images/arrow-down.svg";
    }
}

export { switchArrow };