export default process.env.NODE_ENV === 'production'
  ? 'https://eda-lms.herokuapp.com'
  : 'http://localhost:3000'
