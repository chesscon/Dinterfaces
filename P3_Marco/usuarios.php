<h3>Información de los Usuarios Registrados</h3>
    <table>
      <tr>
        <td class="encabezado_tabla">Id</td>
        <td class="encabezado_tabla">Nickname</td>
        <td class="encabezado_tabla">Email</td>
        <td class="encabezado_tabla">Delegacion</td>
        <td class="encabezado_tabla">Código postal</td>
      </tr>

      <?php
        $server = 'localhost';
        $user = 'usuarioPrueba';
        $pass = 'abc123';

        $db = 'DInterfaces';
        $table = 'Usuarios';

        $link = mysql_connect($server, $user, $pass)
               or die('No se pudo conectar: ' . mysql_error());

        mysql_select_db($db) or die('No se pudo seleccionar la base de datos');

        $query = 'SELECT * FROM '.$table;

        $result = mysql_query($query) or die('No se pudo realizar la consulta: '. mysql_error());

        while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
            echo "\t<tr>\n";
            foreach ($line as $col_value) {
                echo "\t\t<td>$col_value</td>\n";
            }
            echo "\t</tr>\n";
        }

      ?>

    </table>
  