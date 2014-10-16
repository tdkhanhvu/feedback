<?php
  include('_db\mysql.php');

  $mysql = new MySQL();

  echo '<pre>';
  print_r($mysql->reportSpam('comment', 1, 1));
  echo '</pre>';