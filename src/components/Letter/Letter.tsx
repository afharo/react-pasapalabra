import React from 'react';
import './Letter.css';

export interface LetterProps {
  status: 'resolved' | 'failed' | 'pending';
  letter: string;
  index: number;
  total: number;
}

export class Letter extends React.Component<LetterProps> {
  render() {
    const {status, index, total, letter} = this.props;
    const rotate = `${index/total*360 + 270}deg`;
    return <button
      className={`Letter Letter-${status}`}
      style={{
        // idea from https://www.useragentman.com/blog/2013/03/03/animating-circular-paths-using-css3-transitions/
        transform: `rotate(${rotate}) translateX(30vmin) rotate(-${rotate})`
      }}
    >
      {letter.toUpperCase()}
    </button>
  }
}

export default Letter;