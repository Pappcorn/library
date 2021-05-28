import React from 'react';

import MatButton, { ButtonProps as MatButtonProps } from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyle = makeStyles({
  root: {
    position: 'relative',
  },
  load: {
    position: 'absolute',
  },
  loadText: {
    opacity: 0,
  },
});

export type ButtonProps = {
  load?: boolean;
} & MatButtonProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const { load, children, disabled, className, ...btnProps } = props;
  const css = useStyle();

  return (
    <MatButton {...btnProps} disabled={load || disabled} className={clsx(className, css.root)}>
      <div className={clsx({ [css.loadText]: load })}>{children}</div>
      {load ? <CircularProgress size={20} className={css.load} /> : ''}
    </MatButton>
  );
};
