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
      dataType: 'json',
      data: {
        //送信する値を書くブロック
        task: taskName
      }

    }).done((data)=>{
        $('tbody').prepend(
          `<tr>` + 
                `<td>${data['name']}</td>` + 
                `<td>${data['due_date']}</td>` + 
                `<td>NOT YET</td>` + 
                `<td>` + 
                    `<a class="text-success" href="edit.php?id=${data['id']}">EDIT</a>` + 
                `</td>` + 
                `<td>` + 
                    `<a class="text-danger" href="delete.php?id=${data['id']}">DELETE</a>` + 
                `</td>` + 
              `</tr>`
        )

      // $('tbody').prepend(`<p>${data}</p>`);
    }).fail((error)=>{
      console.log(error);
    })


  })

})