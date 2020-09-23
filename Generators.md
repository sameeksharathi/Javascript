# Generators 
It generate the value on the fly means instantly but do not store the all the data.<br>
For example, it an array has 1 billion value then it will take a lot of memory to store it. So, instead of storing all the values, we generate values on the fly as much as we require.


<pre>

// Generators in JavaScript
// 1 - 1B

function* numbersGen(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i++;
        // yield (i++).toString();
    }
}

const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);

</pre>
