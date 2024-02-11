import fetchData from "./actions";
import Loading from "./components/Loading";

export default async function Home() {
  let number = 1
  const data = await fetchData(number)
  return (
    <main className="sm:p-16 py-16 px-8n flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
        {data}
      </section>
      <Loading/>
    </main>
  );
}
