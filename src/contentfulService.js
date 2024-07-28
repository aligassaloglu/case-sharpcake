const spaceId = 'jegvkcf0qjrd';
const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || '';

const fetchEntries = async () => {
  const response = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};

export default fetchEntries;