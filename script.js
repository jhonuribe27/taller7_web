$(document).ready(() =>{
    $('#form').click(function(evento) {
        evento.preventDefault();
        let opcion = $('select option:selected').val();

        if (opcion !== 0){
            $('#resultado').text(`Selecciono el Departameto : ${opcion}`);
        }
        if(opcion == 'Amazonas'){
            
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades0) {
                       $("#ciudades").append('<option>' + value.ciudades0[x] + '</option>');
                   }
                   $("#ciudades").show();
                   $("#ciudades1").hide();
                   $("#ciudades2").hide();
                   $("#ciudades3").hide();
                   $("#ciudades4").hide();
                   $("#ciudades5").hide();
                   $("#ciudades6").hide();
                   $("#ciudades7").hide();
                   $("#ciudades8").hide();
                   $("#ciudades9").hide();
                   $("#ciudades10").hide();
                   $("#ciudades11").hide();
                   $("#ciudades12").hide();
                   $("#ciudades13").hide();
                   $("#ciudades14").hide();
                   $("#ciudades15").hide();
                   $("#ciudades16").hide();
                   $("#ciudades17").hide();
                   $("#ciudades18").hide();
                   $("#ciudades19").hide();
                   $("#ciudades20").hide();
                   $("#ciudades21").hide();
                   $("#ciudades22").hide();
                   $("#ciudades23").hide();
                   $("#ciudades24").hide();
                   $("#ciudades25").hide();
                   $("#ciudades26").hide();
                   $("#ciudades27").hide();
                   $("#ciudades28").hide();
                   $("#ciudades29").hide();
                   $("#ciudades30").hide();
                   $("#ciudades31").hide();
                }); 
            });
        }
        if(opcion == 'Antioquia'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades1) {
                       $("#ciudades1").append('<option>' + value.ciudades1[x] + '</option>');
                   }
                   $("#ciudades1").show();
                   $("#ciudades").hide();
                   $("#ciudades2").hide();
                   $("#ciudades3").hide();
                   $("#ciudades4").hide();
                   $("#ciudades5").hide();
                   $("#ciudades6").hide();
                   $("#ciudades7").hide();
                   $("#ciudades8").hide();
                   $("#ciudades9").hide();
                   $("#ciudades10").hide();
                   $("#ciudades11").hide();
                   $("#ciudades12").hide();
                   $("#ciudades13").hide();
                   $("#ciudades14").hide();
                   $("#ciudades15").hide();
                   $("#ciudades16").hide();
                   $("#ciudades17").hide();
                   $("#ciudades18").hide();
                   $("#ciudades19").hide();
                   $("#ciudades20").hide();
                   $("#ciudades21").hide();
                   $("#ciudades22").hide();
                   $("#ciudades23").hide();
                   $("#ciudades24").hide();
                   $("#ciudades25").hide();
                   $("#ciudades26").hide();
                   $("#ciudades27").hide();
                   $("#ciudades28").hide();
                   $("#ciudades29").hide();
                   $("#ciudades30").hide();
                   $("#ciudades31").hide();
                }); 
            });
        }

        if(opcion == 'Arauca'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades2) {
                       $("#ciudades2").append('<option>' + value.ciudades2[x] + '</option>');
                   }
                   $("#ciudades2").show();
                   $("#ciudades").hide();
                   $("#ciudades1").hide();
                   $("#ciudades3").hide();
                   $("#ciudades4").hide();
                   $("#ciudades5").hide();
                   $("#ciudades6").hide();
                   $("#ciudades7").hide();
                   $("#ciudades8").hide();
                   $("#ciudades9").hide();
                   $("#ciudades10").hide();
                   $("#ciudades11").hide();
                   $("#ciudades12").hide();
                   $("#ciudades13").hide();
                   $("#ciudades14").hide();
                   $("#ciudades15").hide();
                   $("#ciudades16").hide();
                   $("#ciudades17").hide();
                   $("#ciudades18").hide();
                   $("#ciudades19").hide();
                   $("#ciudades20").hide();
                   $("#ciudades21").hide();
                   $("#ciudades22").hide();
                   $("#ciudades23").hide();
                   $("#ciudades24").hide();
                   $("#ciudades25").hide();
                   $("#ciudades26").hide();
                   $("#ciudades27").hide();
                   $("#ciudades28").hide();
                   $("#ciudades29").hide();
                   $("#ciudades30").hide();
                   $("#ciudades31").hide();
                }); 
            });
        }
        
        

    });
    


});