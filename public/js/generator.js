$(function() {
  var increment= 1;
       $.fn.xenova = function() {
            //alert(xe-question);
              var xe_count=parseInt($.cookie('xe_count', 0));
              //$.cookie('xe_count');
               var xe_data = '<div class="qna-container'+increment+'"><div class="xe-question">'+$('#xe-question-container').val()+'</div><div class="xe-answer">'+$('#xe-answer-container').val()+'</div><button class="btn xe-edit" >Edit</button><button class="btn xe-delete">Delete</button></div>';
                       xe_theme = {
                               display: "block",
                               position:"fixed",
                               right:"0px",
                               bottom:"0px",
                               overflow: "hidden",
                               margin: "4px 0px",
                               padding:"10px",
                               border: "1px solid rgb(59, 173, 214)",
                               color: "rgb(255, 255, 255)",
                               width: "310px",
                               cursor: "pointer",
                               height: "auto",
                               background: "rgb(120, 197, 231)"
                       },
               init = function() {
                       $('.panel-body').append(xe_data );
                        xe_count =$.cookie('xe_count', 0);
                        //console.log(xe_count);
                               /*.find('div.mascotcls')
                               .html( terms.termsOne[0].Q ).css( xe_theme )*/      
               }
               replace_init= function () {
                 $('.panel-body').replaceWith(xe_data);
               }
               init();
               increment++;

               $(".xe-edit").on('click', function() {
                  $('#xe-question-container').val($(this).parent().find('div.xe-question').text());
                  $('#xe-answer-container').val($(this).parent().find('div.xe-answer').text());
                  
                  if($('#xe-question-container').val() != " " || $('#xe-answer-container').val() != " "){
                    var r = confirm("Your data will be lost!!! Please update and add again.");
                    if (r == true) {
                      $(this).parent().remove();
                    }
                  }else{
                    $(this).parent().remove();
                  }
                });
               $(".xe-delete").on('click', function() {
                  //Delete Button Signature
                  //When click on Delete Action Trigger
                  // $('.qna-container').remove();
                  
                  $(this).parent().remove();
                  
                  //  console.log("Delete");
                });
               

       }
       
  $(document).ready(function(){
    var edit_mode= false;
    if(edit_mode){
      //console.log("edit mode is on");
    }else{
      $(".xe-add").on('click', function() {
        if($('#xe-question-container').val()===""){
          //console.log("Null Q");
        }else if($('#xe-answer-container').val()===""){
          //console.log("Null A");

        }else{
          $( "body" ).xenova();
          $('#xe-question-container').val("");
          $('#xe-answer-container').val("");
          var xe_count= parseInt($.cookie('xe_count'));
          //console.log(parseInt($.cookie('xe_count'))+1);
          $.cookie('xe_count', xe_count);
        }
      }); 

      $("#xe-update").on('click', function() {
        
      });
      //console.log("edit mode is OFF");


    }
  });


})