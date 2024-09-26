import React from 'react'
import UserIndo2 from './UserIndo2';
import { UserData } from '../Other Utility Components/UserDetails';

function UsersInfo() {
    return (
        <>
            <div className='container m-4'>
                <h1 className='text-primary'>User Details</h1>
                <br/>
                <h3>Users Data</h3>
                <table className='table table-dark bordered'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Email</td>
                            <td>Mobile</td>
                        </tr>
                    </thead>

                    <tbody>
                        {UserData.map((row) => (
                            <tr key={row.email}>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>{row.email}</td>
                                <td>{row.mobile}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            <UserIndo2 usersData={UserData}/>
            </div>
        </>
    )
}

export default UsersInfo;