import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from 'components/form-controls/inputField';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import PassWordField from 'components/form-controls/PassWordField';
// import InputField from '../../../../components/form-controls/inputField';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root:{
    paddingTop: theme.spacing(4),
    position: 'relative'
  },

  avatar:{
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title:{
    margin: theme.spacing(2,0,4,0),
    textAlign:'center',
  },

  submit:{
    margin: theme.spacing(3,0,2,0),
  },
  
  progress: {
    position: 'absolute',
    top:theme.spacing(1),
    left:0 ,
    right:0
  }
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {

  const classes = useStyles();

  const schema = yup.object().shape({
    // fullName: yup
    // .string()
    // .required('please enter your full name')   
    // .test(
    // "comms-Selected",
    // "Please specify at least one means to be contacted",
    // (value) =>
    // console.log(value)
    // ),


    // .test('should has at least two words','please enter at least two words',(value) => {
    //   console.log(value)
    //   // return value.split(' ').length >= 2;
    // }),


    // email: yup.string()
    // .required('please enter your email.')
    // .email('please enter a vaild email.')


    // password:yup.string()
    // .required('please enter your password')
    // .min(6,'please enter at least 6 characters'),

    // retypePassword: yup.string().required('please retype your password').oneOf([yup.ref('password')],'password does not match'),


  });

  const form = useForm({
    defaultValues: {
      fullName:'',
      email:'',
      password:'',
      retypePassword:''
    },

    resolver: yupResolver(schema)
  });

  const _handleSubmit = async (values) => {
    const {onSubmit} = props;
    if(onSubmit) {

      await onSubmit(values);
    }

    form.reset();
  }

  const {isSubmitting} = form.formState;

  return (
    <div className={classes.root}>
      
      {isSubmitting && <LinearProgress className={classes.progress}/>}

      <Avatar className={classes.avatar}>
        <LockOpenOutlined></LockOpenOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        create acc
      </Typography>
      <form onSubmit = {form.handleSubmit(_handleSubmit)}>
        <InputField
          name="fullName"
          label="Full name"
          form = {form}
        />

        <InputField
          name="email"
          label="Email"
          form = {form}
        />

        <PassWordField
          name="password"
          label="Password"
          form = {form}
        />

        <PassWordField
          name="retypePassword"
          label="RetType Password"
          form = {form}
        />

        <Button disabled={isSubmitting} type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>Create an account</Button>
    </form>
    </div>
  );
}

export default RegisterForm;