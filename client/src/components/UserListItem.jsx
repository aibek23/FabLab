import React from 'react'
import { Link } from 'react-router-dom';

const UserListItem = ({props}) => {

    return(
        <>{props.email=="admin@gmail.com"?"":<tr>
        <th scope="row">{props.id}</th>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td>{props.role =="user"?"студет":"преподаватель"}</td>
        <td> <Link to={`/user-viwer/?${props.id} ` } className=' btn-sm btn btn-info' > посмотреть</Link> </td>
      </tr>}
                
        
        </>
    )
}

export default UserListItem;