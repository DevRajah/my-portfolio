import React, { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const validateFields = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.message) errors.message = 'Message is required';

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const errors = validateFields();
    setFormErrors({
      ...formErrors,
      [name]: errors[name] || ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://rajahportfolio.onrender.com/api/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message); // Set success message
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Internal Server Error: ' + error.message);
    } finally {
      setLoading(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    }
  };

  const areRequiredFieldsEmpty = () => {
    return !(
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.message
    );
  };

  return (
    <article className="w-full">
      <div className="w-full flex justify-between lg:px-36 p-4 lg:flex-row flex-col">
        <div className="lg:w-5/12 w-full">
          <h1 className="text-4xl font-bold mb-4">Contact me</h1>
          <p className="mb-4 lg:w-3/4 w-full text-base">
            If you have any questions or comments, please contact me via email
            or phone, or send me a message using the contact form.
          </p>
          <p className="mb-1">Email</p>
          <a className="hover:text-red-600 font-bold" href="mailto:Adekunlemichael1319@gmail.com">
            Adekunlemichael1319@gmail.com
          </a>
          <p className="mb-4 mt-4">Mobile</p>
          <p className="mb-4">(+234) 9015937167</p>
          <p className="mb-4">(+234) 9138187957</p>
        </div>
        <div className="lg:w-6/12 w-full flex flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
            <p>Name (required)</p>
            <div className="flex gap-4 w-full">
              <div className="flex flex-col w-[49%]">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="h-14 border-2 px-4"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <p className={formErrors.firstName ? "text-red-400 text-xs pb-4" : "pb-4"}>
                  {formErrors.firstName}
                </p>
              </div>
              <div className="flex flex-col w-[49%]">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="h-14 w-full border-2 px-4"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <p className={formErrors.lastName ? "text-red-400 text-xs pb-4" : "pb-4"}>
                  {formErrors.lastName}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email (required)</label>
              <input
                className="w-full h-14 border-2 px-4"
                type="email"
                name="email"
                value={formData.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <p className={formErrors.email ? "text-red-400 text-xs pb-4" : "pb-4"}>
                {formErrors.email}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="message">Message (required)</label>
              <textarea
                className="w-full h-24 border-2 px-4"
                name="message"
                value={formData.message}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <p className={formErrors.message ? "text-red-400 text-xs pb-4" : "pb-4"}>
                {formErrors.message}
              </p>
            </div>
            <button className="bg-red-500 w-28 h-10 text-white mt-5 submit-button" type="submit" disabled={loading || areRequiredFieldsEmpty()}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}

          </form>
        </div>
      </div>
      <style jsx>{`
        .submit-button:disabled {
          background: rgba(255, 0, 0, 0.5); /* Adjust color as needed */
          backdrop-filter: blur(5px);
          cursor: not-allowed;
        }
      `}</style>
    </article>
  );
}

























