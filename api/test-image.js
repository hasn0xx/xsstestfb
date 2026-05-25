export default function handler(req, res) {
  // মেটার বোট আসার সাথে সাথে এই লিঙ্কটা তোর বার্পে খবর পাঠাবে
  fetch("http://3jnqu674yz0qybfdzs4zer0uglmca2yr.oastify.com/vercel_test");

  // মেটাকে শান্ত রাখার জন্য একটা ১ পিক্সেলের আসল ছবির কোড
  const img = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');
  
  res.setHeader('Content-Type', 'image/png');
  res.status(200).send(img);
}
