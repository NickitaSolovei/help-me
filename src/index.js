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
        if (ggg > 100000) continue;
        let powSokr = Math.floor(step / powOfggg); //целочисленное округление // - 1
        let restPow = step % powOfggg; // а это остаток степени. это надо довозвести // - 1
        let req = xxx(ggg, powSokr);  

        let ost = 1;
        let arrOst = [];
        for (let m = 1; m <= restPow; m++) { /// вместо числа - массив
          ost *= chis;
          if (ost > 1000000007) {
            ost %= 1000000007;
          }   
        }
        //let ost = Math.pow(chis, restPow);
        let otvet = req;
        for (let m = 1; m <= restPow; m++) { 
          otvet *= chis;
          if (otvet > 1000000007) {
            otvet %= 1000000007;
          } 
        }
        /*let otvet = req * ost;
        otvet %= 1000000007;*/
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
  let strLen = str.length;
  for (let i = 0, len = str.length; i < len; i++) {
    str[i] = +str[i]
  }
  for (let i = 0, len = pairs.length; i < len; i++){
    arr[i] = pairs[i][0];
  }

  // самое маленькое среди pairs
  let arrSortPairs = pairs.sort((a, b) => a[0] - b[0])
  // макс количество повторяющихся 1 в s
  let repOne = 0;
  for (let i = 0, repOneTime = 0; i < str.length; i++) {
    if (str[i] === 1) {
      repOneTime++;
      if (repOneTime > repOne) {
        repOne = repOneTime;
      }
    }
    else repOneTime = 0;
  }
  // теперь сравним
  if (repOne >= arrSortPairs[0][0]) {
    return 0;
  }


  // 1)
  let N = 1;
  
  for (let i = 0, len = pairs.length; i < len; i++) { 
    N *= pairs[i][0];  
  }
  /*if (N > 100000000) { //150000000
    return false;
  }
  */

  ///////////// пробуем с 23*29
  //if (pairs.length > 1000) { /// > 3
  if (N > 100000000) { // N > 1000000000
    function fun3(a, b) {
      return (a[0] - b[0]);
    }
    let arr8 = pairs.sort(fun3);
    let max1 = arr8[arr8.length - 1][0];
    let max2 = arr8[arr8.length - 2][0];
    arr8.pop();
    arr8.pop();
    let N1 = max1 * max2;
    let N1Max = N1 * arr8[arr8.length - 1][0];

    let arr11 = new Array(N1Max + 1 + strLen); 
    for (let k = 1; k <= N1Max + strLen; k++) {
      arr11[k] = 1;
    }
    for (let i = 0; i < pairs.length; i++) {
      for (let j = pairs[i][0]; j <= (N1Max + strLen); j += pairs[i][0]) {
          arr11[j] = 0;
      }
    }

    function MainFun(diapazon) {
      /*
      let Num1 = 0;
      iiiCycle: for (let i = 1; i <= diapazon; i++) {
        for (let j = 0; j < strLen; j++) {
          if (arr11[i + j] === str[j]) {
            continue;
          }
          else continue iiiCycle;
        }
        Num1++;
      }
      */
      let Num1 = 0;

      kCycle: for (let k = 1; k <= diapazon; k++) {
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
        Num1++;
      }

      return Num1;
    }

    let kolSovpadeniy2923 = MainFun(N1);
    let sumOfSovp = 0;
    let arrOfSovp = [];
    let arrVrem = [];

    let umn = 1;
    let umnChis = 0;
    for (let i = 0; i < arr8.length; i++) {
      let diapaz = N1 * arr8[i][0];
      let prom = MainFun(diapaz);
      let sovp = (prom - kolSovpadeniy2923 * arr8[i][0]) * N / (N1 * arr8[i][0]); 
      let sovp2 = N / (N1 * arr8[i][0]);
      arrOfSovp.push([sovp, sovp2]);
      arrVrem.push(sovp)
      sumOfSovp += sovp;


      // это теория о умножении 2 3 11 и делении на их кол-во
      umn = umn * arr8[i][0];
      umnChis++;
    }



    //NumberTrueK = kolSovpadeniy2923 * N / N1 + sumOfSovp;
    function fun4(a, b) {
      return (a[0] - b[0]);
    }
    let arrOfSovpSort = arrOfSovp.sort(fun4);
    // NumberTrueK = kolSovpadeniy2923 * N / N1 - arrOfSovpSort[0][1];
    NumberTrueK = kolSovpadeniy2923 * N / N1 - umn / umnChis;

    /*let arr8 = [pairs[0][0], pairs[1][0]];
    for (let i = 2; i < pairs.length; i++) {
      if ()
    }*/

  }

 



  // ЗАМЕНА НА МАССИВ
  // еденицы заменим на und, а 0 на 8
  

  let arr11 = new Array(N + 1 + strLen); 
  for (let k = 1; k <= N + strLen; k++) {
    arr11[k] = 1;
  }
  for (let i = 0; i < pairs.length; i++) {
    for (let j = pairs[i][0]; j <= (N + strLen); j += pairs[i][0]) {
        arr11[j] = 0;
    }
  }
  iiiCycle: for (let i = 1; i <= N; i++) {
    for (let j = 0; j < strLen; j++) {
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