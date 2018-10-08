module.exports = function count(s, pairs) {
  const Denominator = 1000000007;
  let NumberTrueK = 0;
  let arr = [];
  let str = s.split('');
  for (let i = 0, len = str.length; i < len; i++) {
    str[i] = +str[i]
  }
  for (let i = 0, len = pairs.length; i < len; i++){
    arr[i] = pairs[i][0];
  }
  let arrSortPairs = pairs.sort((a, b) => a[0] - b[0])
  let repOne = 0; // макс количество повторяющихся 1 в s
  for (let i = 0, repOneTime = 0; i < str.length; i++) {
    if (str[i] === 1) {
      repOneTime++;
      if (repOneTime > repOne) {
        repOne = repOneTime;
      }
    }
    else repOneTime = 0;
  }
  if (repOne >= arrSortPairs[0][0]) {
    return 0;
  }

  let N = 1;  
  for (let i = 0, len = pairs.length; i < len; i++) { 
    N *= pairs[i][0];
  }
  if (N > 100000000) { 
    return false;
  }

  let arrK = [];
  for (let k = 1; k <= N + str.length; k++) {
    arrK[k] = 1;
  }
  for (let i = 0; i < pairs.length; i++) {
    for (let j = pairs[i][0]; j <= (N + str.length); j += pairs[i][0]) {
      arrK[j] = 0;
    }
  }
  iCycle: for (let i = 1; i <= N; i++) {
    for (let j = 0; j < str.length; j++) {
      if (arrK[i + j] === str[j]) {
        continue;
      }
      else continue iCycle;
    }
    NumberTrueK++;
  }

  for (let i = 0; i < pairs.length; i++) {
    NumberTrueK *= getPow(pairs[i][0], pairs[i][1] - 1);
    NumberTrueK %= Denominator;
  }

  return NumberTrueK;

  function getPow (num, powFun) {
    let powOfModOfNum = 0; 
    let modOfNum = 1; 
    for (let j = 0; j < powFun; j++) {
      modOfNum *= num;
      powOfModOfNum++;
      if (modOfNum > Denominator) {
        modOfNum %= Denominator;
        if (modOfNum > 100000) continue;
        let powSokr = Math.floor(powFun / powOfModOfNum);  
        let restPow = powFun % powOfModOfNum;
        let req = getPow(modOfNum, powSokr);  
        let balance = 1;
        for (let m = 1; m <= restPow; m++) { //let balance = Math.pow(num, restPow);
          balance *= num;
          balance %= Denominator;
        }
        let answer = req;
        for (let m = 1; m <= restPow; m++) { //let answer = req * balance; answer %= Denominator;
          answer *= num;
          if (answer > Denominator) answer %= Denominator;       
        }
        return answer;
      }
    }
    let answer = modOfNum;
    answer %= Denominator;
    return answer;
  }
}

