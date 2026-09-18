import axios from 'axios';

// API Axios instance
const api = axios.create({
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
  },
});

// Service for contact form submission
export const submitContactForm = async (formData) => {
  // We will read the Formspree URL from environment variables or use a default placeholder
  const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL || 'https://formspree.io/f/your_formspree_id_here';

  // If the user has not configured their Formspree ID yet, fallback to simulation mode
  if (formspreeUrl.includes('your_formspree_id_here')) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return {
      success: true,
      message: 'Thank you for reaching out! (Simulation mode - please configure VITE_FORMSPREE_URL in .env)',
    };
  }

  // Live POST request to Formspree
  try {
    const response = await api.post(formspreeUrl, formData);
    if (response.status === 200 || response.data.ok) {
      return {
        success: true,
        message: 'Thank you for reaching out! Your message was sent successfully to Yim Lemeng.',
      };
    } else {
      throw new Error('Something went wrong during message submission.');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.error || error.message || 'Failed to send message. Please try again.';
    throw new Error(errorMessage);
  }
};

export default api;
