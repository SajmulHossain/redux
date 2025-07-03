import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/couter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <>
      <p>Counter With React Reducx and typescript</p>

      <Button onClick={() => dispatch(increment(5))}>Increment by 5</Button> <br />
      <Button onClick={() => dispatch(increment(1))}>Increment</Button>
      <p>{count}</p>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </>
  );
}

export default App;
