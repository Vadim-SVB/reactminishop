/* eslint-disable react/jsx-props-no-spreading */
import { FC } from "react";
import {TextField} from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form';

  const FirstAndLastName: FC = () => {
    const { control, formState: { errors } } = useFormContext();
    return ( 
      <>
    <Controller  name="firstName"  control={control}  defaultValue="" 
    render={({field}) => (
      <TextField 
        {...field} label="firstName" variant="outlined" type="text" error={!!errors.firstName} 
        helperText={errors.firstName? errors.firstName?.message : ''} 
      /> )}
    /> 
    <br />
    <br />
    <Controller  name="lastName"  control={control}  defaultValue="" 
    render={({field}) => (
      <TextField {...field} label="lastName" variant="outlined" type="text" error={!!errors.lastName} 
        helperText={errors.lastName? errors.lastName?.lastName : ''} 
      />  )}
    /> 
    
    </>
    )
  }
  
  export default FirstAndLastName;