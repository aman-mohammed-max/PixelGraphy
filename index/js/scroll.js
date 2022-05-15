$(document).scroll(function() {
    navbarScroll();
  });
  
  function navbarScroll() {
    var y = window.scrollY;
    if (y > 10) {
        window.scrollTo(0, 100000);        
    }
  }