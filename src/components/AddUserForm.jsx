import React from 'react';

const UserTable = () => {
    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" value="" />
            <label>Username</label>
            <input type="text" name="username" value="" />
            <button>Add new user</button>
        </form>
    )
}

export default UserTable;