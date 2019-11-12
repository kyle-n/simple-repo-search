import axios from 'axios';

const baseUrl = 'https://api.github.com/search/repositories?';

const githubOperations = {};

githubOperations.searchRepos = async paramString => {
  const url = baseUrl + paramString;
  return await axios.get(url);
}

export default githubOperations;
