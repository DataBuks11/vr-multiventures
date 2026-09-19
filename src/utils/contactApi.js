export async function submitContactInquiry(payload) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Unable to transmit requirement at this moment.');
    }

    return { success: true, result };
  } catch (error) {
    console.error('submitContactInquiry error:', error);
    return {
      success: false,
      error: error.message || 'An unexpected transmission error occurred. Please try again.',
    };
  }
}
