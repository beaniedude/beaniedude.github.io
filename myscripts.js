// $( document ).ready(function(){
//     // without animation
//     /*
//     $("#close-btn").click(function(){
//        $(".small-image").removeClass('active');
//       $("#show_image_popup").hide();
//     })

const { artData } = require("./artData");

  
  
//     $(".small-image").click(function(){
//        // add active class
//        $(this).addClass('active');
//       var image_path = $(this).attr('src'); 
//       $("#show_image_popup").hide();
//       // now st this path to our popup image src
//       $("#show_image_popup").show();
//       $("#large-image").attr('src',image_path);
  
//     })
//   */
  
//     // with animation  
  
//       $("#close-btn").click(function(){
//          // remove active class from all images
//         $(".small-image").removeClass('active');
//         $("#show_image_popup").slideUp();
//       })
  
//       $(".small-image").click(function(){
//           // remove active class from all images
//          $(".small-image").removeClass('active');
//         // add active class
//          $(this).addClass('active');
  
//         var image_path = $(this).attr('src'); 
//         $("#show_image_popup").fadeOut();
//         // now st this path to our popup image src
//         $("#show_image_popup").fadeIn();
//         $("#large-image").attr('src',image_path);
  
//       })
  
//   })

  var small_images  = document.getElementsByClassName("small-image");
  var show_image_popup  = document.getElementById("show_image_popup");
  var large_image  = document.getElementById("large-image");
  var close_btn = document.getElementById("close-btn");
  
  //reading in the paintingData from an external csv
  
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

      //finding the corresponding painting data
      //paintingData.title = 'hello'

      //finding the filename of the postcard
      id_of_painting = src_val.split('/')[src_val.split('/').length-1]
      
      //setting the correct data
      var artistString = '<em>'+artData[id_of_painting]["artist"]+'</em>'+' ('+artData[id_of_painting]['nationality']+', '+artData[id_of_painting]['yob']+'-'+artData[id_of_painting]['yod']+')';
      var titleString = '<i><b>'+artData[id_of_painting]['title']+',</i></b>'+' '+artData[id_of_painting]['paintingDate'];
      var mediumString = artData[id_of_painting]['medium'];
      var extraLinkString = 'For more information please visit <a href='+artData[id_of_painting]["extraLink"]+'> this site</a>.';
      document.getElementById("title").innerHTML = titleString;
      document.getElementById("artist").innerHTML = artistString;
      document.getElementById('medium').innerHTML = mediumString;
      document.getElementById('comment').innerHTML = artData[id_of_painting]['comment']
      document.getElementById('extraLink').innerHTML = extraLinkString
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


