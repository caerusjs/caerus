import React from 'react';

export interface Arrow
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLOrSVGElement>,
    HTMLOrSVGElement
  > {}

export const Arrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24.156'
      height='8.861'
      viewBox='0 0 24.156 8.861'
    >
      <path
        d='M-30.176,0l-.53.519,3.463,3.541H-50V4.8h22.757l-3.463,3.541.53.519,4.332-4.431Z'
        transform='translate(50)'
        fill='#ad841f'
      />
    </svg>
  );
};

export const arrowProps = {};
