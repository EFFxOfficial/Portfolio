function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (
		rect.top <= window.innerHeight &&
		rect.bottom >= 0
	);
}

function handleScroll() {
    const iRelacionadosCont = document.querySelectorAll(".interests__container-interests_container");
    if(iRelacionadosCont){
        iRelacionadosCont.forEach((iContainer) => {
	        if (isElementInViewport(iContainer)) {
			    iContainer.classList.add("active");
		    }
        });
	}
}

window.addEventListener("scroll", handleScroll);
handleScroll();