<pre>
<?php
include('mysql.php');
$mysql = new MySQL();

echo '<pre>';
print_r($mysql->selectFromTable('company', [['id', 'ff_burgerking']]));
echo '</pre>';
?>
</pre>
	