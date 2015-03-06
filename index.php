<!DOCTYPE html>
<html>
<head>
	<title>jQuery Deboo Plugin</title>
	<link rel="stylesheet" type="text/css" href="css/jquery-deboo.css">

	<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
	<script type="text/javascript" src="js/jquery-deboo.js"></script>

	<script type="text/javascript">
		jQuery(document).ready(function($) {
			$("#progress-bar1").deboo({
				start_value : 0,
	            end_value : 50,
	            skill:'CSS3',
	            pclass : 'progress-primary'
			});
			$("#progress-bar2").deboo({
				start_value : 0,
	            end_value : 70,
	            skill:'HTML5',
	            pclass : 'progress-secondary'
			});
			$("#progress-bar3").deboo({
				start_value : 0,
	            end_value : 80,
	            skill:'jQuery',
	            pclass : 'progress-yellow'
			});

			$("#progress-bar4").deboo({
				start_value : 0,
	            end_value : 50,
	            skill:'PHOTOSHOP',
	            pclass : 'progress-yellow'
			});

		});
	</script>
</head>
<body>

	<div class="progress-bar-wrapper">

        <div id="progress-bar1"></div>
        <div id="progress-bar2"></div>
        <div id="progress-bar3"></div>
        <div id="progress-bar4"></div>
</body>
</html>