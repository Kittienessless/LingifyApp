import { RegisterWidget } from 'widgets/registerWidget';
import { SwitchProvider } from 'shared/ui/switch';
import { MyButton } from 'shared/ui/button';
import { Checkbox } from 'shared/ui/checkbox';
import { Divider } from 'shared/ui/divider/divider';
import { Layout } from 'antd';
import { Radio } from 'shared/ui/radio';
 
export const StartPage=() =>{

  
  return(
    <Layout>
      <RegisterWidget></RegisterWidget>
      <SwitchProvider />
      <MyButton></MyButton>
      <Checkbox>sghfggh</Checkbox>
      <p>Divider</p>
      <Divider>rgerg</Divider>
      <Radio>radio</Radio>
      
     </Layout>
  );
}