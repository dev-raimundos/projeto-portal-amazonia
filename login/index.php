<?php
// Inicia a sessão PHP
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <!-- Metadados -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Título da página -->
    <title>Sistema de Login - PHP + MySQL</title>
    <!-- Estilos -->
    <link rel="stylesheet" href="css/bulma.min.css" />
    <link rel="stylesheet" type="text/css" href="/css/login.css">
</head>
<body>
<!-- Cabeçalho -->
<header>
    <div class="container logo">
        <div class="logo-imagem">
            <!-- Logo -->
            <img src="../images/floresta.png" alt="Logo de uma floresta verde">
        </div>
        <div class="logo-texto">
            <!-- Título do site -->
            <h1>PORTAL AMAZÔNIA</h1>
        </div>
    </div>
    <!-- Menu de navegação -->
    <div class="menu">
        <ul>
            <li><a href="../index.html">Página Inicial</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="../clima/clima.html">Clima</a></li>
        </ul>
    </div>
</header>
<!-- Seção principal -->
<section class="hero is-success is-fullheight">
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <h3 class="title has-text-grey">Sistema de Login</h3>
                <!-- Verifica se houve tentativa de login sem sucesso -->
                <?php if(isset($_SESSION['nao_autenticado'])): ?>
                    <div class="notification is-danger">
                        <p>ERRO: Usuário ou senha inválidos.</p>
                    </div>
                <?php
                endif;
                // Limpa a variável de sessão de autenticação
                unset($_SESSION['nao_autenticado']);
                ?>
                <!-- Formulário de login -->
                <div class="box">
                    <form action="login.php" method="POST">
                        <div class="field">
                            <div class="control">
                                <!-- Campo de usuário -->
                                <input name="usuario" type="text" class="input is-large" placeholder="Seu Email"
                                       autofocus="">
                            </div>
                        </div>
                    <br>
                        <div class="field">
                            <div class="control">
                                <!-- Campo de senha -->
                                <input name="senha" class="input is-large" type="password" placeholder="Sua Senha">
                            </div>
                        </div>
                    <br>
                        <!-- Botão de login -->
                        <button type="submit" class="button is-block is-link is-large is-fullwidth">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</body>

</html>
