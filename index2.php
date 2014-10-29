<?php
  include('_db\mysql.php');
  $mysql = new MySQL();

  echo '<pre>';
  print_r($mysql->deleteFromTable('comment', [['id','11'],['thread_id','8']]));
  echo '</pre>';