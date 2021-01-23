var images = ["Nanna.jpeg","IMG_2993.jpg","Dhanush.jpg"]
var names = ["Mallikarjun","Pushpalatha and Manojna","Dhanush"]
var i = 0;
function nextslide(){
    document.getElementById("CartoonFam").src = images[i]
    document.getElementById("nameMember").innerHTML = names[i]
    i++;
    if (i == 3){
        i = 0
    }
}