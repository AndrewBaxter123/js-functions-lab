fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const totalCompleted = json.reduce((acc, todo) => { //reduce through each to do
      if (todo.completed) {
        acc[todo.userId] === undefined ? (acc[todo.userId] = 1) // if the count for the user id doesn't exist, set it to 1(create it basically)
        : (acc[todo.userId] += 1); //  else if it does exist add 1 to it
      }
      return acc;
    }, {});
    console.log(totalCompleted);
  })
  .catch(function(err) {
    console.log(err);
  });

  //In the body of the fetch, you are required to write the code that computes the number of completed todos per user. 
  //A user with no completed todos should not appear in the output. Use the Array.reduce HOF in your solution.