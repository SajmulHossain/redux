import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

{
  /* <>
    const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
      <p>Counter With React Reducx and typescript</p>

      <Button onClick={() => dispatch(increment(5))}>Increment by 5</Button> <br />
      <Button onClick={() => dispatch(increment(1))}>Increment</Button>
      <p>{count}</p>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </> */
}
