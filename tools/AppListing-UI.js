make.setTarget(null);
make.h1(Info.name);
make.h3("By " + Info.creator);
make.p(Info.desc);
for (const [key, value] of Object.entries(Info.links)) {
    make.a("", { id: ("atlas-get-" + key), href: value });
    make.setTarget($("atlas-get-" + key));
    make.button("Get it for " + key, { id: "atlas-get-" + key});
    make.setTarget(null);
    make.div("", { styles: " width: 10px; height: 10px;" });
}
