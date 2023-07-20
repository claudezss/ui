import React, { useEffect, useState } from 'react';
// @ts-ignore
import { history } from 'umi';
import { PageContainer } from '@ant-design/pro-components';
import FloatButtonGroup from '@/components/FloatButtonGroup';
import { ProList } from '@ant-design/pro-components';

export default function Post() {
  const [posts, setPosts] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(true);

  async function refresh() {
    try {
      const res = await fetch('https://api.claudezss.com/blog/list');
      if (res.status !== 200) {
        console.error(await res.text());
      }
      const data = (await res.json()).sort(
        (p1: any, p2: any) =>
          new Date(p2.last_modified).getTime() -
          new Date(p1.last_modified).getTime(),
      );
      setLoading(false);
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <PageContainer ghost>
      <FloatButtonGroup />
      <ProList<{ name: string }>
        itemLayout="vertical"
        rowKey="name"
        loading={loading}
        dataSource={posts}
        onItem={(post: any) => {
          return {
            onClick: () => {
              history.push(`/posts/${post.key}?title=${post.name}`);
            },
          };
        }}
        metas={{
          title: {
            dataIndex: 'name',
          },
          description: {
            dataIndex: 'last_modified',
          },
          actions: {},
          extra: {},
          content: {},
        }}
      />
    </PageContainer>
  );
}
