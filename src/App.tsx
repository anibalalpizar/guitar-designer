import BodyControls from "./components/common/BodyControls";
import Guitar from "./components/common/Guitar";
import NeckControls from "./components/common/NeckControls";

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen ">
      <h1 className="text-3xl">Guitar Designer</h1>
      <h2 className="text-2xl text-center">
        This page is in <strong>very very very early development. </strong>{" "}
        Thanks for your patience! 🙏
      </h2>

      <h3>
        If you are a developer and this project looks interesting, contributions
        are highly appreciated!{" "}
        <a
          href="https://github.com/alfres2503/guitar-designer"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          Click to GitHub Repo
        </a>
      </h3>

      <section className="w-[75%] h-[50vh] flex justify-center items-center bg-zinc-800 rounded-3xl">
        <Guitar />
      </section>

      <div className="flex justify-start w-[75%]">
        <BodyControls />
        <NeckControls />
      </div>
    </main>
  );
};

export default App;
