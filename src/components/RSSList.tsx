import { List } from 'antd';
import React from 'react';

interface Props {
  rss: NodeListOf<Element>;
}
const RSSList: React.FC<Props> = (props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={Array.from(props.rss)}
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
};
export default RSSList;
