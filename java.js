window.onload = function () {
    var merrywrap = document.getElementById("merrywrap");
    var box = merrywrap.getElementsByClassName("giftbox")[0];
    var icons = document.querySelector(".icons");
    var paragraphText = document.getElementById("paragraph-text");
    var step = 1;
    var stepMinutes = [2000, 5000, 8000, 0]; // Adjust the timing here

    function init() {
        box.addEventListener("click", openBox, false);
    }

    function stepClass(step) {
        merrywrap.className = "merrywrap";
        merrywrap.className = "merrywrap step-" + step;
    }

    function openBox() {
        if (step === 1) {
            box.removeEventListener("click", openBox, false);
        }
        stepClass(step);
        if (step === 3) {
            // Hide the icons for 8 seconds
            icons.style.display = "none";

            // Show the paragraph text indefinitely
            paragraphText.style.display = "block";

            return;
        }
        if (step === 4) {
            return;
        }
        setTimeout(openBox, stepMinutes[step - 1]);
        step++;
    }

    init();
};
