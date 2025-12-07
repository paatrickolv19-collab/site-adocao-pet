<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Adoção de Pets</title>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>
  <header>
    <h1>Adoção de Pets</h1>
    <nav>
      <a href="#pets">Ver Pets</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>
  <section id="pets">
    <h2>Pets para adoção</h2>
    <div class="pets-list">
      <!-- Exemplo de card de pet -->
      <div class="pet-card">
        <img src="https://placedog.net/300/200" alt="Nome do Pet">
        <h3>Bolt</h3>
        <p>Raça: Vira-lata<br>Idade: 2 anos<br>Comportamento: Brincalhão</p>
        <button onclick="adotarPet('Bolt')">Quero adotar</button>
      </div>
      <!-- Adicione mais pets aqui -->
    </div>
  </section>
  <section id="contato">
    <h2>Contato</h2>
    <form>
      <label>Nome: <input type="text" required></label><br>
      <label>Email: <input type="email" required></label><br>
      <label>Mensagem: <textarea required></textarea></label><br>
      <button type="submit">Enviar</button>
    </form>
  </section>
  <footer>
    <p>&copy; 2025 - Site de Adoção de Pets</p>
  </footer>
  <script src="script.js"></script>
</body>
</html>
