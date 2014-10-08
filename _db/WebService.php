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
            $start = 1;
            $limit = 10;

            if (isset($_POST['start']))
                $start = $_POST['start'];
            if (isset($_POST['limit']))
                $limit = $_POST['limit'];

            $result = $mysql->selectThreadsFromBranch(decodeId($_POST['branchId']), $start, $limit);

            encodeId($result, 'thread');
            encodeUserId($result);

            break;
        case "GetCommentsFromThread":
            $result = $mysql->selectCommentsFromThread(decodeId($_POST['threadId']),$_POST['start']);
            encodeId($result, 'comment');
            encodeUserId($result);
            break;
        case "GetRepliesFromComment":
            $result = $mysql->selectRepliesFromComment(decodeId($_POST['commentId']),$_POST['start']);
            encodeId($result, 'reply');
            encodeUserId($result);
            break;
        case "InsertIntoThread":
            $result = $mysql->insertIntoThread(decodeId($_POST['branchId']),decodeId($_POST['userId']),$_POST['text'],$_POST['rate'], $_POST['category'],'');

            if ($result != "0")
                $result = 'thread_' . $result;
            break;
        case "InsertIntoComment":
            $result = $mysql->insertIntoComment(decodeId($_POST['threadId']),decodeId($_POST['userId']),$_POST['text']);

            if ($result != "0")
                $result = 'comment_' . $result;
            break;
        case "InsertIntoReply":
            $result = $mysql->insertIntoReply(decodeId($_POST['commentId']),decodeId($_POST['userId']),$_POST['text']);

            if ($result != "0")
                $result = 'reply_' . $result;
            break;
        case "MarkSolved":
            $result = $mysql->updateSolved(decodeId($_POST['threadId']), $_POST['status']);

            break;

        case "MarkThreadSpam":
            $result = $mysql->markSpam(decodeId($_POST['threadId']), $_POST['status']);

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
    $id = str_replace('user_','',$id);
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
            case 'user':
                $value['id'] = $type . '_' . $value['id'];
                break;
            default:
                break;
        }
    }
}

function encodeUserId(&$result) {
    foreach ($result as &$value) {
        $value['user_id'] = 'user_' . $value['user_id'];
    }
}