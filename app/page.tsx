// app/page.tsx
export default function Home() {
  return (
    <>
      <header>
        <h1>Adoção de Pets</h1>
        <nav>
          <a href="#pets">Ver Pets</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      <section id="pets">
        <h2>Pets para adoção</h2>
        <div className="pets-list">
          {/* Exemplo de card de pet */}
          <div className="pet-card">
            <img src="https://placedog.net/300/200" alt="Nome do Pet" />
            <h3>Bolt</h3>
            <p>
              Raça: Vira-lata<br />
              Idade: 2 anos<br />
              Comportamento: Brincalhão
            </p>
            <button onClick={() => adotarPet('Bolt')}>Quero adotar</button>
          </div>
          {/* Adicione mais pets aqui */}
        </div>
      </section>
      <section id="contato">
        <h2>Contato</h2>
        <form>
          <label>Nome: <input type="text" required /></label><br />
          <label>Email: <input type="email" required /></label><br />
          <label>Mensagem: <textarea required></textarea></label><br />
          <button type="submit">Enviar</button>
        </form>
      </section>
      <footer>
        <p>&copy; 2025 - Site de Adoção de Pets</p>
      </footer>
    </>
  );
}

// Adicione essa função no mesmo arquivo para evitar erro
function adotarPet(nome: string) {
  alert(`Obrigado pelo interesse em adotar o ${nome}!`);
}
