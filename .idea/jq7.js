
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
    $(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    })
    //fade~() 안에 들어가는 slow 3000 은 속도와 시간을 의미함
    //fadeIn -> 나타냄
    //fadeOut -> 사라짐
    //fadeToggle -> 나타냄과 사라짐을 각각 지정된 속도와 시간으로 실행됨
    //fadeTo -> fadeTo에서는 , 숫자가 들어가게 되어 이 숫자는 투명도를 의미함
});
</script>
</head>
<body>

<p>Demonstrate fadeIn() with different parameters.</p>

<button>Click to fade in boxes</button><br><br>

    <div id="div1" style="width:80px;height:80px;display:none;background-color:red;"></div><br>
    <div id="div2" style="width:80px;height:80px;display:none;background-color:green;"></div><br>
    <div id="div3" style="width:80px;height:80px;display:none;background-color:blue;"></div>

</body>
</html>


