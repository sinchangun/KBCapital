$(".head_left_txt>ul>li").mouseover(function () {
    $(".header").addClass("white_space")
    let index = $(this).index();
    $(".head_left_txt>ul>li").eq(index).addClass("head_dot")
});

$(".head_left_txt>ul>li").mouseout(function () {
    $(".header").removeClass("white_space")
    $(".head_left_txt>ul>li").removeClass("head_dot")
});

$(".ab_arrow .ab_arrow_first").click(function () {
    $(".wrap_left").addClass("active")
    $("#wrap_right").addClass("active")
    $(".head_left_txt").addClass("active")
    $(".head_right_txt").addClass("active")
    let wrapRight = $('#wrap_right.active .container');
    if ($(window).width() <= 1600) {
        wrapRight.css('padding-left', '970px'); 
    } else {
        wrapRight.css('padding-left', 'calc(55% + 70px)'); 
    }
})

$(".ab_arrow .ab_arrow_second").click(function () {
    $(".wrap_left").removeClass("active")
    $("#wrap_right").removeClass("active")
    $(".head_left_txt").removeClass("active")
    $(".head_right_txt").removeClass("active")
    $('#wrap_right .container').css('padding-left', '0')
})

$(document).ready(function() {
    function updateMargin() {
        let wrapRight = $('#wrap_right.active .container');
        if ($(window).width() <= 1600) {
            wrapRight.css('padding-left', '970px'); 
        } else {
            wrapRight.css('padding-left', 'calc(55% + 70px)'); 
        }
    }
    updateMargin();
    $(window).resize(updateMargin); // window가 resize되면 updateMargin을 실행
});


let ab_btn = $(".ab_dot ul li")
let ab_cont = $(".ab_container")
let ab_pause = $(".ab_pause")
let ab_Larrow = $(".ab_left_arrow")
let ab_Rarrow= $(".ab_right_arrow")

let index_ab_cont = 0;

ab_btn.eq(0).addClass("ab_active")
ab_cont.hide().eq(0).fadeIn()
ab_btn.click(function () {
    let index_ab_btn = $(this).index()
    ab_btn.removeClass("ab_active")
    ab_btn.eq(index_ab_btn).addClass("ab_active")
    ab_cont.fadeOut().eq(index_ab_btn).fadeIn()
    index_ab_cont = index_ab_btn ;
})


function slide() {
    if(index_ab_cont < 3){
        index_ab_cont++
        ab_cont.fadeOut().eq(index_ab_cont).fadeIn()
        ab_btn.removeClass("ab_active")
        ab_btn.eq(index_ab_cont).addClass("ab_active")
    }else{
        index_ab_cont = 0;
        ab_cont.fadeOut().eq(index_ab_cont).fadeIn()
        ab_btn.removeClass("ab_active")
        ab_btn.eq(index_ab_cont).addClass("ab_active")
    }
}

/* setInterval(slide, 5000); */

let stopInterval = setInterval(slide, 5000);

let stopButton = document.querySelector(".ab_pause.stop")
let startButton = document.querySelector(".ab_pause.start")

stopButton.addEventListener("click",function(){
    clearInterval(stopInterval);
    stopButton.style.display = "none";
    startButton.style.display = "block";
    
})

startButton.addEventListener("click",function(){
    setInterval(slide, 5000);
    startButton.style.display = "none";
    stopButton.style.display = "block";
})

ab_Larrow.click(function(){
    if(index_ab_cont<1){
        alert("왼쪽으로 더이상 움직일수 없습니다.")
    }else{
        index_ab_cont--
        ab_cont.fadeOut().eq(index_ab_cont).fadeIn()
        ab_btn.removeClass("ab_active")
        ab_btn.eq(index_ab_cont).addClass("ab_active")
    }
})
ab_Rarrow.click(function(){
    if(index_ab_cont>2){
        alert("오른쪽으로 더이상 움직일수 없습니다.")
    }else{
        index_ab_cont++
    ab_cont.fadeOut().eq(index_ab_cont).fadeIn()
    ab_btn.removeClass("ab_active")
    ab_btn.eq(index_ab_cont).addClass("ab_active")
    }
})

