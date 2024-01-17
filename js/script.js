function hitungLuas() {
    let sisi = document.getElementById("sisiLuas").value;
    let luas = sisi * sisi;
    document.getElementById("hasilLuas").innerHTML = `L = S x S<br> L = ${sisi} x ${sisi}<br> L = ${luas}`;
}

function hitungKeliling() {
    let sisi = document.getElementById("sisiKeliling").value;
    let keliling = 4 * sisi;
    document.getElementById("hasilKeliling").innerHTML = `K = 4 x S<br> L = 4 x ${sisi}<br> L = ${keliling}`;
}


// document.getElementById('persegi-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const sisi = parseFloat(document.getElementById('sisi').value);
//     const luas = sisi * sisi;
//     document.getElementById('result').textContent = `Luas persegi dengan sisi ${sisi} adalah ${luas}.`;
// });

// document.getElementById('persegi-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const sisi = parseFloat(document.getElementById('sisi').value);
//     const luas = sisi * sisi;
//     document.getElementById('result').textContent = `Luas persegi dengan sisi ${sisi} adalah ${luas}.`;
// });