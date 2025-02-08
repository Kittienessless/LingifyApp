 
import './register.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Register} from 'features/profile';
import { API } from "entities/user";
import {user} from 'entities/user'
import {SUCCESSFUL_REGISTER} from 'shared/constances'
import {Flex } from 'antd';

export const RegisterWidget: React.FC = () =>{
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
 const navigate = useNavigate();

  const onSubmit = (data: user) => {
     const registrationRequest = async () => {
      setResult("");
      setError("");
      try {
        await API.user.register(data);
        setResult(SUCCESSFUL_REGISTER);
        setTimeout(() => {
          console.log('success')
          navigate('/ThankfulPage');
        }, 2000);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    };
    registrationRequest();
  };

  return (
    <Flex  vertical align='center' justify='center' gap="middle">
       <Register  onSubmit={onSubmit}/>
      {result && <>{result}</>}
      {error && <>{error}</>}
    </Flex>
  );
};

 