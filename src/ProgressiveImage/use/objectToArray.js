export default (map) => {
  return Object.keys(map).reduce((acc, key) => {
    return map[key] ? [...acc, key] : acc;
  }, []);
};
