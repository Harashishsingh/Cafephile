$(document).ready(function(){
    $(".dropbtn").click(function(){
        $(".dropdown-content").stop(true, true).slideToggle();
    }, function(){
        $(".dropdown-content").stop(true, true).slideToggle();
    });
});

$(document).ready(function(){
    $(".sun").hide()
    $(".moon").click(function(){
        $("body").addClass("dark")
        $(".sun").show()
        $(".moon").hide()
    })
    $(".sun").click(function(){
        $("body").removeClass("dark")
        $(".sun").hide()
        $(".moon").show()
    })
})

$(document).ready(function(){
    $(".sun").hide()
    $(".moon").click(function(){
        $(".fixed-top").addClass("dark")
        $(".sun").show()
        $(".moon").hide()
    })
    $(".sun").click(function(){
        $(".fixed-top").removeClass("dark")
        $(".sun").hide()
        $(".moon").show()
    })
})