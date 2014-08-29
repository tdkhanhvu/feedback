<?php
    include_once("/_db/mysql.php");
    $mysql = new MySQL();
    $dataYouWant = $mysql->selectFromTable('industry');

    echo '<pre>';
    print_r($dataYouWant);
    echo '</pre>';
?>