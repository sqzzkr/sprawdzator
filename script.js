output = document.getElementById("output");
characters = document.getElementById("characters");
timer = null;

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
    output.innerHTML = `Numer za długi, liczba znaków ${maskvalue.length}, wymagana ${max}.`;
}
function tooshort() {
    output.style.color = "red";
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

function check(maskupper, max, code, codelength) {
    cancelcleaner();
    if (maskupper == "") {
        entercode();
    }
    else if (maskupper.length == max && maskupper.substring(0, codelength) == code && !isNaN(maskupper.substring(codelength, max))) {
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
function check_numbers(maskvalue, max, code, codelength) {
    cancelcleaner();
    if (maskvalue == "") {
        entercode();
    }
    else if (maskvalue.length == max && code.indexOf(maskvalue.substring(0, codelength)) > -1 && !isNaN(maskvalue.substring(0, max))) {
        ok();
        copytoclipboard();
    }
    else {
        if (isNaN(maskvalue.substring(0, max))) {
            onlynumbers();
        }
        if (maskvalue.substring(0, codelength) != code) {
            error();
        }
        if (maskvalue.length < max) {
            tooshort();
        }
        if (maskvalue.length > max) {
            toolong();
        }
    }
    timer = setTimeout(timercleaner, 25000);
}
function enea() {
    mask();
    max = 32;
    code = "PLENED0000059";
    codelength = code.length;
    check(maskupper, max, code, codelength);
}
function innogy() {
    mask();
    max = 33;
    code = "PL000001";
    codelength = code.length;
    check(maskupper, max, code, codelength);
}
function energa() {
    mask();
    max = 18;
    code = "PL0037";
    codelength = code.length;
    check(maskupper, max, code, codelength);
}
function tauronGZE() {
    mask();
    max = 32;
    code = "PLGZEO";
    codelength = code.length;
    check(maskupper, max, code, codelength);
}
function pgeBIALYSTOK() {
    mask();
    max = 21;
    code = "PL_ZEB";
    codelength = code.length;
    check(maskupper, max, code, codelength);
}
function pgeLODZMIASTO() {
    mask();
    max = 18;
    code = "PLLZED";
    codelength = code.length;
    check(maskupper, max, code, codelength);
}
function pgeLODZTEREN() {
    mask();
    max = 18;
    code = "PLZELD";
    codelength = code.length;
    check(maskupper, max, code, codelength);
}
function pgeRZESZOW() {
    mask();
    max = 18;
    code = ["480548"];
    codelength = code[0].length;
    check_numbers(maskvalue, max, code, codelength);
}
function pgeSKARZYSKO() {
    mask();
    max = 21;
    code = "PL_ZEOD";
    codelength = code.length;
    check(maskupper, max, code, codelength);
}
function psWARSZAWA() {
    mask();
    max = 10;
    code = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    codelength = code[0].length;
    check_numbers(maskvalue, max, code, codelength);
}
function psgWROCLAW() {
    mask();
    max = 10;
    code = ["5", "6", "9"];
    codelength = code[0].length;
    check_numbers(maskvalue, max, code, codelength);
}
function psgPOZNAN() {
    mask();
    max = 10;
    code = ["12", "13", "14", "35"]
    codelength = code[0].length;
    check_numbers(maskvalue, max, code, codelength);
}
function psgTARNOW() {
    mask();
    max = 9;
    code = ["00"];
    codelength = code[0].length;
    check_numbers(maskvalue, max, code, codelength);
}
function psgZABRZE() {
    mask();
    max = 12;
    code = "PL003";
    codelength = code.length;
    check(maskupper, max, code, codelength);
}