# Document Object Model

## Window Object:
Document is an Object and a part of window. **Window object is a global object** or variable in client side javascript which we see in our browser.   <br>
*e.g., <br>
1. window.alert() and alert() both will do the same work. Therefore, there is no need to write window.<br>
2. prompt() <br>
3. confirm(): Return boolean value.<br>
4. location() <br>
5. location.href = "" or location.href for current href. <br>
6. location.reload: for loading the page again. <br>
7. history <br>
8. history.go(-1): to go one page back and history.go(1) to go one page forward.

## DOM:
It has a Tree structure. It has Child.<br>
document.all looks like an array but is not. We cannot access the elements inside document using arr.forEach() otherwise it will give an error.<br>
e.g.,<br>
1. <pre>a = document.all   
<!-- is an HTML Collection -->
a.forEach(function(element){
    concole.log(element);
});           
#ERROR! a.forEach is not a function.</pre>

2. <pre>a = document.all 
<!-- a is an HTML Collection and converting a to array using Array.from()  -->
Array.from(a).forEach(function(element){
    concole.log(element);
});             
#Print all the elements in a. </pre>

## DOM Element Selector

<h4>element = document.getElementById("id");</h4>
element = element.ClassName;<br>
element = element.childNodes; This contains elements, text, comments, etc<br>
element = element.children;  This contains only elements like h1, div, etc<br>
element = element.parentNode;<br>
element.style.color = "red";<br>
element.innerText = "Hey! Good Morning";<br>
element.innerHTML = "<b>Hey! Good Morning</b>";<br>
element = element.childNodes[i].nodeName;<br>
element = element.childNodes[i].nodeType;<br>

### Types of NodeType:

1. Element - 1 <br>
2. Attribute - 2<br>
3. Text Node - 3<br>
4. Comment - 8<br>
5. document - 9<br>
6. doctype - 10<br>

<br>
element = element.firstChild;<br>
element = element.firstElementChild;<br>
element = element.lastChild;<br>
element = element.lastElementChild;<br>
Count = element.childElementCount;<br>
element = element.firstElementChild.nextSibling : nextSibling is something which is next to the selected child.<br>
element = element.firstElementChild.nextElementSibling : nextElementSibling is the next Element of the selected child.<br>
<br>

<h4>element = document.querySelector("#id")</h4>
<h4>element = document.querySelectorAll(".class")</h4>
<h4>element = document.getElementsByClassName("class") <h6><i>Array of Classes</i></h6> </h4> 
<h4>childElement = element.getElementsByClassName("childClass")</h4>
<h4>element = document.getElementByTagName("tag")**</h4>


## Create, Remove and Replace Element:

<pre>
element = document.CreateElement('li');

element.className = "class";
element.id = "id";

element.setAttribute('title', "myTitle");
element.hasAttribute(); # Return Boolean
element.removeAttrible('id');

element.innerText = "Hey!"
element.innerHTML = "<b>Hey!</b>"
or
let text = document.createTextNode("Hey!");

element.appendChild(text);

let ul = document.querySelector('ul');
ul.appendChild(element);
</pre>