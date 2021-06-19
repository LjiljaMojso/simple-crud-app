import React from 'react'
import {useForm} from "react-hook-form"

function EditUserForm(props) {

    const { register, handleSubmit,errors, setValue } = useForm({
        defaultValues:props.currentUser
    });
    setValue("name",props.currentUser.name)
    setValue("username",props.currentUser.username)
    
    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
        e.target.reset();
    }
    
    const onError = (errors, e) => console.log(errors, e);


    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label>Name</label>
        <input type="text" name="name" {...register("name")} />
        {errors ?.name ?.massage}
        <label>Username</label>
        <input type="text" name="username" {...register("username")} />
        <button>Edit user</button>
      </form>
    )
}

export default EditUserForm;
