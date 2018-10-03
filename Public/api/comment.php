<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}

$Id = intval($_GET['Id'] ?? 0);

if ($Id < 1) {
  throw new Exception('Invalid ID');
}


// 1. Go to the database and get all work associated with the $taskId
$commentArr = Comment::getCommentById($Id);

// 2. Convert to JSON
$json = json_encode($commentArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;
