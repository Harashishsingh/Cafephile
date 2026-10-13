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

$(document).ready(function(){
    $(".sun").hide()
    $(".moon").click(function(){
        $(".parent2").addClass("light-dark")
        $(".sun").show()
        $(".moon").hide()
    })
    $(".sun").click(function(){
        $(".parent2").removeClass("light-dark")
        $(".sun").hide()
        $(".moon").show()
    })
})
$(document).ready(function(){
    $(".sun").hide()
    $(".moon").click(function(){
        $(".parent3").addClass("dark")
        $(".sun").show()
        $(".moon").hide()
    })
    $(".sun").click(function(){
        $(".parent3").removeClass("dark")
        $(".sun").hide()
        $(".moon").show()
    })
})


window.addEventListener('scroll',function(){
ab=this.document.getElementsByClassName('fixed-top')[0];

if(window.scrollY > 210){
           ab.style.backgroundColor= "black"
     
        }else{
         
         ab.style.backgroundColor= "transparent"
        }
})
