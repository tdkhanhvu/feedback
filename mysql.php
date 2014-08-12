<?php 
	$link = null;

	// 
	$link = mysql_connect('toibalocom.ipagemysql.com', 'toifeedback', 'toifeedback');

	if (!$link) { 
	    die('Could not connect: ' . mysql_error()); 
	} 
	echo 'Connected successfully'; 
	// mysql_select_db(toifeedback); 
?>