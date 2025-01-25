const siteData = {
    header: {
        logo: "./Images/nintendo logo.png",
        navLinks: ["Home", "About", "Gallery"]
    },
    bannerImage: {
        image: "./Images/animal crossing banner.png",
        alt: "Animal Crossing Banner with Tom Nook and Isabelle"
    },
    carousel: [
        {
           title: "January 19th is",
           birthday: "Simon's Birthday",
           image: "./Images/simon birthday.png",
           alt: "Image of Simon from Animal Crossing",
           class: "slide1"
        },
        {
            title: "January 20th is",
            birthday: "Opal's Birthday",
            image: "./Images/Opal Birthday.png",
            alt: "Image of Opal from Animal Crossing",
            class: "slide2"
        },
        {
            title: "January 21st is",
            birthday: "Genji's Birthday",
            image: "./Images/Genji Birthday.png",
            alt: "Image of Genji from Animal Crossing",
            class: "slide3"
        },
        {
            title: "January 22nd is",
            birthday: "Francine's Birthday",
            image: "./Images/Francine Birthday.png",
            alt: "Image of Francine from Animal Crossing",
            class: "slide4"
        },
        {
            title: "January 23rd is",
            birthday: "Gwen's Birthday",
            alt: "Image of Gwen from Animal Crossing",
            image: "./Images/Gwen Birthday.png",
            class: "slide5"
        },
        {
            title: "January 24th is",
            birthday: "Rhonda's Birthday",
            alt: "Image of Rhonda from Animal Crossing",
            image: "./Images/Rhonda Birthday.png",
            class: "slide6"
        }
    ],
    mainContent:[
        {
            title: "Oct 28, 2024",
            image: "./Images/Animal-Crossing-Pocket-Camp-Complete.webp",
            alt: "Image of the Animal Crossing Pocket Camp Complete",
            description: "Create your ideal campsite in Animal Crossing: Pocket Camp Complete - coming soon!",
            more: "#Pocket Camp Done - Keep Reading"
        },
        {
            title: "Oct 8, 2024",
            image: "./Images/animal crossing pocket camp halloween.jpg",
            alt: "Image of the Animal Crossing Pocket Camp Halloween update",
            description: "Eerie lanterns are aglow this Halloween in Animal Crossing: Pocket Camp",
            more: "#Pocket Camp Halloween Update - Keep Reading"
        },
        {
            title: "Jun 10, 2024",
            image: "./Images/animal crossing aquarium tour.png",
            alt: "Image of the Animal Crossing: New Horizons Aquarium Tour",
            description: "Animal Crossing: New Horizons aquarium partnership expands into a national tour",
            more: "#New Horizons Aquarium Tour - Keep Reading"
        }
    ],
    footer: "Animal Crossing &copy;",
}

const createAndAppend = (tag, parent, attributes={}, content="") => {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
}

// Creating Header
const header = createAndAppend("header", document.body, {class:"site-header"});

// Creating Banner Image
const banner = createAndAppend("div", document.body, {class:"nav"})
createAndAppend('img', banner, {class:"banner", src: siteData.bannerImage.image, alt: siteData.bannerImage.alt, width: siteData.bannerImage.width, height: siteData.bannerImage.height})

// Creating Carousel

const carousel = createAndAppend("section", document.body, {class: "carousel"})
siteData.carousel.forEach(slide => {
    const div = createAndAppend("div", carousel, {class: slide.class})
    createAndAppend("h2", div, {}, slide.title)
    createAndAppend("p", div, {}, slide.birthday)
    createAndAppend("img", div, {src: slide.image, alt: slide.alt})
})

const main = createAndAppend("main", document.body, {class: "site-main"})
siteData.mainContent.forEach(section => {
    const article = createAndAppend("article", main, {class:"content-section"})
    createAndAppend("h2", article, {}, section.title)
    createAndAppend("p", article, {}, section.description)
    createAndAppend("img", article, {src: section.image, alt: section.alt},)
    createAndAppend("a", article, {href: section.more}, "Keep Reading >")
})

const footer = createAndAppend("footer", document.body, {class: "site-footer"})
createAndAppend("p", footer, {}, siteData.footer)