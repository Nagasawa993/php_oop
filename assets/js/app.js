//$(function(){ })とは、htmlが読み込まれたら、カッコの中を実行
$(function(){
  //idを指定するときは#をつける
  //ADDボタンがクリックされたとき
  $('#add-button').on('click',function(e){

    // alert('addがクリックされた');

    //formタグの送信を無効化する。（二重投稿を防ぐ）
    e.preventDefault();

    //入力されたタスク名を取得
    let taskName = $('#input-task').val();
    // alert(taskName);

    //ajax開始
    $.ajax({
      //キー（決まった文書）:値
      url: 'create.php',
      type: 'POST',
      dataType: 'json',//データ受け取りじの形式
      data: {
        //送信する値を書くブロック
        task: taskName
      }

    }).done((data)=>{
        $('tbody').prepend(
          //prependはtbodyの先頭にデータを付け足す ＜tr＞のデータ
          `<tr>` + 
                `<td>${data['name']}</td>` + 
                `<td>${data['due_date']}</td>` + 
                `<td>NOT YET</td>` + 
                `<td>` + 
                    `<a class="text-success" href="edit.php?id=${data['id']}">EDIT</a>` + 
                `</td>` + 
                `<td>` + 
                    `<a data-id="${data['id']}" class="text-danger delete-button" href="delete.php?id=${data['id']}">DELETE</a>` + 
                `</td>` + 
              `</tr>`
        )

      // $('tbody').prepend(`<p>${data}</p>`);
    }).fail((error)=>{
      console.log(error);
    })
  })

  $(document).on('click','.delete-button',function(e){
    // $(document) 主語に当たる部分、今回は「ウィンドウ」全体にある「delete-button」が「クリックされたら」という文章
    //二重送信の無効化
    e.preventDefault();
    // alert('deleteがクリックされた');

    //削除対象のIDを取得
    //$(this)今イベントが実行されている本体
    //今回の場合はクリックされたaタグ本体
    let selectedId = $(this).data('id');
    // alert(selectedId);

    //ajax開始
    $.ajax({
      //キー（決まった文書）:値
      url: 'delete.php',
      type: 'GET',
      dataType: 'json',//データ受け取りじの形式
      data: {
        //送信する値を書くブロック
        id: selectedId
      }
    }).done((data)=>{
      console.log(data);

    }).fail((error)=>{
      console.log(error);

    })



   })

})