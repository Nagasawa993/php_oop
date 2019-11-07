<!-- タスク完了の処理 -->
<?php

//Todo.phpの読み込み
require_once 'Models/Todo.php';

//完了ボタンがクリックされたらタスクのIDを取得
$id = $_GET['id'];

// Todoクラスをインスタンス化
$todo = new Todo();

// doneメソッドを実行
$todo->done($id);

// 更新完了を伝えるためIDをjsonにして返す
echo json_encode($id);