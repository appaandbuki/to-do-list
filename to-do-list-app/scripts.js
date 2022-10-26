

//1. Adding a new item to a list of items

/* //creating li
  let li = document.createElement("li");
  //selecting the element with the id "input" and then getting its value
  let inputValue = document.getElementById("input").value;
  //taking that value from above and creating a text node of it
    let text = document.createTextNode(inputValue);
    //appending that text node to the list
    li.appendChild(text);

    if (inputValue === '') {
         alert("You must write something!");
       } else {
         let list = document.querySelector('#list');
         list.appendChild(li);
       }
    */

  //2. Crossing out an item from the list of items:
/*
//this function toggles "strike" on the Class list for "li"
   function crossOut() {
 		li.classList.toggle("strike");
 	}
//when you clikc the list, it will run the function above
 	li.addEventListener("dblclick",crossOut); */



//3(i). Adding the delete button "X":
/*//creating a cross out button
  let crossOutButton = document.createElement("crossOutButton");
  //appending a text node "x" to that button
 crossOutButton.appendChild(document.createTextNode("X"));
 //appending that button to li
 li.appendChild(crossOutButton);
//adding an event listener on the cross out button. when you click the button-
//it will run the function in step 4 (called deleteListItem
)
	crossOutButton.addEventListener("click", deleteListItem);
 */


function newItem(){
 let li = $('<li></li>');
 let inputValue = $('#input').val();
 li.append(inputValue);

 if (inputValue === '') {
   alert("You must write something!");
 } else {
   $('#list').append(li);
 }
//2. Crossing an item out:
 function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
 let crossOutButton = $('<crossOutButton></crossOutButton>');
 crossOutButton.append(document.createTextNode('X'));
 li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
  $('#list').sortable();
}
