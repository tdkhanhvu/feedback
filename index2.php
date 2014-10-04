<?php
  include('_db\mysql.php');

  $mysql = new MySQL();

  echo '<pre>';
  print_r($mysql->updateSolved(1));
  echo '</pre>';