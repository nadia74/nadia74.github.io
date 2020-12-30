(function ($) // début du pluggin
{
    $.fn.game2048 = function () //function game2048 du pluggin
    {
        // génération du tableau (table, tr, td) vide (rempli de zéros)
        function generateMap() {
            let table = $('<table></table>');
            for (let y = 0; y < 4; y++) {
                let line = $('<tr></tr>');
                for (let x = 0; x < 4; x++) {
                    let cell = $('<td >0</td>').attr('x', x).attr('y', y).attr('nbr', 0);

                    line.append(cell);
                }
                table.append(line);

            }


            return table;
        }

        // génération d'un certain nombre de cases (argument cases) aléatoirement placées sur les cases d'attribut 'nbr=0'
        function generateCell(cells) {
            for (let i = 0; i < cells; i++) {
                let empty = false;

                while (empty === false) // tant que la case récupéré aléatoirement n'est pas vide
                {
                    let x = Math.floor((Math.random() * 4));
                    let y = Math.floor((Math.random() * 4));
                    var elem = $('[x="' + x + '"][y="' + y + '"][nbr=0]');

                    if (elem[0])
                        empty = true;
                }

                let value = 2 * (Math.floor((Math.random() * 2) + 1));
                if (value === 4 && Math.random() > 0.5)
                    value = 2;


                elem.attr('nbr', value);
                elem.text(value);

            }

        }





        // fonction de gestion des évenements (appuie de touches)
        $('html').keydown(function (event) {
            switch (event['key']) {
                case 'ArrowLeft':
                    goleft();
                    changecolor();


                    // insérer algo move left
                    console.log("Left");
                    break;
                case 'ArrowUp':
                    goup();
                    changecolor();

                    // insérer algo move up
                    console.log("Up");
                    break;
                case 'ArrowRight':
                    goright();
                    changecolor();


                    // insérer algo move right
                    console.log("Right");
                    break;
                case 'ArrowDown':
                    godown();
                    changecolor();


                    // insérer algo move down
                    console.log("Down");
                    break;
            }


            // fonctions deplacements et fusion

            function changecolor() {
                //   var elements = $('[x="' + 0 + '"][y="' + 0 + '"]');
                // elements[0].addClass = $('[x="' + x + '"][y="' + y + '"]');

                for (let x = 0; x < 4; x++) {
                    for (let y = 0; y < 4; y++) {

                        var elements = $('[x="' + x + '"][y="' + y + '"]');
                        elements.removeClass("zero deux quatre huit");
                        elements.removeClass("seize trente sixquatre centvh dcs ccd mvq dmqh");

                        switch (elements[0].innerText) {
                            case '0':
                                elements.addClass("zero");
                                break;
                            case '2':
                                elements.addClass("deux");

                                break;
                            case '4':
                                elements.addClass("quatre");
                                break;
                            case '8':
                                elements.addClass("huit");

                                break;
                            case '16':
                                elements.addClass("seize");
                                break;
                            case '32':
                                elements.addClass("trente");
                                break;
                            case '64':
                                elements.addClass("sixquatre");
                                break;
                            case '128':
                                elements.addClass("centvh");
                                break;
                            case '256':
                                elements.addClass("dcs");
                                break;
                            case '512':
                                elements.addClass("ccd");
                                break;
                            case '1024':
                                elements.addClass("mvq");
                                break;
                            case '2048':
                                elements.addClass("dmqh");
                                break;
                            default:
                                elements.addClass('td');
                        }
                    }

                }
            }


            $("#restart").click(function () {

                for (let x = 0; x < 4; x++) {
                    var arru = [];
                    for (let y = 0; y < 4; y++) {
                        let elem = $('[x="' + x + '"][y="' + y + '"]');
                        arru.push(parseInt(elem[0].innerText));
                    }

                    for (let o = 0; o < 4; o++) {
                        let ele = $('[x="' + x + '"][y="' + o + '"]');
                        ele.attr('nbr', 0);
                        ele.text(0);
                        ele.removeClass("zero deux quatre huit");
                        ele.removeClass("seize trente sixquatre centvh dcs ccd mvq dmqh");


                    }
                }
            });







            function findzero(arr) {
                for (var ind = 0; ind < arr.length; ind++) {

                    if (arr[ind] === 0) {
                        return ind;
                    }

                }


                return ind;
            }

            function countzero() {
                var zero = 0;
                for (let x = 0; x < 4; x++) {
                    for (let y = 0; y < 4; y++) {

                        var eleme = $('[x="' + x + '"][y="' + y + '"][nbr=0]');

                        if (eleme[0]) {

                            zero = zero + 1;
                        }




                    }
                }

                if (zero >= 1) {
                    generateCell(1);

                }

                else if (zero === 0) {
                    generateCell(0);

                }
                win();

            }

            function win() {
                var win = 0;
                for (let x = 0; x < 4; x++) {
                    for (let y = 0; y < 4; y++) {

                        var element = $('[x="' + x + '"][y="' + y + '"][nbr=2048]');

                        if (element[0]) {

                            alert('you win !');

                        }


                    }
                }


            }

            function moveone(arr) {

                var id = findzero(arr);
                for (let i = id; i < arr.length; i++) {

                    if (arr[i] !== 0) {
                        arr[id] = arr[i];
                        arr[i] = 0;
                        return arr;

                    }
                }
                return arr;

            }

            function moveleft(arr) {
                for (let i = 0; i < arr.length; i++) {
                    arr = moveone(arr);
                }
                arr = fusion(arr);
                arr = moveone(arr);

                return arr;

            }




            function fusion(arr) {

                for (let i = 0; i < arr.length - 1; i++) {
                    if (arr[i] === arr[i + 1]) {

                        arr[i] = arr[i] * 2;
                        arr[i + 1] = 0;


                    }

                }
                return arr;
            }


            /*function stopgame() {
 
                for (let i = 0; i < 4 - 1; i++) {
                    let elem = $('[x="' + x + '"][y="' + y + '"]')
 
                    if (arr[i] === arr[i + 1]) {
 
                        arr[i] = arr[i] * 2;
                        arr[i + 1] = 0;
 
                    }
 
                }
                return arr;
            }*/

            function moveright(arr) {
                arr = moveleft(arr.reverse()).reverse();
                return arr;

            }

            function godown() {

                for (let x = 0; x < 4; x++) {
                    var arrd = [];
                    for (let y = 0; y < 4; y++) {
                        let elem = $('[x="' + x + '"][y="' + y + '"]');
                        arrd.push(parseInt(elem[0].innerText));
                    }
                    moveleft(arrd.reverse()).reverse();

                    for (let j = 0; j < 4; j++) {
                        let ele = $('[x="' + x + '"][y="' + j + '"]');
                        ele.attr('nbr', arrd[j]);
                        ele.text(arrd[j]);
                    }
                }
                countzero();
                return arrd;
            }

            function goup() {

                for (let x = 0; x < 4; x++) {
                    var arru = [];
                    for (let y = 0; y < 4; y++) {
                        let elem = $('[x="' + x + '"][y="' + y + '"]');
                        arru.push(parseInt(elem[0].innerText));
                    }
                    moveleft(arru);

                    for (let o = 0; o < 4; o++) {
                        let ele = $('[x="' + x + '"][y="' + o + '"]');
                        ele.attr('nbr', arru[o]);
                        ele.text(arru[o]);
                    }
                }
                countzero();

                return arru;

            }

            function goleft() {

                for (let y = 0; y < 4; y++) {
                    var arrl = [];
                    for (let x = 0; x < 4; x++) {
                        let elem = $('[x="' + x + '"][y="' + y + '"]');
                        arrl.push(parseInt(elem[0].innerText));
                    }
                    moveleft(arrl);

                    for (let o = 0; o < 4; o++) {
                        let ele = $('[x="' + o + '"][y="' + y + '"]');
                        ele.attr('nbr', arrl[o]);
                        ele.text(arrl[o]);
                    }

                }
                countzero();


                return arrl;
            }

            function goright() {

                for (let y = 0; y < 4; y++) {
                    var arrr = [];
                    for (let x = 0; x < 4; x++) {
                        let elem = $('[x="' + x + '"][y="' + y + '"]');
                        arrr.push(parseInt(elem[0].innerText));
                    }
                    moveleft(arrr.reverse()).reverse();

                    for (let o = 0; o < 4; o++) {
                        let ele = $('[x="' + o + '"][y="' + y + '"]');
                        ele.attr('nbr', arrr[o]);
                        ele.text(arrr[o]);
                    }
                }
                countzero();

                return arrr;

            }



        });

        // début du code lancé
        $(this).append(generateMap());
        // génération du tableau vide
        generateCell(2);
        // génération aléatoire de deux cases pleines (2 ou 4)

    }


})(jQuery); // fin du pluggin
