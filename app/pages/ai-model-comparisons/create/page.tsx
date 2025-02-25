export default async function Page() {
  return (
    <form action={createAIModelComparison} className="grid grid-flow-row gap-4">
      <input type="text" name="prompt" placeholder="Enter prompt" className="border p-2" />
      <input type="submit" value="create" className="border p-2" />
    </form>
  );
}
