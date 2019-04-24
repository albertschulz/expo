import React from 'react';

import UIExplorer, { AppText, Description } from '../ui-explorer';
import { storiesOf } from '@storybook/react-native';

const TITLE = 'WebBrowser';

class DemoScreen extends React.Component {
  render() {
    return (
      <UIExplorer title={TITLE}>
        <Description>
          <AppText>Desc</AppText>
        </Description>
      </UIExplorer>
    );
  }
}

import notes from './WebBrowser.notes.md';

storiesOf('Components', module).add(TITLE, () => <DemoScreen />, { notes });