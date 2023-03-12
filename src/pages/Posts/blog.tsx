import { PageContainer } from '@ant-design/pro-components';
import FloatButtonGroup from '@/components/FloatButtonGroup';

export default function Blog() {
  return (
    <PageContainer ghost>
      <FloatButtonGroup />
      <iframe
        src="https://blog-claudezss.vercel.app/"
        title="Yan's Blog"
        width="100%"
        style={{ height: '90vh' }}
      ></iframe>
    </PageContainer>
  );
}
