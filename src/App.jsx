import { useLocalStorage } from "./useLocalStorage";

const importantFiveTasks = [
  {
    id: 1,
    task: "Run 4 kilometers",
  },
  {
    id: 2,
    task: "Note Down Idea / Record / Edit / Make Thumbnail / Upload",
  },
  {
    id: 3,
    task: "Complete your work at job",
  },
  {
    id: 4,
    task: "Complete your prayers with gratitude",
  },
  {
    id: 5,
    task: "Sleep 8 hours",
  },
];

function App() {
  const [wins, setWins] = useLocalStorage("wins", []);

  const won = wins.at(-1) === new Date().toDateString() ? true : false;
  const winColor = won ? "text-yellow-500" : "";

  function handleWinClick() {
    if (won) return setWins((prev) => prev.slice(0, prev.length - 1));
    setWins((prev) => [...prev, new Date().toDateString()]);
  }

  return (
    <div className='flex flex-col items-center justify-center h-dvh vignette bg-no-repeat bg-cover  bg-center bg-[url(./assets/focus.png)]'>
      <div className='p-10 rounded-3xl bg-slate-50  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex flex-col '>
        {importantFiveTasks.map((task) => (
          <div className='p-4 text-lg' key={task.id}>
            <p className='inline-block cursor-default'>{task.task}</p>
          </div>
        ))}
        <button
          onClick={handleWinClick}
          className={`self-center mt-2 text-gray-200 cursor-pointer text-9xl patrick-hand ${winColor}`}
        >
          W
        </button>
      </div>
    </div>
  );
}

export default App;
