<?php
	include('mysql.php');

	$mysql = new MySQL();

	// Test selectAllIndustries
	$mysql->selectAllIndustries();

	// Test selectIndustry
	$mysql->selectIndustry('fastfood');

	// Test selectAllCompaniesFromIndustry
	$mysql->selectAllCompaniesFromIndustry('fastfood');

	// Test selectAllBranchesFromCompany
	$mysql->selectAllBranchesFromCompany('ff_kfc');

	// Test selectThreadsFromBranch
	$mysql->selectThreadsFromBranch('kfc_1', 1);

	// Test selectCommentsFromThread
	$mysql->selectCommentsFromThread(1, 1);

	// Test selectRepliesFromComment
	$mysql->selectRepliesFromComment(1, 1);

	// Test selectVotersFromItemID
	$mysql->selectVotersFromItemID('thread', 'up', 1, 'fb_id');

	// Test selectSpamReporters
	$mysql->selectSpamReporters('thread', 1, 'fb_id');

	// Test insertIntoThread
	$mysql->insertIntoThread('kfc_1', 1, 'test', 4);

	// Test insertIntoComment
	$mysql->insertIntoComment(1, 1, 'test');

	// Test insertIntoReply
	$mysql->insertIntoReply(1, 1, 'test');

	// Test insertVoteIntoItem
	$mysql->insertVoteIntoItem('thread', 'up', 1, 1);



	function print_html($data) {
		echo '<pre>';
		print_r($data);
		echo '</pre>';
	}