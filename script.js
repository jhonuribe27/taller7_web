$(document).ready(() =>{
    $('#form').click(function(evento) {
        evento.preventDefault();
        let opcion = $('select option:selected').val();

        // if (opcion !== 0){
        //     $('#resultado').text(`Selecciono el Departameto : ${opcion}`);
        // }
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

        if(opcion == 'Atlantico'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades3) {
                       $("#ciudades3").append('<option>' + value.ciudades3[x] + '</option>');
                   }
                   $("#ciudades2").hide();
                   $("#ciudades").hide();
                   $("#ciudades1").hide();
                   $("#ciudades3").show();
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

        if(opcion == 'Bolivar'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades4) {
                       $("#ciudades4").append('<option>' + value.ciudades4[x] + '</option>');
                   }
                   $("#ciudades2").hide();
                   $("#ciudades").hide();
                   $("#ciudades1").hide();
                   $("#ciudades3").hide();
                   $("#ciudades4").show();
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
        
        if(opcion == 'Boyaca'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades5) {
                       $("#ciudades5").append('<option>' + value.ciudades5[x] + '</option>');
                   }
                   $("#ciudades2").hide();
                   $("#ciudades").hide();
                   $("#ciudades1").hide();
                   $("#ciudades3").hide();
                   $("#ciudades4").hide();
                   $("#ciudades5").show();
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

        if(opcion == 'Caldas'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades6) {
                       $("#ciudades6").append('<option>' + value.ciudades6[x] + '</option>');
                   }
                   $("#ciudades2").hide();
                   $("#ciudades").hide();
                   $("#ciudades1").hide();
                   $("#ciudades3").hide();
                   $("#ciudades4").hide();
                   $("#ciudades5").hide();
                   $("#ciudades6").show();
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

        if(opcion == 'Caqueta'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades7) {
                       $("#ciudades7").append('<option>' + value.ciudades7[x] + '</option>');
                   }
                   $("#ciudades2").hide();
                   $("#ciudades").hide();
                   $("#ciudades1").hide();
                   $("#ciudades3").hide();
                   $("#ciudades4").hide();
                   $("#ciudades5").hide();
                   $("#ciudades6").hide();
                   $("#ciudades7").show();
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

        if(opcion == 'Casanare'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades8) {
                       $("#ciudades8").append('<option>' + value.ciudades8[x] + '</option>');
                   }
                   $("#ciudades2").hide();
                   $("#ciudades").hide();
                   $("#ciudades1").hide();
                   $("#ciudades3").hide();
                   $("#ciudades4").hide();
                   $("#ciudades5").hide();
                   $("#ciudades6").hide();
                   $("#ciudades7").hide();
                   $("#ciudades8").show();
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

        if(opcion == 'Cauca'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades9) {
                       $("#ciudades9").append('<option>' + value.ciudades9[x] + '</option>');
                   }
                   $("#ciudades2").hide();
                   $("#ciudades").hide();
                   $("#ciudades1").hide();
                   $("#ciudades3").hide();
                   $("#ciudades4").hide();
                   $("#ciudades5").hide();
                   $("#ciudades6").hide();
                   $("#ciudades7").hide();
                   $("#ciudades8").hide();
                   $("#ciudades9").show();
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

        if(opcion == 'Cesar'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades10) {
                       $("#ciudades10").append('<option>' + value.ciudades10[x] + '</option>');
                   }
                   $("#ciudades2").hide();
                   $("#ciudades").hide();
                   $("#ciudades1").hide();
                   $("#ciudades3").hide();
                   $("#ciudades4").hide();
                   $("#ciudades5").hide();
                   $("#ciudades6").hide();
                   $("#ciudades7").hide();
                   $("#ciudades8").hide();
                   $("#ciudades9").hide();
                   $("#ciudades10").show();
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

        if(opcion == 'Choco'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades11) {
                       $("#ciudades11").append('<option>' + value.ciudades11[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades11").show();
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

        if(opcion == 'Cundinamarca'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades12) {
                       $("#ciudades12").append('<option>' + value.ciudades12[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades12").show();
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

        if(opcion == 'Cordoba'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades13) {
                       $("#ciudades13").append('<option>' + value.ciudades13[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades13").show();
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

        if(opcion == 'Guainia'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades14) {
                       $("#ciudades14").append('<option>' + value.ciudades14[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades14").show();
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

        if(opcion == 'Guaviare'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades15) {
                       $("#ciudades15").append('<option>' + value.ciudades15[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades15").show();
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

        if(opcion == 'Huila'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades16) {
                       $("#ciudades16").append('<option>' + value.ciudades16[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades16").show();
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

        if(opcion == 'La Guajira'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades17) {
                       $("#ciudades17").append('<option>' + value.ciudades17[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades17").show();
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

        if(opcion == 'Magdalena'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades18) {
                       $("#ciudades18").append('<option>' + value.ciudades18[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades18").show();
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

        if(opcion == 'Meta'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades19) {
                       $("#ciudades19").append('<option>' + value.ciudades19[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades19").show();
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

        if(opcion == 'Nariño'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades20) {
                       $("#ciudades20").append('<option>' + value.ciudades20[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades20").show();
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

        if(opcion == 'Norte de Santander'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades21) {
                       $("#ciudades21").append('<option>' + value.ciudades21[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades21").show();
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

        if(opcion == 'Putumayo'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades22) {
                       $("#ciudades22").append('<option>' + value.ciudades22[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades22").show();
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

        if(opcion == 'Quindio'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades23) {
                       $("#ciudades23").append('<option>' + value.ciudades23[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades23").show();
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

        if(opcion == 'Risaralda'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades24) {
                       $("#ciudades24").append('<option>' + value.ciudades24[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades24").show();
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

        if(opcion == 'San Andres y Providencia'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades25) {
                       $("#ciudades25").append('<option>' + value.ciudades25[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades25").show();
                   $("#ciudades26").hide();
                   $("#ciudades27").hide();
                   $("#ciudades28").hide();
                   $("#ciudades29").hide();
                   $("#ciudades30").hide();
                   $("#ciudades31").hide();
                }); 
            });
        }

        if(opcion == 'Santander'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades26) {
                       $("#ciudades26").append('<option>' + value.ciudades26[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades26").show();
                   $("#ciudades27").hide();
                   $("#ciudades28").hide();
                   $("#ciudades29").hide();
                   $("#ciudades30").hide();
                   $("#ciudades31").hide();
                }); 
            });
        }

        if(opcion == 'Sucre'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades27) {
                       $("#ciudades27").append('<option>' + value.ciudades27[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades27").show();
                   $("#ciudades28").hide();
                   $("#ciudades29").hide();
                   $("#ciudades30").hide();
                   $("#ciudades31").hide();
                }); 
            });
        }

        if(opcion == 'Tolima'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades28) {
                       $("#ciudades28").append('<option>' + value.ciudades28[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades28").show();
                   $("#ciudades29").hide();
                   $("#ciudades30").hide();
                   $("#ciudades31").hide();
                }); 
            });
        }

        if(opcion == 'Valle del Cauca'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades29) {
                       $("#ciudades29").append('<option>' + value.ciudades29[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades29").show();
                   $("#ciudades30").hide();
                   $("#ciudades31").hide();
                }); 
            });
        }

        if(opcion == 'Vaupes'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades30) {
                       $("#ciudades30").append('<option>' + value.ciudades30[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades30").show();
                   $("#ciudades31").hide();
                }); 
            });
        }

        if(opcion == 'Vichada'){
            $.getJSON('colombia.json', function(data) {
                $.each(data, function(key, value) {
                   for (x in value.ciudades31) {
                       $("#ciudades31").append('<option>' + value.ciudades31[x] + '</option>');
                   }
                   $("#ciudades2").hide();
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
                   $("#ciudades31").show();
                }); 
            });
        }
        

    });
    


});