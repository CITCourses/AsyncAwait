'use strict';

module.exports = (asyncFunction) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      args.push((err, data) => {
        if (err)
          reject(err);
        else
          resolve(data);
      });

      asyncFunction.apply(null, args);
    });
  };
};
