<?php

$upload_dir = 'uploaded_file';

$result = [];
if (!empty($_FILES)) {

    $tempFile = $_FILES['file']['tmp_name'];
    // using DIRECTORY_SEPARATOR constant is a good practice, it makes your code portable.
    $targetPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . $upload_dir . DIRECTORY_SEPARATOR;
    // Adding timestamp with image's name so that files with same name can be uploaded easily.
    $mainFile = $targetPath.time().'_'. $_FILES['file']['name'];

    move_uploaded_file($tempFile,$mainFile);

    //return filename in server
    echo substr($mainFile, strrpos($mainFile,"\\") + 1);
} else {
    $targetPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . $upload_dir . DIRECTORY_SEPARATOR.$_POST['fileName'];
    $result['result'] = $targetPath;

    unlink($targetPath);

    echo json_encode($result);
}
?>