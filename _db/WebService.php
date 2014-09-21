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
            encodeId($result, 'industry');
            break;
        case "GetAllCompaniesFromIndustries":
            $result = $mysql->selectAllCompaniesFromIndustry(decodeId($_POST['industryId']));
            encodeId($result, 'company');
            break;
        case "GetAllBranchesFromCompany":
            $result = $mysql->selectAllBranchesFromCompany(decodeId($_POST['companyId']));
            encodeId($result, 'branch');
            break;
        case "GetThreadsFromBranch":
            $result = $mysql->selectThreadsFromBranch(decodeId($_POST['branchId']));
            encodeId($result, 'thread');

            break;
        case "GetCommentsFromThread":
            $result = $mysql->selectCommentsFromThread(decodeId($_POST['threadId']),$_POST['start']);
            encodeId($result, 'comment');
            break;
        default:
            break;
    }

    echo json_encode($result);

function decodeId($id) {
    $id = str_replace('industry_','',$id);
    $id = str_replace('company_','',$id);
    $id = str_replace('branch_','',$id);
    $id = str_replace('thread_','',$id);
    $id = str_replace('comment_','',$id);
    $id = str_replace('reply_','',$id);
    return $id;
}

function encodeId(&$result, $type) {
    foreach ($result as &$value) {
        switch($type) {
            case 'industry':
            case 'company':
            case 'thread':
            case 'comment':
            case 'reply':
            $value['id'] = $type . '_' . $value['id'];
                break;
            default:
                break;
        }
    }
}