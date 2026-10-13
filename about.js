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
        $(".parent-2").addClass("light-dark")
        $(".sun").show()
        $(".moon").hide()
    })
    $(".sun").click(function(){
        $(".parent-2").removeClass("light-dark")
        $(".sun").hide()
        $(".moon").show()
    })
})
$(document).ready(function(){
    $(".sun").hide()
    $(".moon").click(function(){
        $(".parent-3").addClass("light-dark")
        $(".sun").show()
        $(".moon").hide()
    })
    $(".sun").click(function(){
        $(".parent-3").removeClass("light-dark")
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

//     let count=0;

//     function timerstart(){
//       timerid1 = setInterval(start,0.1)
//     }
//       function start(){
//           count++
//       if(count==2000){
//           clearInterval(timerid1)
//       }
//       document.getElementsByClassName("timer-1")[0].innerHTML=`${count}`
//   }
//     timerstart()
    let count1=480;
    let count2=1600
    let count3=450
    let count4=8000

    function timerstartt(){
      timerid = setInterval(start,0.01)
      timerid2 = setInterval(start2,0.01)
      timerid3 = setInterval(start3,0.01)
      timerid4 =setInterval(start4,0.01)
    }
      function start(){
          count1++
      if(count1==750){
          clearInterval(timerid)
      }
      document.getElementsByClassName("timer-2")[0].innerHTML=`${count1}`
  }
  function start2(){
              count2++
          if(count2==2000){
              clearInterval(timerid2)
          }
          document.getElementsByClassName("timer-1")[0].innerHTML=`${count2}`
      }

    timerstartt()

    function start3(){
        count3++
    if(count3==960){
        clearInterval(timerid3)
    }
    document.getElementsByClassName("timer-3")[0].innerHTML=`${count3}`
}

timerstarttt()

function start4(){
    count4++
if(count4==10000){
    clearInterval(timerid4)
}
document.getElementsByClassName("timer-4")[0].innerHTML=`${count4}`
}

timerstarttt()