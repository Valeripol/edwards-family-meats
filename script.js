/* =====================================================
   EDWARDS FAMILY MEATS
   ANIMATIONS
===================================================== */


/* =====================================================
   WORD + LETTER SPLITTER
   Слова не разрываются,
   буквы внутри слова появляются отдельно
===================================================== */

function splitTextIntoWordsAndLetters(element) {

    if (!element || element.dataset.split === "true") {
        return;
    }

    function processNode(node) {

        const children = Array.from(node.childNodes);

        children.forEach((child) => {

            if (child.nodeType === Node.TEXT_NODE) {

                const text = child.textContent;
                const parts = text.split(/(\s+)/);

                const fragment =
                    document.createDocumentFragment();

                parts.forEach((part) => {

                    /* ПРОБЕЛ */

                    if (/^\s+$/.test(part)) {

                        fragment.appendChild(
                            document.createTextNode(part)
                        );

                        return;
                    }


                    if (!part) {
                        return;
                    }


                    /* ЦЕЛОЕ СЛОВО */

                    const word =
                        document.createElement("span");

                    word.className = "animated-word";


                    /* БУКВЫ ВНУТРИ СЛОВА */

                    [...part].forEach((letter) => {

                        const letterSpan =
                            document.createElement("span");

                        letterSpan.className =
                            "animated-letter";

                        letterSpan.textContent =
                            letter;

                        word.appendChild(letterSpan);

                    });


                    fragment.appendChild(word);

                });


                child.replaceWith(fragment);

            }


            else if (
                child.nodeType === Node.ELEMENT_NODE &&
                child.tagName !== "BR"
            ) {

                processNode(child);

            }

        });

    }


    processNode(element);

    element.dataset.split = "true";
}


/* =====================================================
   LETTER ANIMATION
===================================================== */

function animateLetters(element, speed = 38) {

    if (!element) {
        return;
    }

    const letters =
        element.querySelectorAll(".animated-letter");


    letters.forEach((letter, index) => {

        setTimeout(() => {

            letter.classList.add(
                "letter-visible"
            );

        }, index * speed);

    });

}


/* =====================================================
   SECTIONS
===================================================== */

const storySection =
    document.getElementById("story");

const meatsSection =
    document.getElementById("meats");

const visitSection =
    document.getElementById("visit");


/* =====================================================
   STORY ELEMENTS
===================================================== */

const storyLabel =
    storySection?.querySelector(".section-label");

const storyTitle =
    storySection?.querySelector("h2");

const storySubtitle =
    storySection?.querySelector(".story-subtitle");

const storyText =
    storySection?.querySelector(".story-text");


/* =====================================================
   MEATS ELEMENTS
===================================================== */

const meatsLabel =
    meatsSection?.querySelector(".meats-label");

const meatCards =
    meatsSection?.querySelectorAll(".meat-card");


/* =====================================================
   VISIT ELEMENTS
===================================================== */

const visitLabel =
    visitSection?.querySelector(".visit-label");

const visitTitle =
    visitSection?.querySelector("h2");

const visitContacts =
    visitSection?.querySelectorAll(".visit-contact");

const visitSocials =
    visitSection?.querySelector(".visit-socials");


/* =====================================================
   PREPARE LETTER ANIMATION
===================================================== */

splitTextIntoWordsAndLetters(storyTitle);

splitTextIntoWordsAndLetters(visitTitle);


/* =====================================================
   OUR STORY ANIMATION
===================================================== */

function playStoryAnimation() {

    if (
        !storySection ||
        storySection.dataset.played === "true"
    ) {
        return;
    }


    storySection.dataset.played = "true";


    /* OUR STORY */

    setTimeout(() => {

        storyLabel?.classList.add(
            "sequence-visible"
        );

    }, 120);


    /* A LOCAL TRADITION */

    setTimeout(() => {

        animateLetters(
            storyTitle,
            42
        );

    }, 420);


    /* QUALITY MEATS */

    setTimeout(() => {

        storySubtitle?.classList.add(
            "sequence-visible"
        );

    }, 1450);


    /* PARAGRAPH */

    setTimeout(() => {

        storyText?.classList.add(
            "sequence-visible"
        );

    }, 1850);

}


