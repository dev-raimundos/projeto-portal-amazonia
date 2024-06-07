<?php
define('HOST', '127.0.0.1');
define('USUARIO', 'USUARIODOBANCO');
define('SENHA', 'SENHADOBANCO');
define('DB', 'NOMEDOBANCOCRIADO');

$conexao = mysqli_connect(HOST, USUARIO, SENHA, DB) or die ('Não foi possível conectar');
