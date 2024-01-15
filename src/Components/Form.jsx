import { useDispatch } from "react-redux";
import {addUser} from '../reducers/todo/TodoSlice';
import { useState } from "react";

const Form = () => {

    const [userName,setUserName] = useState('');
    const [userNumber,setUserNumber] = useState('');

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();

        dispatch(
            addUser({userName,userNumber})
        )

        setUserName('');
        setUserNumber('');
    }

    return (
        <form className="w-full h-max flex flex-col gap-5 my-9 bg-slate-300 p-4 rounded-lg" onSubmit={submitForm}>

            <input type="text" id="username" placeholder="Enter user name..." className="h-14 outline-none pl-4 rounded-2xl text-2xl" 
            required
            onChange={(e)=>setUserName(e.target.value)}
            value={userName}
            />

            <input type="text" id="username" placeholder="Enter phone number..." className="h-14 outline-none pl-4 rounded-2xl text-2xl" 
            required
            onChange={(e)=>setUserNumber(e.target.value)}
            value={userNumber}
            />

            <button className="m-4 p-4 text-2xl border-blue-900 border-y-4 bg-blue-400 rounded-2xl text-white">
            Submit</button>

        </form>
    )
}
export default Form;

