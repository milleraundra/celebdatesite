$(document).ready(function() {
  $("form#info").submit(function(event) {
    var gender = $("select#gender").val();
    var age = $("input#age").val();
    var shoeSize = $("select#shoe-size").val();
    var celeb = null;

    //for male users
    if(gender === 'male') {
      if(age <= 30 && shoeSize !== 'small') {
        celeb = 'Jennifer Lawrence'; //JL hates small feet
      } else if( age <=30) {
        celeb = 'Miley Cyrus'
      } else {  //age condition
        celeb = 'Helen Mirren';
      }
      //for female users
    } else {

      if(age <= 40) {
        celeb = 'Brad Pitt';
      }else if(age <=65) {
        celeb = 'Harrison Ford';
      }
      else {
        celeb = 'Patrick Stewart';
      }
    }
    //Celeb Revealed
    $("#celeb").empty().append(celeb);
    $("#result").show();
    event.preventDefault();
  });
});
