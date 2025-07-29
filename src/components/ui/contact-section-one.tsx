'use client';

import { Card } from './card'
import { Input } from './input'
import { Textarea } from './textarea'
import { Button } from './button'
import { Label } from './label'
import React, { useState } from 'react';

const inquiryTypes = [
  'Appointment',
  'General',
  'Others',
];

export default function ContactSection() {
  const [selectedType, setSelectedType] = useState('General');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validatePhone = (value: string) => {
    // Accepts only 10 digit numbers starting with 6-9 (Indian mobile format)
    return /^([6-9][0-9]{9})$/.test(value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Only digits
    setPhone(value);
    if (value.length === 0) {
      setPhoneError('Phone number is required');
    } else if (!validatePhone(value)) {
      setPhoneError('Enter a valid 10-digit Indian phone number');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      setPhoneError('Enter a valid 10-digit Indian phone number');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, inquiryType: selectedType, message }),
      });
      if (res.ok) {
        setSuccess(true);
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setSelectedType('General');
      } else {
        const data = await res.json();
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 items-stretch p-0 md:p-2">
      {/* Left: Info and Map (light background) */}
      <div className="flex-1 flex flex-col justify-between min-h-[500px] bg-[#f7f8fa] mt-16 rounded-2xl p-6 md:p-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">Have Questions, We Have Answers</h1>
          <p className="mb-8 text-base opacity-90 text-gray-700 text-justify">We&apos;d love to hear from you. Book your appointment or reach out for any queries. Our team is ready to assist you with every detail, big or small.</p>
          <div className="space-y-4 text-base">
            <div>
              <span className="block font-semibold text-primary">Address</span>
              <span className="block text-gray-700">54/6 New Plot, Near IDBI Bank Amalner</span>
            </div>
            <div>
              <span className="block font-semibold text-primary">Phone</span>
              <span className="block text-gray-700">+91 7823007304</span>
            </div>
            <div>
              <span className="block font-semibold text-primary">Email</span>
              <span className="block text-gray-700">sumandent2205@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            title="Dr. Kothari&apos;s Suman Dental Hospital Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.930964295002!2d75.0600003154026!3d21.04200078598859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9c7e2e2e2e2e3%3A0x2b7b2e2e2e2e2e2e!2sDr.%20Kothari&apos;s%20Suman%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="160"
            style={{ border: 0, borderRadius: '0.75rem', width: '100%' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Right: Contact Form (modern, soft look) */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6 mt-16 justify-center min-h-[500px] bg-[#f7f8fa] rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-1 text-primary">Tell Us What You Need</h2>
        <p className="text-gray-500 mb-4">Our team is ready to assist you with every detail, big or small.</p>
        {success && <div className="text-green-600">Thank you! Your message has been sent.</div>}
        {error && <div className="text-red-600">{error}</div>}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input type="text" placeholder="Your Name" className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-2" value={name} onChange={e => setName(e.target.value)} required />
            <div className="flex-1 flex flex-col">
              <Input type="tel" placeholder="Phone Number" className={`rounded-full border border-gray-300 bg-white px-4 py-2 ${phoneError ? 'border-red-500' : ''}`} value={phone} onChange={handlePhoneChange} maxLength={10} required />
              {phoneError && <span className="text-red-500 text-xs mt-1">{phoneError}</span>}
            </div>
          </div>
          <Input type="email" placeholder="Your Email" className="rounded-full border border-gray-300 bg-white px-4 py-2" value={email} onChange={e => setEmail(e.target.value)} />
          <div>
            <Label className="mb-2 block text-gray-700">Type of Inquiry</Label>
            <div className="flex flex-wrap gap-2">
              {inquiryTypes.map(type => (
                <button
                  type="button"
                  key={type}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${selectedType === type ? 'bg-primary text-white border-primary' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-primary/10'}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <Textarea rows={4} placeholder="Message" className="rounded-2xl border border-gray-300 bg-white px-4 py-2" value={message} onChange={e => setMessage(e.target.value)} />
          {/* <div className="flex items-center gap-2">
            <input type="checkbox" id="offers" className="accent-primary" />
            <label htmlFor="offers" className="text-gray-600 text-sm">I&apos;d like to receive exclusive offers and updates</label>
          </div> */}
          <Button type="submit" className="w-full rounded-full bg-primary text-white text-lg py-3 mt-2 shadow" disabled={loading}>{loading ? 'Sending...' : 'Submit'}</Button>
        </div>
      </form>
    </div>
  );
}
