import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginFiels() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/session", {
        email,
        password,
      });

      // Armazena o token no localStorage
      localStorage.setItem("token", response.data.token);

      // Redireciona para o dashboard
      router.push("/dashboard");
    } catch (err) {
      setError("Email ou senha incorretos. Tente novamente.");
      console.error("Erro no login:", err);
    }
  };

  return (
    <div className="flex flex-col  w-[358px] h-[290px]">
      <form onSubmit={handleLogin}>
        <div>
          <div className="inputName">E-mail</div>
          <input
            className="inputField"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="digite o seu e-mail"
          />
        </div>
        <div>
          <div className="inputName">Senha</div>
          <input
            className="inputField"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="digite a sua senha"
          />
        </div>
        <div className="text-[#FE7C6E] mt-3 mb-5">Esqueceu a senha</div>
        <div>
          <button className="button w-full" type="submit">
            Entrar
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
