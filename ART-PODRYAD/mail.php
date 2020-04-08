<?php 
if((isset($_POST['name']))&&(isset($_POST['tel'])&&$_POST['tel']!="")&&(isset($_POST['email']))){ 
    
    $name = ($_POST['name']!="") ? htmlspecialchars(trim($_POST['name'])) : "не указано";
    $tel = ($_POST['tel']!="") ? htmlspecialchars(trim($_POST['tel'])) : "не указан";
    $email = htmlspecialchars(trim($_POST['email']));
    $to = 'maxtercutor@gmail.com'; 
    $subject = 'Заявка с сайта artpodryad.com'; 
    $message = '
             <html>
                <head>
                   <title>'.$subject.'</title>
                </head>
                <body>
                   <p>Имя: '.$name.'</p>
                   <p>Телефон: '.$tel.'</p> 
                   <p>Email: '.$email.'</p>                       
                 </body>
              </html>'; 
     $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
     $headers .= "From: Отправитель <email_from@artpodryad.com>\r\n"; 
     mail($to, $subject, $message, $headers); 
     echo "Письмо отправлено"; 
}
else echo '<p>Заполните, пожалуйста, поля <a href="./index.html">формы</a></p>'; 
?>