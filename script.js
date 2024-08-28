document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"

                var typed = new Typed(".typing", {
                    strings: ["CS Student","Web Developer", "Programmer", "Designer"],
                    typeSpeed: 100,
                    backSpeed: 60,
                    loop: true
                });
            
                var typed = new Typed(".typing-2", {
                    strings: ["CS Student","Web Developer",  "Programmer", "Designer"],
                    typeSpeed: 100,
                    backSpeed: 60,
                    loop: true
                });
            
            });
        });
    });
});

