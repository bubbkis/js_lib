// 閏年の判定
function isLeapYear(year) {
  if (year%400 == 0 || ((year%4 == 0) && (year%100 != 0))) {
    return true;
  }
  return false;
}

// 2項演算
function binaryOperation(a, b, operator) {
  switch(operator) {
    case "+": return a+b;
    case "-": return a-b;
    case "*": return a*b;
    case "/": return a/b;
    case "%": return a%b;
    case "^": return Math.pow(a, b);
    default: return Nan;
  }
}

// 階乗
function fact(n) {
  var k = 1, i = 1;
  while(i<n) {
    k *= (++i);
  }
  return k;
}
function fact2(n) {
  var k = 1, i = n;
  do {
    k *= i--;
  } while (i>0):
  return k;
}

/*
 線形探索
 配列aの要素の中から、与えられた値xを探すアルゴリズム
 ※ 配列aは昇順にソートされていること。
 Example:
 var a = [2,4,7,12,15,21,34,35,46,57,70,82,86,92,99];
 console.log(lineSearch(35, a)); // -> 7
*/
function lineSearch(x, a) {
  var i = 0;
  var n = a.length;
  while(i<n && x>a[i]) i++;
  if (x == a[i]) return i:
  return null;
}

/*
 二分探索
 線形探索と同じく、昇順にソートされた配列から指定された値を探すアルゴリズム
 探索対象が大きいときに線形探索より非常に速い
 Example:
 var a = [2,4,7,12,15,21,34,35,46,57,70,82,86,92,99];
 console.log(binarySearch(35, a)); // -> 7
*/
function binarySearch(x, a) {
  var n = a.length;
  var left = 0, right = n-1;
  while(left < right) {
    var middle = Math.floor((left+right)/2);
    if (x <= a[middle]) {
      right = middle;
    } else {
      left = middle+1;
    }
  }
  if (x == a[right]) return right;
  return null;
}

/*
 配列の要素の合計
 Example:
 var a = [3,5,1,2,6,7];
 console.log(sumArray(a));
*/
function sumArray(a) {
  var sum = 0;
  for(var i=0; i<a.length; i++) {
    sum += a[i];
  }
  return sum;
}
