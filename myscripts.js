  // javascript
  
  var small_images  = document.getElementsByClassName("small-image");
  var show_image_popup  = document.getElementById("show_image_popup");
  var large_image  = document.getElementById("large-image");
  var close_btn = document.getElementById("close-btn");
  var text_show_area = 

   for(var i=0; i< small_images.length; i++){
  
     small_images[i].addEventListener("click", function(){
     // remove active class from every images
       for(var j=0; j< small_images.length; j++){
        small_images[j].classList.remove('active');
       }
       // end
   
       this.classList.add('active'); // add active class to this image
      
       var src_val = this.src;
       large_image.src = src_val;
       showModal();
     });
   }
  
  
   function showModal(){
     show_image_popup.style.display = 'block';
   }
  
   close_btn.addEventListener("click", function(){
     // before colose the modal we need to remove active class
     for(var i=0; i< small_images.length; i++){
       small_images[i].classList.remove('active');
     }
     // end
     closeModal();
   });
  
   function closeModal(){
     show_image_popup.style.display = 'none';
   }

   //const { parse } = require("csv-parse");
   //const fs = require("fs");
   
   // specify the path of the CSV file
   //const path = "data/art_data.csv";
   
   // Create a readstream
   // Parse options: delimiter and start from line 1
   //function read_in_csv(){
    //fs.createReadStream(path)
     //   .pipe(parse({ delimiter: ",", from_line: 1 }))
      //  .on("data", function (row) {
        // executed for each row of data
     //   console.log(row);
      //  })
       // .on("error", function (error) {
        // Handle the errors
      //  console.log(error.message);
      //  })
      //  .on("end", function () {
        // executed when parsing is complete
      //  console.log("File read successful");
      //  });
   // }