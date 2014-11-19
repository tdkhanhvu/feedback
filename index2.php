<?php
	# get a integer
	fscanf(STDIN, "%d", $a);
	# get two integers separated with half-width break
	fscanf(STDIN, "%d %d", $b, $c);
	# get a string
	fscanf(STDIN, "%s", $s);
	# output
	echo ($a+$b+$c)." ".$s."\n";
?>