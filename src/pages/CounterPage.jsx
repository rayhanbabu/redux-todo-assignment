import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/slice/CounterSlice";


function CounterPage() {
    const countvalue=useSelector((state) => state.counter.countingValue);
    const dispatch=useDispatch();
    return (
      <div>
            <h1>{countvalue}</h1>
            <button onClick={() => dispatch(increment())} >plus</button>
            <button onClick={() => dispatch(decrement())} >Minus</button>
      </div>
    )
}

export default CounterPage
