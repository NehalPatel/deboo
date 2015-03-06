<!DOCTYPE html>
<html>
<head>
	<title>jQuery Deboo Plugin</title>
	<link rel="stylesheet" type="text/css" href="css/jquery-deboo.css">

	<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
	<script type="text/javascript" src="js/jquery-deboo.js"></script>

	<script type="text/javascript">
		jQuery(document).ready(function($) {
			$("#progress-bar1").deboo();
			$("#progress-bar2").deboo();
			$("#progress-bar3").deboo();

		});
	</script>
</head>
<body>

	<div class="progress-bar-wrapper">

        <div class="progress progress-primary">
            <div id="progress-bar1" class="progress-bar" data-progress="40" aria-valuemin="0" aria-valuemax="100">
                <span class="skill">HTML</span>
                <div class="pvalue"><span class="inner" aria-valuenow="0%"></span></div>
            </div>
        </div>

        <div class="progress progress-secondary">
            <div id="progress-bar2" class="progress-bar" data-progress="60" aria-valuemin="0" aria-valuemax="100">
                <span class="skill">PHP</span>
                <div class="pvalue"><span class="inner" aria-valuenow="0%"></span></div>
            </div>
        </div>

        <div class="progress progress-yellow">
	        <div id="progress-bar3" class="progress-bar" role="progressbar" data-progress="75" aria-valuemin="0" aria-valuemax="100">
	            <span class="skill">CSS3</span>
	            <div class="pvalue"><span class="inner" aria-valuenow="0%"></span></div>
	        </div>                                        
	    </div>
    </div>
</body>
</html>