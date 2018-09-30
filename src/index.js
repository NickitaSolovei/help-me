module.exports = function count(s, pairs) {
  // your implementation
  var NumberTrueK = 0;
  var arr = [];
  var str = s.split('');
  for (var i = 0, len = str.length; i < len; i++) {
    str[i] = +str[i]
  }
  for (var i = 0, len = pairs.length; i < len; i++){
    arr[i] = pairs[i][0];
  }
  // 1)
  var N = 1;
  for (var i = 0, len = pairs.length; i < len; i++) {
    N *= pairs[i][0];
  }


  
  // 2)
  kCycle: for (var k = 1; k <= N; k++) {
    jCycle: for (var j = 0; j < str.length; j++) {
      var kj = k + j;
      if (str[j] === 0) {
        for (var iii = 0; iii < arr.length; iii++) {
          if (kj % arr[iii] === 0){ // если целочисленно делится на любое из arr[iii]
            continue jCycle;
          }
        }
        continue kCycle;
      }
      if (str[j] === 1) {
        for (var iii = 0; iii < arr.length; iii++) {
          if (kj % arr[iii] === 0) {
            continue kCycle;
          }
        }
        continue jCycle;
      }
    }


    NumberTrueK++;
  }



  powCicle: for (var i = 0; i < pairs.length; i++) {
    let powOfggg = 0; // не знаю с како начинать
    let ggg = 1; // число

    for (var j = 1; j < pairs[i][1]; j++) {
      ggg = ggg * pairs[i][0];
      powOfggg++;
      if (ggg > 1000000007) {
        ggg = ggg % 1000000007;
        let powSokr = Math.floor((pairs[i][1] - 1) / powOfggg); //целочисленное округление
        let restPow = (pairs[i][1] - 1) % powOfggg; // а это остаток степени. это надо довозвести
        ggg = ggg * powSokr;
        ggg %= 1000000007;
        ggg *=  Math.pow(pairs[i][0],  restPow);
        ggg %= 1000000007;
        NumberTrueK *= ggg;
        NumberTrueK %= 1000000007;
        continue powCicle;
      }
    }
    NumberTrueK *= ggg;
    NumberTrueK %= 1000000007;
  }

  /*
  for (var i = 0; i < pairs.length; i++) {
    for (var j = 1; j < pairs[i][1]; j++) {
      NumberTrueK *= pairs[i][0];
      if (NumberTrueK > 1000000007) {
        NumberTrueK = NumberTrueK % 1000000007;
      }
    }
  }
*/
  return (NumberTrueK % 1000000007);
}