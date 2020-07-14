import React from 'react';
import {Text, ITextProps} from 'office-ui-fabric-react/lib/Text';
import {DefaultButton} from 'office-ui-fabric-react';
import {FontIcon} from 'office-ui-fabric-react/lib/Icon';
import {Button} from 'office-ui-fabric-react/lib/Button';
import {mergeStyles, mergeStyleSets} from 'office-ui-fabric-react/lib/Styling';
import Chart from '../Chart';
import './styles.less';

const iconClass = mergeStyles({
  fontSize: 15,
});

const classNames = mergeStyleSets({
  deepSkyBlue: [{color: '#699dc6'}, iconClass],
});

const Stats = () => {
  return (
    <div>
      <div className="statsContainer">
        <Text variant="xxLarge" nowrap block>
          Stats
        </Text>
        <div className="row">
          <DefaultButton className="smallButton">
            <FontIcon
              iconName="ChevronLeftMed"
              className={classNames.deepSkyBlue}
            />
          </DefaultButton>
          <Text style={{margin: '10px'}} variant="xLarge" nowrap block>
            December, 2020
          </Text>
          <Button className="smallButton">
            <FontIcon
              iconName="ChevronRightMed"
              className={classNames.deepSkyBlue}
            />
          </Button>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default Stats;
