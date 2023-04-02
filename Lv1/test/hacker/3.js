let calculateArea = (shape, values)=>{
    switch(shape){
        case "square":
            console.log( values[0] * values[0]) ;
        case "rectangle":
            console.log( values[0] * values[1]);
        case "circle":
            console.log( 3.14 * values[0] * values[0]) ;
        case "triangle":
            console.log(  0.5 * values[0] * values[1]);
        default:
            console.log( -1);
    }
}


let getAreas = (shapes, values_arr) => {
   return shapes.map((shape,idx)=>calculateArea(shape, values_arr[idx]))
 }



let result = calculateArea([ 'square', 'rectangle', 'circle', 'triangle' ], [ [ 2 ], [ 3, 4 ], [ 5 ], [ 2, 4 ] ])

console.log(result)
// 기댓값 4, 12, 78.5, 4