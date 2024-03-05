

export default function Home() {
  return (
    <div>
      <div>

        <header>
        <div className="flex justify-between items-center p-4 px-8 bg-slate-300">
            <div>
              <span>imranFswd</span>
            </div>

            <div className="flex justify-around items-center gap-2">
              <span>test</span>
              <span>hd</span>
            </div>
          </div>
        </header>

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
