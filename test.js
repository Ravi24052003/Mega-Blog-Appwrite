const str = '708';
const num  = 567;
const check = false;

const obnu = {
    name: "ravi",
    class: "BCA",
    roll: 942,

    obnuFn(){
        console.log("function inside the obnu object");
    }
}

console.log("str ",typeof str === 'string');

console.log("num ",typeof num === 'number');

console.log("str ",str)

console.log("check ",typeof check === 'boolean');

console.log("obnu ",typeof obnu === 'object');

const fn = ()=>{
    console.log("this is fn function");
}

console.log("fn ", typeof fn === 'function');
console.log('obnu.obnuFn', typeof obnu.obnuFn === 'function');

const sentence = "once upon a time thErE is a black shEEp thats it";

const transformSentence = sentence.toLowerCase().replace(/ /g, '-');

console.log("transformsetence ",transformSentence);
console.log(sentence);