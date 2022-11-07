document.cookie ='safeCookie1=foo; SameSite=Lax';
document.cookie ="safeCookie2=foo";
document.cookie ="crossCookie=bar; SameSite=None;Secure";

$(document).ready(function(){
    $('.progress-inner').each(function(){
        let $this = $(this);
        let per = $this.attr('per');
        $this.animate({
            width: per + '%'
        });
    });

    $('.menu_btn').on('click',function(){
        $(this).toggleClass('on');

        if($('.m_gnb').is(":visible")){
            $('.m_gnb').stop().slideUp();
            $('.m_gnb > li > a').removeClass('underline');
        }
        else{
            $('.m_gnb').stop().slideDown();
        }
    });

    $('.m_gnb > li').on('click',function(ev){
        ev.preventDefault(); //a 태그 기능정지
        
        if( $(this).find('.subs').is(':visible')){
            $(this).find('.subs').stop().slideUp(500);
        }else{
            $('.m_gnb > li .subs').stop().slideUp(500);
            $(this).find('.subs').stop().slideDown(500);
        }
    });
});