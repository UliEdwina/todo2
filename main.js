/*

Global arrays. There ought to be a 1:1 relationship of each index of your todos
and each index of your isDone.

For example, isDone[3] would hold the "done-ness" information for todos[3].

*/

let todos = [];
let isDone = [];

// When the html finishes loading, launch `init`.
window.onload = init;

// Set up all event listeners.
function init() {
    // When they click the add todo button, run `addTodo`.
    document.querySelector('#add-todo')
    .addEventListener('click', addTodo);
        
    // When they click the clear done todos button, run `clearDoneTodos`.
    document.querySelector('#clear-done-todos')
    .addEventListener('click', clearDoneTodos );
    
    // When they click the clear all todos button, run `clearAllTodos`.
    document.querySelector('#clear-all-todos')
    .addEventListener('click', toggleDone);
}

function addTodo(event) {
    // Stop page from reloading on button click.
    event.preventDefault();

    // Get new todo from the new todo input field.
    const inputOne = document.querySelector('#new-todo').value;
    
    // Clear the input field of all text.
    todos.splice(inputOne);
    

    // Put the todo and its "done-ness" in their respective arrays.
    todos.push(inputOne); 
    isDone.push(false);
    
    

    // Create a new html element and put our new todo's text in there.
    const newElement = document.createElement('li');
    newElement.innerText = inputOne;
    
    // Add an event listener on the newly created html element to launch
    
    // `toggleDone` when it's clicked.
    newElement.addEventListener('click', toggleDone);
    
    
    // Put our new element on the list part of our page!
    document.getElementById('todo-list').appendChild(newElement);
    
    
}


function clearAllTodos(event) {
    // Stop page from reloading on button click.

    event.preventDefault();
    // Remove all todos from BOTH arrays.
    const removeBoth  = document.querySelector('#new-todo').innerText;
   // index = parseInt(removeBoth, 10)
   
    
    // Remove all todos from the html.
    todos.splice(); 
    
    // You'll have to write that function too, but we'll call it here:
    removeAllChildrenOfOl();
}

function clearDoneTodos(event) {
    // Stop page from reloading on button click.
    event.preventDefault();

    /*
        Find which todos need to be removed and remove them from BOTH arrays.
        If you did it right when making them, you should be able to check the
        `isDone` array to figure out which ones are, in fact, done. Remember
        that there is a 1:1 relationship between `todos` indices and `isDone`
        indices!

        One way to do this is to build up a new array. Give that a try first!

    */
   const todos2 = [];
   //let i = todos.indexOf(todos2.innertext);
   for(let i= 0; 1 < todos.length; i++){
   
    if(isDone[i] === false ){
           
            todos2.push(todos[i]);
        }
    }
    todos = todos2;

    
    
    //const doneTodos  = document.querySelector('#todo-list').innerText;
       
       
       

    /*
        Now remove the done todos from the html.

        const removeBoth  = document.querySelector('#new-todo').innerText;
        index = parseInt(removeBoth, 10)

        Although it's not technically efficient as there is a slight time cost
        to rendering new elements on a web page, you might think not of removing
        certain todos but making a new set of lis to replace what we have. You
        may even already have some code to clear the whole list!

        You could do it the harder but more html efficient way instead, though.

        Your call.
    */


}

function toggleDone(event) {
    // No need to run `event.preventDefault` here; that default behavior only
    // applies to buttons.
    
    // Grab the HTML element that was clicked.
    const currentLi = event.target;
    

   
    // If you don't know, the event parameter has what you need... somewhere.


    // Find the index of the array that this todo resides in. There are a couple
    // ways to do this, and I'm sure you'll figure one out!
    const i = todos.indexOf(currentLi.innerText);
    
    

    // *IF* it's not done yet, apply strikethrough. Otherwise, take that
    // strikethrough away!
    if (isDone[i]){
        isDone[i] = false;
        currentLi.style.textDecoration = 'none';
    }else{
        currentLi.style.textDecoration = 'line-through';
        isDone[i] = true;
    }


    // Toggle the "done-ness" of the same todo, using the isDone array.

}

function removeAllChildrenOfOl() {
    // Grab the ol.
    const olGrab = document.getElementById('#todo-list').innerText;
    let i = oleGrab -1;
    
    // Remove all its children.
    olGrab.removeChild(olGrab.childNodes[i]);
    // The way I like to do that is to continue to remove children as long as
    // there are some to remove.
    // Look at the methods `.hasChildNodes` and `removeChild`.
    // There are other ways too, though. Feel free to poke around.

}