import Column from "./Column.js";

export default class accordion {
    constructor(root){
        this.root = root;

        const columnView = new Column();
        this.root.appendChild(columnView.elements.root);
    }

}