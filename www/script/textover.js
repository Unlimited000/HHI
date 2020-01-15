// GNU 라이센스
// MIT 라이센스 
// - 돈 안 받고 소스코드 배포. 단, 그렇게 당신이 만든 무언가도 이렇게 무료로 배포하시오.
// Apache 라이센스

//                    GNU GENERAL PUBLIC LICENSE
//                       Version 2, June 1991
//
// Copyright (C) 1989, 1991 Free Software Foundation, Inc.,
// 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
// Everyone is permitted to copy and distribute verbatim copies
// of this license document, but changing it is not allowed.
//
//                            Preamble
//
//  The licenses for most software are designed to take away your
//freedom to share and change it.  By contrast, the GNU General Public
//License is intended to guarantee your freedom to share and change free
//software--to make sure the software is free for all its users.  This
//General Public License applies to most of the Free Software
//Foundation's software and to any other program whose authors commit to
//using it.  (Some other Free Software Foundation software is covered by
//the GNU Lesser General Public License instead.)  You can apply it to
//your programs, too.
//
//  When we speak of free software, we are referring to freedom, not
//price.  Our General Public Licenses are designed to make sure that you
//have the freedom to distribute copies of free software (and charge for
//this service if you wish), that you receive source code or can get it
//if you want it, that you can change the software or use pieces of it
//in new free programs; and that you know you can do these things.
//
//  To protect your rights, we need to make restrictions that forbid
//anyone to deny you these rights or to ask you to surrender the rights.
//These restrictions translate to certain responsibilities for you if you
//distribute copies of the software, or if you modify it.
//
//  For example, if you distribute copies of such a program, whether
//gratis or for a fee, you must give the recipients all the rights that
//you have.  You must make sure that they, too, receive or can get the
//source code.  And you must show them these terms so they know their
//rights.
//
//  We protect your rights with two steps: (1) copyright the software, and
//(2) offer you this license which gives you legal permission to copy,
//distribute and/or modify the software.
//
//  Also, for each author's protection and ours, we want to make certain
//that everyone understands that there is no warranty for this free
//software.  If the software is modified by someone else and passed on, we
//want its recipients to know that what they have is not the original, so
//that any problems introduced by others will not reflect on the original
//authors' reputations.
//
//  Finally, any free program is threatened constantly by software
//patents.  We wish to avoid the danger that redistributors of a free
//program will individually obtain patent licenses, in effect making the
//program proprietary.  To prevent this, we have made it clear that any
//patent must be licensed for everyone's free use or not licensed at all.
//
//  The precise terms and conditions for copying, distribution and
//modification follow.

// 본 스크립트는 대우직업전문학교 이건정이 제작하였으며, 누구나 수정 배포할 수 있습니다.
// 본 스크립트로 재미를 좀 보셨다면, 저도 좀 재미를 볼 수 있게 아래 계좌로 후원금을 주시면 감사하겠습니다.
// 하나은행 : 123456-789-123456
// 개발일자 : 2019.11.11
// 개발자 : 이건정(qwer1234@abc.net)

// 1. 본문에서 .txtover라는 상자를 찾아서 각 상자마다 다음과 같이 이야기하겠다.
// 2. 그상자(.txtover)의 내용을 잘 저장해 두고, 그 상자를 비운다.
// 3. 그상자 안에 .compare라는 상자를 만든다.(가로 100%, 세로 지정 안함)
// 4. 아까 갈무리해둔 내용을 " " 기준으로 다진다.
// 5. 다져진 단어수 만큼 반복
    // 5-1. i번째 단어와 공백을 <span>으로 묶어서 그상자 안에있는 .compare.에 추가한다.
    // 5-2. .compare.의 높이를 재고 그 높이가 그상자(.txtover)의 높이보다 크다면
        //5-2-1. 그상자 안에있는 .compare안에있는 span중에 마지막을 지운다.
        //5-2-2. 그상자 안에있는 .compare안에 "&hellip;"을 추가한다.
        //5-2-3. 반복문을 중지한다.

// 중요! .txtover를 css로 높이 값을 조정하고 overflow: hidden;을 줘야 한다.

function textover(){
    $(".txtover").each(function(){
        //var oldtxt = $(".txtover").text(); 이렇게 쓰면 각각의 .txtover중 맨 첫번째만 갈무리한다.
        var oldtxt;
        if(!this.hasAttribute("title")){
            oldtxt = $(this).text();
            $(this).attr("title",oldtxt);
        }else{
            oldtxt = $(this).attr("title");
        }
        $(this).html("<div class='compare'></div>");
        var oldword = oldtxt.split(" ");
        var originH = $(this).height();
        for(i=0; i<oldword.length; i++){
            $(this).children(".compare").append("<span>"+oldword[i]+" </span>");
            var newH = $(this).children(".compare").height();
            if(originH < newH){
               //$(this).children(".compare").children("span").eq(oldword.length-1)
                $(this).children(".compare").children("span:last-of-type").remove();
                $(this).children(".compare").append("&hellip;");
                break;
            }
        }
    });
};

textover();

$(window).resize(function(){
    textover();
});