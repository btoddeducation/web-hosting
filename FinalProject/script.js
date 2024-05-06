function displaySkills(champion) {
    var championDiv = document.getElementById(champion);
    if (championDiv.classList.contains("hidden")) {
        championDiv.classList.remove("hidden");
    } else {
        championDiv.classList.add("hidden");
    }
}
