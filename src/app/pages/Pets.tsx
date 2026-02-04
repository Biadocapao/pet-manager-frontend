
import "./Pets.css";
import "../../styles/background.css";


const petsMock = [
  { id: 1, nome: "Rex", especie: "Cachorro", idade: 4 },
  { id: 2, nome: "Mia", especie: "Gato", idade: 2 },
  { id: 3, nome: "Thor", especie: "Cachorro", idade: 6 },
];

export default function Pets() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/fundo.png')",
        backgroundRepeat: "repeat",
        padding: 40,
      }}
    >
      <h1 style={{ marginBottom: 20 }}>🐾 Lista de Pets</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {petsMock.map((pet) => (
          <div
            key={pet.id}
            style={{
              background: "white",
              padding: 20,
              borderRadius: 12,
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            <h3>{pet.nome}</h3>
            <p>Espécie: {pet.especie}</p>
            <p>Idade: {pet.idade} anos</p>
          </div>
        ))}
      </div>
    </div>
  );
}
