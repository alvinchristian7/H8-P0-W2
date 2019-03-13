var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input) {
    var bulan;
    input[1] += " Elsharawy";
    input[2] = "Provinsi " + input[2];
    console.log(input);
    var tanggal = input[3].split("/");
    switch(Number(tanggal[1])) {
        case 1:   { bulan = "Januari"; break; }
        case 2:   { bulan = "Februari"; break; }
        case 3:   { bulan = "Maret"; break; }
        case 4:   { bulan = "April"; break; }
        case 5:   { bulan = "Mei"; break; }
        case 6:   { bulan = "Juni"; break; }
        case 7:   { bulan = "Juli"; break; }
        case 8:   { bulan = "Agustus"; break; }
        case 9:   { bulan = "September"; break; }
        case 10:   { bulan = "Oktober"; break; }
        case 11:   { bulan = "November"; break; }
        case 12:   { bulan = "Desember"; break; }
    }
    console.log(bulan);
    console.log(tanggal.sort(function(value1, value2) { return Number(value1) < Number(value2) }));
    console.log(input[3] = tanggal.join("-"));
    console.log(input[1].slice(0, 14));
}
dataHandling2(input);