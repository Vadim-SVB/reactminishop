import {FC} from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import { useForm, SubmitHandler, Controller, FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Button} from '@material-ui/core'
import LoginAndPassword from '../components/LoginAndPassword'
import FirstAndLastName from  '../components/FirstAndLastName'
// import { spawn } from 'child_process';
interface IFormInputs {
  email:string;
  password:string;
  firstName:string;
  lastName:string;
}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(7).required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  })
  .required();

const App: FC = () => {

  // const { register, control, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log('submit',data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Login
        </p>
        
      <main>
        <FormProvider {...methods}>
          
        <form onSubmit={methods.handleSubmit(formSubmitHandler)} >

          <LoginAndPassword />
          <br />
          <br />
          <FirstAndLastName />
          <br />
          <br />

          <Button type="submit" value="submit" variant="contained">submit</Button>
        </form>
        </FormProvider>
        
        
      </main>
      </header>
    </div>
  );
}

export default App;
