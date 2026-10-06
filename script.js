/* =====================================================
   EDWARDS FAMILY MEATS
   ANIMATIONS
===================================================== */


/* =====================================================
   WORD + LETTER SPLITTER
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

                    if (/^\s+$/.test(part)) {

                        fragment.appendChild(
                            document.createTextNode(part)
                        );

                        return;
                    }

                    if (!part) {
                        return;
                    }

                    const word =
                        document.createElement("span");

                    word.className = "animated-word";

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

    setTimeout(() => {

        storyLabel?.classList.add(
            "sequence-visible"
        );

    }, 120);


    setTimeout(() => {

        animateLetters(
            storyTitle,
            42
        );

    }, 420);


    setTimeout(() => {

        storySubtitle?.classList.add(
            "sequence-visible"
        );

    }, 1450);


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

    setTimeout(() => {

        meatsLabel?.classList.add(
            "sequence-visible"
        );

    }, 100);


    setTimeout(() => {

        meatCards?.[0]?.classList.add(
            "card-visible"
        );

    }, 420);


    setTimeout(() => {

        meatCards?.[1]?.classList.add(
            "card-visible"
        );

    }, 690);


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

    setTimeout(() => {

        visitLabel?.classList.add(
            "sequence-visible"
        );

    }, 100);


    setTimeout(() => {

        animateLetters(
            visitTitle,
            38
        );

    }, 420);


    setTimeout(() => {

        visitContacts?.[0]?.classList.add(
            "sequence-visible"
        );

    }, 1550);


    setTimeout(() => {

        visitContacts?.[1]?.classList.add(
            "sequence-visible"
        );

    }, 1800);


    setTimeout(() => {

        visitContacts?.[2]?.classList.add(
            "sequence-visible"
        );

    }, 2050);


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
   HERO NEWSLETTER ANIMATION
===================================================== */

const heroNewsletter =
    document.querySelector(".hero-newsletter");

if (heroNewsletter) {

    setTimeout(() => {

        heroNewsletter.classList.add("show");

    }, 700);

}


/* =====================================================
   CONTACT FORM ANIMATION
===================================================== */

const contactFormRevealElement =
    document.querySelector(".contact-reveal");

if (contactFormRevealElement) {

    const contactFormObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "contact-visible"
                    );

                    contactFormObserver.unobserve(
                        entry.target
                    );

                });

            },

            {
                threshold: 0.2,
                rootMargin: "0px 0px -8% 0px"
            }

        );

    contactFormObserver.observe(
        contactFormRevealElement
    );
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
    document.querySelectorAll(
        ".mobile-menu-inner a"
    );


function openMobileMenu() {

    mobileMenu?.classList.add("open");

    document.body.classList.add(
        "menu-open"
    );
}


function closeMobileMenu() {

    mobileMenu?.classList.remove("open");

    document.body.classList.remove(
        "menu-open"
    );
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

        if (href === "#") {
            return;
        }

        closeMobileMenu();

    });

});


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

if (
    window.matchMedia(
        "(max-width: 700px)"
    ).matches
) {

    const mobileSections =
        document.querySelectorAll(
            ".hero, .story, .meats, .visit-banner"
        );

    const mobileObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

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


    mobileSections.forEach(
        (section) => {

            mobileObserver.observe(
                section
            );

        }
    );

}