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
    output.innerHTML = `Numer za długi, liczba znaków ${maskvalue.length}, wymagana ${max}.`;
}
function tooshort() {
    output.style.color = "red";
    if (max[i]) {
        max = max[i];
    }
    output.innerHTML = `Numer za krótki, liczba znaków ${maskvalue.length}, wymagana ${max}.`;
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
    info.innerHTML = "";
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
    characters = document.getElementById("mask").value.length;
    counter = document.getElementById("counter");
    counter.style.color = "black";
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
function tauronENION() {
    max = [18, 15];
    code = ["PLTAUD", "ENID_"];
    codelength = [code[0].length, code[1].length];
    mask_more();
    check_more(i, maskupper, max, code, codelength);
}
function tauronENERGIAPRO() {
    max = [18, 17];
    code = ["PLTAUD", "PROD_"];
    codelength = [code[0].length, code[1].length];
    mask_more();
    check_more(i, maskupper, max, code, codelength);
}
function pgeLUBLIN() {
    max = [21, 21];
    code = ["PL_LUB", "PL_PGEL"];
    codelength = [code[0].length, code[1].length];
    mask_more();
    check_more(i, maskupper, max, code, codelength);
}
function pgeWARSZAWA() {
    max = [21, 21];
    code = ["PL_ZEWD", "PL_PGEW"];
    codelength = [code[0].length, code[1].length];
    mask_more();
    check_more(i, maskupper, max, code, codelength);
}
function pgeZAMOSC() {
    max = [18, 20, 21];
    code = ["PLZKED", "PL_ZK", "PL_ZKE"];
    codelength = [code[0].length, code[1].length, code[2].length];
    mask_more();
    check_more(i, maskupper, max, code, codelength);
}
function enea() {
    max = 32;
    code = "PLENED0000059";
    codelength = code.length;
    mask(); 
    check(maskupper, max, code, codelength);
}
function innogy() {
    max = 33;
    code = "PL000001";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function energa() {
    max = 18;
    code = "PL0037";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function tauronGZE() {
    max = 32;
    code = "PLGZEO";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function pgeBIALYSTOK() {
    max = 21;
    code = "PL_ZEB";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function pgeLODZMIASTO() {
    max = 18;
    code = "PLLZED";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function pgeLODZTEREN() {
    max = 18;
    code = "PLZELD";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function pgeRZESZOW() {
    max = 18;
    code = ["480548"];
    codelength = code[0].length;
    mask();
    check(maskupper, max, code, codelength);
}
function pgeSKARZYSKO() {
    max = 21;
    code = "PL_ZEOD";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
function psWARSZAWA() {
    info.innerHTML = "PSG Warszawa: 10 cyfr.";
    max = 10;
    code = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    codelength = code[0].length;
    mask();
    check(maskupper, max, code, codelength);
}
function psgWROCLAW() {
    info.innerHTML = "PSG Wrocław: 10 cyfr, pierwsza 5, 6 lub 9.";
    max = 10;
    code = ["5", "6", "9"];
    codelength = code[0].length;
    mask();
    check(maskupper, max, code, codelength);
}
function psgPOZNAN() {
    max = 10;
    code = ["12", "13", "14", "35"];
    codelength = code[0].length;
    mask();
    check(maskupper, max, code, codelength);
}
function psgTARNOW() {
    max = 9;
    code = ["00"];
    codelength = code[0].length;
    mask();
    check(maskupper, max, code, codelength);
}
function psgZABRZE() {
    max = 12;
    code = "PL003";
    codelength = code.length;
    mask();
    check(maskupper, max, code, codelength);
}
