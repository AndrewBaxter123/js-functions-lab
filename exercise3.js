fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.filter((todo) => ! todo.completed // filters to get the not completed
     ).map(todo => ({ userId : todo.userId, title : todo.title } ) ) //if it's not completed, it adds the id and title to the array
     console.log(uncompleted) // So 
  })
  .catch(function(err) { 
    console.log(err);
  });

  //In the body of the fetch, you are required to write the code that creates an array of uncompleted todo objects, 
  //where an object contains a userID and todo title. It then displays the array: