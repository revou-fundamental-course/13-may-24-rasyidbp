// buat biji dibelakang
let clientY = 0;
let clientX = 0;
let total_scroll = 0;
function coordinate(event) {
    clientX = event.clientX;
    clientY = event.clientY + total_scroll;

    const blob = document.getElementById("blob");
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill: "forwards"});
}
document.addEventListener('scroll', (e) => {
    total_scroll = window.scrollY;
})

// buat ngumpet mueheheh 🤫
function showPersegi(){
    let persegi = document.getElementById("🐉");
    let segitiga = document.getElementById("🐱‍🏍");
    persegi.style.display = "block";
    segitiga.style.display = "none";
}

function showSegitiga(){
    let persegi = document.getElementById("🐉");
    let segitiga = document.getElementById("🐱‍🏍");
    persegi.style.display = "none";
    segitiga.style.display = "block";
}

// ngetong ngetongnyo
function kelP() {
    let hasil;
    let sisi = document.getElementById("sisiKelP").value;
    if (sisi === "" || isNaN(sisi) || sisi < 0) {
        alert("Angka tidak valid atuh!");
    } else {
        hasil = 4 * sisi;
        document.getElementById("hasilKelP").innerHTML = "K = 4s<br>K = 4 * " + sisi + "<br>K = "+ hasil;
    }
}

function clearKelP() {
    document.getElementById("sisiKelP").value = "";
    document.getElementById("hasilKelP").innerHTML = "";
}
  
function luP() {
    let hasil;
    let sisi = document.getElementById("sisiLuP").value;
    if (sisi === "" || isNaN(sisi) || sisi < 0) {
        alert("Angka tidak valid atuh!");
    } else {
        hasil = sisi * sisi;
        document.getElementById("hasilLuP").innerHTML = "L = s * s<br>L = " + sisi + " * " + sisi + "<br>L = "+ hasil;
    }
}

function clearLuP() {
    document.getElementById("sisiLuP").value = "";
    document.getElementById("hasilLuP").innerHTML = "";
}

function kelS() {
    let hasil;
    let sisia = document.getElementById("sisiKelSa").value;
    let sisib = document.getElementById("sisiKelSb").value;
    let sisic = document.getElementById("sisiKelSc").value;
    if (sisia === "" || isNaN(sisia) || sisia < 0 || sisib === "" || isNaN(sisib) || sisib < 0 || sisic === "" || isNaN(sisic) || sisic < 0) {
        alert("Angka tidak valid atuh!");
    } else {
        hasil = +sisia + +sisib + +sisic;
        document.getElementById("hasilKelS").innerHTML = "K = a + b + c<br>K = " + sisia + " + " + sisib + " + " + sisic + "<br>K = "+ hasil;
    }
}

function clearKelS() {
    document.getElementById("sisiKelSa").value = "";
    document.getElementById("sisiKelSb").value = "";
    document.getElementById("sisiKelSc").value = "";
    document.getElementById("hasilKelS").innerHTML = "";
}

function luS() {
    let hasil;
    let alas = document.getElementById("alasLuS").value;
    let tinggi = document.getElementById("tinggiLuS").value;
    if (alas === "" || isNaN(alas) || alas < 0 || tinggi === "" || isNaN(tinggi) || tinggi < 0) {
        alert("Angka tidak valid atuh!");
    } else {
        hasil = (1/2) * alas * tinggi;
        document.getElementById("hasilLuS").innerHTML = "L = ½ x alas x tinggi<br>L = 1/2 *" + alas + " * " + tinggi + "<br>L = "+ hasil;
    }
}

function clearLuS() {
    document.getElementById("tinggiLuS").value = "";
    document.getElementById("alasLuS").value = "";
    document.getElementById("hasilLuS").innerHTML = "";
}
