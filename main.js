const links = document.querySelectorAll("old-class");

links.forEach(link => {
    link.classList.add("new-class");
    link.classList.remove("old-class");

    console.log(link);
});
