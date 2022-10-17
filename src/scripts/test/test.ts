export default class Test {
    root: HTMLDivElement
    constructor(root: HTMLDivElement) {
        this.root = root;
        this.render();
    }
    render() {
        const div = document.createElement("div");
        div.className = "test-wrapper";
        div.innerHTML = `
        <h1>Hello world from Test Component in a Feature branch for Merge!</h1>
        `
        this.root.append(div);
    }
}