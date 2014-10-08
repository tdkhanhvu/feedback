<?php
  include('_db\mysql.php');

  $mysql = new MySQL();

  echo '<pre>';
  print_r($mysql->selectThreadsFromBranch('kfc_1'));
  echo '</pre>';