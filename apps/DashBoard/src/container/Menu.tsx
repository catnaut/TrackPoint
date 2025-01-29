import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from '@tanstack/react-router';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'dashboard',
    label: <Link to="/">数据看板</Link>,
    icon: <MailOutlined />,
    children: [
      { key: 'dashboard-list', label: <Link to="/dashboard">看板列表</Link> },
      { key: 'dashboard-editor', label: <Link to="/dashboardEditor">看板编辑器</Link> },
    ],
  },
  {
    key: 'event',
    label: '埋点管理',
    icon: <AppstoreOutlined />,
    children: [
      { key: 'event-list', label: <Link to="/eventList">事件列表</Link> },
      { key: 'event-editor', label: <Link to="/eventEditor">事件编辑</Link> },
    ],
  },
  {
    key: 'query',
    label: '数据查询',
    icon: <SettingOutlined />,
    children: [
      { key: 'query-list', label: <Link to="/queryList">条件查询</Link> },
      //{ key: 'query-editor', label: <Link to="/queryEditor">条件编辑</Link> },
    ],
  },
  {
    key: 'system',
    label: '系统设置',
    icon: <SettingOutlined />,
    children: [
      { key: 'user-list', label: <Link to="/userList">用户管理</Link> },
      { key: 'permission-list', label: <Link to="/permissionList">权限管理</Link> },
      { key: 'system', label: <Link to="/system">系统参数</Link> },
    ],
  },
];

const SiderMenu: React.FC = () => {
  return (
    <Menu
      style={{
        width: '100%',
        height: '100%',
        borderRight: 'none'
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
};

export default SiderMenu;