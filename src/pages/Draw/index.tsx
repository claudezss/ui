import React from 'react';
// @ts-ignore
import { PageContainer } from '@ant-design/pro-components';

import { Excalidraw } from '@excalidraw/excalidraw';

export default function Draw() {
  return (
    <PageContainer ghost>
      <div style={{ height: '80vh' }}>
        <Excalidraw />
      </div>
    </PageContainer>
  );
}
