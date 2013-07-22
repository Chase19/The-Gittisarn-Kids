<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html, charset=utf-8">
	<meta name="viewport" content="width=device-width">
	<title>Soul Surfers: <?php echo $pageTitle; ?></title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/mediaqueries.css">
</head>
<body>
	<div class="wrap">
		
		<h1><?php echo $h1; ?></h1>

		<div class="margin"></div>
		
		<nav>
			<div><a class="<?php if($section == "home"){echo "on";} ?>" href="/index.php">Home</a></div>
			<div><a class="<?php if($section == "chase"){echo "on";} ?>" href="chase.php">Maverick</a></div>
			<div><a class="<?php if($section == "london"){echo "on";} ?>" href="london.php">Breeze</a></div>
			<div><a class="<?php if($section == "holland"){echo "on";} ?>" href="holland.php">Rider</a></div>
			<div><a class="<?php if($section == "brooklyn"){echo "on";} ?>" href="brooklyn.php">Kiwi</a></div>
			<div><a class="<?php if($section == "rome"){echo "on";} ?>" href="rome.php">Rock</a></div>
			
			<form>
				<input id="text_feild">
				<button>Search</button>
			</form>
		</nav>
	