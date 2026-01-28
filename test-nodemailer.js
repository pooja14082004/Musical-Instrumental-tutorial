// Test NodeMailer Configuration
import fetch from 'node-fetch';

console.log('🧪 Testing NodeMailer Email Sending...\n');

// Test data
const testData = {
  name: 'Test User',
  student_id: 'testuser123',
  email: 'your-email@gmail.com',  // ⚠️ CHANGE THIS to your real email
  password: 'Test@123456'
};

console.log('📝 Test Details:');
console.log(`Email: ${testData.email}`);
console.log(`Name: ${testData.name}`);
console.log('\n🚀 Sending signup request...\n');

// Make signup request
fetch('http://localhost:5000/auth/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData)
})
.then(response => response.json())
.then(data => {
  console.log('✅ Response from backend:');
  console.log(JSON.stringify(data, null, 2));
  
  if (data.message && data.message.includes('successful')) {
    console.log('\n✅ Email should be sent!');
    console.log('📧 Check your email inbox (and spam folder) within 30 seconds');
    console.log('🔗 Look for verification link in the email');
  } else if (data.error) {
    console.log('\n❌ Error occurred:');
    console.log(data.error);
  }
})
.catch(error => {
  console.log('❌ Connection error:');
  console.log(error.message);
  console.log('\n⚠️  Make sure backend is running on http://localhost:5000');
  console.log('🔧 Run: cd src/pages/homepage/backend/src && node server.js');
});
