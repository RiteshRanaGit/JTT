function hedading(x) {
    if (x.matches) {
        document.getElementById("slide1Heading").innerHTML = 'Sonu <br> Tour & Travels';
        document.getElementById("slide2Heading").innerHTML = 'Sonu <br> Tour & Travels';
        document.getElementById("slide3Heading").innerHTML = 'Sonu <br> Tour & Travels';
        document.getElementById("slide4Heading").innerHTML = 'Sonu <br> Tour & Travels';

    }
}


var x = window.matchMedia("(max-width: 721px)");
hedading(x);

function choises(element) {


    var choisesName = element.value;
    function place(strUser){
        if (strUser === "Tour") {
        


            document.getElementById("tourPlace").classList.remove("hide");
            document.getElementById("tourPlace").classList.add("show");
    
            document.getElementById("fromTo").classList.remove("show");
            document.getElementById("fromTo").classList.add("hide");
    
            
    
            
    
        } else {
            
            
            document.getElementById("tourPlace").classList.remove("show"); 
            document.getElementById("tourPlace").classList.add("hide");
    
            if (strUser === "One way" || strUser === "Two way") {
                
                document.getElementById("fromTo").classList.remove("hide");
                document.getElementById("fromTo").classList.add("show");
    
                
    
            } else {
    
                document.getElementById("fromTo").classList.remove("show");
    
                document.getElementById("fromTo").classList.add("hide");
            }
        }
    }
    place(choisesName);

    function dateTogle(strUser){
        if (strUser === "One way") {
        


            document.getElementById("pick-date").classList.remove("hide");
            document.getElementById("pick-date").classList.add("show");
    
            document.getElementById("pick-drop-date").classList.remove("show");
            document.getElementById("pick-drop-date").classList.add("hide");
    
            
    
            
    
        } else {
            
            document.getElementById("pick-date").classList.remove("show");
            document.getElementById("pick-date").classList.add("hide");

            
    
            if (strUser === "Tour" || strUser === "Two way") {
                
                document.getElementById("pick-drop-date").classList.remove("hide");
                document.getElementById("pick-drop-date").classList.add("show");
    
                
    
            } else {
    
                document.getElementById("pick-drop-date").classList.remove("show");
                document.getElementById("pick-drop-date").classList.add("hide");
            }
        }
    }
    dateTogle(choisesName);
}



        // document.getElementById("pick-drop-date").classList.remove("hide");
        // document.getElementById("pick-drop-date").classList.add("show");

        // document.getElementById("pick-drop-date").classList.remove("show");
        // document.getElementById("pick-drop-date").classList.add("hide");