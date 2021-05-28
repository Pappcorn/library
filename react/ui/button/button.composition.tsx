import React, { useState } from 'react';
import { Button } from './button';

export const BasicButton = () => (
  <div>
    <Button color="primary">Primary button</Button>
    <Button color="secondary">Secondary button</Button>
    <Button color="default">Default button</Button>
  </div>
);

export const ContainedButton = () => (
  <div>
    <Button variant="contained" color="primary">
      Primary button
    </Button>
    <Button variant="contained" color="secondary">
      Secondary button
    </Button>
    <Button variant="contained" color="default">
      Default button
    </Button>
  </div>
);

export const OutlineButton = () => (
  <div>
    <Button variant="outlined" color="primary">
      Primary button
    </Button>
    <Button variant="outlined" color="secondary">
      Secondary button
    </Button>
    <Button variant="outlined" color="default">
      Default button
    </Button>
  </div>
);

export const LoadingButton = () => {
  const [load, setLoad] = useState(false);
  return (
    <Button variant="contained" color="primary" load={load} onClick={() => setLoad(true)}>
      Click me
    </Button>
  );
};
