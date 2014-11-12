<?php
  include('_db\mysql.php');
  $mysql = new MySQL();

  echo '<pre>';
  print_r($mysql->selectAllIndustries());
  echo '</pre>';