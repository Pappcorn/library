import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Password } from './password';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
})

export const BasicPassword = () => {
  const css = useStyle();

  return <div className={css.root}>
     <Password label="Password" />
     <Password label="Password" variant="filled" />
     <Password label="Password" variant="outlined" />
  </div>
}
