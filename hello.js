
   
        //   Arithmetic Operators


    //    1.Addition Operator
        
   
    let a = 1;
    let b = 2;
    let sum = a + b;
   document.getElementById("p").innerHTML= "The Add two value is "+ sum;
              
 // 2.Subtraction operator

  let c = 4;
  let d = 5;
  let sub = c - d;
  document.getElementById("p1").innerHTML= "The Subtraction two value is "+ sub;

 // 3.	Multiplication operators

 let e = 4;
  let f= 5;
  let mul = e * f;
  document.getElementById("p2").innerHTML= "The Multiplication two value is "+ mul;

  // 4.Division operators 

  let g = 4;
  let h = 5;
  let div = g /h;
  document.getElementById("p3").innerHTML= "The Division two value is "+ div;
  
    // 5.Modulus operator

    let i = 10;
    let j = 3;
    let mod = i % j;
    document.getElementById("p4").innerHTML= "The Modulus two value is "+ mod;

    // 6.Exponentiation operators

    let k = 2;
    let l = 5;
    let exp = Math.pow(k, l);
    document.getElementById("p5").innerHTML= "The Exponentiation  two value is "+ exp;
  
    // 7.Increment operator

    let m = 10;
    // m++;
    ++m;
    let inc=m;
    document.getElementById("p6").innerHTML= "The Increment two value is "+ inc;


    // 8.Decrement operator

    let n = 10;
    // m++;
    --n;
    let dec=n;
    document.getElementById("p7").innerHTML= "The Decrement two value is "+ dec;


     // Assignment Operators

 // 1. Is Equal 

 let ab = 1;
    let cd =1;
    let equ = ab==cd;
   document.getElementById("p10").innerHTML= "The value is equal or not " +  (equ);
   
       // 2. Addition  operators
       
    let ef = 1;
    let gh  = 5;     /// short value let  a =1;
                    ////             let  a +=2;   
    let adc = ef + gh;
    document.getElementById("p123").innerHTML= "The value is add  " +  (adc);

 
    /// Subtraction operators

    let eef = 1;
    let ggh  = 5;     /// short value let  a =1;
                    ////             let  a -=2;   
    let addc = ef - gh;
    document.getElementById("p11").innerHTML= "The value is Subtraction   " +  (addc);
     
  //// multiplication operators 
     
    let eff = 1;
    let ghh  = 5;     /// short value let  a =1;
                    ////            let  a *=2;   
   let adcc = ef * gh;
document.getElementById("p12").innerHTML= "The value is multiplication  " +  (adcc);



//// division operators 


let fe = 1;
let hg  = 5;     /// short value let  a =1;
                    ////             let  a /=2;   
let ad = fe / hg;
document.getElementById("p13").innerHTML= "The value is division   " +  (ad);



 /// modules operators 


 let ff = 1;
let hh  = 5;     /// short value let  a =1;
                    ////             let  a %=2;   
    let ac = ff % hh;
    document.getElementById("p14").innerHTML= "The value is modules   " +  (ac);
 

    /// Exponentiation operators

    let ee = 1;
    let gg  = 5;     /// short value let  a =1;
                    ////             let  a **=2;   
    let aa = ee ** gg;
    document.getElementById("p15").innerHTML= "The value is Exponentiation   " +  (aa);



    ///  1. Equal value 

    const  dd = 1;
    const rr = 1;
    const  gjj = dd === rr;
    document.getElementById("p1111").innerHTML= "The value is equal or not " +  (gjj);
   

/// equal value and equal type
const  ddd = 1;
    const rrr = "1";
    const  ggj = ddd == rrr;
    document.getElementById("p323").innerHTML= "The value is equal value and equal type " +  (ggj);
   
/// 3.not equal


const  d1d = 1;
    const r1r = "1";
    const  gj = d1d != r1r;
    document.getElementById("p332").innerHTML= "The value is not equal " +  (gj);



    /// 4.not equal value or not equal type

    const  d11d = 1;
    const r11r = 1;
    const  gjk = d11d !== r11r;
    document.getElementById("p32").innerHTML= "The value is not equal value or not equal type " +  (gjk);



    /// greater than

    const  d2d = 1;
    const r2r = 3;
    const  gjkk = d2d > r2r;
    document.getElementById("p3223").innerHTML= "The value greater than " +  (gjkk);


    //// less than 

const  d22d = 1;
    const r22r = 3;
    const  gjk1k = d22d < r22r;
    document.getElementById("p32123").innerHTML= "The value less than " +  (gjk1k);


  /// greater than or equal to 

  const  d3d = 1;
  const r3r = 3;
  const  gkk = d3d >= r3r;
  document.getElementById("p434").innerHTML= "The value greater than  or equal to " +  (gkk);


  //// less than or equal to 
  const  d33d = 1;
  const r33r = 3;
  const  gk3k = d33d <= r33r;
  document.getElementById("p4334").innerHTML= "The value less than  or equal to " +  (gk3k);
