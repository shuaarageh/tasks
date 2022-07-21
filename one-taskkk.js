*,*:after,*:before{
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	box-sizing: border-box;
}
body{

	font-family: arial;
	font-size: 50px;

	margin: 0;
	background: #420066;
	color: #000;
	display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.voice_to_text{
  width: 600px;
  text-align: center;
}
h1{
	color: #fff;
	font-size: 50px;
}
#convert_text{
  width: 100%;
  height: 200px;
  border-radius: 10px;
  resize: none;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 10px;
}
button{
	padding: 12px 20px;
  background: black ;
  border: 0;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
}
 19
Task 1/First-Task.html
@@ -0,0 +1,19 @@
<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=1">
<title>Home</title>
<link rel="stylesheet" type="text/css" href="voice.css">
</head>
<body>

	<div class="voice_to_text">
		<h1>محول الصوت الى نص </h1>
	<textarea id="convert_text"></textarea>
    <output name="" id="convert_text"></output>
    <button id="click_to_record"> اضغط</button>
  </div>
<script type="text/javascript" src="voice.js"></script>
</body>
</html>
 21
Task 1/First-Task.js
@@ -0,0 +1,21 @@
click_to_record.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        document.getElementById("convert_text").innerHTML = transcript;
        console.log(transcript);
    });

    if (speech == true) {
        recognition.start();
    }
})
