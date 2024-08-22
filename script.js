function toggleInfo(button) {
    const infoDiv = button.nextElementSibling;
    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
    } else {
        infoDiv.style.display = "none";
    }
}