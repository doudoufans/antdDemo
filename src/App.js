import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import ShopList from './components/calc/OrderList';
import ShopAdd from './components/calc/History';
import './style/App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

render(){
  return (  
    <Router>
    <div className='App'>
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="desktop" />
              <span>首页</span>
              <Link to="/">首页</Link>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>数据核算</span>
                </span>
              }
            >
              <Menu.Item key="6"><Link to="/calc/list">订单列表</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/calc/history">对比历史</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px',height: 740}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
         
            <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/calc/list" component={ShopList}/>
                <Route path="/calc/history" component={ShopAdd}/>
            </Switch> 
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>-----众悦测试团队-----</Footer>
        </Layout>
       
      </Layout>
     
    </div>
  </Router>
  );
}
}

export default App;
