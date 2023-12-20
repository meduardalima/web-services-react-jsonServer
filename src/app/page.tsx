"use client";
import { useState, useEffect } from "react";
import axios from "axios";
//como pegar os dados do backend e colocar no front, com useState e useEfect
export default function Home() {
  const [user, setUser] = useState([]); //a const user é um array vazio e setUser é uma função que altera o estado da minha
  //variável user, então se eu colocar que a setUser é um boolean, a minha variável é um boolean
  useEffect(() => {
    axios.get("http://localhost:5555/users").then((response) => {
      setUser(response.data);
    });
  });
  return (
    <main>
      {user.map((user: any) => {
        return (
          <ul key={user.id}>
            <li>
              {user.name} - {user.age}
            </li>
          </ul>
        );
      })}
    </main>
  );
}
