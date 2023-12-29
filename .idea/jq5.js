
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
    $(document).ready(function(){
    $("#p1").mouseenter(function(){
        alert("You entered p1!");
    })
});
</script>
</head>
<body>

<p id="p1">Enter this paragraph.</p>


//마우스를 p1위에 움직여지기만해도 얼럿창이뜨는기능
//mouseleave를 쓰게되면 마우스가 p1위에 움직였을때는 반응이없지만 그곳에서 움직이면 얼럿창이뜨는 기능
//mousedown은 마우스의 왼쪽버튼을 클릭하게됬을때 얼럿창이 뜨는기능
//mouseup은 클릭한이후 버튼을 땟을때 얼럿창이 뜨는기능
// 물론 저기서 .hide()를 하면 사라지는거임.
//event와 관련된 사항을 설명하는것임.

</body>
</html>
