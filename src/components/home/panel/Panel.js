import React from 'react';
import cx from 'classnames';
import Box from 'components/home/box/Box';
import style from './Panel.module.scss';

const Panel = ({ label, items }) => {
  return (
    <div className="panel has-background-white-ter">
      <p className="panel-heading has-background-primary has-text-white">{label}</p>
      <div className={cx('panel-block', style.block)}>
        {items.map(({ image, author, title, id }) => (
          <Box image={image} author={author} title={title} key={`${label}-${id}`} />
        ))}
      </div>
    </div>
  );
};

export default Panel;
