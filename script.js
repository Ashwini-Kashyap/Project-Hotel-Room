const mybookings = document.querySelector(".list");
const home = document.querySelector(".home");
const hero_section = document.querySelector(".hero-section");
const about_section = document.querySelector(".about-section");
const about_heading = document.querySelector(".about-heading");
const room_heading = document.querySelector(".room-heading");
const room_section = document.querySelector(".room-type-container");
const booking_list = document.querySelector(".dashboard");
const form_section = document.querySelector(".form-container");
const form_heading = document.querySelector(".form-heading");
const nav_container = document.querySelector(".nav-container");
const event_section = document.querySelector(".event");
const usrname = document.getElementById("usrname");
const comment_section = document.querySelector(".comment-section");
const gallery_section = document.querySelector(".gallery-section");
const colored_section = document.querySelector(".colored-section");
const room_list = document.querySelector(".room-list");
const lines = document.querySelectorAll("hr");
// const room_list = document.querySelector(".room-list");
// const lines = document.querySelectorAll(".line1 line2 line3");


usrname.addEventListener("click", () => {
    usrname.style.backgroundColor = "#fff";
})

var checked = false;
home.addEventListener("click", (event) => {
    event.preventDefault();
    // home.classList.toggle("hide2");
    if (checked) {
        nav_container.classList.toggle("nav-pos")
        nav_container.classList.toggle("pos-abs")
        booking_list.classList.toggle("hide2");
        hero_section.classList.toggle("hide2");
        room_heading.classList.toggle("hide2");
        room_section.classList.toggle("hide2");
        about_heading.classList.toggle("hide2");
        about_section.classList.toggle("hide2");
        form_heading.classList.toggle("hide2");
        form_section.classList.toggle("hide2");
        event_section.classList.toggle("hide2");
        gallery_section.classList.toggle("hide2");
        colored_section.classList.toggle("hide2");
        room_list.classList.toggle("hide2");
        // lines.classList.toggle("hide2");
        lines.forEach(lines => {
            lines.classList.toggle("hide2");
        });
        checked = false;
    }
})
mybookings.addEventListener("click", (event) => {
    event.preventDefault();
    // home.classList.toggle("hide2");
    if (!checked) {
        nav_container.classList.toggle("nav-pos")
        nav_container.classList.toggle("pos-abs")
        booking_list.classList.toggle("hide2");
        hero_section.classList.toggle("hide2");
        room_heading.classList.toggle("hide2");
        room_section.classList.toggle("hide2");
        about_heading.classList.toggle("hide2");
        about_section.classList.toggle("hide2");
        form_heading.classList.toggle("hide2");
        event_section.classList.toggle("hide2");
        form_section.classList.toggle("hide2");
        colored_section.classList.toggle("hide2");
        gallery_section.classList.toggle("hide2");
        room_list.classList.toggle("hide2");
        // lines.classList.toggle("hide2");
        lines.forEach(lines => {
            lines.classList.toggle("hide2");
        });  // lines.style.
        checked = true;
    }
})
