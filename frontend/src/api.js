import axios from 'axios';

const baseUrl = 'http://localhost:8000/api';
export const githubSortOptions = ['stars', 'updated', 'score'];
export const githubOrderOptions = ['asc', 'desc'];

export const searchGitHubRepos = async (query, filters) => {
  let url = baseUrl + '/github/search?';

  const params = [
    `q=${query}`
  ];
  if (filters && filters.sortBy) {
    if (githubSortOptions.indexOf(filters.sortBy) === -1) {
      throw new Error(`Supported sort options include: ${githubSortOptions.join(' ')}`);
    }
    params.push(`sort=${filters.sortBy}`);
  }
  if (filters && filters.orderBy) {
    if (!filters.sortBy) throw new Error('orderBy does nothing without a sortBy');
    if (githubOrderOptions.indexOf(filters.orderBy) === -1) {
      throw new Error(`Supported order options include ${githubOrderOptions.join(' ')}`);
    }
    params.push(`order=${filters.orderBy}`);
  }

  url += params.join('&');
  return await axios.get(url);
};
