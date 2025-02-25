export default async function Page() {
  const data = await getAIModelComparisons();

  return (
    <div className="grid grid-flow-row gap-4">
      {data.map((item) => (
        <div key={item.id} className="border p-2">
          <p>Prompt: {item.prompt}</p>
          <p>Consensus: {item.consensus}</p>
        </div>
      ))}
    </div>
  );
}
