import React from 'react';
import { Label, Input } from '../../atoms/form';

export const InputField = ({ label, name, fieldRef, type = 'text' }) => {
  return (
    <div>
      <Label name={name}>{label}</Label>
      <Input type={type} fieldRef={fieldRef} name={name} />
    </div>
  );
};
