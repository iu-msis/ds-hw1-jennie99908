<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}

$commentId = intval($_GET['commentId'] ?? 0);

if ($commentId < 1) {
  throw new Exception('Invalid Comment ID');
}


// 1. Go to the database and get all work associated with the $taskId
$commentArr = Comment::getCommentByTaskId($commentId);

// 2. Convert to JSON
$json = json_encode($commentArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;
