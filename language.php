<?php
    // Start a Session, You might start this somewhere else already.
    session_start();

    // What languages do we support
    $available_langs = array('en','vi');

    // Set our default language session
    $_SESSION['lang'] = 'vi';

    if(isset($_GET['lang']) && $_GET['lang'] != ''){
        // check if the language is one we support
        if(in_array($_GET['lang'], $available_langs))
        {
            $_SESSION['lang'] = $_GET['lang']; // Set session
        }
    }
    // Include active language
    include_once('languages/'.$_SESSION['lang'].'/lang.'.$_SESSION['lang'].'.php');
?>