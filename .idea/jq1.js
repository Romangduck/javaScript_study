// jquery study

// jquery.com 에서 라이브러리 , jquery는 자바스크립트 라이브러리
//  $(selector).action() 가 기본 문법

<head>
    <script src="jquery-1.11.1.min.js"></script>

</head>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>

<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
    $(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    })
});
</script>
</head>
<body>

<h2>This is a heading</h2>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<button>Click me to hide paragraphs</button>

</body>
</html>

