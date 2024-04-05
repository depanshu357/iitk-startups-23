const axios = require('axios');
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// Function to download an image from a URL
async function downloadImage(url, filePath) {
    const writer = fs.createWriteStream(filePath);

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

// Function to write array to a file
function writeArrayToFile(array, filePath) {
    const data = `const array = ${JSON.stringify(array, null, 4)};`;
    fs.writeFileSync(filePath, data);
    console.log(`Array written to ${filePath}`);
}

// Function to download all images from Excel file
async function downloadImagesFromExcel(excelFilePath, column) {
    const imageLinks = [];

    const workbook = xlsx.readFile(excelFilePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(worksheet);

    rows.forEach(row => {
        const link = row[column];
        if (link) {
            
            imageLinks.push(link);
        }
    });
    const modifiedImageLinks = imageLinks.map(link => {
        // Split the link by '?' to separate the base URL and query parameters
        const [baseUrl, queryParams] = link.split('?');

        // If queryParams exist, split it by '&' and filter out unwanted parameters
        const filteredParams = queryParams ? queryParams.split('&').filter(param => !param.includes('height=') && !param.includes('width=')) : [];

        // Join the baseUrl and filtered query parameters (if any)
        return baseUrl + (filteredParams.length ? '?' + filteredParams.join('&') : '');
    });
    console.log(modifiedImageLinks)
    writeArrayToFile(modifiedImageLinks, 'result.txt');
    // try {
    //     await downloadImages(imageLinks);
    //     console.log('All images downloaded successfully.');
    // } catch (error) {
    //     console.error('Error downloading images:', error);
    // }
}

// Function to download all images from an array of URLs
async function downloadImages(imageLinks) {
    const downloadPromises = imageLinks.map(async (link, index) => {
        const extension = path.extname(link);
        const fileName = `image_${index}${extension}`;
        const filePath = path.join(__dirname, fileName);
        await downloadImage(link, filePath);
        console.log(`Downloaded ${fileName}`);
    });

    await Promise.all(downloadPromises);
}

// Example usage
const excelFilePath = 'List.xlsx'; // Path to your Excel file
const column = 'ImageLink'; // Name of the column containing image links
downloadImagesFromExcel(excelFilePath, column);
