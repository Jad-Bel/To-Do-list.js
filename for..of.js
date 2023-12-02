// const seatingChart = [
//     ['Yasser', 'Zimo', 'Ali',], 
//     ['Asmaa', 'Kyojin', 'Mahjoba']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[])
//     }
// }

// for(let row of seatingChart){
//     for(let student of row) {
//         console.log(student)
//     }
// }  
 
// for (let char of "Hello World!"){
//     console.log(char)
// }

// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < numbers.length; i++){
//     console.log([i])
// }

// for (let num of numbers){
//     console.log(num * num)
// }

// const testScores = {
//     Jad: 18,
//     Taha: 19,
//     Yasser: 20,
//     Asmaa: 16,
//     Zimo: 18.5,
//     Ali: 20,
// }

// for (let students in testScores){
//     console.log(`${students} scored ${testScores[students]}`)
// }

let input = prompt("What you want To Do ?");
const todos = ["Buying a new console", "Buying a new Laptop"];
while (input !== "quit" && input !== "q") {
    if (input === "list"){
        console.log("***********")
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***********");
    } else if (input === "new"){
        const newTodo = prompt("Ok, What's the new To DO?");
            todos.push(newTodo);
                console.log(`${newTodo} added to the list!`)
    } else if (input === "delete"){
        const index = parseInt(prompt("OK, enter an index you want to delete:"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
                console.log(`OK, deleted ${deleted[0]}`);
            }
    } else {
        console.log("Unknown index");
    }

    input = prompt("What you want To Do today!")
}
console.log("Okey quit the app");
