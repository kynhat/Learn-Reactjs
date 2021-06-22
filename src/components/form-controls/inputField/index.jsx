import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {

  const { form, name, label, disabled } = props;
  const {formState, } = form;
  const hasError = !formState.dirtyFields[name] && formState.touchedFields[name];
  console.log(formState.errors[name]?.message)

  return (


    <Controller
      name={name}
      control={form.control}
      render = {({field})=> (
        <TextField 
          name={name}
          {...field}
          fullWidth
          margin="normal"
          variant="outlined"
          label={label}
          disabled={disabled}
          error={hasError}
          helperText={formState?.errors[name]}
        />
      )}
    />
  );
} 

export default InputField;