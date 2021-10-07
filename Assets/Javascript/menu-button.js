const menu = () => {

    const nav = document.querySelector(".navigation");
    const burger = document.querySelector(".burger-button");
    const menuLink = document.querySelectorAll(".menu-link");



    menuLink.forEach(element => {
        element.addEventListener("click", () => {

            nav.classList.remove("active")
        })

    });




    burger.addEventListener("click", () => {

        nav.classList.toggle("active")

    })
};

menu();