(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.wxPromisify = function (resolve, reject) {
    return {
      success: function (resp) {
        resolve({
          code: 1,
          data: resp
        });
      },
      fail: function (error) {
        reject({
          code: -1,
          data: error
        });
      },
      complete: function (data) {
        resolve({
          code: 0,
          data: data
        });
      }
    }
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.wxPromisify;
  }

}());
