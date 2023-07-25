
import './App.css'
import Complex from 'complex.js'

// Code goes here



var canvas = document.getElementById('canvas');//loads object 
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");

function CreateMandelbrotCell( x ,y){
    let c = new Complex(x.toString().concat('+', y.toString()).concat('i'));
    let  z = new Complex('0+0');
    let count = 1;

    return function(){
        console.log(z.pow(2).add(c), 'is z')

        z = z.pow(2).add(c);
        context.fillStyle = `rgb(
            ${(count%255 )},
            ${((count*8 )%255)},
            ${((count*16 )%255)}`;
      context.fillRect((x*800)*25,( y*800)*25 , 25, 25);
    }
    // console.log(c)
}


const mandelbrotPixelArray = []
for (let i = 0; i < 800; i++) {
    mandelbrotPixelArray.push([])

    for (let j = 1; j <= 800; j++) {
        mandelbrotPixelArray[i].push(CreateMandelbrotCell(i/800,j/800))
    //   context.fillStyle = `rgb(
    //       ${Math.floor(0 )},
    //       ${Math.floor(0 )},
    //       ${Math.floor(0 )})`;
    //   context.fillRect(i*25, j*25 , 25, 25);
    }
}
// console.log(mandelbrotPixelArray.length, 'is first dimension');
// console.log(mandelbrotPixelArray[0].length, 'is sec dimension');
// console.log(mandelbrotPixelArray)



function RenderScreen() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 1; i < 800; i++) {
    
        for (let j = 1; j < 800; j++) {
            // console.log(mandelbrotPixelArray[i][j])
            mandelbrotPixelArray[i][j]();
        //   context.fillStyle = `rgb(
        //       ${Math.floor(0 )},
        //       ${Math.floor(0 )},
        //       ${Math.floor(0 )})`;
        //   context.fillRect(i*25, j*25 , 25, 25);
        }
    }

    console.log('finished an iter')

    requestAnimationFrame(RenderScreen)

}

export default RenderScreen
