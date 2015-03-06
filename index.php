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
				speed   : 50,
	            progress : 50,
	            min_value : 0
			});
			$("#progress-bar2").deboo({
				speed   : 50,
	            progress : 80,
	            min_value : 0
			});
			$("#progress-bar3").deboo({
				speed   : 100,
	            progress : 70,
	            min_value : 0
			});

		});
	</script>
</head>
<body>

	<div class="progress-bar-wrapper">

        <div class="progress progress-primary">
            <div id="progress-bar1" class="progress-bar">
                <span class="skill">HTML</span>
                <div class="pvalue"><span class="inner"></span></div>
            </div>
        </div>

        <div class="progress progress-secondary">
            <div id="progress-bar2" class="progress-bar">
                <span class="skill">PHP</span>
                <div class="pvalue"><span class="inner"></span></div>
            </div>
        </div>

        <div class="progress progress-yellow">
	        <div id="progress-bar3" class="progress-bar">
	            <span class="skill">CSS3</span>
	            <div class="pvalue"><span class="inner"></span></div>
	        </div>                                        
	    </div>
    </div>
</body>
</html>