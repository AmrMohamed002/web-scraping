const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsite(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const paragraphs = $('p').map((i, el) => $(el).text()).get();
    return paragraphs;
  } catch (error) {
    console.error(error);
  }
}

// Example usage
scrapeWebsite('https://www.example.com')
  .then((paragraphs) => {
    console.log(paragraphs);
  });