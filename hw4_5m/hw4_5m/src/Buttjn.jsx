import { useDispatch } from "react-redux";
import { decrementNum, incrementNum, resetNum, incrementNumByFive, decrementNumByFive } from "./redux/reducer";

const Buttjn = () => {
    const dispatch  = useDispatch();
    return (
        <div className="btn">
            <button onClick={()=>{
                dispatch(incrementNum())
            }}>+1</button>
            <button onClick={()=>{
                dispatch(decrementNum())
            }}>-1</button>
            <button onClick={()=>{
                dispatch(resetNum())
            }}>reset</button>
            <button onClick={()=>{
                dispatch(incrementNumByFive())
            }}>+5</button>
            <button onClick={()=>{
                dispatch(decrementNumByFive())
            }}>-5</button>
        </div>
    );
}

export default Buttjn;
