import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { AddTodo, RemoveTodo } from "../redux/slice/TodoSlice";


     function TodoPage() {
                const list=useSelector((state)=>state.todo.Value);
                const dispatch=useDispatch();
                const TaskInput=useRef();
               

              

                console.log(list);
     return (
          <div>

<div className='container my-3'>
                    <h1 className='text-center'> To-do List</h1>
                 <div className="row p-4 shadow">
                     <div className="col-sm-4">
                       <input className='form-control' ref={TaskInput}
                          ></input>
                     </div>
                     <div className="col-sm-4">
                         <button className='btn btn-success' onClick={()=>dispatch(AddTodo(TaskInput.current.value))}>Add</button>
                      </div>
                      <div className="col-sm-4">
                      
                      </div>
                 </div>

                   <br></br>
                  <table className='table table-bordered'>
                         <thead>
                            <tr>
                                <th>Text</th>
                                <th>Move</th>
                            </tr>                     
                          </thead>
                        <tbody>
                        {
                      list.length!==0?(
                       list.map((item,index)=>{
                           return (
                               <tr key={index.toString()}>                     
                                    <td>
                                        <span style={ item['packed']? { textDecoration: "line-through" } : {}}>
                                           {item['text']}
                                        </span>
                                    </td> 
                                
                                   <td><button className='btn btn-danger' onClick={()=>dispatch(RemoveTodo(item['id']))}>Remove</button></td>
                               </tr>
                            )
                         })
                      ):(<tr></tr>)
                     }         
                       
                        </tbody>
                  </table>

          </div>
            
        </div>
    )
}

export default TodoPage