/* =====================================================
   OUR MEATS ANIMATION
===================================================== */

function playMeatsAnimation() {

    if (
        !meatsSection ||
        meatsSection.dataset.played === "true"
    ) {
        return;
    }


    meatsSection.dataset.played = "true";


    /* OUR MEATS */

    setTimeout(() => {

        meatsLabel?.classList.add(
            "sequence-visible"
        );

    }, 100);


    /* MEAT */

    setTimeout(() => {

        meatCards?.[0]?.classList.add(
            "card-visible"
        );

    }, 420);


    /* FISH */

    setTimeout(() => {

        meatCards?.[1]?.classList.add(
            "card-visible"
        );

    }, 690);


    /* SMALL GOODS */

    setTimeout(() => {

        meatCards?.[2]?.classList.add(
            "card-visible"
        );

    }, 960);

}


/* =====================================================
   VISIT US ANIMATION
===================================================== */

function playVisitAnimation() {

    if (
        !visitSection ||
        visitSection.dataset.played === "true"
    ) {
        return;
    }


    visitSection.dataset.played = "true";


    /* VISIT US */

    setTimeout(() => {

        visitLabel?.classList.add(
            "sequence-visible"
        );

    }, 100);


    /* EDWARDS FAMILY MEATS / NEWPORT */

    setTimeout(() => {

        animateLetters(
            visitTitle,
            38
        );

    }, 420);


    /* ADDRESS */

    setTimeout(() => {

        visitContacts?.[0]?.classList.add(
            "sequence-visible"
        );

    }, 1550);


    /* PHONE */

    setTimeout(() => {

        visitContacts?.[1]?.classList.add(
            "sequence-visible"
        );

    }, 1800);


    /* WEBSITE */

    setTimeout(() => {

        visitContacts?.[2]?.classList.add(
            "sequence-visible"
        );

    }, 2050);


    /* FACEBOOK + INSTAGRAM */

    setTimeout(() => {

        visitSocials?.classList.add(
            "sequence-visible"
        );

    }, 2300);

}


/* =====================================================
   SECTION OBSERVER
===================================================== */

const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                if (entry.target.id === "story") {

                    playStoryAnimation();

                }


                if (entry.target.id === "meats") {

                    playMeatsAnimation();

                }


                if (entry.target.id === "visit") {

                    playVisitAnimation();

                }

            });

        },

        {
            threshold: 0.32,
            rootMargin: "0px 0px -8% 0px"
        }

    );


if (storySection) {
    sectionObserver.observe(storySection);
}


if (meatsSection) {
    sectionObserver.observe(meatsSection);
}


if (visitSection) {
    sectionObserver.observe(visitSection);
}
/* =====================================================
   MOBILE BURGER MENU
===================================================== */

const mobileMenuButton =
    document.querySelector(".mobile-menu-btn");

const mobileMenu =
    document.querySelector(".mobile-menu");

const mobileMenuClose =
    document.querySelector(".mobile-menu-close");

const mobileMenuLinks =
    document.querySelectorAll(".mobile-menu-inner a");


function openMobileMenu() {

    mobileMenu?.classList.add("open");

    document.body.classList.add("menu-open");

}


function closeMobileMenu() {

    mobileMenu?.classList.remove("open");

    document.body.classList.remove("menu-open");

}


mobileMenuButton?.addEventListener(
    "click",
    openMobileMenu
);


mobileMenuClose?.addEventListener(
    "click",
    closeMobileMenu
);


mobileMenuLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const href =
            link.getAttribute("href");

        /* ORDERS пока не ведёт никуда */

        if (href === "#") {
            return;
        }

        closeMobileMenu();

    });

});


/* ESC closes menu */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    }
);
/* =====================================================
   MOBILE SCROLL REVEAL
===================================================== */

if (window.matchMedia("(max-width: 700px)").matches) {

    const mobileSections = document.querySelectorAll(
        ".hero, .story, .meats, .visit-banner"
    );

    const mobileObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "mobile-visible"
                    );

                    mobileObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -8% 0px"
        }
    );


    mobileSections.forEach((section) => {

        mobileObserver.observe(section);

    });

}