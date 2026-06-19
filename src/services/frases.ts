import { Frase } from "../types/Frase"


const pathBackend = "http://localhost:8080/"
const pathFrases = "frases"

export async function getAllFrases(): Promise<Frase[]> {
    const response = await fetch(pathBackend + pathFrases);
    return response.json();
}