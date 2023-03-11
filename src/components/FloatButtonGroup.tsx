import { FloatButton } from 'antd';
import { MyIcon } from '@/constants/icon';
const FloatButtonProps = {
  target: '_blank',
};

export default function FloatButtonGroup() {
  return (
    <FloatButton.Group shape="square" style={{ right: 15 }}>
      <FloatButton
        icon={<MyIcon type="icon-homelinkedin" />}
        href="https://www.linkedin.com/in/yan-zhang-a21428113/"
        {...FloatButtonProps}
      />
      <FloatButton
        icon={<MyIcon type="icon-homegithub" />}
        href="https://github.com/claudezss"
        {...FloatButtonProps}
      />
      <FloatButton
        icon={<MyIcon type="icon-homeorcid" />}
        href="https://orcid.org/0000-0001-9867-4924"
        {...FloatButtonProps}
      />
      <FloatButton
        icon={<MyIcon type="icon-homebilibili" />}
        href="https://space.bilibili.com/6151386"
        {...FloatButtonProps}
      />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  );
}
