fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const titles = json.map((todo) => todo.title // maps each to do to it's todo title
     )
     console.log(titles) // and then logs them all.
  })
  .catch(function(err) { 
    console.log(err);
  });


  //In the body of the fetch, you are required to write the code that creates a new array (todoTitles)
  // containing just the titles of all the todos and then displays the array.