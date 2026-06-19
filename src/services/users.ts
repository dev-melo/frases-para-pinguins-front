import { User } from "../types/User";

const pathBackend = "http://localhost:8080/";
const pathUsers = "users"

export async function getAllUsers(): Promise<User[]> {
    const response = await fetch(pathBackend + pathUsers);
    return response.json();
}