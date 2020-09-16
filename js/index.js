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


    var strUser = element.value;
    if (strUser === "Tour") {
        console.log("inside tour");


        document.getElementById("tourPlace").classList.remove("hide");
        document.getElementById("tourPlace").classList.add("show");

        document.getElementById("fromTo").classList.remove("show");
        document.getElementById("fromTo").classList.add("hide");

        console.log("inside tour 4");

    } else {
        console.log("inside else tour1");
        document.getElementById("tourPlace").classList.remove("show");
        console.log("inside else tour 2");
        document.getElementById("tourPlace").classList.add("hide");
        if (strUser === "One way" || strUser === "Two way") {
            console.log("inside else tour if 1");
            document.getElementById("fromTo").classList.remove("hide");
            console.log("inside else tour if 1");
            document.getElementById("fromTo").classList.add("show");
        } else {

            document.getElementById("fromTo").classList.remove("show");

            document.getElementById("fromTo").classList.add("hide");
        }
    }
}

$(document).on('click', '.modal', function(){
    choises();
    });