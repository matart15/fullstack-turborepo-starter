import { Button, Row } from 'antd';
import React from 'react';
import { ReactNode, useState } from 'react';
import { FORM_MODE, FORM_MODE_TYPE } from './formMode';

type EditViewModeSwitchProps = {
  children: ReactNode;
};
export const FormModeSwitch = ({ children }: EditViewModeSwitchProps) => {
  const [formMode, setEditMode] = useState<FORM_MODE_TYPE>(FORM_MODE.VIEW);

  const childrenWithProps = React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { formMode } as any);
    }
    return child;
  });
  return (
    <>
      <Row justify="end">
        <Button
          onClick={() => {
            setEditMode(formMode === FORM_MODE.VIEW ? FORM_MODE.EDIT : FORM_MODE.VIEW);
          }}>
          {formMode === FORM_MODE.EDIT ? 'View Mode' : 'Edit Mode'}
        </Button>
      </Row>
      {childrenWithProps}
    </>
  );
};
