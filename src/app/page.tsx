import { getAllFrases } from "../services/frases";
import { getAllUsers } from "../services/users";

export default async function Home() {
  
  const users = await getAllUsers();
  const frases = await getAllFrases();

  return (
    <>
    <h1>Home Page</h1>
    
    </>
  );
}
