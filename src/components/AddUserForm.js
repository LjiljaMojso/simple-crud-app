import React from 'react'
import {useForm} from "react-hook-form"
function AddUserForm(props) {

    const { register, handleSubmit,errors } = useForm();
    const onSubmit = (data, e) => {
        
        props.addUser(data)
        e.target.reset();
    }

    const onError = (errors, e) => console.log(errors, e);

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label>Name</label>
        <input type="text" name="name" {...register("name")} />
        {errors?.name?.massage}
        <label>Username</label>
        <input type="text" name="username" {...register("username")} />
        <button>Add new user</button>
      </form>
    )
}

export default AddUserForm;
