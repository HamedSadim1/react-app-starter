import Counter from "./counter/Counter";
import NavBar from "./NavBar";
import TaskList from "./tasks/TaskList";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <NavBar />
      <Counter />
      <TaskList />
    </div>
  );
};

export default HomePage;
