<?php

var_dump($_GET['id']);

require_once('Models/Todo.php');

$id = $_GET['id'];

$todo = New Todo;

$todo->delete($id);

echo json_encode($id);

header('Location: index.php');





// require_once('Models/Todo.php');

// $id = $_GET['id'];

// //Todoクラスをインスタンス化
// $todo = New Todo;

// //Todoクラスのcreateメソッドを実行
// $todo->delete($id);

// //index.phpに戻る
// header('Location: index.php');