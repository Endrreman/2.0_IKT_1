//!         General
Splitting();

//      text
ScrollOut({
    targets: '.char',
    onShown(el) {
        el.classList.add("enter_anim");
    },
    onHidden(el) {
        el.classList.remove("enter_anim");
    },
    threshold: 0.99999,
});

//!         Nav

//*     neu_120
var bio = document.getElementById("nav_bio");
var iskola = document.getElementById("nav_sajat");
var tanul = document.getElementById("nav_tanul");
var iskolank = document.getElementById("nav_iskolank");

ScrollOut({
    targets:"#nav-1",
    onShown() {
        bio.classList.add("active");
    },
    onHidden() {
        bio.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-2",
    onShown() {
        iskola.classList.add("active");
    },
    onHidden() {
        iskola.classList.remove("active");
    },
    threshold: 0.6,
});
ScrollOut({
    targets:"#nav-3",
    onShown() {
        tanul.classList.add("active");
    },
    onHidden() {
        tanul.classList.remove("active");
    },
    threshold: 0.3,
});
ScrollOut({
    targets:"#nav-4",
    onShown() {
        iskolank.classList.add("active");
    },
    onHidden() {
        iskolank.classList.remove("active");
    },
    threshold: 0.6,
});