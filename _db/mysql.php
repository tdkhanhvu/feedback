<?php

class MySQL {
	// Private PDO object
	private $dbh;

	// Construction
	public function __construct() {
		if ($_SERVER['SERVER_NAME'] == 'localhost') {
			$this->dbh = new PDO('mysql:host=localhost;dbname=feedback;charset=utf8', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
		}
		else {
			$this->dbh = new PDO('mysql:host=toibalocom.ipagemysql.com;dbname=feedback', 'tdkhanhvu', 'F%pks58F');
		}

		$this->items = ['thread', 'comment', 'reply'];
		$this->votes = ['up', 'down'];
		$this->acc_types = ['fb_id'];
	}

	// Query
	public function selectFromTable($table, $args = null, $crits = null, $limit = '') {
		$query = 'SELECT ';

		// Criteria
		if($crits == null) {
			$query .= " * from $table ";
		}
		else {
			for($i = 0; $i < count($crits) - 1; $i++) {
				$query .= $crits[$i] . ", ";
			}
			$query .= $crits[$i] . " from $table ";
		}

		// Argument
		if($args != null) {
			$query .= " WHERE ";
			for($i = 0; $i < count($args) - 1; $i++) {
				$query .= $args[$i][0] . " = :_" . $args[$i][0] . " AND ";
			}
			$query .= $args[$i][0] . " = :_" . $args[$i][0];
		}

		$query .= ' '.$limit;

		try {
			$stm = $this->dbh->prepare($query);

			// Argument Binding
			if($args != null) {
				for($i = 0; $i < count($args); $i++) {
					$stm->bindValue(':_'.$args[$i][0], $args[$i][1], PDO::PARAM_INT);
				}
			}

			$stm->execute();
			return $stm->fetchAll();
		}
		catch(PDOException $e) {
		    echo $e->getMessage();
		}

		// No result
		return null;
	}

	// Select all industries
	public function selectAllIndustries() {
		return $this->selectFromTable('industry');
	}

	// Select all industries
	public function selectIndustry($id) {
		return $this->selectFromTable('industry', [['id', $id]]);
	}

	// Select all companies from a particular industry
	public function selectAllCompaniesFromIndustry($ind) {
		$result_set = array();
	    $rels = $this->selectFromTable('ind_com', [['industry', $ind]]);
	    foreach ($rels as $key => $value) {
	    	$com = $this->selectFromTable('company', [['id', $value['company']]]);
	    	if ($com != null) {
	    		array_push($result_set, $com[0]);
	    	}
	    }
	    
	    return $result_set;
	}

	// Select all branches from a particular company
	public function selectAllBranchesFromCompany($ind) {
		$result_set = array();
	    $rels = $this->selectFromTable('com_branch', [['company', $ind]]);
	    foreach ($rels as $key => $value) {
	    	$branches = $this->selectFromTable('branch', [['id', $value['branch']]]);
	    	if ($branches != null) {
	    		array_push($result_set, $branches[0]);
	    	}
	    }
	    
	    return $result_set;
	}

	// Select all threads from a particular branch
	public function selectThreadsFromBranch($id, $start = 1, $length = 10) {
		$start -= 1;	// For Mysql to start at $start
		$threads = $this->selectFromTable('thread', [['branch_id', $id]], null, "LIMIT $start, $length");
		foreach ($threads as &$thr) {
			$cat = $this->selectFromTable('category', [['thread_id', $thr['id']]]);
			$thr['categories'] = $cat;
			$user_info = $this->selectFromTable('user', [['id', $thr['user_id']]]);
			$thr['name'] = $user_info[0]['name'];
			$thr['photo'] = $user_info[0]['photo'];
		}
	    return $threads;
	}

	// Select all replies from a particular thread
	public function selectCommentsFromThread($id, $start = 1, $length = 10) {
		$start -= 1;	// For Mysql to start at $start

		$comments = $this->selectFromTable('comment', [['thread_id', $id]], null, "LIMIT $start, $length");
		foreach ($comments as &$cmt) {
			$user_info = $this->selectFromTable('user', [['id', $cmt['user_id']]]);
			$cmt['name'] = $user_info[0]['name'];
			$cmt['photo'] = $user_info[0]['photo'];
		}

	    return $comments;
	}

	// Select all replies from a particular thread
	public function selectRepliesFromComment($id, $start = 1, $length = 10) {
		$start -= 1;	// For Mysql to start at $start

	    $replies = $this->selectFromTable('reply', [['comment_id', $id]], null, "LIMIT $start, $length");
		foreach ($replies as &$rep) {
			$user_info = $this->selectFromTable('user', [['id', $rep['user_id']]]);
			$rep['name'] = $user_info[0]['name'];
			$rep['photo'] = $user_info[0]['photo'];
		}

	    return $replies;
	}

	// Select all voters up/down from Item ID
	public function selectVotersFromItemID($item_type, $vote_type, $item_id, $acc_type = 'fb_id') {
		if (in_array($item_type, $this->items) && in_array($vote_type, $this->votes)) {
			$table_name = $item_type.'_'.$vote_type;
			$arg = $item_type.'_id';
			return $this->selectFromTable($table_name, [[$arg, $item_id]], [$acc_type]);
		}
		return -1;
	}

	// Insert
	public function insertIntoTable($table, $args = null) {
		$query = 'INSERT INTO ' . $table . '(';

		for($i = 0; $i < count($args) - 1; $i++) {
			$query .= $args[$i][0] . ", ";
		}
		$query .= $args[$i][0] . ")";

		// Argument
		if($args != null) {
			$query .= ' VALUES(';
			for($i = 0; $i < count($args) - 1; $i++) {
				$query .= ':_' . $args[$i][0] . ", ";
			}
			$query .= ':_' . $args[$i][0] . ")";
		}

		try {
			$stm = $this->dbh->prepare($query);

			// Param Binding
			if($args != null) {
				for($i = 0; $i < count($args); $i++) {
					$stm->bindParam(':_'.$args[$i][0], $args[$i][1], PDO::PARAM_INT);
				}
			}

			$stm->execute();
			return $this->dbh->lastInsertId('id');
		}
		catch(PDOException $e) {
		    echo $e->getMessage();
		}

		// No result
		return -1;
	}

	// Insert into thread
	public function insertIntoThread($branch_id, $user_id, $text, $rate, $cat) {
		$cats = isset($cat) ? json_decode($cat) : null;

		$thr_id = $this->insertIntoTable('thread', 
			[
				['branch_id', $branch_id],
				['user_id', $user_id],
				['text', $text],
				['rate', $rate],
				['solved', 0],
				['time', date('Y-m-d H:i:s', strtotime("5 hours"))],
				['up', 0],
				['down', 0],
				['spam', 0],
				['comments', 0]
			]);

		foreach ($cats as $cat) {
			$name = '';
			switch ($cat) {
				case 1:
					$name = 'Phuc Vu';
					break;

				case 2:
					$name = 'Giu Xe';
					break;

				case 3:
					$name = 'San Pham';
					break;
			}

			$this->insertIntoTable('category', 
				[
					['thread_id', $thr_id],
					['cat', $cat],
					['name', $name],
				]);
		}

		return $thr_id;
	}

	// Insert into comment
	public function insertIntoComment($thread_id, $user_id, $text) {
		// Update comment count in thread
		$cmt = $this->selectFromTable('thread', [['id',$thread_id]], ['comments']);
		if ($cmt[0]['comments'] != null) {
			$count = intval($cmt[0]['comments']) + 1;
		}

		$this->updateTable('thread', [['comments', $count]], [['id', $thread_id]]);

		return $this->insertIntoTable('comment', 
			[
				['thread_id', $thread_id],
				['user_id', $user_id],
				['text', $text],
				['time', date('Y-m-d H:i:s')],
				['up', 0],
				['down', 0],
				['replies', 0]
			]
		);
	}

	// Insert into reply
	public function insertIntoReply($comment_id, $user_id, $text) {
		// Update comment count in comment
		$rep = $this->selectFromTable('comment', [['id',$comment_id]], ['replies']);
		if ($rep[0]['replies'] != null) {
			$count = intval($rep[0]['replies']) + 1;
		}

		$this->updateTable('comment', [['replies', $count]], [['id', $comment_id]]);

		return $this->insertIntoTable('reply', 
			[
				['comment_id', $comment_id],
				['user_id', $user_id],
				['text', $text],
				['time', date('Y-m-d H:i:s')],
				['up', 0],
				['down', 0],
			]
		);
	}

	// Insert vote up/down to Item ID
	public function insertVoteIntoItem($item_type, $vote_type, $item_id, $user_id, $acc_type = 'fb_id') {
		if (in_array($item_type, $this->items) && in_array($vote_type, $this->votes)) {
			$table_name = $item_type.'_'.$vote_type;
			$arg = $item_type.'_id';
			$this->insertIntoTable($table_name, [[$arg, $item_id], [$acc_type, $user_id]]);
			return true;
		}
		return false;
	}

	// Update
	public function updateTable($table, $args = null, $crits = null) {
		$query = 'UPDATE ' . $table . ' SET ';

		if ($args != null) {
			for($i = 0; $i < count($args) - 1; $i++) {
				$query .= $args[$i][0] . "=?, ";
			}
			$query .= $args[$i][0] . "=? ";
		}

		// Argument
		if($crits != null) {
			$query .= ' WHERE ';
			for($i = 0; $i < count($crits) - 1; $i++) {
				$query .= $crits[$i][0] . "=? ";
			}
			$query .= $crits[$i][0] . "=?";
		}

		try {
			$stm = $this->dbh->prepare($query);

			// Param Binding
			$values = array();
			foreach ($args as $arg) {
				$values[] = $arg[1];
			}
			foreach ($crits as $crit) {
				$values[] = $crit[1];
			}

			$stm->execute($values);
			return true;
		}
		catch(PDOException $e) {
		    echo $e->getMessage();
		}

		// No result
		return false;
	}

	// Up / Down vote
	public function vote($table, $id, $action = 'up') {
		$items = $this->selectFromTable($table, [['id', $id]]);
		$item = count($items) > 0 ? $items[0] : null;

		if (isset($items)) {
			$up = intval($item['up']);
			$down = intval($item['down']);

			if ($action == 'up') {
				$up++;
				$this->updateTable($table, [['up', $up]], [['id', $id]]);
				return $up;
			}
			else {
				$down++;
				$this->updateTable($table, [['down', $down]], [['id', $id]]);
				return $down;
			}
		}
		else {
			return -1;
		}
	}

	// Update solved status
	public function updateSolved($id, $status = 1) {
		return $this->updateTable('thread', [['solved', $status]], [['id', $id]]);
	}

	// Destruction
	public function __destruct() {
		$this->dbh = null;
	}
}