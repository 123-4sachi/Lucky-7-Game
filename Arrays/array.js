// array = a variable like structure that can hold
//  more than 1 value
// collection of strings or numbers that we  use to collect or store strings in it to use them

//already know this and have read,practice this in proper way like level one quesitons and level 2 questions


/// rest parameter 

/// Yes — visually it looks like spread (...) but inside function parameters, it behaves as REST — its job is to collect stuff into one variable.





const todo1 = "DeepCMS";
const todo2 = "3pm meeting with rock"; 
const todo3 = "studying js till then"
const todo4 = "5 pm talk with luffy";
const todo5 = "mummy pickup";

function AllTasks(...tasks) {
    return tasks;

}

const tasks = AllTasks(todo1, todo2, todo3, todo4, todo5);

console.log(tasks);