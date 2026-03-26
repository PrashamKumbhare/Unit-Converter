function Conv_M_TO_KM () {

   let Value1 = document.getElementById("M_KM").value ;

   let Final_Conv1 = Value1/1000 ;

   document.getElementById("output1").innerHTML = Final_Conv1 + " " + "KM" ;

}

function Conv_KM_TO_M () {

   let Value2 = document.getElementById("KM_M").value ;

   let Final_Conv2 = Value2 * 1000 ;

   document.getElementById("output2").innerHTML = Final_Conv2 + " " + "M" ;

}

function Conv_CM_TO_M () {

   let Value3 = document.getElementById("CM_M").value ;

   let Final_Conv3 = Value3 / 100 ;

   document.getElementById("output3").innerHTML = Final_Conv3 + " " + "M" ;

}

function Conv_M_TO_CM () {

   let Value4 = document.getElementById("M_CM").value ;

   let Final_Conv4 = Value4 * 100 ;

   document.getElementById("output4").innerHTML = Final_Conv4 + " " + "CM" ;

}

function Conv_CM_TO_KM () {

   let Value5 = document.getElementById("CM_KM").value ;

   let Final_Conv5 = Value5 / 100000 ;

   document.getElementById("output5").innerHTML = Final_Conv5 + " " + "KM" ;

}

function Conv_KM_TO_CM () {

   let Value6 = document.getElementById("KM_CM").value ;

   let Final_Conv6 = Value6 * 100000 ;

   document.getElementById("output6").innerHTML = Final_Conv6 + " " + "CM" ;

}

function Conv_G_TO_KG () {

   let Value7 = document.getElementById("G_KG").value ;

   let Final_Conv7 = Value7 / 1000 ;

   document.getElementById("output7").innerHTML = Final_Conv7 + " " + "KG" ;

}

function Conv_KG_TO_G () {

   let Value8 = document.getElementById("KG_G").value ;

   let Final_Conv8 = Value8 * 1000 ;

   document.getElementById("output8").innerHTML = Final_Conv8 + " " + "G" ;

}



