import React, { useEffect, useState } from 'react';
// @ts-ignore
import { useParams, useSearchParams } from 'umi';
import { PageContainer } from '@ant-design/pro-components';
import ReactMarkdown from 'react-markdown';
import { history } from 'umi';
import FloatButtonGroup from '@/components/FloatButtonGroup';
import { Divider, Typography, Affix, Button } from 'antd';
import rehypeHighlight from 'rehype-highlight';

const { Title, Paragraph } = Typography;

export default function PostPage() {
  const params = useParams();
  const [blog, setBlog] = useState<string>('');
  const [searchParams] = useSearchParams();

  const title = searchParams.get('title');

  async function refresh() {
    try {
      const res = await fetch(
        'https://api.claudezss.com/post/' + params.postId,
      );
      if (res.status !== 200) {
        console.error(await res.text());
      }
      setBlog(await res.text());
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  if (blog === null) {
    return <div>Post with ID {params.postId} not found.</div>;
  }

  return (
    <PageContainer ghost title={title}>
      <FloatButtonGroup />
      <Affix offsetTop={100} style={{ zIndex: '99' }}>
        <Button onClick={() => history.push('/posts')} color="blue">
          Back
        </Button>
      </Affix>
      <Typography
        style={{ paddingTop: '15px', paddingRight: '5%', paddingLeft: '5%' }}
      >
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          components={{
            h2: Title,
            p: Paragraph,
            hr: Divider,
          }}
        >
          {blog}
        </ReactMarkdown>
      </Typography>
    </PageContainer>
  );
}
