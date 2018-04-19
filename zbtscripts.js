
function onHover(img) {
    //alert(img.src);
    if (img.src == "file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/fb.png") {
        img.src = "file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/fbhover.png";

    } else if (img.src == "file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/insta.png") {
        img.src="file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/instahover.png";

    } else if (img.src == "file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/twitter.png"){
        img.src="file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/twitterhover.png";
    }

}

function mouseAway(img) {

    if (img.src == "file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/fbhover.png") {
        img.src = "file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/fb.png";

    }else if(img.src == "file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/instahover.png"){
        img.src = "file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/insta.png";

    }else if(img.src == "file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/twitterhover.png"){
        img.src="file:///Users/natesmolczyk/Desktop/WebDev/MC%20ZBT/photos/twitter.png"

    }
}


