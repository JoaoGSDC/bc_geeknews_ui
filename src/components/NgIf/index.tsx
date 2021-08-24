import React from 'react';

interface IPropsDTO {
  condition: boolean;
  children: any;
}

const NgIf = ({ condition, children }: IPropsDTO) => {
  return <>{condition ? <>{children}</> : <></>}</>;
};

export default NgIf;
