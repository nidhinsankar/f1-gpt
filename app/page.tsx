import Image from "next/image";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/scrape`);
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h2>F1 gpt</h2>
    </div>
  );
}
