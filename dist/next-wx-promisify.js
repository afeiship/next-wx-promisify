(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.wxPromisify = function(resolve, reject) {
    return {
      success: function(data) {
        resolve({
          code: 0,
          data: data
        });
      },
      fail: function(data) {
        resolve({
          code: 1,
          data: data
        });
      }
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.wxPromisify;
  }
})();
