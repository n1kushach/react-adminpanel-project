import React from 'react'
import { UserObj } from '../Interfaces/UserObj'
import { useParams, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

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

export const EditUserId = ({users, setUsers} : Props) => {

    let navigate = useNavigate();
    
    const [showTitleWarning, setShowTitleWarning] = React.useState<boolean>(false)

    

    const { id } = useParams<{ id: string }>();
    
  
   
    const currentUser = users.find((user) => user.id === Number(id));
    
    const [showError, setShowError] = React.useState<boolean>(currentUser === undefined);



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

    const [title, setTitle] = React.useState<string>(currentUser === undefined ? '' : currentUser.title)



    const {register, handleSubmit, formState: {errors}}:any = useForm<inputTypes>({
            resolver: yupResolver(schema)
        });
        
    const onSubmit = (data: any) => {
        if(title !== '') {
            let user = {
                id: Number(id),
                firstName: data.firstName,
                lastName: data.lastName,
                age: data.age,
                occupation: data.occupation,
                title: title,
            };
            
            setUsers([...users.filter((user) => user.id !== Number(id)), user]);
            navigate("/users");
        } else{
            setShowTitleWarning(true)
        }
    }

 
    
    
  return (
    <div className="flex">
        {!showError &&
         <form onSubmit={handleSubmit(onSubmit)}>
             <input type="text" defaultValue={currentUser?.firstName} placeholder="First Name" {...register("firstName")} />
             <p>{errors.firstName?.message}</p>
             <input type="text" defaultValue={currentUser?.lastName} placeholder="Last Name" {...register("lastName")} />
             <p>{errors.lastName?.message}</p>
             <input type="number" defaultValue={currentUser?.age} placeholder="Age" {...register("age")} />
             <p>{errors.age?.message}</p>
             <input type="text" defaultValue={currentUser?.occupation} placeholder="Occupation" {...register("occupation")} />
             <p>{errors.occupation?.message}</p>
             <Select onChange={(choice: any) => setTitle(choice.value)} defaultValue={{label:currentUser?.title, value:currentUser?.title}} options={titles} placeholder="Title" />
             {showTitleWarning && <p>Please select a title</p>}
             <input type="submit" />
         </form>
         }
         {showError && <p>User not found</p>}
    </div>
  )
}


