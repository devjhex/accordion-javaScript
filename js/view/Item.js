import Column from "./Column.js";

export default class Item{

    constructor(question, answer){
        this.elements = {};
        this.elements.root = Item.createRoot();

        this.elements.question = this.elements.root.querySelector('.question');

        this.elements.answer = this.elements.root.querySelector('.answer');

        this.elements.question.textContent = question;
        this.elements.answer.textContent = answer;

        // console.log(this.elements.question);
         this.elements.root.addEventListener('click', (event)=>{
            
            const all = document.querySelectorAll('.answer');
            const answer = event.currentTarget.querySelector(".answer");

            if(answer.classList.contains("max-h-[100px]")){
                answer.classList.remove("max-h-[100px]");
                return;
            }

           else {
            for (let i = 0; i < all.length; i++) {
                if (all[i].classList.contains('max-h-[100px]')) {
                    all[i].classList.remove("max-h-[100px]");
                }
            }
            
             answer.classList.add("max-h-[100px]");
           }
        })
    }

    static createRoot(){
        const range = document.createRange();
        range.selectNode(document.body);
        return range.createContextualFragment(
            ` <div class="w-11/12 border-b-[3px] border-black pb-3 mx-auto cursor-pointer rounded-[.5rem] duration-[1s] hover:bg-yellow-400 p-2">
            <div class="flex text-[1.5rem] font-[700] leading-normal ">
                <img src="Shape.svg" alt="shape" >
                <h1 class="text-center question px-2 md:px-3 md:py-1"></h1>
                <img src="./right.svg" alt="open" >
            </div>
            <div class=" max-h-0 overflow-hidden transition-all md:text-[1.5rem] md:font-[700] leading-normal mt-[.5rem] ml-2 md:ml-[4rem] font-[500] text-[1rem] answer">
            </div>
          </div>`
        ).children[0];
    }


}