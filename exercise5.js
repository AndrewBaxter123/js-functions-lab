fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todoscompletedByUser = json.reduce((acc, todo) => { //reduce through each todo
      todo.completed 
        ? acc // if completed acc stays the same(we are looking for the uncompleted)
        : acc.push({ userId: todo.userId, title: todo.title }) //else add the user id and title with "push"
      return acc; //return the updated acc; since push is updating
    }, []); //empty array to start with
    console.log(todoscompletedByUser);
  })
  .catch(function(err) {
    console.log(err);
  });

  //In the fetch body, you are required to implement the exact requirement as Exercise 3
  // BUT replace the map-filter combination with the reduce HOF.
//Hint: The initial value for the reducer's accumulator will be an empty array ( [] ).