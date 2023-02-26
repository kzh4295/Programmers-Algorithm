function solution(N, stages) {
    arrayAlignment = stages.sort();

  // keyArr
    const keyArrayList = [...Array(N).keys()].map((ele) => ele + 1);
    const valArr = [];

  //   //valArr
  //   for (let i = 0; i < keyArrayList[i]; i++) {

  //     valArr[i] = arrayAlignment.filter((ele)=> ele === keyArrayList[i]).length
  //   }
  //   console.log(valArr)
    console.log('arrayAlignment = ', arrayAlignment);
    const brr = arrayAlignment.filter((ele) => ele === N + 1);
    console.log(brr);
    console.log(N);
  //valArr
    for (let i = 0; i < keyArrayList[i]; i++) {
        valArr[i] = arrayAlignment.filter((ele) => ele === keyArrayList[i]).length;
    }
    console.log(valArr);

  // if(valArr[N] === 0 && arrayAlignment.length - arrayAlignment.reduce((acc, ele)=>{return acc+ele},0) >0){
  //     valArr[N] = 1
  // } else valArr = valArr

    console.log(valArr);

    let tempObj = {}
    for(let i = 0; i < valArr.length; i++){
        tempObj[keyArrayList[i]] = valArr[i]
    }

    console.log(tempObj)
                        //{}   

    const tempPercent = valArr.reduce((acc, ele, idx) => {
            acc[1] = valArr[0] / arrayAlignment.length; //8
            console.log(valArr[3])
            acc[2] = valArr[1] / arrayAlignment.length-(valArr[0]);   //8-1=7
            acc[3] = valArr[2] / arrayAlignment.length-(valArr[1]+valArr[0]);//8-(3+1) = 4
            acc[4] = valArr[3] / arrayAlignment.length-(valArr[2]+valArr[1]+valArr[0]);//8-(2+3+1)= 2
            acc[5] = valArr[4] / arrayAlignment.length-(valArr[3]+valArr[2]+valArr[1]+valArr[0]); //8-(1+2+3+1)= 1


    return acc;
    }, {});

    console.log(tempPercent);
    console.log(1/8, 3/7, 2/4, 1/2, 0/1 )

    return valArr;
    console.log();
}

const result = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
console.log(result);
