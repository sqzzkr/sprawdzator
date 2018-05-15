output = document.getElementById("output");
info = document.getElementById("info");
characters = document.getElementById("characters");
timer = null;
usercode = null;
i = null;
infoENERGA = null;
maskupper = null;
function copytoclipboard() {
    document.getElementById("mask").value = maskupper;
    document.getElementById("mask").select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    count();
}
function entercode() {
    output.style.color = "red";
    output.innerHTML = "Wpisz kod.";
}
function ok() {
    if (infoENERGA) {
    output.style.color = "green";
    output.innerHTML = "OK. "+ infoENERGA +"<br>Kod skopiowany do schowka.";
    } else {
    output.style.color = "green";
    output.innerHTML = "OK.<br>Kod skopiowany do schowka.";
}
}
function toolong() {
    output.style.color = "red";
    if (max.length == 1) {
        output.innerHTML = `Numer za długi.<br>Liczba znaków ${maskvalue.length}, wymagana ${max[i]}.`;
    } else { output.innerHTML = `Numer za długi.<br>Liczba znaków ${maskvalue.length}, dopuszczalna ${max[max.length-1]}.`;}
}
function tooshort() {
    output.style.color = "red";
    if (max.length == 1) {
        output.innerHTML = `Numer za krótki.<br>Liczba znaków ${maskvalue.length}, wymagana ${max[i]}.`;
    } else { output.innerHTML = `Numer za krótki.<br>Liczba znaków ${maskvalue.length}, wymagane conajmniej ${max[0]}.`; }
}
function error() {
    output.style.color = "red";
    output.innerHTML = "Błędna stała wartość początku kodu.";
}
function wrongnumbers() {
    output.style.color = "red";
    output.innerHTML = "Błędna druga część kodu.";
}
function wrongcontent() {
    output.style.color = "red";
    output.innerHTML = "Błędna wartość kodu.";
}
function timercleaner() {
    infoup.innerHTML = "";
    infodown.innerHTML = "";
    output.innerHTML = "";
    document.getElementById("mask").value = "";
    counter.innerHTML = "";
    infoENERGA = "";
}
function cancelcleaner() {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
}
function count() {
    cancelcleaner()
    characters = document.getElementById("mask").value;
    characters = characters.replace(/\s/g, '');
    characters = characters.length;
    counter = document.getElementById("counter");
    counter.innerHTML = `${characters}`;
}
function mask() {
    maskvalue = document.getElementById("mask").value;
    if (maskvalue == "") {
        entercode();
    } else {
    maskvalue = maskvalue.replace(/\s/g, '');
    maskupper = maskvalue.toUpperCase();    
}
}
function check() {
    cancelcleaner();
    for (i = 0; i < code.length; i++) {
        if (maskupper.length != max[i]) {
            if (maskupper.length < max[i]) {
                tooshort();
            }
            if (maskupper.length > max[i]) {
                toolong();
            }
        } 
        else if (maskupper.match(code[i]) == null) {
            error();
        }
        else if (maskupper.match(code[i]).index == 0 && maskupper.length == max[i]) {
            usercode = maskupper.substring(codelength[i], max[i]);
            if (usercode.match(numbers[i]) == null) {
                wrongnumbers();
                break;
            }
            else if (usercode.match(numbers[i]).index == 0) {
                ok();
                copytoclipboard();
                break;
            }
        } 
    }
        timer = setTimeout(timercleaner, 25000);
}    
function enea() {
    infoup.innerHTML = "<b>Enea</b>";
    infodown.innerHTML = "<b>32</b> znaki.<br>Na początku <b>PLENED0000059</b>.";
    max = [32];
    code = ['["PLENED0000059"]{13}'];
    numbers = ['[\\d]{19}'];
    codelength = [13];
    mask();
    if (maskupper != "" && maskupper != null ) { check(); };
}
function innogy() {
    infoup.innerHTML = "<b>Innogy</b>";
    infodown.innerHTML = "<b>33</b> znaki.<br>Na początku <b>PL000001</b>.";
    max = [33];
    code = ['["PL000001"]'];
    numbers = ['[\\d]{25}']
    codelength = [8];
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function energa() {
    infoup.innerHTML = "<b>Energa</b>";
    infodown.innerHTML = "<b>18</b> znaków.<br>Na początku <b>PL0037</b>.";
    max = [18];
    code = ['["PL0037"]{6}'];
    codelength = [6];
    numbers = ['[\\d]{12}']
    mask();
    if (maskupper != "" && maskupper != null  && maskupper.substring(0, 2) == "48") {
        maskupper = maskupper.replace("48", "PL");
        infoENERGA = "<br><span style='color:darkorange'>Początek kodu zamieniony na poprawny.</span>";
    }
    if (maskupper != "" && maskupper != null ) { check(); }
}
function tauronENERGIAPRO() {
    infoup.innerHTML = "<b>Tauron ENERGIA PRO</b>";
    infodown.innerHTML = "Początek <b>PROD_</b> - <b>17</b> znaków.<br>Początek <b>PLTAUD</b> - <b>18</b> znaków.";
    max = [17, 18];
    code = ['["PROD_"]{5}', '["PLTAUD"]{6}'];
    codelength = [5, 6];
    numbers = ['[\\d]{12}', '[\\d]{12}']
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function tauronENION() {
    infoup.innerHTML = "<b>Tauron ENION</b>";
    infodown.innerHTML = "Początek <b>ENID_</b> - <b>15</b> znaków.<br>Początek <b>PLTAUD</b> - <b>18</b> znaków.";
    max = [15, 18];
    code = ['["ENID_"]{5}', '["PLTAUD"]{6}'];
    codelength = [5, 6];
    numbers = ['[\\d]{10}','[\\d]{12}']
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function tauronGZE() {
    infoup.innerHTML = "<b>Tauron GZE</b>";
    infodown.innerHTML = "<b>32</b> znaki.<br>Na początku <b>PLGZEO</b>.";
    max = [32];
    code = ['["PLGZEO"]{6}'];
    codelength = [6];
    numbers = ["[\\d]{26}"]
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function pgeBIALYSTOK() {
    infoup.innerHTML = "<b>PGE Białystok</b>";
    infodown.innerHTML = "<b>21</b> znaków.<br>Na początku <b>PL_ZEB</b>.";
    max = [21];
    code = ['["PL_ZEB"]{6}'];
    codelength = [6];
    numbers = ["[\\d]{15}"]
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function pgeLODZMIASTO() {
    infoup.innerHTML = "<b>PGE Łódź Miasto</b>";
    infodown.innerHTML = "<b>18</b> znaków.<br>Na początku <b>PLLZED</b>.";
    max = [18];
    code = ['["PLLZED"]{6}'];
    codelength = [6];
    numbers = ["[\\d]{12}"]
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function pgeLODZTEREN() {
    infoup.innerHTML = "<b>PGE Łódź Teren</b>";
    infodown.innerHTML = "<b>18</b> znaków.<br>Na początku <b>PLZELD</b>.";
    max = [18];
    code = ['["PLZELD"]{6}'];
    codelength = [6];
    numbers = ["[\\d]{12}"]
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function pgeLUBLIN() {
    infoup.innerHTML = "<b>PGE Lublin</b>";
    infodown.innerHTML = "<b>21</b> znaków.<br>Na początku <b>PL_LUB</b> albo <b>PL_PGEL</b>.";
    max = [21, 21];
    code = ['["PL_LUB"]{6}', '["PL_PGEL"]{7}'];
    codelength = [6, 7];
    numbers = ["[\\d]{15}", "[\\d]{14}"]
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function pgeRZESZOW() {
    infoup.innerHTML = "<b>PGE Rzeszów</b>";
    infodown.innerHTML = "<b>18</b> cyfr.<br>Na początku <b>480548</b>.";
    max = [18];
    code = ['["480548"]{6}'];
    codelength = [6];
    numbers = ["[\\d]{12}"]
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function pgeSKARZYSKO() {
    infoup.innerHTML = "<b>PGE Skarżysko-Kamienna</b>";
    infodown.innerHTML = "<b>21</b> znaków.<br>Na początku <b>PL_ZEOD</b>.";
    max = 21;
    code = ['["PL_ZEOD"]{7}'];
    codelength = [7];
    numbers = ["[\\d]{14}"]
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function pgeWARSZAWA() {
    infoup.innerHTML = "<b>PGE Warszawa</b>";
    infodown.innerHTML = "<b>21</b> znaków.<br>Na początku <b>PL_ZEWD_</b> albo <b>PL_PGEW_</b>.";
    max = [21, 21];
    code = ['["PL_ZEWD_"]{8}', '["PL_PGEW_"]{8}'];
    codelength = [8,8];
    numbers = ['[\\d]{10}["_"][\\d]{2}', '[\\d]{10}["_"][\\d]{2}'];
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function pgeZAMOSC() {
    infoup.innerHTML = "<b>PGE Zamość<b>";
    infodown.innerHTML = "Początek <b>PLZKED</b> - <b>18</b> znaków.<br>Początek <b>PL_ZK</b> - <b>20</b> znaków.<br>Początek <b>PL_ZKE</b> - <b>21</b> znaków.";
    max = [18, 20, 21];
    code = ['["PLZKED"]{6}', '["PL_ZK"]{5}', '["PL_ZKE"]{6}'];
    codelength = [6, 5, 6];
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
function psgPOZNAN() {
    infoup.innerHTML = "<b>PSG Poznań</b>";
    infodown.innerHTML = "<b>10</b> cyfr.<br>Na początku <b>12</b>, <b>13</b>, <b>14</b> lub <b>35</b>.";
    max = [10, 10, 10, 10];
    code = ['["12"]{2}', '["13"]{2}', '["14"]{2}', '["35"]{2}'];
    codelength = [2, 2, 2, 2]
    numbers = ['[\\d]{8}', '[\\d]{8}', '[\\d]{8}', '[\\d]{8}']
    mask();
    if (maskupper != "" && maskupper != null  && !isNaN(maskupper)) { check(); } else {
        if (maskvalue == "") {
            entercode();
        } else {
            wrongcontent();
        }
    }
}    
function psgTARNOW() {
    infoup.innerHTML = "<b>PSG Tarnów</b>";
    infodown.innerHTML = "<b>9</b> cyfr.<br>Na początku <b>00</b>.";
    max = [9];
    code = ['["00"]{2}'];
    codelength = [2];
    numbers = ['[\\d]{7}'];
    mask();
    if (maskupper != "" && maskupper != null  && !isNaN(maskupper)) { check(); } else {
        if (maskvalue == "") {
            entercode();
        } else {
            wrongcontent();
        }
    }
}    
function psgWARSZAWA() {
    infoup.innerHTML = "<b>PSG Warszawa<b>";
    infodown.innerHTML = "<b>10</b> cyfr.";
    max = [10];
    code = ['[\\d]{1}'];
    codelength = [1];
    numbers = ['[\\d]{9}']
    mask();
    if (maskupper != "" && maskupper != null  && !isNaN(maskupper)) { check(); } else {
        if (maskvalue == "") {
            entercode();
        } else {
            wrongcontent();
        }
    }
}    
function psgWROCLAW() {
    infoup.innerHTML = "<b>PSG Wrocław</b>";
    infodown.innerHTML = "<b>10</b> cyfr.<br>Pierwsza <b>5</b>, <b>6</b> lub <b>9</b>.";
    max = [10, 10, 10];
    code = ['["5"]{1}', '["6"]{1}', '["9"]{1}'];
    codelength = [1, 1, 1];
    numbers = ['[\\d]{9}'];
    mask();
    if (maskupper != "" && maskupper != null && !isNaN(maskupper)) { check(); } else {
        if (maskvalue == "") {
            entercode();
        } else {
            wrongcontent();
        }
    }
}    
function psgZABRZE() {
    infoup.innerHTML = "<b>PSG Zabrze</b>";
    infodown.innerHTML = "<b>12</b> znaków.<br>Na początku <b>PL003</b>";
    max = [12];
    code = ['["PL003"]{5}'];
    codelength = [5]
    numbers = ['[\\d]{7}'];
    mask();
    if (maskupper != "" && maskupper != null ) { check(); }
}
