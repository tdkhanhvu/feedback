<?php
    include('mysql.php');

    $request = "GetAllIndustries";

    if (isset($_POST['request']))
        $request = $_POST['request'];

    $mysql = new MySQL();
    $result = array();
    $user_id = null;
    $start = 1;
    $limit = 10;

    if (isset($_POST['start']))
        $start = $_POST['start'];
    if (isset($_POST['limit']))
        $limit = $_POST['limit'];
    if (isset($_POST['userId']))
        $user_id = decodeId($_POST['userId']);

    switch($request) {
        case "GetAllIndustries":
            $result = $mysql->selectAllIndustries();
            encodeId($result, 'industry');
            break;
        case "GetAllCompaniesFromIndustries":
            $result = $mysql->selectAllCompaniesFromIndustry(decodeId($_POST['industryId']));
            encodeId($result, 'company');
            break;
        case "GetAllCategoriesForCompany":
            $result = $mysql->getAllCategoriesForCompany(decodeId($_POST['companyId']));
            break;
        case "GetCompanyInfo":
            $result = $mysql->selectCompanyInfo(decodeId($_POST['companyId']));
            //encodeId($result, 'company');
            break;
        case "GetAllBranchesFromCompany":
            $result = $mysql->selectAllBranchesFromCompany(decodeId($_POST['companyId']));
            encodeId($result, 'branch');
            break;
        case "GetThreadsFromBranch":
            $result = $mysql->selectThreadsFromBranch(decodeId($_POST['branchId']), $user_id, $start, $limit);

            encodeId($result, 'thread');
            //encodeUserId($result);

            break;
        case "GetCommentsFromThread":
            $result = $mysql->selectCommentsFromThread(decodeId($_POST['threadId']), $user_id,$start,$limit);
            encodeId($result, 'comment');
            //encodeUserId($result);
            break;
        case "GetRepliesFromComment":
            $result = $mysql->selectRepliesFromComment(decodeId($_POST['commentId']), $user_id,$start,$limit);
            encodeId($result, 'reply');
            //encodeUserId($result);
            break;
        case "InsertIntoThread":
            $result = $mysql->insertIntoThread(decodeId($_POST['branchId']),decodeId($_POST['userId']),$_POST['text'],$_POST['rate'], $_POST['category'],$_POST['image']);

            if ($result != "0")
                $result = 'thread_' . $result;
            break;
        case "InsertIntoComment":
            $result = $mysql->insertIntoComment(decodeId($_POST['threadId']),decodeId($_POST['userId']),$_POST['text'],$_POST['image']);

            if ($result != "0")
                $result = 'comment_' . $result;
            break;
        case "InsertIntoReply":
            $result = $mysql->insertIntoReply(decodeId($_POST['commentId']),decodeId($_POST['userId']),$_POST['text'],$_POST['image']);

            if ($result != "0")
                $result = 'reply_' . $result;
            break;
        case "MarkSolved":
            $result = $mysql->updateSolved(decodeId($_POST['threadId']), $_POST['status']);

            break;

        case "UpdateSpam":
            $result = $mysql->reportSpam($_POST['type'],decodeId($_POST['id']), decodeId($_POST['userId']));

            break;

        case "UpdateLikeDislike":
            $result = $mysql->insertVoteIntoItem($_POST['type'],$_POST['action'],decodeId($_POST['itemId']),
                decodeId($_POST['userId']));

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
    //$id = str_replace('user_','',$id);
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

?>