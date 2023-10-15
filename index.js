var NumberOfDrum = document.querySelectorAll(".drum");

for (var i = 0; i < NumberOfDrum.length; i++) {

    NumberOfDrum[i].addEventListener("click",function (mohd){
console.log(mohd.target.innerHTML);
        var InnerHtmlOfButton = this.innerHTML;
        checkIt(InnerHtmlOfButton);

    })
}

///////////////////////////////////////////////////////////////////////////////////


    var NumberOfDrum2 = document.querySelectorAll(".drum");
    for (var i = 0; i < NumberOfDrum.length; i++) {
    NumberOfDrum2[i].addEventListener("keypress",function (select){
        // console.log(select.key);
var zezo = select.key;
checkIt(zezo);
    })
}


            
///////////////////////////////////////////////////////////////////////////////////


      function checkIt (carec) {
        switch (carec) {

            case "w":
                var audio1 = new Audio("sounds/crash.mp3");
                audio1.play();
                break;
        
                case "a":
                var audio2 = new Audio("sounds/kick-bass.mp3");
                audio2.play();
                break;
        
                case "s":
                var audio3 = new Audio("sounds/snare.mp3");
                audio3.play();
                break;
        
                case "d":
                var audio4 = new Audio("sounds/tom-1.mp3");
                audio4.play();
                break;
        
                case "j":
                var audio5 = new Audio("sounds/tom-2.mp3");
                audio5.play();
                break;
        
                case "k":
                var audio6 = new Audio("sounds/tom-3.mp3");
                audio6.play();
                break;
        
                case "l":
                var audio7 = new Audio("sounds/tom-4.mp3");
                audio7.play();
                break;
        
            default: console.log("some thing gone wrong");
                break;
        }
      } 

    
