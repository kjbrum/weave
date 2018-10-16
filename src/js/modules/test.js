class TestModule {
    constructor(name) {
        this.name = name;
        this.printName();
    }

    printName() {
        console.log(`Init ${this.name} module!`);
    }
}

module.exports = TestModule;
