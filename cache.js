import mcache from 'memory-cache';

const cache = duration => {
  return (req, resp, next) => {
    let key = '__express__' + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      resp.send(cachedBody);
    } else {
      resp.sendResponse = resp.send;
      resp.send = (body) => {
        mcache.put(key, body, duration * 1000);
        resp.sendResponse(body);
      };
      next();
    }
  }
};

export default cache;
