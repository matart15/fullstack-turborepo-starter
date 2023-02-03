import { PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Col, Layout, Menu, MenuProps, Row } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;

export type MenuItem = Required<MenuProps>['items'][number];

const colorBgContainer = '#fff';
const items: MenuItem[] = [
  { label: 'Top', key: 'top', icon: <PieChartOutlined /> },
  { label: 'User', key: 'user', icon: <UserOutlined /> },
  { label: 'Role', key: 'role', icon: <TeamOutlined /> },
  // { label: 'Option 2', key: '2', icon: <DesktopOutlined /> },
  // {
  //   label: 'User',
  //   key: 'user',
  //   icon: <UserOutlined />,
  //   children: [
  //     { label: 'Tom', key: '3' },
  //     { label: 'Bill', key: '4' },
  //     { label: 'Alex', key: '5' },
  //   ],
  // },
  // {
  //   label: 'Role',
  //   key: 'role',
  //   icon: <TeamOutlined />,
  //   children: [
  //     { label: 'Team 1', key: '6' },
  //     { label: 'Team 2', key: '8' },
  //   ],
  // },
  // { label: 'Files', key: '9', icon: <FileOutlined /> },
];

export const SiteLayout = ({
  children,
  breadCrumbItems,
}: {
  children: React.ReactNode;
  breadCrumbItems: string[];
}): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value): void => setCollapsed(value)}>
        <Row style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={({ key }): void => {
            router.push(`/${key === 'top' ? '' : key}`);
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadCrumbItems.map(item => (
              <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Row style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Col span={24}>{children}</Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Matart15 ©2023 Created by Matar</Footer>
      </Layout>
    </Layout>
  );
};
