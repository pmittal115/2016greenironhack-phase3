<?php
include_once 'psl-config.php'; //exlcuding this file from git--don't want db connecting info public
$mysqli = new mysqli(HOST, USER, PASSWORD, DATABASE);
