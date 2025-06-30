import React from 'react';
import { initializeWidget } from '@apitable/widget-sdk';
import { Control } from './control';

const WidgetDeveloperTemplate: React.FC = () => {
  return (
    <div style={{ height: '100%' }}>
      <Control />
    </div>
  );
};


initializeWidget(WidgetDeveloperTemplate, process.env.WIDGET_PACKAGE_ID!);
