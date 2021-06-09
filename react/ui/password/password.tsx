import React, { useState } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

export type PasswordProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export const Password: React.FC<TextFieldProps> = (props) => {
  const [view, setView] = useState(false);

  return (
    <TextField
      {...props}
      type={view ? 'text' : 'password'}
      InputProps={{
        endAdornment: <IconButton onClick={() => setView(!view)} size="small">
          {view ? <VisibilityOffIcon />: <VisibilityIcon />}
        </IconButton>,
      }}
    />
  );
};
