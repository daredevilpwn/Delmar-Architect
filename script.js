 $(document).ready(function(){
    var currentPic = 0;
    var numOfPics = 0;
   $(".container img").hide();
   $(".container img").eq(currentPic).show();
    numOfPics = $(".container img").length;
    $(".next").on("click", function(){
     
         if(currentPic < numOfPics){
             $(".container img").eq(currentPic).hide();
             currentPic = currentPic+1;
             $(".container img").eq(currentPic).show();
              
             
             if(currentPic == 7){
             currentPic = 0;
             $(".container img").eq(currentPic).show();
         }// nested if
        

         }// end if
         
          
    });//end event listener
    
    
    $(".prev").on("click", function(){
        if(currentPic < numOfPics){
            $(".container img").eq(currentPic).hide();
             currentPic = currentPic-1;
             $(".container img").eq(currentPic).show();
              
            
            if(currentPic == -1){
             currentPic = numOfPics -1;
             $(".container img").eq(currentPic).show();
            
            
        } //end nested if
        
        }// end if
            
    });
});//end main
