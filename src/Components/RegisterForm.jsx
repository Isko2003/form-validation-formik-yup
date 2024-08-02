import React, { act } from 'react'
import { useFormik } from 'formik';
import { registerFormSchemas } from '../Schemas/RegisterFormSchemas';

const RegisterForm = () => {

    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm()
        }, 2000)
    }

    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age: '',
          password: '',
          confirmPassword: '',
          term: '',
        },
        validationSchema: registerFormSchemas,
        onSubmit: submit
      });

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div className="input-div">
                <label>Email</label>
                <br />
                <input 
                    type="text" 
                    id='email'
                    placeholder='Enter Email...'
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p className='input-error'>{errors.email}</p>}
            </div>
            <div className="input-div">
                <label>Age</label>
                <br />
                <input 
                    type="number" 
                    id='age'
                    placeholder='Enter Age...'
                    value={values.age}
                    onChange={handleChange} />
                    {errors.age && <p className='input-error'>{errors.age}</p>}
            </div>
            <div className="input-div">
                <label>Password</label>
                <br />
                <input 
                    type="password" 
                    id='password'
                    placeholder='Enter Password...'
                    value={values.password}
                    onChange={handleChange} />
                    {errors.password && <p className='input-error'>{errors.password}</p>}
            </div>
            <div className="input-div">
                <label>Repeat Password</label>
                <br />
                <input 
                    type="password" 
                    id='confirmPassword'
                    placeholder='Enter Repeat Password...'
                    value={values.confirmPassword}
                    onChange={handleChange} />
                    {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}
            </div>
            <div className="input-div"> 
                <input 
                    type="checkbox" 
                    id='terms'
                    value={values.term}
                    onChange={handleChange} />
                <label>I Accept the Terms and Conditions</label>
            </div>
            {errors.term && <p className='input-error'>{errors.term}</p>}
            <div className="register-btn">
                <button type='submit'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm