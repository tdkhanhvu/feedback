<?php

/*
 * Usage: 	$mysql = new MySQL();
 *			$data = $mysql->selectFromTable(..Read Docs below..);
 *			$data = $mysql->selectAllCompaniesFromIndustry(..Read Docs below..);
 *			$data = $mysql->selectAllBranchesFromCompany(..Read Docs below..);
 *			$data = $mysql->selectThreadsFromBranch(..Read Docs below..);
 *			$data = $mysql->selectRepliesFromThread(..Read Docs below..);
 *
 *************************************************************************************
 *
 * selectFromTable(table, [args, [crits]]) :	fetch data from respective table
 *
 * Parameters: 
 * 		1) $table 	(string): table name. Compulsory. E.g: 'industry'
 *		2) $args 	(2D array)	: paired arguments. Optional and can be more than one. 
 *				E.g: array(['name', 'Mai Linh'])
 *				or 	 array(['name', 'Mai Linh'], ['industry', 'Taxi'])
 *		3) $crits 	(1D array) : Criteria. Optional and can be more than one.
 *				E.g: array(['id', 'name'])
 *
 * Notes: To select ALL, leave the last 2 parameters null.
 *
 * Return: Data results in array form. If nothing found, NULL returned.
 *
 **************************************************************************************
 *
 * selectAllCompaniesFromIndustry(id) :	fetch all companies belong to an industry
 * 
 * Parameter:
 * 		1)	$id 	(string): industry id. Compulsory. E.g: 'taxi'
 *		
 * Note: refer to the industry.txt to get the list of current industries.
 *
 * Return: Data results in array form. If nothing found, NULL returned.
 *
 **************************************************************************************
 *
 * selectAllBranchesFromCompany(id) :	fetch all branches belong to a company
 * 
 * Parameter:
 * 		1)	$id 	(string): company id. Compulsory. E.g: 'ff_kfc'
 *		
 * Return: Data results in array form. If nothing found, NULL returned.
 *
 **************************************************************************************
 *
 * selectThreadsFromBranch(id, start, length) :	fetch all threads belong to a branch
 * 
 * Parameter:
 * 		1)	$id 	(string): branch id. Compulsory. E.g: 'kfc_1'
 * 		1)	$start 	(int)	: start index. Optional. Default 1.
 * 		1)	$length	(int)	: num of rows. Optional. Default 10.
 *		
 * Return: Data results in array form. If nothing found, NULL returned.
 *
 **************************************************************************************
 * selectRepliesFromThread(id, start, length) :	fetch all replies belong to a thread
 * 
 * Parameter:
 * 		1)	$id 	(string): branch id. Compulsory. E.g: 'kfc_1'
 * 		1)	$start 	(int)	: start index. Optional. Default 1.
 * 		1)	$length	(int)	: num of rows. Optional. Default 10.
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
		$this->dbh = new PDO('mysql:host=localhost;dbname=feedback;charset=utf8', 'root', '');
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
	    return $this->selectFromTable('thread', [['branch_id', $id]], null, "LIMIT $start, $length");
	}

	// Select all replies from a particular thread
	public function selectRepliesFromThread($id, $start = 1, $length = 10) {
		$start -= 1;	// For Mysql to start at $start
	    return $this->selectFromTable('reply', [['thread_id', $id]], null, "LIMIT $start, $length");
	}

	// Select all categories from a particular thread
	public function selectCategoriesFromThread($id) {
	    return $this->selectFromTable('category', [['thread_id', $id]]);
	}

	// Destruction
	public function __destruct() {
		$this->dbh = null;
	}
}