let nomes = ["Vera","Karen","Allana","Paulo","Carlos"]
console.log(nomes)

nomes.unshift("Walter")
console.log(nomes)

nomes.pop()
console.log(nomes)

nomes.push("joão","pedro")
console.log(nomes)

nomes.shift()
console.log(nomes)

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers.sort())
numbers.sort(function(a, b) {
    return (a-b);
});