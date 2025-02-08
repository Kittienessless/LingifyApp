import   {  useState} from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button,  Form, Input,    Space } from 'antd';
import { useNavigate} from 'react-router-dom';
import './profile.css'

 
import {user} from 'entities/user'

type FormProps = {
  onSubmit: (data: user) => void;
}

export const Register =({onSubmit}: FormProps) =>{
  const [form] = Form.useForm();
  const [name, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [doublePassword, setDoublePassword] = useState("");
  const [email, setEmail] = useState("");
 const navigate = useNavigate();
   return (
    <div  > 
      <Space></Space>
      
      <Form   labelCol={{span: 10}} wrapperCol={{span: 14}} 
        form={form} 
        name="register"
        initialValues={{ remember: true }}
        onFinish={onSubmit}
       
      >


        <Form.Item
          name="name" 
          label="NickName"
          rules={[
            {required: true, 
            message: 'Please input your Username!' },
            {whitespace: true,},
            { min: 3,},
            { max: 10}
            ,
          ]}
        >
          <Input 
          value={name} 
          onChange={e => setLogin(e.target.value)}
          style={{
            fontSize: 20,
            height: 40,
           
          }} 
          prefix={<UserOutlined />} 
          placeholder="Username" />
        </Form.Item>





        <Form.Item
          name="password"  
          label="Password"
          rules={[
            {required: true },
            { min: 4, message: "password must be more than 4 symbols "},
            { max: 10, message: "password must be less than 10 symbols "},

          ]} hasFeedback
        >
          <Input.Password 
          value={password} 
          onChange={e => setPassword(e.target.value)}
           style={{
            fontSize: 20,
            height: 40,
           
          }} 
          prefix={<LockOutlined />}  
          placeholder="Password" />
        </Form.Item>



        <Form.Item 
        label="Confirm Password"
        name="passwordConfirm"  
          dependencies={["password"]}
          rules={[
            {required: true},  
            { min: 4, message: "password must be more than 4 symbols "},
            { max: 10, message: "password must be less than 10 symbols "},
            ({getFieldValue})=>({
              validator(_,value){
                if(!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject('Passwords are must be the same')

              }
            })
            ]} 
            hasFeedback
        >
          <Input.Password 
          value={doublePassword} 
          onChange={e => setDoublePassword(e.target.value)}
           style={{
            fontSize: 20,
            height: 40,
           
          }} 
          prefix={<LockOutlined />} 
          placeholder="Password" />
        </Form.Item>


       


        <Form.Item  name="email"  rules={[
            {required: true, 
            message: 'Please input your Email!' },
            {type: "email", message: "please enter a valid email"},
          ]} label="Email" hasFeedback>
          <Input value={email} 
          onChange={e => setEmail(e.target.value)}
           style={{
            fontSize: 20,
            height: 40,
           
          }} 
          prefix={<MailOutlined />} 
          type="email" 
          placeholder="Email" />
        </Form.Item>
      


        <Form.Item wrapperCol={{span: 24}}>
          <Button 
           style={{
            fontSize: 20,
            height: 50,
          }} 
          block type="primary" 
          htmlType="submit">
            Register
          </Button>
          <Button size='large'    
          style={{
            fontSize: 20,
            height: 40,
           
          }} type="link" 
          onClick={()=>navigate(' ')}
         > 
          or Log in!
          </Button>
        </Form.Item>


      </Form>
    </div> 
   


    
  );
}