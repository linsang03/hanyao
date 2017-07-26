var setTab;
   $(document).ready(function(){ 
     $(".smallImg li").each(function(index){   
    $(this).mouseover(function(){
    var now=$(this);
    setTab=setTimeout(function(){
    $("div.bigImg").removeClass("bigImg");
    $(".smallImg li.currentImg").removeClass("currentImg");
      $(now).addClass("currentImg");
    $(".infor_right div").eq(index).addClass("bigImg"); 
  },50);
  })
  .mouseout(function(){
       clearTimeout(setTab);
  }); 
 });
    });