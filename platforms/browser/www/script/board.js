$(document).ready(function(){
    
    // #sbtn을 눌렀을 때
        // #keyword의 값을 알아내서
        // 그 값의 글자 수를 알아내고
        // 만약 그 글자수가 0이면
            // 경고창("검색어를 입력하세요")
        // 그게 아니라면
            // #search를 submit!
    $("#sbtn").click(function(){
        var len = $("#keyword").val().length;
        if(len == 0) {
            alert("검색어를 입력하세요");
        }else if(len == 1){
            alert("검색어는 최소 두글자 이상이어야 합니다");
        }else{
            $("#search").submit();
        }
    });
    
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
    
});