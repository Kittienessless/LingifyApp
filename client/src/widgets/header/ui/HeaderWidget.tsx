import React from 'react';
import {
  
  useNavigate
} from 'react-router-dom';
import {HomeOutlined,  PlusCircleOutlined, ReadOutlined,  UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './header.css'; 
import { Menu , Flex} from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const headerStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: '',
};
const items: MenuItem[] = [
  {
    label: 'Home',
    key: '/Home',
    icon: < HomeOutlined/>
  },
  {
    label:'Posts',
    key: '/Posts',
    icon: < ReadOutlined/>
    
  },
  {
    label: 'Handbook',
    key: '/Handbook',
    icon: <PlusCircleOutlined/>

  },
  {
    label: 'Profile',
    key: '/Profile',
    icon: <UserOutlined />

  },

];

export const HeaderWidget: React.FC = () => {
  const navigate = useNavigate();

  return( 
    <Flex>
      <Menu  style={headerStyle} 
      onClick={({key})=>{
        navigate(key);
      }} 
      mode="horizontal" 
      items={items} />
    </Flex>

  );
};
 