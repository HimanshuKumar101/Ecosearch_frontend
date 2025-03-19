
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/Input'; // Assuming you have a custom Input component
import { Button } from './ui/Button'; // Assuming you have a custom Button component

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('https://ecosearch-backend-1-lt5j.onrender.com/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email }),
      });

      const responseData = await response.json(); // Parse JSON response
      console.log('Response data:', responseData);

      if (response.ok && responseData.success) {
        setStatus('success');
        setMessage(responseData.message);
        setEmail('');
      } else {
        console.error('Server response error:', responseData);
        setStatus('error');
        setMessage(responseData.message || 'Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setStatus('error');
      setMessage('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
          disabled={status === 'loading'}
        />
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full sm:w-auto"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </form>
      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-2 text-sm ${status === 'error' ? 'text-red-500' : 'text-green-600'}`}
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
}