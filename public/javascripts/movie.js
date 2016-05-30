$.ajax({
url:'/readjson',
datatype:'json',
type:'get',
cache:false,
success:function(data){
var jsonData = $.parseJSON(data);
console.log(jsonData);
var count=0;
if(count==0){
  getMovie();
}
$("#next").click(function() {
  console.log("inside next");
  if(count < jsonData.length){
    count++;
      getMovie();
    }
});
$("#prev").click(function() {
  if(count>0){
    count--;
      getMovie();
    }
});
function getMovie()
{
  console.log("count==>"+count);
  $('#img').attr("src", jsonData[count].Poster);
  $('#title').html('<p><b> Title:</b> ' + jsonData[count].Title + '</p>');
  $('#year').html('<p> <b>Year:</b> ' + jsonData[count].Year + '</p>');
  $('#actors').html('<p> <b>Actors:</b> ' + jsonData[count].Actors + '</p>');
  $('#director').html('<p><b> Director:</b> ' + jsonData[count].Director + '</p>');
  $('#desc').html('<p> <b>Description: </b>' + jsonData[count].Plot + '</p>');
  $('#date').html('<p><b> Date Released: </b>' + jsonData[count].Released + '</p>');
  $('#ratings').html('<p><b> Ratings: </b>' + jsonData[count].imdbRating + '</p>');
  $('#award').html('<p> <b>Awards: </b>' + jsonData[count].Awards + '</p>');
  $('#deleteTitle').val(jsonData[count].Title);
  $("#frmCadastre").click(function(){
      $('#Title1').val(jsonData[count].Title);
      $('#myImg1').val(jsonData[count].Poster);
      $('#Year1').val(jsonData[count].Year);
      $('#Actors1').val(jsonData[count].Actors);
      $('#Director1').val(jsonData[count].Director);
      $('#Plot1').val(jsonData[count].Plot);
      $('#Released1').val(jsonData[count].Released);
      $('#imdbRating1').val(jsonData[count].imdbRating);
      $('#Awards1').val(jsonData[count].Awards);

    });
}
}
});
