const theQ = document.querySelector('#questionTextArea');
const askBTN = document.querySelector('#submitQ');

// askBTN.addEventListener('click', ()=>{
//     console.log(theQ.value);
// });

let ask = "";
let url =  "";

askBTN.addEventListener('click', ()=>{
    ask = theQ.value;
    url =  "https://api.pawan.krd/chat/gpt?text=" + urlParser(ask) + "&lang=en";
});

// To make the question able to be sent
function urlParser(beforeParse) {
    return "" + beforeParse.replaceAll(" ", "%20");
}

let promiseAsker = fetch(url);