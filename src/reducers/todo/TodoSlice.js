import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState ={
    users:[]
    // users:[{id:1,userName:"Gaurav",userNumber:"1234567897"}]
}

const TodoSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const user = {
                id:nanoid(),
                userName:action.payload.userName,
                userNumber:action.payload.userNumber
            }

            state.users.push(user);
        },
        deleteUser:(state,action)=>{
            state.users = state.users.filter((user)=>(
                user.id !== action.payload.userId
            ))
        },
        editUser:(state,action)=>{
            state.users = state.users.map((user)=>(
                user.id === action.payload.userId ? {id:action.payload.userId ,userName : action.payload.userName , userNumber : action.payload.userNumber} : user
            ))
        }
    }
})

export const {addUser,deleteUser,editUser} = TodoSlice.actions;
export default TodoSlice.reducer;