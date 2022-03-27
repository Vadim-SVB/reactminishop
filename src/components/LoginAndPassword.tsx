/* eslint-disable react/jsx-props-no-spreading */
import { FC } from "react";
import {TextField} from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form';

const LoginAndPassword: FC = () => {
  const { control, formState: { errors } } = useFormContext();
  return ( 
    <>
  <Controller  name="email"  control={control}  defaultValue="" 
  render={({field}) => (
    <TextField 
      {...field} label="Email" variant="outlined" type="email" error={!!errors.email} 
      helperText={errors.email? errors.email?.message : ''} 
    /> )}
  /> 
  <br />
  <br />
  <Controller  name="password"  control={control}  defaultValue="" 
  render={({field}) => (
    <TextField {...field} label="Password" variant="outlined" type="password" error={!!errors.password} 
      helperText={errors.password? errors.password?.message : ''} 
    />  )}
  /> 
  
  </>
  );
}

export default LoginAndPassword;