let OhmZakon_R = document.getElementById("otporOHM");
let OhmZakon_U = document.getElementById("naponOHM");
let OhmZakon_rez = document.getElementById("struja_ohmZ");

let DjeliloNapona_R1 = document.getElementById("DNotpor1");
let DjeliloNapona_R2 = document.getElementById("DNotpor2");
let DjeliloNapona_Uul = document.getElementById("DNul_napon");
let DjeliloNapona_rez = document.getElementById("DN_Uiz");

let SerijskoSpajanjeOtpornika_R1 = document.getElementById("SSOotpor1");
let SerijskoSpajanjeOtpornika_R2 = document.getElementById("SSOotpor2");
let SerijskoSpajanjeOtpornika_R3 = document.getElementById("SSOotpor3");
let SerijskoSpajanjeOtpornika_rez = document.getElementById("SSO_Ruk");

let ParalelnoSpajanjeOtpornika_R1 = document.getElementById("PSOotpor1");
let ParalelnoSpajanjeOtpornika_R2 = document.getElementById("PSOotpor2");
let ParalelnoSpajanjeOtpornika_R3 = document.getElementById("PSOotpor3");
let ParalelnoSpajanjeOtpornika_rez = document.getElementById("PSO_Ruk");

let SerijskoSpajanjeKondenzatora_C1 = document.getElementById("SSKkapacitet1");
let SerijskoSpajanjeKondenzatora_C2 = document.getElementById("SSKkapacitet2");
let SerijskoSpajanjeKondenzatora_C3 = document.getElementById("SSKkapacitet3");
let SerijskoSpajanjeKondenzatora_rez = document.getElementById("SSK_Cuk");

let ParalelnoSpajanjeKondenzatora_C1 = document.getElementById("PSKkapacitet1");
let ParalelnoSpajanjeKondenzatora_C2 = document.getElementById("PSKkapacitet2");
let ParalelnoSpajanjeKondenzatora_C3 = document.getElementById("PSKkapacitet3");
let ParalelnoSpajanjeKondenzatora_rez = document.getElementById("PSK_Cuk");

let SerijskoSpajanjeZavojnica_L1 = document.getElementById("SSZinduktivitet1");
let SerijskoSpajanjeZavojnica_L2 = document.getElementById("SSZinduktivitet2");
let SerijskoSpajanjeZavojnica_L3 = document.getElementById("SSZinduktivitet3");
let SerijskoSpajanjeZavojnica_rez = document.getElementById("SSZ_Luk");

let ParalelnoSpajanjeZavojnica_L1 = document.getElementById("PSZinduktivitet1");
let ParalelnoSpajanjeZavojnica_L2 = document.getElementById("PSZinduktivitet2");
let ParalelnoSpajanjeZavojnica_L3 = document.getElementById("PSZinduktivitet3");
let ParalelnoSpajanjeZavojnica_rez = document.getElementById("PSZ_Luk");

let InduktivitetZracnogSvitka_N = document.getElementById("brZavoja");
let InduktivitetZracnogSvitka_s = document.getElementById("povrsinaPresjeka");
let InduktivitetZracnogSvitka_l = document.getElementById("duljinaZavojnice");
let InduktivitetZracnogSvitka_rez = document.getElementById("RIZS_L");

let induktivniOtpor_w = document.getElementById("RIOw");
let induktivniOtpor_L = document.getElementById("RIO_L");
let induktivniOtpor_rez = document.getElementById("RIO_Xl");

let kapacitivniOtpor_w = document.getElementById("RKOw");
let kapacitivniOtpor_C = document.getElementById("RKO_C");
let kapacitivniOtpor_rez = document.getElementById("RKO_Xc");

function OhmovZakon() {
    let R = parseFloat(OhmZakon_R.value);
    let U = parseFloat(OhmZakon_U.value);
    let I = U / R;
    OhmZakon_rez.innerHTML = "I = " + I + " A";
}

function DjeliloNapona() {
    let R1 = parseFloat(DjeliloNapona_R1.value);
    let R2 = parseFloat(DjeliloNapona_R2.value);
    let Uul = parseFloat(DjeliloNapona_Uul.value);
    let Uiz = Uul * (R2 / (R1 + R2));
    DjeliloNapona_rez.innerHTML = "Uiz = " + Uiz + " V";
}

