<?php
  include('_db\mysql.php');

  $mysql = new MySQL();

  echo '<pre>';
  print_r($mysql->insertVoteIntoItem('comment', 'down', '12', '2'));
  echo '</pre>';