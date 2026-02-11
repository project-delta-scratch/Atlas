class TakeoutExtention {
    getInfo() {
        return {
            id: 'takeout',
            name: 'Takeout',
            blocks: [
                {
                    opcode: 'export_',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'export Takeout data with with info: Source OS [source] Source OS Version: [sourceVersion] Target OS (optional): [target] Target OS Version: [targetVersion] Username: [username] Password: [password] Theme: [theme] Language: [language] Browser Home Page: [browserHomePage] Additional Data: [additionalData]',
                    arguments: {
                        source: { type: Scratch.ArgumentType.STRING },
                        sourceVersion: { type: Scratch.ArgumentType.STRING },
                        target: { type: Scratch.ArgumentType.STRING },
                        targetVersion: { type: Scratch.ArgumentType.STRING },
                        username: { type: Scratch.ArgumentType.STRING },
                        password: { type: Scratch.ArgumentType.STRING },
                        theme: { type: Scratch.ArgumentType.STRING },
                        language: { type: Scratch.ArgumentType.STRING },
                        browserHomePage: { type: Scratch.ArgumentType.STRING },
                        additionalData: { type: Scratch.ArgumentType.STRING },
                    }
                },
                {
                    opcode: 'get_',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get item [itemName] from [data]',
                    arguments: {
                        itemName: { type: Scratch.ArgumentType.STRING },
                        data: { type: Scratch.ArgumentType.STRING },
                    }
                },
                {
                    opcode: 'getFromMeta',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get item [itemName] from metadata in [data]',
                    arguments: {
                        itemName: { type: Scratch.ArgumentType.STRING },
                        data: { type: Scratch.ArgumentType.STRING },
                    },
                },
                {
                    opcode: 'getFromAdd',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get item [itemName] from additional data in [data]',
                    arguments: {
                        itemName: { type: Scratch.ArgumentType.STRING },
                        data: { type: Scratch.ArgumentType.STRING },
                    },
                }
                ]
        };
    }
    export_(args){
        return(JSON.stringify({
            meta: { takeoutVersion: '1.00', source: args.source, sourceVersion: args.sourceVersion, target: args.target, targetVersion: args.targetVersion }, username: args.username, password: args.password, theme: args.theme, language: args.language, browserHomePage: args.browserHomePage, additionalData: JSON.parse(args.additionalData),}));
    }
    get_(args){
        let x = JSON.parse(args.data);
        return(x[args.itemName]);
    }
    getFromMeta(args){
        let x = JSON.parse(args.data);
        return(x.meta[args.itemName]);
    }
    getFromAdd(args){
        let x = JSON.parse(args.data);
        return(x.additionalData[args.itemName]);
    }
}
Scratch. extensions.register(new TakeoutExtention());

//let takeoutData = {
//    meta: {
//        takeoutVersion: "1.00",
//        source: "OpenMX",
//        sourceVersion: "11.01",
//        target: "gammaOS",
//        targetVersion: "3.03",
//    },
//    username: "user",
//    password: "123",
//    theme: "dark",
//    language: "en-us",
//    browserHomePage: "https://yep.com",
//    additionalData: {
//        wallpaper: 1,
//        autoboot: "enabled",
//        loginScreen: "enabled"
//    }
//};
