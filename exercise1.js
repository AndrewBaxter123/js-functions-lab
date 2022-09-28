fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter((todo) => todo.completed   //arrow functionv seperates the body(todo.completed) from parameter(json.filter(todo))
     ) //               

     completed.forEach( (todo, index) => { // going through each todo 
      console.log(`${todo.title} - ${todo.completed}`) //loging the title and whether its completed or not
    })
  })
  .catch(function(err) { 
    console.log(err);
  });
