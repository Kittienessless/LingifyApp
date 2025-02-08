import React from 'react';
import {
  useNavigate
} from 'react-router-dom';
import {  Layout, Menu , Flex, Divider } from 'antd';

import { InstagramOutlined, PinterestOutlined, YoutubeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
const {  Footer } = Layout;
type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
  {
    label: (
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        
      </a>),
      key: 'instagram', 
     icon: <InstagramOutlined/>
  },
  {
    label: (
      <a href="https://ru.pinterest.com/" target="_blank" rel="noopener noreferrer">
       
      </a>),
      key: 'pinterest', 
      icon: <PinterestOutlined />
  },
  {
    label: (
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        
      </a>),
      key: 'youtube', 
    icon: <YoutubeOutlined />
    
  }
];
const layoutStyle = {
  overflow: 'hidden',
};
const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  justifyContent: "center",  
  minHeight: 50,
  backgroundColor: 'transparent',
};


export const FooterWidget: React.FC = () => {
  const navigate = useNavigate();
  return(
    
    <Flex  wrap >
      <Divider style={{ backgroundColor:'transparent',  borderColor: 'black' }} dashed />
      <Layout style={layoutStyle}>
          <Footer style={footerStyle}>
            <Menu  style={footerStyle} 
                onClick={({key})=>{
                  navigate(key);
                }} 
                mode="horizontal" 
                items={items} />
          </Footer>
      </Layout>
    </Flex>
  );
}