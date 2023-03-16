$(document).ready(function(){
    let num;
    num = 0;
    $(".boxBottom h4").click(function(){
        num += 1;
        if(num == 1){
            $("*").css("font-family", "Franklin Gothic Book")
            $("*").css("background-color", "#F5EAEA")
            $(".boxBottom").css("background-color", "#850000")
            $("#endText").css("background-color", "#850000")
            $("#endText").css("color", "#BAD7E9")
            $(".box").css("background-color", "#850000")
            $("#layout1").slideUp("slow")
            $("#layout1").addClass("hide")
            $("#layout2").slideDown("slow")
            $("#layout2").removeClass("hide")
        }
        else{
            num = 0;
            alert("Thats all i have. still working on more:)")
            $("*").css("font-family", "Calibri")
            $("*").css("background-color", "#fcffe7")
            $(".boxBottom").css("background-color", "#2b3467")
            $("#endText").css("background-color", "#2b3467")
            $("#endText").css("color", "#bad7e9")
            $(".introduction").css("background-color", "#2b3467")
            $("#layout2").slideUp("slow")
            $("#layout2").addClass("hide")
            $("#layout1").slideDown("slow")
            $("#layout1").removeClass("hide")
        }
    })
});