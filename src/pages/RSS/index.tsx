import React, { useEffect, useState } from 'react';
// @ts-ignore
import { PageContainer } from '@ant-design/pro-components';
import { List, Tabs } from 'antd';
import type { TabsProps } from 'antd';

const URLS: string[] = [
  'https://proxy.claudezss.com/other-get?t=https://hnrss.org/best',
  'https://proxy.claudezss.com/other-get?t=https://hnrss.org/newest?q=Python',
  'https://proxy.claudezss.com/other-get?t=https://hnrss.org/newest?q=Golang',
  'https://proxy.claudezss.com/other-get?t=https://hnrss.org/newest?q=K8S',
];

export default function Post() {
  const [posts, setPosts] = useState<any>();
  const [url, setUrl] = useState<any>(URLS.at(0));

  async function refresh() {
    try {
      const res = await fetch(url);
      const rss = await res.text();
      if (res.status === 200) {
        setPosts(
          new window.DOMParser()
            .parseFromString(rss, 'text/xml')
            .querySelectorAll('item'),
        );
      } else {
        setPosts(null);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  function genList() {
    refresh();
    return (
      <List
        itemLayout="horizontal"
        dataSource={posts}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              title={
                <a
                  href={item.querySelector('link').textContent}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.querySelector('title').textContent}
                </a>
              }
            />
          </List.Item>
        )}
      />
    );
  }

  const items: TabsProps['items'] = [
    {
      key: '0',
      label: `Best`,
      children: genList(),
    },
    {
      key: '1',
      label: `Python`,
      children: genList(),
    },
    {
      key: '2',
      label: `Golang`,
      children: genList(),
    },
    {
      key: '3',
      label: `K8S`,
      children: genList(),
    },
  ];

  return (
    <PageContainer ghost>
      <Tabs
        defaultActiveKey="0"
        items={items}
        onTabClick={(key) => setUrl(URLS.at(parseInt(key)))}
      />
    </PageContainer>
  );
}
