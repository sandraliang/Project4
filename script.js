$(document).ready(function(){
  $(".enter").mouseenter(function(){
  	$("<audio></audio>").attr({
  		'src':'music/bell.mp3',
  		'volume':0.3,
  		'autoplay':'autoplay'
  	}).appendTo("body");
  });

document.getElementById("bgmusic").volume = 0.3;

$("div:eq(0)").show();


$("div:eq(0)").click(

function(){$("div:eq(1)").css("display","block");
$(".choice").fadeIn("slow");
$("li:eq(0)").addClass("g3");
$("li:eq(1)").addClass("g4");
$("li:eq(2)").addClass("g4");
$("<span>I am great!</span>").appendTo("li:eq(0)");
$("<span>I'm alright.</span>").appendTo("li:eq(1)");
$("<span>I dunno... kinda stressed.</span>").appendTo("li:eq(2)");
$("#voice").attr("src","music/voice/Greet.mp3");
$(this).hide();

/*$("li:eq(0)").click(
function(){

$("div:eq(2)").show();
$("div:eq(1)").hide();
$("img").attr("src","img/yuika/happy.gif");
$(".choice").fadeOut("slow");
});

$("li:eq(1),li:eq(2)").click(
  function(){
  $("div:eq(3)").show();
  $("div:eq(1)").hide();
  $("img").attr("src","img/yuika/worry.gif");
  $("li:eq(2)").hide();
  $("li:eq(0)").text("Yes");
  $("li:eq(1)").text("No");
});*/

});

$(".choice").on("click",".g3", function(){
  $("div:eq(2)").show();
  $("div:eq(1)").hide();
  $("div:eq(8)").hide();
  $("div:eq(10)").hide();
  $("img").attr("src","img/yuika/happy.gif");
  $("#voice").attr("src","music/voice/Happy.mp3");
  $(".choice").fadeOut("slow");
});

$(".choice").on("click",".g4", function(){
  $("div:eq(3)").show();
  $("div:eq(1)").hide();
  $("img").attr("src","img/yuika/worry.gif");
  $("li:eq(0)").removeClass("g3");
  $("li:eq(1)").removeClass("g4");
  $("li:eq(2)").removeClass("g4");
  $("li:eq(0)").addClass("g6");
  $("li:eq(1)").addClass("g5");
  $("li:eq(2)").hide();
  $("li:eq(0)").text("Yes");
  $("li:eq(1)").text("No");
  $("#voice").attr("src","music/voice/Ask.mp3");
});

$(".choice").on("click",".g5", function(){
  $("div:eq(4)").show();
  $("div:eq(3)").hide();
  $("div:eq(8)").hide();
  $("img").attr("src","img/yuika/normal.gif");
  $(".choice").fadeOut("slow");
  $("#voice").attr("src","music/voice/Ok.mp3");
});

$(".choice").on("click",".g6", function(){
  $("div:eq(5)").show();
  $("div:eq(3)").hide();
  $("img").attr("src","img/yuika/worry.gif");
  $(".choice").fadeOut("slow");
  $("#voice").attr("src","music/voice/wt.mp3");

});

$("div:eq(5)").click(
function(){
$("form").show();
});

$("#submit").click(
  function(){

    /*if( $("#worry").val().length === 0 ) {
           alert("Please tell me what worries you!");
       }
       else{*/
         $("form").hide();
         $("div:eq(6)").show();
         $("div:eq(5)").hide();
         $("img").attr("src","img/yuika/normal.gif");
         $("#voice").attr("src","music/voice/Nwory.mp3");
});

$("div:eq(6)").click(
function(){
  $("div:eq(7)").show();
  $("div:eq(6)").hide();
  $(".content").css("background","white url(img/yuika/yuikani.gif) no-repeat 0 0");
  $(".content").css("background-size","cover");
  $(".content").css("background-position","center");
  $(".content").css("-webkit-animation","none");
  $(".yuika").hide();
$("#voice").attr("src","music/voice/hhm.mp3");
});

$("div:eq(7)").click(
function(){
$("div:eq(8)").show();
$("div:eq(7)").hide();
$(".content").css("background","white url(img/mainbg.png) repeat 0 0");
$(".content").css("-webkit-animation","slide 20s linear infinite");
$(".yuika").show();
$("img").attr("src","img/yuika/happy.gif");
$("#voice").attr("src","music/voice/Happy.mp3");
$(".choice").fadeIn();
$("li:eq(2)").show();
$("li:eq(0)").addClass("g3");
$("li:eq(1)").addClass("g5");
$("li:eq(0)").removeClass("g6");

$("li:eq(2)").addClass("g10");
$("li:eq(0)").text("I am Happy!");
$("li:eq(1)").text("I am alright.");
$("li:eq(2)").text("I am depressed.");

var count =0;
$("li:eq(2)").on('click',function(){

	count = count +1;
	if(count == 3){
	$('div:eq(8)').hide();
  $("div:eq(9)").hide();
  $("div:eq(10)").show();
  $(".choice").fadeIn("slow");
  $("li:eq(0)").removeClass("g6");
  $("li:eq(1)").removeClass("g5");
  $("li:eq(2)").removeClass("g10");
  $("li:eq(0)").addClass("g3");
  $("li:eq(1)").addClass("g3");
  $("li:eq(2)").addClass("g11");
  /*$("li:eq(0)").text("I am Happy!");
  $("li:eq(1)").text("I am Happy!");
  $("li:eq(2)").text("...but I am depressed.");
  $("img").attr("src","img/yuika/crazy1.gif");*/
	}
});});

$(".choice").on("click",".g10", function(){
  $("div:eq(9)").show();
  $("div:eq(8)").hide();
  $("img").attr("src","img/yuika/worry.gif");
  $(".choice").fadeOut("slow");
$("#voice").attr("src","music/voice/wt.mp3");
});

$("div:eq(9)").click(
function(){
  $("div:eq(7)").show();
  $("div:eq(9)").hide();
  $(".content").css("background","white url(img/yuika/yuikani.gif) no-repeat 0 0");
  $(".content").css("background-size","cover");
  $(".content").css("background-position","center");
  $(".content").css("-webkit-animation","none");
  $(".yuika").hide();
$("#voice").attr("src","music/voice/hhm.mp3");
});

$(".choice").on("click",".g11", function(){
  $("div:eq(10)").show();
  $("div:eq(8)").hide();
$("#voice").attr("src","music/voice/crazy01.mp3");
  $("img").attr("src","img/yuika/crazy2.gif");
  $("#bgmusic").attr("src","music/crazymain.mp3");
  $("li:eq(0)").text("I am Happy!");
  $("li:eq(1)").text("I am Happy!");
  $("li:eq(2)").text("...but I am depressed.");
  $("img").attr("src","img/yuika/crazy1.gif");
  $("li:eq(2)").removeClass("g11");
  $("li:eq(2)").addClass("g12");

});
$(".choice").on("click",".g12", function(){
  $("#voice").attr("src","music/voice/crazy.mp3");
  $("div:eq(11)").show();
  $("div:eq(8)").hide();
  $("div:eq(10)").hide();
  $("img").attr("src","img/yuika/crazy2.gif");
  $(".choice").fadeOut("slow");
  $(".content").css("background","white url(img/yuika/crazy2.gif) repeat-x 0 0");
  $(".content").css("background-size","contain");

});

$("div:eq(11)").click(
function(){
  $("div:eq(11)").hide();
  $("div:eq(12)").show();
$("#voice").attr("src","music/voice/hhm2.mp3");
$("#voice").attr("loop","loop");
});


$(".s1").click(
function(){
$(".s2").show();
  });

  $(".s2").click(
  function(){
  $(".s3").show();
    });

    $(".s3").click(
    function(){
    $(".s4").show();
      });


});
