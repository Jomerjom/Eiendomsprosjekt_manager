/**
 * Asynchronously fetches project data from a JSON file.
 *
 * @function fetchData
 * @async
 * @throws {Error} Throws an error if there is an issue fetching or parsing the data.
 * @returns {Promise<Object>} A promise that resolves to the project data.
 */
export const fetchData = async () => {
    try {
      // Fetch data from the specified JSON file
      const response = await fetch('/JS/sampledata.json', {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      // Parse the response body as JSON
      const data = await response.json();
  
      // Return the parsed data
      return data;
    } catch (error) {
      // Log and rethrow any errors that occur during the fetching or parsing process
      console.error('Error fetching data:', error);
      throw error;
    }
  };
