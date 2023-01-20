import React from 'react'
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useNavigate, useParams } from "react-router-dom";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { UserObj } from '../Interfaces/UserObj';


const titles = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Mrs', label: 'Mrs' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Dr', label: 'Dr' },
    { value: 'Prof', label: 'Prof' },
    { value: 'Other', label: 'Other'}
]

interface Props {
    users: UserObj[];
    setUsers: React.Dispatch<React.SetStateAction<UserObj[]>>;
}

export const EditUser = ({users, setUsers} : Props) => {

    let navigate = useNavigate();
    const [title, setTitle] = React.useState<string>('')
    const [showTitleWarning, setShowTitleWarning] = React.useState<boolean>(false)

   

    interface inputTypes {
        firstName: string;
        lastName: string;
        age: number;
        occupation: string;
        title: string;
    }

    

    const schema = yup.object().shape({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        age: yup.number().typeError("Age is required").positive().integer().min(18).required("Age is required"),
        occupation: yup.string().required("Occupation is required"),
       
    })



    const {register, handleSubmit, formState: {errors}}:any = useForm<inputTypes>({
            resolver: yupResolver(schema)
        });
        
    const onSubmit = (data: any) => {
        if(title !== '') {
            let user = {
                id: users.length===0 ? 1 : users[users.length-1].id + 1,
                firstName: data.firstName,
                lastName: data.lastName,
                age: data.age,
                occupation: data.occupation,
                title: title,
            };
            console.log(user)
            setUsers([...users, user]);
            
            navigate("/users");
        } else{
            setShowTitleWarning(true)
        }
    }

 
    
    
  return (
 
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="First Name" {...register("firstName")} />
          <p>{errors.firstName?.message}</p>
          <input type="text" placeholder="Last Name" {...register("lastName")} />
          <p>{errors.lastName?.message}</p>
          <input type="number" placeholder="Age" {...register("age")} />
          <p>{errors.age?.message}</p>
          <input type="text" placeholder="Occupation" {...register("occupation")} />
          <p>{errors.occupation?.message}</p>
          <Select onChange={(choice: any) => setTitle(choice.value)} options={titles} placeholder="Title" />
          {showTitleWarning && <p>Please select a title</p>}
          <input type="submit" />
        </form>
        
    
  )
}

