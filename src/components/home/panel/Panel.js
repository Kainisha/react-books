import React from 'react';
import cx from 'classnames';
import Box from 'components/home/box/Box';
import style from './Panel.module.scss';

const Panel = ({ label, items }) => {
  return (
    <div className="panel">
      <p className="panel-heading">{label}</p>
      <div className={cx('panel-block', style.block)}>
        {items.map(({ image, author, title }) => (
          <Box image={image} author={author} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Panel;
