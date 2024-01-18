function hitungLuas() {
    let sisi = document.getElementById("sisiLuas").value;

    // Validasi apakah input adalah angka
    if (!isNaN(sisi) && sisi !== "") {
        let luas = sisi * sisi;
        document.getElementById("hasilLuas").innerHTML = `L = S x S<br> L = ${sisi} x ${sisi}<br> L = ${luas}`;
    } else {
        alert("Masukkan nilai sisi persegi.");
    }
}

function hitungKeliling() {
    let sisi = document.getElementById("sisiKeliling").value;

    // Validasi apakah input adalah angka
    if (!isNaN(sisi) && sisi !== "") {
        let keliling = 4 * sisi;
        document.getElementById("hasilKeliling").innerHTML = `K = 4 x S<br> L = 4 x ${sisi}<br> L = ${keliling}`;
    } else {
        alert("Masukkan nilai sisi persegi.");
    }
}

function resetLuas() {
    document.getElementById("luasForm").reset();
    document.getElementById("hasilLuas").innerHTML = "";
}

function resetKeliling() {
    document.getElementById("kelilingForm").reset();
    document.getElementById("hasilKeliling").innerHTML = "";
}
