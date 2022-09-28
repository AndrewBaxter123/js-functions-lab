fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
                           //array.reduce(count,element)  if, initialValue)
     const totalCompleted = json.reduce( (acc, todo) => todo.completed ? acc+1 : acc,0)
     //                     reduce through array todo by todo,   if completed add 1, else stay same
     console.log(totalCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });

  //In the body of the fetch, you are required to write the code that computes
  // (and displays) the number of completed todos. Use the Array.reduce HOF in your solution.