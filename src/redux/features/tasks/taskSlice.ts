import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter?: string;
}

const initialState: InitialState = {
  tasks: [
    {
      id: "abcd",
      title: "Initial Frontend",
      description: "Create Home page",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "abcdasdf",
      title: "Do no 5 assignment",
      description: "Do frontend and backend both",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "low",
    },
    {
      id: "abcdasdff",
      title: "Create Homepage",
      description: "Push it up",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "medium",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteStatus: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleCompleteStatus, deleteTask, updateFilter } =
  taskSlice.actions;

export const selectTask = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter !== "all") {
    return state.todo.tasks.filter((task) => task.priority === filter);
  }

  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => state.todo.filter;

export default taskSlice.reducer;
