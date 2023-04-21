import { List, Card } from 'antd';
import React from 'react';

interface Props {
  rss: NodeListOf<Element>;
}

const RSSList: React.FC<Props> = (props) => {
  const onClick = (link: string) => {
    window.open(link, '_blank');
  };
  console.log(props.rss);

  return (
    <List
      grid={{
        gutter: 2,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
        xxl: 4,
      }}
      dataSource={Array.from(props.rss)}
      renderItem={(item: any) => (
        <List.Item>
          <Card
            hoverable={true}
            style={{ width: '100%', minHeight: '100px' }}
            onClick={() => onClick(item.querySelector('link').textContent)}
          >
            {item.querySelector('title').textContent}
          </Card>
        </List.Item>
      )}
    />
  );
};
export default RSSList;
