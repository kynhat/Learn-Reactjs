import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

PassWordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PassWordField(props) {

  const { form, name, label, disabled } = props;
  const {formState, } = form;
  const hasError = !formState.dirtyFields[name] && formState.touchedFields[name];

  const [showPassword, setshowPassword] = useState(false);

  const toggleShowPassword = () => {
    setshowPassword(x => !x);
  }

  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      
      <Controller
        name={name}
        control={form.control}
        render = {({field})=> (
          
          <OutlinedInput
            {...field}
            id={name}
            type={showPassword ? 'text' : 'password'}
            name={name}
            control={form.control}

            label={label}
            disabled={disabled}
            error={hasError}

            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        )}
      />

      <FormHelperText error={!!hasError}>
        {formState?.errors[name]}
      </FormHelperText>
    </FormControl>
  );
}

export default PassWordField;