function SerijskoSpajanjeOtpornika() {
    let R1 = parseFloat(SerijskoSpajanjeOtpornika_R1.value);
    let R2 = parseFloat(SerijskoSpajanjeOtpornika_R2.value);
    let R3 = parseFloat(SerijskoSpajanjeOtpornika_R3.value);
    let Ruk = R1 + R2 + R3;
    SerijskoSpajanjeOtpornika_rez.innerHTML = "Ruk = " + Ruk + " Ω";
}

function ParalelnoSpajanjeOtpornika() {
    let R1 = parseFloat(ParalelnoSpajanjeOtpornika_R1.value);
    let R2 = parseFloat(ParalelnoSpajanjeOtpornika_R2.value);
    let R3 = parseFloat(ParalelnoSpajanjeOtpornika_R3.value);
    let Ruk = 1 / ((1 / R1) + (1 / R2) + (1 / R3));
    ParalelnoSpajanjeOtpornika_rez.innerHTML = "Ruk = " + Ruk + " Ω";
}

function SerijskoSpajanjeKondenzatora() {
    let C1 = parseFloat(SerijskoSpajanjeKondenzatora_C1.value);
    let C2 = parseFloat(SerijskoSpajanjeKondenzatora_C2.value);
    let C3 = parseFloat(SerijskoSpajanjeKondenzatora_C3.value);
    let Cuk = 1 / ((1 / C1) + (1 / C2) + (1 / C3));
    SerijskoSpajanjeKondenzatora_rez.innerHTML = "Cuk = " + Cuk + " F";
}

function ParalelnoSpajanjeKondenzatora() {
    let C1 = parseFloat(ParalelnoSpajanjeKondenzatora_C1.value);
    let C2 = parseFloat(ParalelnoSpajanjeKondenzatora_C2.value);
    let C3 = parseFloat(ParalelnoSpajanjeKondenzatora_C3.value);
    let Cuk = C1 + C2 + C3;
    ParalelnoSpajanjeKondenzatora_rez.innerHTML = "Cuk = " + Cuk + " F";
}

function SerijskoSpajanjeZavojnica() {
    let L1 = parseFloat(SerijskoSpajanjeZavojnica_L1.value);
    let L2 = parseFloat(SerijskoSpajanjeZavojnica_L2.value);
    let L3 = parseFloat(SerijskoSpajanjeZavojnica_L3.value);
    let Luk = L1 + L2 + L3;
    SerijskoSpajanjeZavojnica_rez.innerHTML = "Luk = " + Luk + " H";
}

function ParalelnoSpajanjeZavojnica() {
    let L1 = parseFloat(ParalelnoSpajanjeZavojnica_L1.value);
    let L2 = parseFloat(ParalelnoSpajanjeZavojnica_L2.value);
    let L3 = parseFloat(ParalelnoSpajanjeZavojnica_L3.value);
    let Luk = 1 / ((1 / L1) + (1 / L2) + (1 / L3));
    ParalelnoSpajanjeZavojnica_rez.innerHTML = "Luk = " + Luk + " H";
}

function RačunanjeInduktivitetaZračnogSvitka() {
    let N = parseFloat(InduktivitetZracnogSvitka_N.value);
    let s = parseFloat(InduktivitetZracnogSvitka_s.value);
    let l = parseFloat(InduktivitetZracnogSvitka_l.value);
    let L = 4 * Math.PI * 0.000001 * ((Math.pow(N, 2) * s) / l);
    InduktivitetZracnogSvitka_rez.innerHTML = "L = " + L + " H";
}

function RačunanjeInduktivnogOtpora() {
    let w = parseFloat(induktivniOtpor_w.value);
    let L = parseFloat(induktivniOtpor_L.value);
    let Xl = w * L;
    induktivniOtpor_rez.innerHTML = "Xl = " + Xl + " Ω";
}

function RačunanjeKapacitivnogOtpora() {
    let w = parseFloat(kapacitivniOtpor_w.value);
    let C = parseFloat(kapacitivniOtpor_C.value);
    let Xc = 1 / (w * C);
    kapacitivniOtpor_rez.innerHTML = "Xc = " + Xc + " Ω";
}

function Clear(divId) {
    document.getElementById(divId).innerHTML = "";
}