import React from 'react';
import './styles.less';

const data = [
  40,
  45,
  22,
  10,
  90,
  45,
  22,
  26,
  90,
  45,
  22,
  80,
  90,
  45,
  22,
  40,
  90,
  45,
  72,
  30,
  60,
  45,
];

const Chart = () => {
  const ratio = 2;
  const aspectArray = data.map((i, index) => ({
    rawValue: i,
    aspectedValue: i * ratio,
    color:
      index < 5 ? '#fff' : index < 15 ? '#118a74' : 'rgba(210,232,250,0.5)',
  }));
  const maxValue = Math.max.apply(Math, data) * ratio;
  return (
    <svg
      // class="chart"
      className="chart"
      width={'100vmin'}
      height={maxValue * ratio + 10}
      aria-labelledby="title desc"
      // style="background: grey; display: flex; justify-content: flex-end"
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
      {!aspectArray.length
        ? null
        : aspectArray.map((item, index) => {
            return (
              <g key={`g - ${index}`} class="bar" style={{fill: item.color}}>
                <rect
                  width="30"
                  height={item.aspectedValue * ratio}
                  x={index * (30 + 10)}
                  y={(maxValue - item.aspectedValue) * ratio}
                  rx="13"
                  filter={
                    item.color === 'rgba(210,232,250,0.5)'
                      ? 'url(#innershadow)'
                      : 'url(#shadow)'
                  }
                />
              </g>
            );
          })}
    </svg>
  );
};

export default Chart;
