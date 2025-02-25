export default async function Page({ params }: { params: { id: string } }) {
  const data = await getAIModelComparison(params.id);

  return (
    <div className="grid grid-flow-row gap-4">
      <form action={updateAIModelComparison} className="grid grid-flow-row gap-4">
        <input type="hidden" name="id" value={params.id} />
        <input type="text" name="prompt" defaultValue={data.prompt} className="border p-2" />
        <input type="submit" value="update" className="border p-2" />
      </form>
      <form action={deleteAIModelComparison} className="grid grid-flow-row gap-4">
        <input type="hidden" name="id" value={params.id} />
        <input type="submit" value="delete" className="border p-2" />
      </form>
    </div>
  );
}
