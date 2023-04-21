import React, { useEffect, useState } from 'react';
// @ts-ignore
import { PageContainer } from '@ant-design/pro-components';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import RSSList from '@/components/RSSList';

const URLS: string[] = [
  'https://api.claudezss.com/other-get?t=https://hnrss.org/best',
  'https://api.claudezss.com/other-get?t=https://hnrss.org/newest?q=Python',
  'https://api.claudezss.com/other-get?t=https://hnrss.org/newest?q=Golang',
  'https://api.claudezss.com/other-get?t=https://hnrss.org/newest?q=Rust',
  'https://api.claudezss.com/other-get?t=https://hnrss.org/newest?q=K8S',
];

export default function Post() {
  const [posts, setPosts] = useState<NodeListOf<Element>>();

  async function refresh(input_url: string) {
    try {
      const res = await fetch(input_url);
      const rss = await res.text();
      if (res.status === 200) {
        setPosts(
          new window.DOMParser()
            .parseFromString(rss, 'text/xml')
            .querySelectorAll('item'),
        );
      }
    } catch (err) {
      console.error(err);
    }
  }
  const onTabClick = (key: string) => {
    refresh(URLS[parseInt(key)]);
  };

  const items: TabsProps['items'] = [
    {
      key: '0',
      label: `Best`,
    },
    {
      key: '1',
      label: `Python`,
    },
    {
      key: '2',
      label: `Golang`,
    },
    {
      key: '3',
      label: `Rust`,
    },
    {
      key: '4',
      label: `K8S`,
    },
  ];

  useEffect(() => {
    if (!posts) {
      refresh(URLS[0]);
    }
  }, []);

  return (
    <PageContainer ghost>
      {posts ? (
        <Tabs
          defaultActiveKey="0"
          items={items.map((item) => {
            return {
              label: item.label,
              key: item.key,
              children: <RSSList rss={posts} />,
            };
          })}
          onTabClick={(key) => onTabClick(key)}
        />
      ) : (
        <p>Loading...</p>
      )}
    </PageContainer>
  );
}
