var fadeout_time = 1000; // fadeout timer in ms (1000 = 1s)

// Removes the fadein object
window.onload = function() {
    setTimeout(function() {
        document.getElementById("fadein").remove();
    }, fadeout_time);
};

