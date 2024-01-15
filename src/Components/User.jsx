import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {deleteUser} from '../reducers/todo/TodoSlice';

const User = () => {

    const data = useSelector(state => state.users);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                {
                    data.map((user) => (
                        <div key={user.id} className="user flex items-center justify-between w-full  bg-green-300 rounded-lg h-24 my-0.5 flex-wrap">

                            <div className="detail-section flex items-center w-1/2 h-full">

                                <h2 className="font-semibold text-2xl m-4 " >id : {user.id}</h2>

                                <h2 className="font-semibold text-2xl m-4 text-green-900">{user.userName}</h2>

                                <h2 className="font-semibold text-2xl m-4 text-green-900">{user.userNumber}</h2>

                            </div>

                            <div className="button-section flex items-center w-1/2 h-full justify-end">

                                <button className="border-x-2 border-y-2 border-green-600 outline-none p-4 m-4 text-2xl rounded-2xl"
                                onClick={()=>dispatch(deleteUser({userId : user.id}))}
                                >Delete</button>

                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    );

}

export default User;