console.log('hello');
$(document).ready(function () {
    var card=false;
    $(window).resize(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth <= 1024) {
            $(".child").removeAttr("style");
        $(".container").addClass("slds-grid_vertical");
        if(!card){
            $(".card").removeAttr("style");
            $(".icon").removeAttr("style");
            $(".text-content").removeAttr("style");
            $(".container").removeAttr("style");
        }
     }
        if (viewportWidth > 1024) {
        $(".child").css("display","block")
            if(card){
        $(".container").removeClass("slds-grid_vertical");
            }
        }
    });
    $("#card").click(() => {
        card=true;
        $("#card").addClass("selected-button")
        $("#list").removeClass("selected-button")
        $(".container").removeClass("slds-grid_vertical");
        $(".card").addClass("slds-large-size_1-of-5").removeClass("slds-large-size_11-of-12");
        $(".card").children("div:nth-child(1)").removeClass("slds-large-size_1-of-12 slds-large-order_12");
        $(".card").children("div:nth-child(2)").removeClass("slds-large-size_1-of-12");
        $(".card").children("div:nth-child(3)").removeClass("slds-large-size_3-of-12");
        $(".card").children("div:nth-child(4)").removeClass("slds-large-size_2-of-12");
        
        $(".desktop-card").css("display", "none");
        $(".mobile").css("display", "block");
        
        $(".card").css({"margin":"1% 2%","background":"white","border-bottom":"none","padding":"0 1.5%","box-shadow":"2px 2px 30px 2px rgba(0, 0, 0,0.08)"});
        $(".icon").css({"text-align": "right","padding-top":"3%"});
        $(".text-content").css({"text-align": "center","padding-top":"6%"});
        $(".container").css({"background":"none","box-shadow":"none"});
    });
    $("#list").click(() => {
        card=false;
        $("#list").addClass("selected-button")
        $("#card").removeClass("selected-button")
        $(".container").addClass("slds-grid_vertical");
        $(".card").removeClass("slds-large-size_1-of-5").addClass("slds-large-size_11-of-12");
        $(".card").children("div:nth-child(1)").addClass("slds-large-size_1-of-12 slds-large-order_12");
        $(".card").children("div:nth-child(2)").addClass("slds-large-size_1-of-12");
        $(".card").children("div:nth-child(3)").addClass("slds-large-size_3-of-12");
        $(".card").children("div:nth-child(4)").addClass("slds-large-size_2-of-12");
        
        $(".desktop-card").removeAttr("style");
        $(".mobile").removeAttr("style");
        
        $(".card").css({"margin":"0% 0%","background":"none","border-bottom":"1px solid rgba(151, 151, 151, 0.15)","padding":"1% 0%","box-shadow":"none"});
        $(".icon").css({"text-align": "center","padding-top":"0"});
        $(".text-content").css({"text-align": "left","padding-top":"0"});
        $(".container").css({"background":"white","box-shadow":"2px 2px 30px 2px rgba(0, 0, 0,0.08)"});
    });
  $(".dropdown").click(function(){
     $(this).parent().toggleClass("slds-is-open");
  });
var sidebar = document.querySelector(".sidebar");
var section = document.querySelector(".section");
var ham = document.getElementById("ham");
function toggleHamburger(){
  
  sidebar.classList.toggle("desktop")
  ham.classList.toggle("showClose")  
section.classList.toggle("slds-size_10-of-12")
    setTimeout(()=>{
        sidebar.classList.toggle("showbar")
    },10)

}
ham.addEventListener("click", toggleHamburger)
    
var classname = document.getElementsByClassName("parent");

var myFunction = function() {
 var x=this.children[1];
  x.classList.toggle("block") 
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction);
}

});







//var menuLinks = document.querySelectorAll(".menuLink")
//menuLinks.forEach( 
//  function(menuLink) { 
//    menuLink.addEventListener("click", toggleHamburger) 
//  }
//)


