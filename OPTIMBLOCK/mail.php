<? 
if(isset($_POST['phone'])&&$_POST['phone']!=""){ 
    
    $name = ($_POST['name']!= "") ? htmlspecialchars(trim($_POST['name'])) : "Имя не указано";
    $phone = htmlspecialchars(trim($_POST['phone']));
    $to = 'optimconsult24@yandex.ru'; 
    $subject = 'Заявка с сайта Optimconsult24'; 
    $message = '
             <html>
                <head>
                   <title>'.$subject.'</title>
                </head>
                <body>
                   <p>Имя: '.$name.'</p>
                   <p>Телефон: '.$phone.'</p>    
                   <img src="https://valery-glebik.site/optimconsult/assets/images/image-1.jpg" width="370" height="211" align="center" />                    
                 </body>
              </html>'; 
     $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
     $headers .= "From: Отправитель <email_from@yoursite.com>\r\n"; 
     mail($to, $subject, $message, $headers); 
     echo "Письмо отправлено"; 
}
else echo '<p>Заполните, пожалуйста, поля <a href="./index.html">формы</a></p>'; 
?>