 $(document).ready(function() {
      $(".navLinks a").click(function(e) {
        e.preventDefault();
        var sectionId = $(this).attr("href").substring(1);
        $(".hero").removeClass("active");
        $("#" + sectionId).addClass("active");
      });
    });