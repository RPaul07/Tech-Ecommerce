const fetchBackendData = async () => {
    const response = await fetch('http://localhost:5000');
    const data = await response.text();
    console.log(data);
  };
  
  export default fetchBackendData;
  