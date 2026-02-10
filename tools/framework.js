//framework thingy
function $(i){ return document.getElementById(i) }
function loadScript(x){
    let i = document.createElement("script");
    i.src = x;
    i.async = true;
    document.head.appendChild(i);
}
class OSInfo {
    constructor(name, creator, releaseDate, previewLink, Github, License, Website){
        this.name = name;
        this.creator = creator;
        this.releaseDate = releaseDate;
        this.previewLink = previewLink;
        this.Github = Github;
        this.License = License;
        this.Website = Website
    }
}
class AppInfo {
    constructor(name, creator, desc, links){
        this.name = name;
        this.creator = creator;
        this.desc = desc;
        this.links = links;
    }
}
class ExtentionInfo {
    constructor(name, creator, desc, link, demoLink, isUnsandboxed ){
        this.name = name;
        this.creator = creator;
        this.desc = desc;
        this.link = link;
        this.demoLink = demoLink;
        this.isUnsandboxed = isUnsandboxed;
    }
}
const make = {
    target: null,
    setTarget(i){
        this.target = i
    },
    newElement(t, i, p = {}){
        let m = document.createElement(t);
        if (p.className) {
            m.classList.add(...p.className.split(" "));
        }
        if (p.id) m.id = p.id;
        if (p.src) m.src = p.src;
        if (p.styles) m.style = p.styles;
        if (p.onClick) m.onClick = p.onClick;
        if (p.href) m.href = p.href;
        m.textContent = i;
        if (this.target === null){
            this.setTarget(document.body)
        }
        this.target.appendChild(m)
    },
    h1(i, p){
        this.newElement("h1", i, p);
    },
    h2(i, p){
        this.newElement("h2", i, p);
    },
    h3(i, p){
        this.newElement("h3", i, p);
    },
    p(i, p){
        this.newElement("p", i, p);
    },
    div(i, p){
        this.newElement("div", i, p);
    },
    script(i, p){
        this.newElement("script", i, p);
    },
    style(i, p){
        this.newElement("style", i, p);
    },
    iframe(i, p){
        this.newElement("iframe", i, p);
    },
    button(i, p){
        this.newElement("button", i, p)
    },
    title(i, p){
        this.newElement("title", i, p)
    },
    a(i, p){
        this.newElement("a", i, p)
    },
};
