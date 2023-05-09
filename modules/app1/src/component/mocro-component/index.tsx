import { FC } from 'react';
import { MicroAppWithMemoHistory } from 'umi'

interface MicroComponentProps {
  name: string; // 模块名称
  componentName: string; // 组件名称
  params?: any;  // 组件参数
}

export const MicroComponent: FC<MicroComponentProps> = ({
  name,
  componentName,
  params,
}) => {
  return (
    <MicroAppWithMemoHistory
      url={`/${name}`}
      name={name}
      type="component"
      componentName={componentName}
      params={params}
    />
  )
}
