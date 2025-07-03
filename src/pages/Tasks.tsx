import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTask } from "@/modules/tasks/AddTask";
import TaskCard from "@/modules/tasks/TaskCard";
import { selectTask, updateFilter } from "@/redux/features/tasks/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
    const tasks = useAppSelector(selectTask)
    const dispatch = useAppDispatch();

    return (
      <div className="section">
        <div className="flex items-center gap-6 mb-8">
          <h1>Tasks</h1>
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList>
              <TabsTrigger onClick={() => dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
              <TabsTrigger onClick={() => dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
              <TabsTrigger onClick={() => dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
              <TabsTrigger onClick={() => dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
            </TabsList>
          </Tabs>
          <div>
            <AddTask />
          </div>
        </div>
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    );
};

export default Tasks;