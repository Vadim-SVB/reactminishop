import {FC} from 'react';
import logo from '../images/logo.svg';
// import '../styles/App.css';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Button} from '@material-ui/core'
import LoginAndPassword from '../components/LoginAndPassword'
import FirstAndLastName from  '../components/FirstAndLastName'

import styled from 'styled-components';
import Title from '../components/Title';


//style
const AppWrapper = styled.div`
  background: linear-gradient(0deg, rgba(62, 82, 109, 0.5), rgb(0, 17, 48, 1));
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  text-align: center;
  color: aliceblue;
  `

const AppLogo = styled.img`
  height: 25vmin;
  pointer-events: none;
  animation: App-logo-spin infinite 60s linear;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`

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
    <AppWrapper>
      <header >
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <Title text='Login'/>
          
        
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
    </AppWrapper>
  );
}

export default App;
