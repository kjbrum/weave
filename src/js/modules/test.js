export default class Test {
    constructor(name) {
        this.name = name;
        this.printTest();
    },

    printTest() {
        console.log(`Init ${this.name} module!`);
    }
}