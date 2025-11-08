'use server';

export async function testEnvironment() {
  try {
    console.log('=== ENVIRONMENT TEST ===');
    console.log('All environment keys:', Object.keys(process.env).filter(key => key.includes('RESEND')));
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    console.log('RESEND_API_KEY value (first 10 chars):', process.env.RESEND_API_KEY?.substring(0, 10));
    console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('=== END TEST ===');
    
    return { 
      success: true, 
      hasApiKey: !!process.env.RESEND_API_KEY,
      keyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) || 'Not found',
      keyLength: process.env.RESEND_API_KEY?.length || 0,
      allResendKeys: Object.keys(process.env).filter(key => key.includes('RESEND')),
      nodeEnv: process.env.NODE_ENV
    };
  } catch (error) {
    console.error('Environment test error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}