<?php
    include('mysql.php');

    $request = "GetAllIndustries";

    if (isset($_POST['request']))
        $request = $_POST['request'];
    $mysql = new MySQL();
    $result = [];

    switch($request) {
        case "GetAllIndustries":
            $result = $mysql->selectFromTable('industry');
            break;
        case "GetAllCompaniesFromIndustries":
            $result = $mysql->selectAllCompaniesFromIndustry($_POST['industryId']);
            break;
        case "GetAllBranchesFromCompany":
            $result = $mysql->selectAllBranchesFromCompany($_POST['companyId']);
            break;
        case "GetThreadsFromBranch":
            $result = $mysql->selectThreadsFromBranch($_POST['branchId']);

            foreach ($result as &$value) {
                $value['id'] = encodeId($value['id'],'thread');
            }
            break;
        case "GetCommentsFromThread":
            $result = $mysql->selectCommentsFromThread(decodeId($_POST['threadId']),$_POST['start']);
            break;
        default:
            break;
    }

    echo json_encode($result);

function decodeId($id) {
    $id = str_replace('industry_','',$id);
    $id = str_replace('company_','',$id);
    $id = str_replace('thread_','',$id);
    $id = str_replace('comment_','',$id);
    $id = str_replace('reply_','',$id);
    return $id;
}

function encodeId($id, $type) {
    switch($type) {
        case 'industry':
            $id = 'industry_' . $id;
            break;
        case 'company':
            $id = 'company_' . $id;
            break;
        case 'thread':
            $id = 'thread_' . $id;
            break;
        case 'comment':
            $id = 'comment_' . $id;
            break;
        case 'reply':
            $id = 'reply_' . $id;
            break;
        default:
            break;
    }

    return $id;
}