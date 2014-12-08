<script type="text/javascript">
$(document ).ready(function() {
  //Question & answer Generator
  var edit_mode= false;
  
  $( ".xe-add" ).on('click', function() {
    //alert( "Test" );
    if(edit_mode){
      //replace div #Q1;
      //alert(true);
    }else{
      //inject div into .panel-body
      //<div> #Q1 
      //#A1</div>
      $('<div class="qna-container"><div class="xe-answer">Question 1<button class="btn xe-edit" >Edit</button></div><div class="xe-answer">Answer 1</div></div>').appendTo('.panel-body');
      //alert(false);

    }
    $( ".xe-edit" ).on('click', function() {
    console.log("edit");
    alert( "Edit" );
    // body...
      //Edit Button signature
      //when click on Edit Button Action Trigger
      //insert the Question into #xe-question => Qx  & #xe-answer => Ax
      //
      //edit_mode= true;
      //xe-question.val(#Q1);
      //xe-answer.val(#A1);

    /*if(edit_mode){
      //replace div #Q1;
      //alert(true);
    }else{
      //inject div into .panel-body
      //<div> #Q1 
      //#A1</div>
      $('<div class="qna-container"><div class="xe-answer">Question 1<button class="btn xe-edit">Edit</button><button class="btn xe-delete">Delete</button></div><div class="xe-answer">Answer 1</div></div>').appendTo('.panel-body');
      //alert(false);

    }*/
  });
  });

  

  $( ".xe-delete" ).click(function() {
    //alert( "Test" );
    if(edit_mode){
      //replace div #Q1;
      //alert(true);
    }else{
      //inject div into .panel-body
      //<div> #Q1 
      //#A1</div>
      $('<div class="qna-container"><div class="xe-answer">Question 1<button class="btn xe-edit">Edit</button></div><div class="xe-answer">Answer 1</div></div>').appendTo('.panel-body');
      //alert(false);

    }
  });


/*

function xe_add() {
    alert("TEST");
    // body...
    if(edit_mode){
      replace div #Q1;
    }else{
      //inject div into .panel-body
      <div> #Q1 
      #A1</div>

    }
  }

    function xe-edit(argument) {
      // body...
      //Edit Button signature
      //when click on Edit Button Action Trigger
      //insert the Question into #xe-question => Qx  & #xe-answer => Ax
      //
      edit_mode= true;
      xe-question.val(#Q1);
      xe-answer.val(#A1)
      

    }

    function xe-delete (argument) {
      // body...
      //Delete Button Signature
      //When click on Delete Action Trigger
      div#xe1.remove();
    }
  }

  function xe-generator (argument) {
    //Generate all id & value into Json Format
    term{
      [key=> Q1,
      value=> A1
      ] 

    }
  }*/
});

  

</script>