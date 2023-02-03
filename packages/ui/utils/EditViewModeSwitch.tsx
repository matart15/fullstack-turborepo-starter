import { Button, Row } from 'antd';
import React from 'react';
import { ReactNode, useState } from 'react';

type EditViewModeSwitchProps = {
  children: ReactNode;
};
export const EditViewModeSwitch = ({ children }: EditViewModeSwitchProps) => {
  const [editMode, setEditMode] = useState(false);

  const childrenWithProps = React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { editMode } as any);
    }
    return child;
  });
  return (
    <>
      <Row justify="end">
        <Button
          onClick={() => {
            setEditMode(!editMode);
          }}>
          {editMode ? 'View Mode' : 'Edit Mode'}
        </Button>
      </Row>
      {childrenWithProps}
    </>
  );
};
