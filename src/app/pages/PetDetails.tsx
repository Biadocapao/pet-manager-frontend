import { useParams, useNavigate } from "react-router-dom";
import "./PetDetails.css";

const petsMock = [
  { id: 1, nome: "Rex", especie: "Cachorro", idade: 3 },
  { id: 2, nome: "Mimi", especie: "Gato", idade: 2 },
  { id: 3, nome: "Thor", especie: "Cachorro", idade: 5 },
];

export default function PetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const pet = petsMock.find((p) => p.id === Number(id));

  if (!pet) {
    return <p>Pet não encontrado</p>;
  }

  return (
    <div className="details-bg">
      <div className="details-card">
        <h2>{pet.nome}</h2>
        <p><strong>Espécie:</strong> {pet.especie}</p>
        <p><strong>Idade:</strong> {pet.idade} anos</p>

        <button onClick={() => navigate("/pets")}>
          ← Voltar
        </button>
      </div>
    </div>
  );
}
