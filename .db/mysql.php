<?php

/**
 * MySQL handles the MySQL Database connection
 *
 * @author Quang Phuc
 * @link
 * @copyright
 * @license
 */

class MySQL {
	// Private PDO object
	private $dbh;

	// Construction
	public function __construct() {
		$this->dbh = new PDO('mysql:host=localhost;dbname=feedback', 'root', '');
	}

	/*
	 * Select From Table
	 * 
	 * selectFromTable fetch data from respective table
	 *
	 * Parameters: 
	 * 		1) $table 	(string): table name. Compulsory. E.g: 'industry'
	 *		2) $args 	(2D array)	: paired arguments. Optional and can be more than one. 
	 *				E.g: array(['name', 'Mai Linh'])
	 *				or 	 array(['name', 'Mai Linh'], ['industry', 'Taxi'])
	 *		3) $crits 	(1D array) : Criteria. Optional and can be more than one.
 	 *				E.g: array(['id', 'name'])
 	 * 
 	 * Return: results in array form.
 	 *
 	 * Notes: To select ALL, leave the last 2 parameters null.
 	 *
	 */
	public function selectFromTable($table, $args = null, $crits = null) {
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

	// Destruction
	public function __destruct() {
		$this->dbh = null;
	}
}

$mysql = new MySQL();
$args = array(['industry',1]);

echo '<pre>';
print_r($mysql->selectFromTable('company', $args));
echo '</pre>';