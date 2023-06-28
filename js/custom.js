$(document).ready(function () {
  $(".values li").click(function () {
    $(".values li").removeClass("active");
    $(this).addClass("active");
    $(this)
      .closest(".wizard-fieldset")
      .find(".form-wizard-next-btn")
      .removeClass("disable");
    $(this)
      .closest(".wizard-fieldset")
      .find(".form-wizard-submit")
      .removeClass("disable");
  });
  // next button
  $(".form-wizard-next-btn,.form-wizard-submit").click(function () {
    var currentFieldset = $(this).closest(".wizard-fieldset");
    currentFieldset.removeClass("show");
    currentFieldset.next(".wizard-fieldset").addClass("show");
  });
  $(".form-wizard-submit").click(function () {
    $(".form-wizard-header").addClass("d-none");
  });
  // previous button
  $(".form-wizard-previous-btn").click(function () {
    var currentFieldset = $(this).closest(".wizard-fieldset");
    currentFieldset.removeClass("show");
    currentFieldset.prev(".wizard-fieldset").addClass("show");
  });

  $(".round_rectangle .tab_btn li").click(function () {
    // Remove 'active' class from all images
    $(".round_rectangle .card-default-image img").removeClass("active");
    // Get the class of the clicked button's parent li
    var selectedShape = $(this).attr("class");
    // Add 'active' class to the corresponding image
    $(".round_rectangle .card-default-image img." + selectedShape).addClass(
      "active"
    );
    $(this)
      .closest(".wizard-fieldset")
      .find(".form-wizard-next-btn")
      .removeClass("disable");
  });
  $(".floor_wall .tab_btn li").click(function () {
    // Remove 'active' class from all images
    $(".floor_wall .card-default-image img").removeClass("active");
    // Get the class of the clicked button's parent li
    var selectedShape = $(this).attr("class");
    // Add 'active' class to the corresponding image
    $(".floor_wall .card-default-image img." + selectedShape).addClass(
      "active"
    );
    $(this)
      .closest(".wizard-fieldset")
      .find(".form-wizard-next-btn")
      .removeClass("disable");
  });
  $(".tab_btn li").click(function () {
    $(".tab_btn li").removeClass("active"); // Remove active class from all li elements
    $(this).addClass("active"); // Add active class to the clicked li element
  });
  //   range slider
  var valMap = ["0", "30", "33", "40", "50"];
  var slider = $("#resolution-slider");

  slider.slider({
    value: 0,
    max: valMap.length - 1,
    min: 0,
    create: function (event, ui) {
      // $(".resolution-preview").html(valMap[0]);
      $(".resolution-preview").val(valMap[0]);
      updateNextButtonClass(valMap[0]);
    },
    slide: function (event, ui) {
      var sliderWidth = (ui.value / (valMap.length - 1)) * 100 + "%";
      // $(".resolution-preview").html(valMap[ui.value]);
      $(".resolution-preview").val(valMap[ui.value]);
      $(".range_slider_count span").html(valMap[ui.value] + "ft.");
      $(".ui-slider-range").css("width", sliderWidth);
      updateNextButtonClass(valMap[ui.value]);
    },
  });
  function updateNextButtonClass(value) {
    var nextButton = $(".form-wizard-next-btn");
    if (value === "0") {
      nextButton.addClass("disable");
    } else {
      nextButton.removeClass("disable");
    }
  }

  // checkbox change
  $(".checkbox").change(function () {
    $(".range_slider_count span").removeClass("d-none");
    $(".metrics-images .card-default-image img").removeClass("active");
    if ($(this).is(":checked")) {
      $(".metrics-images .card-default-image .round_class").addClass("active");
      $(".range_slider_count p").html("Diameter up to");
    } else {
      $(".metrics-images .card-default-image .rect_class").addClass("active");
      $(".range_slider_count p").html("Length up to");
    }
  });

  // click on next button
  $(".form-wizard-next-btn").click(function () {
    var parentFieldset = $(this).parents(".wizard-fieldset");
    var currentActiveStep = $(this)
      .parents(".form-wizard")
      .find(".form-wizard-steps .active");
    var next = $(this);
    var nextWizardStep = true;
    parentFieldset.find(".wizard-required").each(function () {
      var thisValue = $(this).val();

      if (thisValue == "") {
        $(this).siblings(".wizard-form-error").slideDown();
        nextWizardStep = false;
      } else {
        $(this).siblings(".wizard-form-error").slideUp();
      }
    });
    if (nextWizardStep) {
      next.parents(".wizard-fieldset").removeClass("show", "400");
      currentActiveStep
        .removeClass("active")
        .addClass("activated")
        .next()
        .addClass("active", "400");
      next
        .parents(".wizard-fieldset")
        .next(".wizard-fieldset")
        .addClass("show", "400");
      $(document)
        .find(".wizard-fieldset")
        .each(function () {
          if ($(this).hasClass("show")) {
            var formAtrr = $(this).attr("data-tab-content");
            $(document)
              .find(".form-wizard-steps .form-wizard-step-item")
              .each(function () {
                if ($(this).attr("data-attr") == formAtrr) {
                  $(this).addClass("active");
                  var innerWidth = $(this).innerWidth();
                  var position = $(this).position();
                  $(document)
                    .find(".form-wizard-step-move")
                    .css({ left: position.left, width: innerWidth });
                } else {
                  $(this).removeClass("active");
                }
              });
          }
        });
    }
  });
  //click on previous button
  $(".form-wizard-previous-btn").click(function () {
    var counter = parseInt($(".wizard-counter").text());
    var prev = $(this);
    var currentActiveStep = $(this)
      .parents(".form-wizard")
      .find(".form-wizard-steps .active");
    prev.parents(".wizard-fieldset").removeClass("show", "400");
    prev
      .parents(".wizard-fieldset")
      .prev(".wizard-fieldset")
      .addClass("show", "400");
    currentActiveStep
      .removeClass("active")
      .prev()
      .removeClass("activated")
      .addClass("active", "400");
    $(document)
      .find(".wizard-fieldset")
      .each(function () {
        if ($(this).hasClass("show")) {
          var formAtrr = $(this).attr("data-tab-content");
          $(document)
            .find(".form-wizard-steps .form-wizard-step-item")
            .each(function () {
              if ($(this).attr("data-attr") == formAtrr) {
                $(this).addClass("active");
                var innerWidth = $(this).innerWidth();
                var position = $(this).position();
                $(document)
                  .find(".form-wizard-step-move")
                  .css({ left: position.left, width: innerWidth });
              } else {
                $(this).removeClass("active");
              }
            });
        }
      });
  });
  // result
  $("#filtered_result").on('click',function(){
    $(this).closest('div').parent().removeClass('show').prev().addClass('show');
  });
});
