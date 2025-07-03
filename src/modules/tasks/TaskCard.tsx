import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteStatus } from "@/redux/features/tasks/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const { title, description, priority, id, isCompleted } = task;

  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-600": priority === "low",
              "bg-yellow-600": priority === "medium",
              "bg-red-600": priority === "high",
            })}
          ></div>
          <h2 className={cn({
            'line-through' : isCompleted === true
          })}>{title}</h2>
        </div>
        <div className="flex gap-3 items-center">
          <Button onClick={() => dispatch(deleteTask(id))} variant={"link"} className="text-red-500">
            <Trash2 />
          </Button>
          <Checkbox onClick={() => dispatch(toggleCompleteStatus(id))} />
        </div>
      </div>
      <div className="mt-5">{description}</div>
    </div>
  );
};

export default TaskCard;
