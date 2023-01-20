import React from 'react'
import { useForm } from 'react-hook-form';
import makeAnimated from 'react-select/animated';
import { useNavigate, useParams } from "react-router-dom";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { ContactObj } from '../Interfaces/ContactObj';




interface Props {
    contacts: ContactObj[];
    setContacts: React.Dispatch<React.SetStateAction<ContactObj[]>>;
}

export const EditContactId = ({contacts, setContacts} : Props) => {

    let navigate = useNavigate();
    
    const {id} = useParams();
   

    interface inputTypes {
        personalId: string;
        email: string;
        phoneNumber: string;
        Address: string;
       
    }

    

    const schema = yup.object().shape({
        personalId: yup.string().min(11).max(11).required("Personal ID is required"),
        email: yup.string().email().required("E-mail is required"),
        phoneNumber: yup.string().min(9).max(9).required("Phone number is required"),
        Address: yup.string().required("Address is required"),
       
    })



    const {register, handleSubmit, formState: {errors}}:any = useForm<inputTypes>({
            resolver: yupResolver(schema)
        });
        
    const onSubmit = (data: any) => {
            let contact = {
                id: Number(id),
                personalId: data.personalId,
                email: data.email,
                phoneNumber: data.phoneNumber,
                Address:  data.Address,
            }          
            setContacts([...contacts.filter((contact) => contact.id !== Number(id)), contact]);
            navigate("/contacts")
    }

    const currentContact = contacts.find((contact) => contact.id === Number(id));
    
    const [showError, setShowError] = React.useState<boolean>(currentContact === undefined);

 
    
    
  return (
    <div>
        {showError && <p>There is no contact with this ID</p>}
        {!showError && 
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" defaultValue={currentContact?.personalId} placeholder="Personal ID" {...register("personalId")} />
          <p>{errors.personalId?.message}</p>
          <input type="text" defaultValue={currentContact?.email} placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
          <input type="text" defaultValue={currentContact?.phoneNumber} placeholder="Phone Number" {...register("phoneNumber")} />
          <p>{errors.phoneNumber?.message}</p>
          <input type="text" defaultValue={currentContact?.Address} placeholder="Address" {...register("Address")} />
          <p>{errors.Address?.message}</p>
          <input type="submit" />
        </form>
    }
    </div>
        
    
  )
}

