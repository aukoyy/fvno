'use server';

export async function testEnvironment() {
  try {
    console.log('Environment test - API key exists:', !!process.env.RESEND_API_KEY);
    console.log('Environment test - API key prefix:', process.env.RESEND_API_KEY?.substring(0, 10));
    
    return { 
      success: true, 
      hasApiKey: !!process.env.RESEND_API_KEY,
      keyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) || 'Not found'
    };
  } catch (error) {
    console.error('Environment test error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}