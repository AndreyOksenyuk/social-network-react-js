import React from 'react';
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';
import { Layout, Menu, Modal } from 'antd';
import {
   MenuUnfoldOutlined,
   MenuFoldOutlined,
   UserOutlined,
   MessageOutlined,
   OrderedListOutlined,
   UsergroupAddOutlined,
   SettingOutlined,
   SoundOutlined,
   LogoutOutlined
} from '@ant-design/icons';
import style from './App.module.scss'
import { NavLink } from 'react-router-dom';
import FooterContent from '..//Footer/Footer';
import Music from '../Music/MusicContainer';
import Setting from '../Settings/SettingsContainer';
import UsersContainer from '../Users/UsersContainer';
import HeaderContainer from '../Header/HeaderContainer';
import LoginContainer from '../Authorization/Login/LoginContainer';
import MyProfileContainer from '../Profile/MyProfile/MyProfileContainer';
import Page404 from '../module/ErrorPage404'
import { whitSuspense } from '../../hoc/withSuspense';
import { useState } from 'react';
const ProfileContainer = React.lazy(() => import('../Profile/Profile.container'));
const MessageContainer = React.lazy(() => import('../Message/MessageContainer'));
const News = React.lazy(() => import('../News/NewsContainer'));


const { Header, Footer, Sider, Content } = Layout;


const SocialNetworkApp = (props) => {
   let [collapsed, setCollapsed] = useState(false)
   let [visible, setVisible] = useState(false)

   let toggle = () => {
      setCollapsed(collapsed = !collapsed)
   };
   let showModal = () => {
      if (props.isAuth) {
         setVisible(true);
      }
   };

   let handleOk = () => {
      props.logout()
      setVisible(false);
      return <Redirect to="/login" />
   };

   let handleCancel = () => {
      setVisible(false);
   };

   return (
      <HashRouter>
         <React.Fragment >
            <div className={
               props.error && props.textError
                  ? style.AppError_active
                  : style.AppError
            }>
               <h5>{props.error}</h5>
               <p>{props.textError}</p>
            </div>

            <Modal
               cancelText="Нет"
               okText="Да"
               visible={visible}
               onOk={handleOk}
               onCancel={handleCancel}
            >
               <b style={{ fontSize: '22px' }}>Вы действительно хотите выйти?</b>
            </Modal>


            <Layout>

               <Sider style={{ backgroundColor: props.ColorThemeApp || '#006d75' }}
                  trigger={null}
                  collapsible
                  collapsed={collapsed}
               >
                  <div className="logo" />
                  <Menu style={{ backgroundColor: props.ColorThemeApp || '#006d75' }} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                     <div className="ButtonMenu">
                        {collapsed
                           ? <MenuUnfoldOutlined className='trigger' onClick={toggle} />
                           : <MenuFoldOutlined className='trigger' onClick={toggle} />
                        }
                     </div>
                     <Menu.Item key="1" icon={<UserOutlined />}>
                        <NavLink to="/Myprofile" replace >Моя страница</NavLink>
                     </Menu.Item>
                     <Menu.Item key="2" icon={<MessageOutlined />}>
                        <NavLink to="/message" replace >Сообщения</NavLink>
                     </Menu.Item>
                     <Menu.Item key="3" icon={<OrderedListOutlined />}>
                        <NavLink to="/news" replace >Новости</NavLink>
                     </Menu.Item>
                     <Menu.Item key="4" icon={<SoundOutlined />}>
                        <NavLink to="/music" replace >Музыка</NavLink>
                     </Menu.Item>
                     <Menu.Item key="5" icon={<UsergroupAddOutlined />}>
                        <NavLink to="/users" replace >Пользователи</NavLink>
                     </Menu.Item>
                     <Menu.Item key="6" icon={<SettingOutlined />}>
                        <NavLink to="/setting" replace >Настройки</NavLink>
                     </Menu.Item>
                     <Menu.Item key="7" icon={<LogoutOutlined onClick={showModal} />} id={style.Exit}>
                        <span onClick={showModal}>Выход</span>
                     </Menu.Item>
                  </Menu>
               </Sider>

               <Layout>
                  <Header style={{ backgroundColor: props.ColorThemeApp || '#006d75' }}>
                     <HeaderContainer />
                  </Header>
                  <Content>
                     <div className={style.mainContent}>
                        <Switch>
                           <Route
                              exact path='/'
                              render={() => <Redirect to='/Myprofile' />}
                           />
                           <Route
                              path='/login'
                              render={() => <LoginContainer />}
                           />
                           <Route
                              path="/Myprofile"
                              render={() => <MyProfileContainer />}
                           />
                           <Route
                              path="/profile/:userId?"
                              render={whitSuspense(ProfileContainer)}
                           />
                           <Route
                              path="/message"
                              render={whitSuspense(MessageContainer)} />

                           <Route
                              path="/news"
                              render={whitSuspense(News)}
                           />

                           <Route
                              path="/music"
                              component={Music}
                           />
                           <Route
                              path="/users"
                              component={UsersContainer}
                           />

                           <Route
                              path="/setting"
                              component={Setting}
                           />
                           <Route
                              path="*"
                              component={Page404}
                           />
                        </Switch>
                     </div>
                  </Content>

                  <Footer><FooterContent /></Footer>
               </Layout>

            </Layout>
         </React.Fragment>
      </HashRouter>
   );
}

export default SocialNetworkApp;
