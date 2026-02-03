class TypesExtension {
  constructor() {
    this.vars = {};
  }

  getInfo() {
    return {
      id: 'types',
      name: 'Types',
      blocks: [
        {
          opcode: 'let_',
          blockType: Scratch.BlockType.COMMAND,
          text: 'let [NAME] = [VALUE]',
          arguments: {
            NAME: { type: Scratch.ArgumentType.STRING },
            VALUE: { type: Scratch.ArgumentType.STRING }
          }
        },
        {
          opcode: 'get_',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get [NAME]',
          arguments: {
            NAME: { type: Scratch.ArgumentType.STRING }
          }
        },
        {
          opcode: 'set_',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set [NAME] to [VALUE]',
          arguments: {
            NAME: { type: Scratch.ArgumentType.STRING },
            VALUE: { type: Scratch.ArgumentType.STRING }
          }
        },
        {
          opcode: 'equal',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[A] == [B]',
          arguments: {
            A: { type: Scratch.ArgumentType.STRING },
            B: { type: Scratch.ArgumentType.STRING }
          }
        },
        {
          opcode: 'greaterThan',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[A] > [B]',
          arguments: {
            A: { type: Scratch.ArgumentType.STRING },
            B: { type: Scratch.ArgumentType.STRING }
          }
        },
        {
          opcode: 'lessThan',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[A] < [B]',
          arguments: {
            A: { type: Scratch.ArgumentType.STRING },
            B: { type: Scratch.ArgumentType.STRING }
          }
        },
        {
          opcode: 'add',
          blockType: Scratch.BlockType.REPORTER,
          text: '[A] + [B]',
          arguments: {
            A: { type: Scratch.ArgumentType.STRING },
            B: { type: Scratch.ArgumentType.STRING }
          }
        },
        {
          opcode: 'subtract',
          blockType: Scratch.BlockType.REPORTER,
          text: '[A] - [B]',
          arguments: {
            A: { type: Scratch.ArgumentType.STRING },
            B: { type: Scratch.ArgumentType.STRING }
          }
        },
        {
          opcode: 'multiply',
          blockType: Scratch.BlockType.REPORTER,
          text: '[A] × [B]',
          arguments: {
            A: { type: Scratch.ArgumentType.STRING },
            B: { type: Scratch.ArgumentType.STRING }
          }
        },
        {
          opcode: 'divide',
          blockType: Scratch.BlockType.REPORTER,
          text: '[A] ÷ [B]',
          arguments: {
            A: { type: Scratch.ArgumentType.STRING },
            B: { type: Scratch.ArgumentType.STRING }
          }
        }
      ]
    };
  }

  let_(args) {
    this.vars[args.NAME] = {
      name: args.NAME,
      value: args.VALUE,
      type: typeof args.VALUE
    };
  }

  get_(args) {
    const temp = this.vars[args.NAME];
    return temp ? temp.value : '';
  }

  set_(args) {
    if (!this.vars[args.NAME]) return;
    if (typeof args.VALUE === typeof this.vars[args.NAME].value) {
      this.vars[args.NAME].value = args.VALUE;
    } else {
        throw new Error("Incompatiable Types");
    }
  }

  equal(args) {
    return args.A === args.B;
  }

  greaterThan(args) {
    if (typeof args.A === typeof args.B) {
      return args.A > args.B;
    }
    return false;
  }

  lessThan(args) {
    if (typeof args.A === typeof args.B) {
      return args.A < args.B;
    }
    return false;
  }

  add(args) {
    if (args.A + args.B === '[object Object]') return '';
    if (typeof args.A === typeof args.B) {
      return args.A + args.B;
    } else {
        throw new Error("Incompatiable Types");
    }
    return '';
  }

  subtract(args) {
    if (typeof args.A === typeof args.B) {
      return args.A - args.B;
    } else {
        throw new Error("Incompatiable Types");
    }
    return '';
  }

  multiply(args) {
    if (typeof args.A === typeof args.B) {
      return args.A * args.B;
    } else {
        throw new Error("Incompatiable Types");
    }
    return '';
  }

  divide(args) {
    if (typeof args.A === typeof args.B) {
      return args.A / args.B;
    } else {
        throw new Error("Incompatiable Types");
    }
    return '';
  }
}

Scratch.extensions.register(new TypesExtension());



