<pre>
<?php
    include('mysql.php');

    $mysql = new MySQL();
    $result = [];

	$result = $mysql->selectFromTable('industry');

	print_r($result);
?>
</pre>
	