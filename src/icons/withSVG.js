import React from 'react';

function withSVG(WrappedComponent, config = {}) {
  return class extends React.Component {
    render() {
      const {
        style,
        fill,
        stroke,
        width,
        height,
        viewBox,
        className,
        ...rest
      } = this.props;
      const customStyle = style || config.style || {};
      const customFill = fill || config.fill;
      const customStroke = stroke || config.stroke;
      const customWidth = `${width || config.width}px`;
      const customHeight = `${height || config.height}px`;
      const customClassName = className || config.className || '';
      const customViewBox = viewBox || config.viewBox;

      return (
        <svg
          width={customWidth}
          height={customHeight}
          style={customStyle}
          viewBox={customViewBox}
          fill={customFill}
          stroke={customStroke}
          className={`svg-icon ${customClassName || ''}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <WrappedComponent stroke={customStroke} fill={customFill} />
        </svg>
      );
    }
  };
}

export default withSVG;
