import React, { useState, useMemo } from 'react';
import ResizeObserver from 'rc-resize-observer';
import './Layout.css';

const getDeg = (tan) => (Math.atan(tan) * 180) / Math.PI;

const Layout = ({ children }) => {
  const [blockInfo, setInfo] = useState({});

  const borderImage = useMemo(() => {
    const { width, height } = blockInfo;
    const b = width / 2;
    const a = height / 2;
    const referenceAngle = getDeg(b / a);
    const borderAngle = {
      rt: 0 + referenceAngle, // 0 + atan(半width / 半height)
      rb: 180 - referenceAngle, // 180 - atan(半width / (半height - footerheight - border))
      lb: 180 + referenceAngle, // 180 + atan(半widht / (半height - footerheight - border))
      lt: 360 - referenceAngle, // 360 - atan(半width / 半height)
    };

    return `conic-gradient(
      var(--bg) 0, 
      var(--bg) 120deg, 
      var(--main) ${borderAngle.rb}deg, 
      var(--main) ${borderAngle.lb}deg, 
      var(--bg) 240deg, 
      var(--bg) 100%
      ) 10`;
  }, [blockInfo]);

  console.log(borderImage);

  return (
    <ResizeObserver
      onResize={({ width, height }) => {
        setInfo({ width, height });
      }}
    >
      <div
        className="m-bg"
        style={{
          borderImage,
        }}
      >
        {children}
      </div>
    </ResizeObserver>
  );
};

export default Layout;
