function newLiItem(){

/* List items are created as li elements, with input value determined by
the value entered into the input id. List items will append the value of
the input*/
let li = $('<li></li>');
   let inputValue = $('#input').val();
   li.append(inputValue);

   if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li)
      }

  function crossOut() {
     li.toggleClass('strike');
     	  }
          li.on('dblclick',function crossOut(){li.toggleClass('strike');
            });

  let crossOutButton =$('<crossOutButton></crossOutButton');
    crossOutButton.append(document.createTextNode('x'));
      li.append(crossOutButton);
        crossOutButton.on('click', deleteListItem);
    function deleteListItem(){
      li.addClass('delete');
        };
    $('#list').sortable()
  }
  /*When I try this within the newLiItem function I don't see
  any results. When I push it outside of the function the
  new item will be added for about half a second and then
  vanish. Not sure what's happening here.

  $('#input').on('keydown',function(event){
    if(event.which === 13){
      $('#button').click();
    }
  });
  */
