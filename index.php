<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Memory Game</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script src="js/jquery.js"></script>
<script src="js/jquery.bpopup.min.js"></script>
<script src="js/game.js"></script>
</head>
<body>

<div id="wrapper">

<div id="right">
	<div id="board">
		<script>document.write(game_board());</script>
	</div>
</div>

<div id="left">
<div id="logo"><img src='images/logo.png' id='logo-img' class='logo-images'/></div>
<div id="game_info">
<h2>Game Info</h2>
<span>To Select or focus any Image , Please use Arrow Keys.</span><br>
<span>Then To choose any Image , for looking Color, Please Use Enter Key.</span><br><br>
<label class="pointing">Points:</label><span class='game-points'>0</span>
</div>
<div id="restart"><button id="refresh" class="button" x="4" y="4">Restart Button</button></div>
</div>

<div id="bpopup" style="display:none;">
  <table>
	  <tr><td colspan="2">Thanks for Playing Game. Please fill your info to find your current status.</td></tr>
	  <tr><td><strong>Name</strong></td><td><input type='text' name='name' id='name'></td></tr>
	  <tr><td><strong>Email</strong></td><td><input type='email' name='email' id='email'></td></tr>
	  <tr><td><input type='hidden' name='point' id='point' value=''></td></tr>
	  <tr><td colspan="2"><input type='button' name='submit' id='submit' value='Submit'><button class="button" x="4" y="4">Restart Button</button></td></tr>
  </table>
</div>
<div id="thank" style="display:none;">
<span>Thank You very much for Playing Game!</span><br>
<strong class='high'></strong><br>
<strong class='position'></strong><br>
<button class="button" x="4" y="4">Restart Game Again!</button>
</div>

</div>

</body>
</html>
