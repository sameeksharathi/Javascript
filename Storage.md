# Local Storage
It will always be available in the storage of browser until be itself clear it.

<pre>
var array = ['CN', 'Pogo', 'Nick'];

localStorage.setItem('Name1', 'Tom');
localStorage.setItem('Name2', 'Jerry');
localStorage.setItem('Channels', JSON.stringify(array));  // To convert the array into string.

let name = localStorage.getItem('Name2');
let Channels = JSON.parse(localStorage.getItem('Channels'));  // To convert string into array.

localStorage.removeItem('Channels');

Storage.clear();
</pre>


# Session Storage
It will not be available in the storage of browser once we close the browser.

<pre>
var sarray = ['CN', 'Pogo', 'Nick'];

sessionStorage.setItem('sName1', 'sessionalTom');
sessionStorage.setItem('sName2', 'sessionalJerry');
sessionStorage.setItem('sChannels', JSON.stringify(sarray));   // To convert the array into string.

let name = sessionStorage.getItem('sName2');
let Channels = JSON.parse(sessionStorage.getItem('sChannels'));  // To convert string into array.

sessionStorage.removeItem('sChannels');

sessionStorage.clear();
</pre>