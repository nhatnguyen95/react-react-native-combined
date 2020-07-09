import React from 'react';
import {FontIcon} from 'office-ui-fabric-react/lib/Icon';
import {Button} from 'office-ui-fabric-react/lib/Button';
import {mergeStyles, mergeStyleSets} from 'office-ui-fabric-react/lib/Styling';

import './styles.less';

const iconClass = mergeStyles({
  fontSize: 30,
  alignSelf: 'center',
  marginTop: '6px',
});

const classNames = mergeStyleSets({
  deepSkyBlue: [{color: '#699dc6'}, iconClass],
});

const Toolbar = () => {
  return (
    <div className="toolbarContainer">
      <Button className="button focus" autofocus="true">
        <FontIcon iconName="Home" className={classNames.deepSkyBlue} />
      </Button>
      <Button className="button">
        <FontIcon iconName="PageData" className={classNames.deepSkyBlue} />
      </Button>
      <Button className="button">
        <FontIcon iconName="CheckList" className={classNames.deepSkyBlue} />
      </Button>
      <Button className="button">
        <FontIcon iconName="Family" className={classNames.deepSkyBlue} />
      </Button>
    </div>
  );
};

export default Toolbar;
