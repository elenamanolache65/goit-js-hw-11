export function fetchImg(query) {
  const searchParams = new URLSearchParams({
    key: '47265747-055c6ae6641c38dcd1c616ec3',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
