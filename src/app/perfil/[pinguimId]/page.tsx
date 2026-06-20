export default async function DetalhesPerfilPage({
    params
}: {
    params: Promise<{pinguimId: string}>
}
) {

    const {pinguimId} = await params;

    return <div>Detalhes Perfil Page {pinguimId} </div>
}