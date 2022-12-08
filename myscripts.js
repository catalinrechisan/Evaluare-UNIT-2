    var i = 0; 			// Start Point
    var images = [];	// Images Array
    var time = 3000;	// Time Between Switch
         
    // Image List
    images[0] = "https://media.discordapp.net/attachments/984990982028271717/1048633272781000704/image.png?width=631&height=475";
    images[1] = "https://media.discordapp.net/attachments/984990982028271717/1048633380616552508/image.png?width=621&height=475";
    images[2] = "https://media.discordapp.net/attachments/984990982028271717/1048633460182495282/image.png?width=635&height=475";
    images[3] = "https://media.discordapp.net/attachments/984990982028271717/1048633857324351508/image.png?width=634&height=475";
    images[4] = "https://media.discordapp.net/attachments/984990982028271717/1048633909442773013/image.png";
    images[5] = "https://media.discordapp.net/attachments/984990982028271717/1048633938505121812/image.png";
    
    // Change Image
    function changeImg(){
        document.slide.src = images[i];
    
        // Check If Index Is Under Max
        if(i < images.length - 1){
          // Add 1 to Index
          i++; 
        } else { 
            // Reset Back To O
            i = 0;
        }
    
        // Run function every x seconds
        setTimeout("changeImg()", time);
    }
    
    // Run function when page loads
    window.onload=changeImg;