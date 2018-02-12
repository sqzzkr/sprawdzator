output = document.getElementById("output");
info = document.getElementById("info");
characters = document.getElementById("characters");
timer = null;
digit = null;
i = null;
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
    output.style.color = "green";
    output.innerHTML = "OK.<br>Kod skopiowany do schowka.";
}
function toolong() {
    output.style.color = "red";
    if (max[i]) {
        max = max[i];
    }
    output.innerHTML = `Numer za długi.<br>Liczba znaków ${maskvalue.length}, wymagana ${max}.`;
}
function tooshort() {
    output.style.color = "red";
    if (max[i]) {
        max = max[i];
    }
    output.innerHTML = `Numer za krótki.<br>Liczba znaków ${maskvalue.length}, wymagana ${max}.`;
}
function error() {
    output.style.color = "red";
    output.innerHTML = "Błędna stała wartość początku kodu.";
}
function onlynumbers() {
    output.style.color = "red";
    output.innerHTML = "Numer nie może zawierać liter.";
}
function timercleaner() {
    infoup.innerHTML = "";
    infodown.innerHTML = "";
    output.innerHTML = "";
    document.getElementById("mask").value = "";
    counter.innerHTML = "";
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
    maskvalue = maskvalue.replace(/\s/g, '');
    maskupper = maskvalue.toUpperCase();
}
function mask_more(){ 
    maskvalue = document.getElementById("mask").value;
    maskvalue = maskvalue.replace(/\s/g, '');
    maskupper = maskvalue.toUpperCase();
    digit = maskupper.match(/\d/);
    if (digit) {
        usercode = maskupper.substring(0, digit.index);
        i = code.indexOf(usercode);
    }
}
function conditions(maskupper, max, code, codelength) {
    if ((maskupper.length == max && maskupper.substring(0, codelength) == code && !isNaN(maskupper.substring(codelength, max)))
        || (maskupper.length == max && code.indexOf(maskupper.substring(0, codelength)) > -1 && !isNaN(maskupper.substring(0, max))))
    { return true }
    else { return false }
}
function check(maskupper, max, code, codelength) {
    cancelcleaner();
    if (maskupper == "") {
        entercode();
    }
    else if (conditions(maskupper, max, code, codelength)) {
        ok();
        copytoclipboard();
    }
    else {
        if (isNaN(maskupper.substring(codelength, max))) {
            onlynumbers();
        }
        if (maskupper.substring(0, codelength) != code) {
            error();
        }
        if (maskupper.length < max) {
            tooshort();
        }
        if (maskupper.length > max) {
            toolong();
        }
    }
    timer = setTimeout(timercleaner, 25000);
}
function conditions_more(i, maskupper, max, code, codelength) {
    if (maskupper.length == max[i] && code.indexOf(maskupper.substring(0, codelength[i])) > -1 && !isNaN(maskupper.substring(codelength[i], max[i]))) {
        return true;
    }
    else { return false}
}
function check_more(i, maskupper, max, code, codelength) { 
    cancelcleaner();
    if (maskupper == "") {
        entercode();
    }
    else if (conditions_more(i, maskupper, max, code, codelength)) {
        ok();
        copytoclipboard();
    }
    else {
        if (isNaN(maskupper.substring(codelength[i], max[i]))) {
            onlynumbers();
        }
        if (maskupper.substring(0, codelength[i]) != code[i]) {
            error();
        }
        if (maskupper.length < max[i]) {
            tooshort();
        }
        if (maskupper.length > max[i]) {
            toolong();
        }
    }
    timer = setTimeout(timercleaner, 25000);
}
function enea() {
    infoup.innerHTML = "<b>Enea</b>";
    infodown.innerHTML = "<b>32</b> znaki.<br>Na początku <b>PLENED0000059</b>.";
    max = 32;
    code = "PLENED0000059";
    codelength = code.length;
    mask(); 
    check(maskupper, max, code, codelength);
}
function innogy() {
    infoup.innerHTML = "<b>Innogy</b>";
    infodown.innerHTML = "<b>33</b> znaki.<br>Na początku <b>PL000001</b>.";
    max = 33;
    code = "PL000001";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function energa() {
    infoup.innerHTML = "<b>Energa</b>";
    infodown.innerHTML = "<b>18</b> znaków.<br>Na początku <b>PL0037</b>.";
    max = 18;
    code = "PL0037";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function tauronENION() {
    infoup.innerHTML = "<b>Tauron ENION</b>";
    infodown.innerHTML = "Początek <b>PLTAUD</b> - <b>18</b> znaków.<br>Początek <b>ENID_</b> - <b>15</b> znaków.";
    max = [18, 15];
    code = ["PLTAUD", "ENID_"];
    codelength = [code[0].length, code[1].length];
    mask_more();
    check_more(i, maskupper, max, code, codelength);
}
function tauronENERGIAPRO() {
    infoup.innerHTML = "<b>Tauron ENERGIA PRO</b>";
    infodown.innerHTML = "Początek <b>PLTAUD</b> - <b>18</b> znaków.<br>Początek <b>PROD_</b> - <b>17</b> znaków.";
    max = [18, 17];
    code = ["PLTAUD", "PROD_"];
    codelength = [code[0].length, code[1].length];
    mask_more();
    check_more(i, maskupper, max, code, codelength);
}
function tauronGZE() {
    infoup.innerHTML = "<b>Tauron GZE</b>";
    infodown.innerHTML = "<b>32</b> znaki.<br>Na początku <b>PLGZEO</b>.";
    max = 32;
    code = "PLGZEO";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function pgeBIALYSTOK() {
    infoup.innerHTML = "<b>PGE Białystok</b>";
    infodown.innerHTML = "<b>21</b> znaków.<br>Na początku <b>PL_ZEB</b>.";
    max = 21;
    code = "PL_ZEB";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function pgeLUBLIN() {
    infoup.innerHTML = "<b>PGE Lublin</b>";
    infodown.innerHTML = "<b>21</b> znaków.<br>Na początku <b>PL_LUB</b> albo <b>PL_PGEL</b>.";
    max = [21, 21];
    code = ["PL_LUB", "PL_PGEL"];
    codelength = [code[0].length, code[1].length];
    mask_more();
    check_more(i, maskupper, max, code, codelength);
}
function pgeLODZMIASTO() {
    infoup.innerHTML = "<b>PGE Łódź Miasto</b>";
    infodown.innerHTML = "<b>18</b> znaków.<br>Na początku <b>PLLZED</b>.";
    max = 18;
    code = "PLLZED";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function pgeLODZTEREN() {
    infoup.innerHTML = "<b>PGE Łódź Teren</b>";
    infodown.innerHTML = "<b>18</b> znaków.<br>Na początku <b>PLZELD</b>.";
    max = 18;
    code = "PLZELD";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function pgeRZESZOW() {
    infoup.innerHTML = "<b>PGE Rzeszów</b>";
    infodown.innerHTML = "<b>18</b> cyfr.<br>Na początku <b>480548</b>.";
    max = 18;
    code = ["480548"];
    codelength = code[0].length;
    mask();
    check(maskupper, max, code, codelength);
}
function pgeSKARZYSKO() {
    infoup.innerHTML = "<b>PGE Skarżysko-Kamienna</b>";
    infodown.innerHTML = "<b>21</b> znaków.<br>Na początku <b>PL_ZEOD</b>.";
    max = 21;
    code = "PL_ZEOD";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function pgeWARSZAWA() {
    infoup.innerHTML = "<b>PGE Warszawa</b>";
    infodown.innerHTML = "<b>21</b> znaków.<br>Na początku <b>PL_ZEWD</b> albo <b>PL_PGEW</b>.";
    max = [21, 21];
    code = ["PL_ZEWD", "PL_PGEW"];
    codelength = [code[0].length, code[1].length];
    mask_more();
    check_more(i, maskupper, max, code, codelength);
}
function pgeZAMOSC() {
    infoup.innerHTML = "<b>PGE Zamość<b>";
    infodown.innerHTML = "Początek <b>PLZKED</b> - <b>18</b> znaków.<br>Początek <b>PL_ZK</b> - <b>20</b> znaków.<br>Początek <b>PL_ZKE</b> - <b>21</b> znaków.";
    max = [18, 20, 21];
    code = ["PLZKED", "PL_ZK", "PL_ZKE"];
    codelength = [code[0].length, code[1].length, code[2].length];
    mask_more();
    check_more(i, maskupper, max, code, codelength);
}
function psgWARSZAWA() {
    infoup.innerHTML = "<b>PSG Warszawa<b>";
    infodown.innerHTML = "<b>10</b> cyfr.";
    max = 10;
    code = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    codelength = code[0].length;
    mask();
    check(maskupper, max, code, codelength);
}
function psgWROCLAW() {
    infoup.innerHTML = "<b>PSG Wrocław</b>";
    infodown.innerHTML = "<b>10</b> cyfr.<br>Pierwsza <b>5</b>, <b>6</b> lub <b>9</b>.";
    max = 10;
    code = ["5", "6", "9"];
    codelength = code[0].length;
    mask();
    check(maskupper, max, code, codelength);
}
function psgPOZNAN() {
    infoup.innerHTML = "<b>PSG Poznań</b>";
    infodown.innerHTML = "<b>10</b> cyfr.<br>Na początku <b>12</b>, <b>13</b>, <b>14</b> lub <b>35</b>.";
    max = 10;
    code = ["12", "13", "14", "35"];
    codelength = code[0].length;
    mask();
    check(maskupper, max, code, codelength);
}
function psgTARNOW() {
    infoup.innerHTML = "<b>PSG Tarnów</b>";
    infodown.innerHTML = "<b>9</b> cyfr.<br>Na początku <b>00</b>.";
    max = 9;
    code = ["00"];
    codelength = code[0].length;
    mask();
    check(maskupper, max, code, codelength);
}
function psgZABRZE() {
    infoup.innerHTML = "<b>PSG Zabrze</b>";
    infodown.innerHTML = "<b>12</b> znaków.<br>Na początku <b>PL003</b>";
    max = 12;
    code = "PL003";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
