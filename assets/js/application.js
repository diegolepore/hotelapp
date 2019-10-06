$(document).ready(function(){
    
    // Change Tabs
    $(".TabsNavigation__list__item").on("click", function(){
        var dataId = $(this).data("tab-content-id");
        $(".TabContent").addClass("is-hidden");
        $("#"+dataId).removeClass("is-hidden"); 

        $(this)
            .siblings(".TabsNavigation__list__item")
            .removeClass("TabsNavigation__list__item--active")
            .end().addClass("TabsNavigation__list__item--active");
    });

    // Pick "régimen" radio option
    $(".Regime__item").on("click", function(){
        $(this).siblings().removeClass("Regime__item--active");
        $(this)
            .addClass("Regime__item--active")
            .find(".RadioSelection__input")
            .prop("checked", "checked");
    });

    // Toggle Collapsible main content
    $(".Collapsible__trigger").on("click", function(){
        $(this)
            .siblings(".Collapsible__content")
            .toggleClass("Collapsible__content--show")
            .end()
            .toggleClass("Collapsible__trigger--active");
    });

    // Toggle "Más información"
    $(".Collapsible__button").on("click", function(){
        $(this)
            .parents(".Collapsible__item")
            .find(".Collapsible__content__bottom")
            .toggleClass("Collapsible__content__bottom--show");

        $(this).toggleClass("Collapsible__button--active");
    });

});