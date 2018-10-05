module.exports = function count(s, pairs) {
  // your implementation

  function xxx (chis, step) {

    let powOfggg = 0; // не знаю с како начинать
    let ggg = 1; // число

    for (let j = 0; j < step; j++) {
      ggg = ggg * chis;
      powOfggg++;
      if (ggg > 1000000007) {
        ggg = ggg % 1000000007;
        let powSokr = Math.floor(step / powOfggg); //целочисленное округление // - 1
        let restPow = step % powOfggg; // а это остаток степени. это надо довозвести // - 1
        let req = xxx(ggg, powSokr);  
        let ost = Math.pow(chis, restPow);
        let otvet = req * ost;
        otvet %= 1000000007;
        return otvet;
      }
    }
    let newChis = ggg;
    newChis %= 1000000007;

    return newChis;
  }





  let NumberTrueK = 0;
  let arr = [];
  let str = s.split('');
  for (let i = 0, len = str.length; i < len; i++) {
    str[i] = +str[i]
  }
  for (let i = 0, len = pairs.length; i < len; i++){
    arr[i] = pairs[i][0];
  }
  // 1)
  let N = 1;
  
  for (let i = 0, len = pairs.length; i < len; i++) { 
    N *= pairs[i][0];  
  }
  


 



  // ЗАМЕНА НА МАССИВ
  // еденицы заменим на und, а 0 на 8
  

  let arr11 = new Array(N + 1 + str.length); 
  for (let k = 1; k <= N + str.length; k++) {
    arr11[k] = 1;
  }
  for (let i = 0; i < pairs.length; i++) {
    for (let j = 1; j <= (N + str.length) / pairs[i][0]; j++) {
      if (arr11[j * pairs[i][0]] === 1) {
        arr11[j * pairs[i][0]] = 0;
      }
    }
  }
  iiiCycle: for (let i = 1; i <= N; i++) {
    for (let j = 0; j < str.length; j++) {
      if (arr11[i + j] === str[j]) {
        continue;
      }
      else continue iiiCycle;
    }
    NumberTrueK++;
  }


  /*
  // 2)
  kCycle: for (let k = 1; k <= N; k++) {
    jCycle: for (let j = 0; j < str.length; j++) {
      let kj = k + j;
      if (str[j] === 0) {
        for (let iii = 0; iii < arr.length; iii++) {
          if (kj % arr[iii] === 0){ // если целочисленно делится на любое из arr[iii]
            continue jCycle;
          }
        }
        continue kCycle;
      }
      if (str[j] === 1) {
        for (let iii = 0; iii < arr.length; iii++) {
          if (kj % arr[iii] === 0) {
            continue kCycle;
          }
        }
        continue jCycle;
      }
    }
    NumberTrueK++;
  }
  */
 





  for (let i = 0; i < pairs.length; i++) {

    NumberTrueK *= xxx(pairs[i][0], pairs[i][1] - 1);
    NumberTrueK %= 1000000007;
  }


  /*powCicle: for (let i = 0; i < pairs.length; i++) {
    let powOfggg = 0; // не знаю с како начинать
    let ggg = 1; // число

    for (let j = 1; j < pairs[i][1]; j++) {
      ggg = ggg * pairs[i][0];
      powOfggg++;
      if (ggg > 1000000007) {
        ggg = ggg % 1000000007;
        let powSokr = Math.floor((pairs[i][1] - 1) / powOfggg); //целочисленное округление // - 1
        let restPow = (pairs[i][1] - 1) % powOfggg; // а это остаток степени. это надо довозвести // - 1

        let ggg2 = ggg;
        for (let iii = 1; iii < powSokr; iii++){
          ggg = ggg * ggg2;
          if (ggg > 1000000007) {
            ggg = ggg % 1000000007;
          }
        }
        
        ggg *=  Math.pow(pairs[i][0],  restPow);
        ggg %= 1000000007;
        NumberTrueK *= ggg;
        NumberTrueK %= 1000000007;
        continue powCicle;
      }
    }
    NumberTrueK *= ggg;
    NumberTrueK %= 1000000007;
  }*/



  
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
  return NumberTrueK;
}