import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/inputField';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {

  const form = useForm({
    defaultValues: {
      title:'',
    }
  });

  const _handleSubmit = (values) => {
    console.log('todo From ',values)
  }

  return (
    <form onSubmit={form.handleSubmit(_handleSubmit)}>
      todo Form
      <InputField name="title" label="todo" form={form}/>
    </form>
  );
}

export default TodoForm;