<?php
  header('Content-Type: text/html; charset=utf-8');
?>
<!doctype HTML>
<html>
    <head></head>
    <body>
        <div>
            <?php
                $name = $_GET['username'];
                $tela = $_GET['tel1'];
                $telb = $_GET['tel2'];
                $telc = $_GET['tel3'];

                echo "<p>당신의 이름은 $name 입니다.</p>";
                echo "<p>당신의 전화번호는 $tela-$telb-$telc 입니다.</p>";
            ?>
        </div>
    </body>
</html>