import React, { useEffect, useState } from 'react';
// @ts-ignore
import { history } from 'umi';
import { PageContainer } from '@ant-design/pro-components';
import FloatButtonGroup from '@/components/FloatButtonGroup';
import { ProList } from '@ant-design/pro-components';

export default function Post() {
  const [posts, setPosts] = useState<any[]>();

  async function refresh() {
    if (localStorage.getItem('posts') === null) {
      try {
        const res = await fetch('https://api.claudezss.com/blog/list');
        if (res.status !== 200) {
          console.error(await res.text());
        }
        setPosts(
          (await res.json()).sort(
            (p1: any, p2: any) =>
              new Date(p2.last_modified).getTime() -
              new Date(p1.last_modified).getTime(),
          ),
        );
        localStorage.setItem('posts', JSON.stringify(posts));
      } catch (err) {
        console.error(err);
      }
    } else {
      setPosts(JSON.parse(localStorage.getItem('posts') || '[]'));
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
