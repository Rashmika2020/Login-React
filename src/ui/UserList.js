import React from 'react'
import axios from 'axios';

 const UserList=()=> {

    // axios.post('http://localhost/bizlogic/view.php',sendData)
    // .then((result)=>{
    //     console.log(result);
    //     if(result.data.Status == 'Invalid'){
    //     alert('Invalid User');
    //     }
    //     else{
    //        history('/dashboard');
    //     }
    // })

  return (
    <div>
       <div className="row">
            <h2>
            <div className="col-md-12 text-center">User View List</div>
            </h2>
        </div>
    </div>
  )
}
export default UserList;
