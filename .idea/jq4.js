
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
    $(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    })
});
</script>
</head>
<body>

<p>If you click on me, I will disappear.</p>
<p>Click me away!</p>
<p>Click me too!</p>

//순서대로 삭제되는것이 아닌 해당 p태그의 문장을 눌렀을때 사라짐.
//.dbclick 기능을 사용하면 두번 클릭해야 사라짐.
</body>
</html>
