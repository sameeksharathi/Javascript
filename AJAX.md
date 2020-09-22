# AJAX

AJAX stands for Asynchronous Javascript and XML.<br>
AJAX is not a programming language. Rather it's a set of technologies.<br>
AJAX helps in fetching the data asynchronously without interfering with the existing page.<br>
No page reload/refresh is done for small change in the content of page which we get from server.<br>
Mordern Websites use JSON instead of XML for data transfer.<br>
AJAX saves network bandwidth. <br>

## How it works?

AJAX uses XMLHttpRequest (aka xhr object). <br>
xhr contains many utility functions and methods using which we can call AJAX. <br>
xhr object is an in-built object in javascript. <br>
Data can be transferred in any format e.g., jason, xml, txt, html, etc. <br>
Data can be transferred in any format e.g., http, https, etc.<br>


## CODE:

#### HTML CODE:
<pre>

<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Ajax in one video - CodeWithHarry</title>
</head>
<body>
    <h1>Ajax tutorial</h1>
    <button type="button" id="fetchBtn" class="btn btn-primary">Fetch Data</button>
    <button type="button" id="popBtn" class="btn btn-secondary">Populate</button>

    <div class="container">
        <h1>Employee list</h1>
        <ul id="list">

        </ul>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
        <script src="js/ajax.js"></script>
</body>
</html>

</pre>


### Javascript CODE:

<pre>

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    xhr.onprogress = function(){            // can be used to show spin sign of loading.
        console.log('On progress');     
    }


    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

</pre>




# Fetch API:

Extended version of AJAX. Now, most people use Fetch API for get and post request actions.<br>

<pre>

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content 
let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "tom.txt";                    // A txt file named tom is used.
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

function getData(){
    console.log("Started getData")
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}


function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"TOM","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}

// console.log("Before running getData")
// getData()
// console.log("After running getData")
postData()

</pre>
