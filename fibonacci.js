// Fibonacci
// 0,1,1,2,3,5,8,13,21,34,55,89,144...

function generateFibonacci(limit) {
    const fib = [0, 1];

    for(let i = 2; i < limit; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }

    return fib;
}

const fibSerie = generateFibonacci(10);
const ul = document.getElementById("fib");

fibSerie.forEach(number => {
    const li = document.createElement("li");
    li.innerHTML = number;
    ul.append(li);
})
