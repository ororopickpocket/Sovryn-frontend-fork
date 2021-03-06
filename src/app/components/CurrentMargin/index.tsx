import React from 'react';
import { weiTo4 } from '../../../utils/blockchain/math-helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  currentMargin: string;
  startMargin: string;
}

export function CurrentMargin(props: Props) {
  const diff =
    Number(weiTo4(props.currentMargin)) - Number(weiTo4(props.startMargin));

  return (
    <>
      <div className="d-inline">{`${weiTo4(props.currentMargin)} %`}</div>
      <div
        className="d-inline ml-2 mr-2"
        style={{ fontSize: '12px', color: diff > 0 ? 'Green' : 'Red' }}
      >
        <div className="d-inline">
          <FontAwesomeIcon
            icon={diff > 0 ? faLongArrowAltUp : faLongArrowAltDown}
          />
          {` ${diff.toFixed(4)} %`}
        </div>
      </div>
    </>
  );
}
