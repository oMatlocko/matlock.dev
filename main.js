const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation(4);
}

function addAnimation(n = 2) { // default to 2 copies (1 original + 1 clone)
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        for (let i = 1; i < n; i++) {
            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", "true");
                scrollerInner.appendChild(duplicatedItem);
            });
        }
    });
}