import { memo } from 'react';
import styled from 'styled-components';

import { Color } from '../styles/variables';

const _Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Color.MONO_30};
`;

// eslint-disable-next-line
export const Separator = memo(() => <_Separator />);
