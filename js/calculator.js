$('#date').datepicker()
  .on("input change", function (e) {
    // Getting the number of pages
    var number=$("#numberOfPages").val();
    // getting the value from date picker
    var deadline= $("#date").datepicker({ dateFormat: 'dd,MM,yyyy'}).val();
    // picking current date
    var startDate= new Date();
    // convert to the normal format
    var start = startDate.toLocaleDateString();
    // the difference between the deadline and the start date
    var diff =  Math.floor(( Date.parse(deadline) - Date.parse(start) ) / 86400000);
    document.getElementById("leo").innerHTML =(number*5);
});
$("#numberOfPages").bind('keyup mouseup', function () {
  var number1=$("#numberOfPages").val();
  document.getElementById("leo").innerHTML =(number1*5);
  //  alert("checking on javascript");

/*  if (number1>=1 && <=3 && deadline) {

  } else if (true) {

  } else {

  }


  document.getElementById("leo").innerHTML =(number1*5);
  switch (expression) {
    case expression:
      document.getElementById("leo").innerHTML =(number*5);
      break;
    case expression:
      document.getElementById("leo").innerHTML =(number*5);
      break;
    default:
      break;
  } */
});
