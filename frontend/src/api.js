import axios from 'axios';

const baseUrl = 'http://localhost:8000/api';
export const githubSortOptions = ['stars', 'updated', 'score'];
export const githubOrderOptions = ['asc', 'desc'];

export const searchGitHubRepos = async (query, filters) => {
  let url = baseUrl + '/github/search?';

  const params = [
    `q=${query}`
  ];
  if (filters && filters.sort) {
    if (githubSortOptions.indexOf(filters.sort) === -1) {
      throw new Error(`Supported sort options include: ${githubSortOptions.join(' ')}`);
    }
    params.push(`sort=${filters.sort}`);
  }
  if (filters && filters.order) {
    if (!filters.sort) throw new Error('order does nothing without a sort');
    if (githubOrderOptions.indexOf(filters.order) === -1) {
      throw new Error(`Supported order options include ${githubOrderOptions.join(' ')}`);
    }
    params.push(`order=${filters.order}`);
  }

  url += params.join('&');
  return await axios.get(url);
};
