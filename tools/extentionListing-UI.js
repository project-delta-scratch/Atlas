make.setTarget(null);
make.h1(Info.name);
make.h3("By " + Info.creator);
make.p(Info.desc);
if (Info.isUnsandboxed === true) {
    make.div("This extension needs to run unsandboxed. TurboWarp doesn't allow loading unsandboxed extensions from a URL, so this extension needs to be loaded from file or text to function properly. Also, when loading the extension, make sure to check 'Run Unsandboxed.'", { styles: " color: red; "})
}
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
