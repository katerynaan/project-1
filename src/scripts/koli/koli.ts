export default class Koli {
    root: HTMLDivElement
    constructor(root: HTMLDivElement) {
        this.root = root;
        this.render();
    }
    render() {
        const div = document.createElement("div");
        div.className = "koli-wrapper";
        div.innerHTML = `
        <h1>Hello world from Koli Component in main, but not feature, before rebase!</h1>
        `
        this.root.append(div);
    }
}