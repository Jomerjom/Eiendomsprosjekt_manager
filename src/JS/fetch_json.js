export const fetchData = async () => {
    try {
        const response = await fetch('/src/assets/data/sampledata.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
