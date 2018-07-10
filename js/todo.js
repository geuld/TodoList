var id = 0;
var liste = [];

function newToDo(){
    $('#ajout').slideToggle();
}


function listToDo(){
    
    id++;
    var nom = $('#newToDo').val();
    console.log(nom) + console.log(id);
   
    $("tbody").append('<tr><th scope="row">' + id + '</th><td>' + nom + '</td><td><button class="btn btn-success valid col-4" id="valid' + id + '"><i class="fas fa-check"></i></button></td><td><button class="btn btn-danger suppr col-4" id="suppr'+ id + '"><i class="fas fa-trash"></i></button></td></tr>');
  
}

function valid(){
    console.log("ToDo validé");
}

function suppr(){      
    console.log("on supprime");
}

$('body').on('click', '.valid', function(){
    $(this).parents('tr').addClass('bleu'); 
    $(this).parents('td').html(''); 
    console.log("to do validé");
});

$('body').on('click', '.suppr', function(){     
    $(this).parents('tr').html(''); 
    console.log("on supprime");
});

$(document).ready(function(){
    $("#boutton").on("click", newToDo);    
    $("#ajoutTabl").on("click", listToDo);
});



