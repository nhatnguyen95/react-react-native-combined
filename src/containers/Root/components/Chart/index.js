import React from 'react';
import './styles.less';

const data = [
  {value: 40, month: 'Jan'},
  {value: 45, month: 'Feb'},
  {value: 22, month: 'Mar'},
  {value: 10, month: 'Apr'},
  {value: 90, month: 'May'},
  {value: 45, month: 'Jun'},
  {value: 22, month: 'Jul'},
  {value: 26, month: 'Aug'},
  {value: 90, month: 'Sep'},
  {value: 45, month: 'Oct'},
  {value: 22, month: 'Nov'},
  {value: 80, month: 'Dec'},
  {value: 90, month: 'Jan'},
  {value: 45, month: 'Feb'},
  {value: 22, month: 'Mar'},
];

const Chart = () => {
  const ratio = 2;
  const aspectArray = data.map((i, index) => ({
    rawValue: i.value,
    aspectedValue: i.value * ratio,
    color: index < 4 ? '#fff' : index < 12 ? '#118a74' : 'rgb(210,232,250)',
    month: i.month,
  }));
  const maxValue = 100 * ratio;
  return (
    <svg
      className="chart"
      width={'100vmin'}
      height={maxValue * ratio + 80}
      aria-labelledby="title desc"
      role="img">
      <title id="title">A bar chart showing information</title>

      <defs>
        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx="2" dy="2" />
          <feColorMatrix
            result="matrixOut"
            in="offOut"
            type="matrix"
            values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
          />
          <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="2" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
        <filter id="innershadow" x0="-50%" y0="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feOffset dy="2" dx="3" />
          <feComposite
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowDiff"
          />

          <feFlood flood-color="#444444" flood-opacity="0.2" />
          <feComposite in2="shadowDiff" operator="in" />
          <feComposite
            in2="SourceGraphic"
            operator="over"
            result="firstfilter"
          />

          <feGaussianBlur in="firstfilter" stdDeviation="3" result="blur2" />
          <feOffset dy="-2" dx="-3" />
          <feComposite
            in2="firstfilter"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowDiff"
          />

          <feComposite in2="shadowDiff" operator="in" />
          <feComposite in2="firstfilter" operator="over" />
        </filter>
      </defs>

      <line
        x1="5.5vmin"
        y1={((maxValue * ratio) / 5) * 4}
        x2="100vmin"
        y2={((maxValue * ratio) / 5) * 4}
        class="line"
      />
      <text x={0} y={((maxValue * ratio) / 5) * 4 + 5} fill="#cad9e6">
        200k
      </text>

      <line
        x1="5.5vmin"
        y1={((maxValue * ratio) / 5) * 3}
        x2="100vmin"
        y2={((maxValue * ratio) / 5) * 3}
        class="line"
      />
      <text x={0} y={((maxValue * ratio) / 5) * 3 + 5} fill="#cad9e6">
        400k
      </text>

      <line
        x1="5.5vmin"
        y1={((maxValue * ratio) / 5) * 2}
        x2="100vmin"
        y2={((maxValue * ratio) / 5) * 2}
        class="line"
      />
      <text x={0} y={((maxValue * ratio) / 5) * 2 + 5} fill="#cad9e6">
        600k
      </text>

      <line
        x1="5.5vmin"
        y1={((maxValue * ratio) / 5) * 1}
        x2="100vmin"
        y2={((maxValue * ratio) / 5) * 1}
        class="line"
      />
      <text x={0} y={((maxValue * ratio) / 5) * 1 + 5} fill="#cad9e6">
        800k
      </text>
      {!aspectArray.length
        ? null
        : aspectArray.map((item, index) => {
            return (
              <g key={`g - ${index}`} style={{fill: item.color}} class="bar">
                <rect
                  width="35"
                  height={item.aspectedValue * ratio}
                  x={index * 60 + 85}
                  y={(maxValue - item.aspectedValue) * ratio}
                  rx="13"
                  filter={
                    item.color === 'rgb(210,232,250)'
                      ? 'url(#innershadow)'
                      : 'url(#shadow)'
                  }
                />
                <text
                  x={index * 60 + 85}
                  y={maxValue * ratio + 40}
                  fill={index > 11 ? '#d8e0fb' : '#cad9e6'}>
                  {item.month}
                </text>
              </g>
            );
          })}
    </svg>
  );
};

export default Chart;
