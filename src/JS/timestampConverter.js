const jsonFilePath = 'src/assets/data/sampledata.json';

fetch(jsonFilePath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return response.json();
})
  .then(data => {
      console.log(data);
      
    // You can access individual properties
    // console.log('Name:', data.name);
    // console.log('Age:', data.age);
    // console.log('City:', data.city);
})

.catch(error => {
  console.error('Error during fetch:', error);
});