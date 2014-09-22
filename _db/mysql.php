<?php

/*
 *
 *************************************************************************************
 *
 * selectFromTable(table, [args, [crits]]) :	fetch data from respective table
 *
 * Parameters: 
 * 		1) $table 	(string): table name. Compulsory. E.g: 'industry'
 *		2) $args 	(2D array)	: paired arguments. Optional and can be more than one. 
 *				E.g: [['name', 'Mai Linh']]
 *				or 	 [['name', 'Mai Linh'], ['industry', 'Taxi']]
 *		3) $crits 	(1D array) : Criteria. Optional and can be more than one.
 *				E.g: ['id', 'name']
 *
 * Notes: To select ALL, leave the last 2 parameters null.
 *
 * Return: Data results in array form. If nothing found, NULL returned.
 *
 **************************************************************************************
 *
 */
class MySQL {
	// Private PDO object
	private $dbh;

	// Construction
	public function __construct() {
		$this->dbh = new PDO('mysql:host=localhost;dbname=feedback;charset=utf8', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
		//$this->dbh = new PDO('mysql:host=toibalocom.ipagemysql.com;dbname=feedback', 'tdkhanhvu', 'F%pks58F');
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
		}
	    return $threads;
	}

	// Select all replies from a particular thread
	public function selectCommentsFromThread($id, $start = 1, $length = 10) {
		$start -= 1;	// For Mysql to start at $start
	    return $this->selectFromTable('comment', [['thread_id', $id]], null, "LIMIT $start, $length");
	}

	// Select all replies from a particular thread
	public function selectRepliesFromComment($id, $start = 1, $length = 10) {
		$start -= 1;	// For Mysql to start at $start
	    return $this->selectFromTable('reply', [['comment_id', $id]], null, "LIMIT $start, $length");
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
			return true;
		}
		catch(PDOException $e) {
		    echo $e->getMessage();
		}

		// No result
		return false;
	}

	// Insert into thread
	public function insertIntoThread($branch_id, $user_id, $photo, $name, $text) {
		return $this->insertIntoTable('thread', 
			[
				['branch_id', $branch_id],
				['user_id', $user_id],
				['photo', $photo],
				['name', $name],
				['text', $text],
				['solved', 1],
				['time', date('Y-m-d H:i:s')],
				['rate', 0],
				['vote', 0],
				['up', 0],
				['spam', 1],
				['comments', 0]
			]
		);
	}

	// Insert into comment
	public function insertIntoComment($thread_id, $user_id, $photo, $name, $text) {
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
				['name', $name],
				['photo', $photo],
				['text', $text],
				['time', date('Y-m-d H:i:s')],
				['vote', 0],
				['up', 0],
				['replies', 0]
			]
		);
	}

	// Insert into reply
	public function insertIntoReply($comment_id, $user_id, $photo, $name, $text) {
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
				['name', $name],
				['photo', $photo],
				['text', $text],
				['time', date('Y-m-d H:i:s')],
				['vote', 0],
				['up', 0],
			]
		);
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

	// Destruction
	public function __destruct() {
		$this->dbh = null;
	}
}