let divelem = document.createElement("div");

let val = localStorage.getItem('text');
let  text;
if(val == null){
    text = document.createTextNode("Click! Add some text to me.")
}else{
    text = document.createTextNode(val);
}
divelem.appendChild(text);

divelem.setAttribute('id', 'elem');
divelem.setAttribute('class', 'elem');

let container = document.querySelector('.container');
let firstdiv = document.getElementById("firstdiv");

container.insertBefore(divelem, firstdiv);

// console.log(container, firstdiv, divelem);

divelem.addEventListener("click", function(){
    let notextArea = document.getElementsByClassName('textarea').length;
    if(notextArea == 0){
        let html = elem.innerHTML;
        divelem.innerHTML = `<textarea class = "form-control textarea" id = "textarea" rows ="3"> $(html) </textarea>`;
    }
    let textarea = document.getElementById(`textarea`);
    textarea.addEventListener('blur', function(){
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value)
    })
})
