import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../core/http/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const response = await api.post("/autenticacao/login", {
        email,
        senha,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/pets");
    } catch {
      alert("Erro ao autenticar");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br /><br />
      <input placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <br /><br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
