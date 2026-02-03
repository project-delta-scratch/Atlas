make.setTarget(null);
make.h1(Info.name);
make.h3("By " + Info.creator);
make.p(Info.desc);
make.div("", { id: "div-container", styles:" display: flex; justify-content: space-between; width: 190px;" });
make.setTarget($("div-container"));
make.button("Get", { id: "atlas-get" });
make.button("View Demo", { id: "atlas-demo"});
make.setTarget(null);
$("atlas-get").addEventListener("click", () => {
    window.open(Info.link, "_self")
});
$("atlas-demo").addEventListener("click", () => {
    window.open(Info.demoLink, "_self")
});
