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
