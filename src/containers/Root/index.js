import React from 'react';
import {initializeIcons} from 'office-ui-fabric-react/lib/Icons';
import './styles.less';
import Toolbar from './components/Toolbar';
import Stats from './components/Stats';

const Root = () => {
  initializeIcons();
  return (
    <div className="root">
      <div className="container">
        <div className="mainContainer">
          <div className="overView">
            <div>
              <Toolbar />
            </div>
            <div>
              <Stats />
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <p>Right</p>
        </div>
      </div>
    </div>
  );
};

export default Root;
