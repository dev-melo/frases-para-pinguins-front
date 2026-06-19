export default async function DetalheFrasePage({
    params
}: {
    params: Promise<{ fraseId: string }>
}
) {
    const { fraseId } = await params;
    return (
        <div>Dealhes Frase Page {fraseId}</div>
    )
}