import React from 'react'

function UserIndo2({ usersData }) {
    return (
        <div >
            <h3>User data in next Component with prop drilling </h3>
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
                    {usersData.map((row) => (
                        <tr key={row.email}>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>{row.email}</td>
                            <td>{row.mobile}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserIndo2;