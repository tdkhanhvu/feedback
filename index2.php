<?php
  include('_db\mysql.php');

  $mysql = new MySQL();

  echo '<pre>';
  print_r($mysql->insertVoteIntoItem('thread', 'up', 1, 1));
  echo '</pre>';