$('body').append(`    <div class="loader" id="loadingDiv">
        <div class="up">
          <div class="loaders">
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
          </div>
          <div class="loadersB">
            <div class="loaderA">
              <div class="ball0"></div>
            </div>
            <div class="loaderA">
              <div class="ball1"></div>
            </div>
            <div class="loaderA">
              <div class="ball2"></div>
            </div>
            <div class="loaderA">
              <div class="ball3"></div>
            </div>
            <div class="loaderA">
              <div class="ball4"></div>
            </div>
            <div class="loaderA">
              <div class="ball5"></div>
            </div>
            <div class="loaderA">
              <div class="ball6"></div>
            </div>
            <div class="loaderA">
              <div class="ball7"></div>
            </div>
            <div class="loaderA">
              <div class="ball8"></div>
            </div>
          </div>
        </div>
      </div>
      `);
$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
}