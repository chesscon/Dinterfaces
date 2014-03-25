<?php
    $nickname = $_POST['nickname'];
    $email = $_POST['email'];
    $delegacion = $_POST['delegacion'];
    $cp = $_POST['cp'];
    if ($nickname && $email && $delegacion && $cp) {
        $server = 'localhost';
        $user = 'usuarioPrueba';
        $pass = 'abc123';

        $db = 'DInterfaces';
        $table = 'Usuarios';

        $link = mysql_connect($server, $user, $pass)
               or die('No se pudo conectar: ' . mysql_error());

        mysql_select_db($db) or die('No se pudo seleccionar la base de datos');

        $query = "INSERT INTO Usuarios (nickname, email, delegacion, codigoPostal) 
                VALUES ('$nickname', '$email', '$delegacion', '$cp')";

        $result = mysql_query($query) or die('No se pudo realizar la consulta: '. mysql_error());

        if(!$result){
            echo "No fue posible registrar al usuario";
            exit();
        } else{
            echo "Registro exitoso :)";
            exit();
        }

    } 
?>