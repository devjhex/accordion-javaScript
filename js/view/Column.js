import accordionAPI from "../Model/accordionAPI.js";
import Item from "./Item.js";

export default class Column {
    constructor(){
        this.elements = {};

        this.elements.root = Column.createRoot();
        this.elements.items = this.elements.root.querySelector(".items");
        console.log(this.elements.root);

        accordionAPI.getData().forEach((item)=>{
            console.log(item);
            this.renderItem(item);
        })
    }

    static createRoot(){
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(
            ` <section class="w-11/12 md:w-[35rem] bg-white rounded-[1.5rem] md:p-[2.5rem] p-[2rem]">
            <article class="flex flex-col gap-[1rem] items">
            </article>
        </section>`
        ).children[0];

    }

    renderItem(data){

        const item = new Item(data.question, data.answer);

        // console.log(item.elements.root);

        this.elements.items.appendChild(item.elements.root);

    }
}