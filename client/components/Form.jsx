import React, { useState } from 'react'

function Form (props) {
  const [form, setForm] = useState(
    props.formData ||
    {
      firstName: '',
      lastName: '',
      businessName: '',
      addressStreet: '',
      addressSuburb: '',
      addressCity: '',
      containers: ''
    })

  const {
    firstName,
    lastName,
    businessName,
    addressStreet,
    addressSuburb,
    addressCity,
    containers
  } = form

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    props.submitForm(form)
    console.log(form)
  }

  return (
    <form>
      <h2>Update your details below</h2>
      <div className="form-background">
        <div className="field">
          <label htmlFor='firstName' className='form-label'>First Name:</label>
          <input
            className='form-input'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="field">
          <label htmlFor='lastName' className='form-label'>Last Name:</label>
          <input
            className='form-input'
            id='lastName'
            name='lastName'
            value={lastName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="field">
          <label htmlFor='businessName' className='form-label'>Business Name:</label>
          <input
            className='form-input'
            id='businessName'
            name='businessName'
            value={businessName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="field">
          <label htmlFor='addressStreet' className='form-label'>Street Address:</label>
          <input
            className='form-input'
            id='addressStreet'
            name='addressStreet'
            value={addressStreet}
            onChange={handleChange}
          ></input>
        </div>
        <div className="field">
          <label htmlFor='addressSuburb' className='form-label'>Suburb:</label>
          <input
            className='form-input'
            id='addressSuburb'
            name='addressSuburb'
            value={addressSuburb}
            onChange={handleChange}
          ></input>
        </div>
        <div className="field">
          <label htmlFor='addressCity' className='form-label'>City:</label>
          <input
            className='form-input'
            id='addressCity'
            name='addressCity'
            value={addressCity}
            onChange={handleChange}
          ></input>
        </div>
        <div className="field">
          <label htmlFor='product' className='form-label'>Oil</label>
          <input
            className='form-input'
            type='radio'
            id='product'
            name='product'
            value='oil'
            //   value={form.product}
            onChange={handleChange}
            checked="true"
          ></input>
        </div>
        <div className="field">
          <label htmlFor='product' className='form-label'>Fat</label>
          <input
            className='form-input'
            type='radio'
            id='product'
            name='product'
            value='fat'
            //   value={form.product}
            onChange={handleChange}
          ></input>
        </div>
        <div className="field">
          <label htmlFor='containers' className='form-label'>Container:</label>
          <input
            className='form-input'
            id='containers'
            name='containers'
            value={containers}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <button
        type='button'
        className='button-login-register'
        onClick={handleSubmit}
        data-testid='submitButton'
      >
        Save
      </button>
    </form>
  )
}

export default Form