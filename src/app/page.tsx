
import Header from "@/components/header/Header";


export default function Home() {
  return (
    <div>
      <div>

        <Header />

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1 className="text-4xl">
            <span className="text-green-600">Welcome</span>
            <span className="pl-2">to world most popular</span>
            <span className="text-red-600 inline-block pl-2">Tech News</span>
            <span className="pl-2">portal</span>
          </h1>
        </div>
      </main>

      
      </div>
    </div>
  );
}
