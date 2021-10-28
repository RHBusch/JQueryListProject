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
  };

  $('#input').on('keydown',function(event){
     if(event.which === 13){
       event.preventDefault(); 
       $('#button').click();
       li.append(inputValue);
       $('#list').append(li);
     }
   });




 /*$('#input').keypress(function(event){
                  var keycode = (event.keyCode ? event.keyCode : event.which);
                  if(keycode == '13'){
                      $('#button').click();
                  }}) */
