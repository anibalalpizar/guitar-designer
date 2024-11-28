import BodyControls from "./components/common/BodyControls";
import Guitar from "./components/common/Guitar";
import NeckControls from "./components/common/NeckControls";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
      <header className="py-6 px-8 border-b border-zinc-700">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Guitar Designer
        </h1>
        <p className="text-zinc-400 text-center mt-2">
          Design your dream guitar with our interactive tool
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-zinc-900 rounded-lg p-4 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Body Controls
              </h3>
              <BodyControls />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-zinc-900 rounded-lg p-6 shadow-lg h-[600px] flex items-center justify-center">
              <div className="w-full max-w-[500px] mx-auto">
                <Guitar />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-zinc-900 rounded-lg p-4 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Neck Controls
              </h3>
              <NeckControls />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 px-8 border-t border-zinc-700 mt-8">
        <div className="text-center text-zinc-400">
          <p>
            This project is in early development.{" "}
            <a
              href="https://github.com/alfres2503/guitar-designer"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Contribute on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
