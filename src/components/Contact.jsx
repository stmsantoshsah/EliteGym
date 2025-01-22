import React, { useState } from 'react'
import {ClipLoader} from 'react-spinners'
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const handleChange = (i) => {
    const { name, value } = i.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let res = JSON.stringify(formData)
    console.info(res);
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }
  return (
    <section className='contact'>
      <form onSubmit={handleSubmit}>
        <h1>Contact us</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="" onChange={handleChange} value={formData.name} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" onChange={handleChange} value={formData.email} />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input type="text" name="message" id="" onChange={handleChange} value={formData.message} />
        </div>
        <button type='sumbit' disabled={loading} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
          {loading && <ClipLoader size={20} color='white' />}
          Send Message
        </button>
      </form>
    </section>
  )
}
