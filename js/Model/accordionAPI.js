const data = [
    {
        question:"What gets wetter more than dries?",
        answer:'A towel'
    },
    {
        question:"What can be broken but never held?",
        answer:'A promise'
    },
    {
        question:"What goes up but never comes down?",
        answer:'Your age'
    },
    
];
export default class accordionAPI {
    constructor(){
        this.data = data;
    }

    static getData (){
        return data;
    }
}

