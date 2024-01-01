function selectFromInterval(arr,startNum,endNum) {
  if (Array.isArray(arr) && typeof startNum === 'number' && typeof endNum === 'number' && !isNaN(startNum) && !isNaN(endNum) && isFinite(startNum) && isFinite(endNum)) {

    if (startNum > endNum) {
      let swapVar = startNum;
      startNum=endNum;
      endNum=swapVar;
    }

    const result = [];
    
    for (let i=0;i<arr.length;i++) {
      
      if (typeof arr[i] === 'number' && !isNaN(arr[i]) && isFinite(arr[i])) {
        if (startNum <= arr[i] && endNum >= arr[i]) {
          result.push(arr[i]);
        }
      } else {
        throw new Error('Ошибка!');
      }
    }
    
    return result;
  } else {
    throw new Error('Ошибка!');
  }
}
