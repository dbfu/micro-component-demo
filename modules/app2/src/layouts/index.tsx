import { exportComponents } from '@/exportComponent';
import React from 'react';
import { Outlet, useModel } from 'umi';

export default function Layout() {
  // 获取主应用传过来的数据
  const masterProps = useModel('@@qiankunStateFromMaster');

  // 如果类型是component表示要加载组件
  if (masterProps.type === 'component') {
    if (exportComponents[masterProps.componentName]) {
      return React.createElement(exportComponents[masterProps.componentName], masterProps.params);
    }
    return null;
  }

  return (
    <Outlet />
  );
}
