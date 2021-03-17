// React
import React from 'react';
import Loader from 'react-loader-spinner';

interface Props {
  color?: string;
  height?: number;
  width?: number;
}

const Spinner: React.FC<Props> = ({
  color = 'white',
  height = 20,
  width = 20,
}) => {
  return (
    <Loader
      type="Oval"
      color={color}
      height={height}
      width={width}
      timeout={20000}
    />
  );
};

export default Spinner;
