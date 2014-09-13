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
        default:
            break;
    }

    echo json_encode($result);