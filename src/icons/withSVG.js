import React from "react";
import { space, border, layout, color } from "styled-system";
import styled from "styled-components";

const SVG = styled.svg`
  ${layout}
  ${space}
  ${border}
  ${color}
`;

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
      const customHeight = `${height || config.height}`;
      const customClassName = className || config.className || "";
      const customViewBox = viewBox || config.viewBox;

      return (
        <SVG
          width={customWidth}
          height={customHeight}
          style={customStyle}
          viewBox={customViewBox}
          fill={customFill}
          stroke={customStroke}
          className={`svg-icon ${customClassName || ""}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <WrappedComponent stroke={customStroke} fill={customFill} />
        </SVG>
      );
    }
  };
}

export default withSVG;
