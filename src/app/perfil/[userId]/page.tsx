export default async function DetalhesPerfilPage({
    params
}: {
    params: Promise<{userId: string}>
}
) {

    const {userId} = await params;

    return <div>Detalhes Perfil Page {userId} </div>
}