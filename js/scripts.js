document.addEventListener("scroll", () => {
    const value = window.scrollY

    const navbarContainer = document.querySelector(
        ".header-container__navbar-container"
    )
    if (value === 0) {
        navbarContainer.classList.add(
            "header-container__navbar-container--transparent"
        )
    } else {
        navbarContainer.classList.remove(
            "header-container__navbar-container--transparent"
        )
    }
})
