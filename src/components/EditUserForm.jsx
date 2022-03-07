import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = ({ currentUser, updateUser }) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    //const initialFormState = { id: null, name: '', username: ''}
    const [user, setUser] = useState(currentUser)

    const handleInputChange = (event) => {
      const { name, value } = event.target;

      setUser({ ...user, [name]: value })
      console.log(user);
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.name || !user.username) return

                updateUser(user.id, user);
                //setUser(initialFormState);
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Edit user</button>
        </form>
    )
}

export default EditUserForm;