<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <input type="button" id="sample" value="送信">

    <script>
        var port = process.env.PORT
        var sock = new WebSocket('ws://127.0.0.1:'+port);

        // 接続
        sock.addEventListener('open',function(e){
            console.log('Socket 接続成功');
        });

        // サーバーからデータを受け取る
        sock.addEventListener('message',function(e){
            console.log(e.data);
        });

        document.addEventListener('DOMContentLoaded',function(e){
            // サーバーにデータを送る
            document.getElementById('sample').addEventListener('click',function(e){
                sock.send('hello');
            });
        });
    </script>
</body>
</html>