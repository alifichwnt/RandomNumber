// Fungsi untuk menghasilkan bilangan bulat acak di antara min (inklusif) dan max (inklusif).
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk mengubah bilangan dalam sel-sel tabel menjadi bilangan bulat acak di antara 1 dan 9.
function changeNumber(cell) {
    cell.textContent = getRandomInt(1, 9); // Mengubah isi teks sel dengan bilangan acak antara 1 dan 9
    playClickSound(); // Memanggil fungsi untuk memainkan suara ketika sel diubah
}

// Fungsi untuk mengubah bentuk tabel berdasarkan pilihan format yang dipilih
function changeTableFormat() {
    var table = document.getElementById("numberTable");
    var selectedFormat = document.getElementById("tableFormat").value;

    // Menghapus seluruh baris dan kolom saat ini
    table.innerHTML = '';

    // Mendapatkan jumlah baris dan kolom berdasarkan format yang dipilih
    var numRows = parseInt(selectedFormat.charAt(0));
    var numCols = parseInt(selectedFormat.charAt(2));

    // Menambahkan baris baru sesuai dengan jumlah baris yang dipilih
    for (var i = 0; i < numRows; i++) {
        var row = table.insertRow(i);
        // Menambahkan sel ke setiap baris sesuai dengan jumlah kolom yang dipilih
        for (var j = 0; j < numCols; j++) {
            var cell = row.insertCell(j);
            cell.textContent = "0"; // Mengisi sel dengan nilai awal "0"
            cell.onclick = function() { changeNumber(this); }; // Menambahkan event listener untuk setiap sel
        }
    }
}

// Panggil changeTableFormat saat halaman dimuat pertama kali
window.onload = changeTableFormat;

// Fungsi untuk menghitung total dari semua bilangan dalam tabel dan menampilkan hasilnya menggunakan alert.
function calculateTotal() {
    var table = document.getElementById("numberTable"); // Mengambil elemen tabel berdasarkan id
    var total = 0; // Variabel untuk menyimpan total

    // Melakukan iterasi melalui semua baris dalam tabel
    for (var i = 0; i < table.rows.length; i++) {
        // Melakukan iterasi melalui semua sel dalam setiap baris
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            total += parseInt(table.rows[i].cells[j].textContent); // Menambahkan nilai dari setiap sel ke total
        }
    }

    alert("Jumlah seluruh bilangan dalam tabel adalah " + total + "."); // Menampilkan total menggunakan alert
}

// Fungsi untuk menghitung rata-rata dari semua bilangan dalam tabel dan menampilkan hasilnya menggunakan alert.
function calculateAverage() {
    var table = document.getElementById("numberTable"); // Mengambil elemen tabel berdasarkan id
    var total = 0; // Variabel untuk menyimpan total
    var count = 0; // Variabel untuk menyimpan jumlah sel

    // Melakukan iterasi melalui semua baris dalam tabel
    for (var i = 0; i < table.rows.length; i++) {
        // Melakukan iterasi melalui semua sel dalam setiap baris
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            total += parseInt(table.rows[i].cells[j].textContent); // Menambahkan nilai dari setiap sel ke total
            count++; // Menghitung jumlah sel
        }
    }

    var average = total / count; // Menghitung rata-rata

    alert("Rata-rata seluruh bilangan dalam tabel adalah " + average.toFixed(2) + "."); // Menampilkan rata-rata menggunakan alert
}

// Fungsi untuk mencari nilai maksimum dari semua bilangan dalam tabel dan menampilkan hasilnya menggunakan alert.
function findMax() {
    var table = document.getElementById("numberTable"); // Mengambil elemen tabel berdasarkan id
    var max = Number.MIN_SAFE_INTEGER; // Variabel untuk menyimpan nilai maksimum

    // Melakukan iterasi melalui semua baris dalam tabel
    for (var i = 0; i < table.rows.length; i++) {
        // Melakukan iterasi melalui semua sel dalam setiap baris
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var cellValue = parseInt(table.rows[i].cells[j].textContent); // Mengambil nilai dari setiap sel
            if (cellValue > max) {
                max = cellValue; // Memperbarui nilai maksimum jika ditemukan nilai yang lebih besar
            }
        }
    }

    alert("Nilai maksimum dalam tabel adalah " + max + "."); // Menampilkan nilai maksimum menggunakan alert
}

// Fungsi untuk mencari nilai minimum dari semua bilangan dalam tabel dan menampilkan hasilnya menggunakan alert.
function findMin() {
    var table = document.getElementById("numberTable"); // Mengambil elemen tabel berdasarkan id
    var min = Number.MAX_SAFE_INTEGER; // Variabel untuk menyimpan nilai minimum

    // Melakukan iterasi melalui semua baris dalam tabel
    for (var i = 0; i < table.rows.length; i++) {
        // Melakukan iterasi melalui semua sel dalam setiap baris
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var cellValue = parseInt(table.rows[i].cells[j].textContent); // Mengambil nilai dari setiap sel
            if (cellValue < min) {
                min = cellValue; // Memperbarui nilai minimum jika ditemukan nilai yang lebih kecil
            }
        }
    }

    alert("Nilai minimum dalam tabel adalah " + min + "."); // Menampilkan nilai minimum menggunakan alert
}

// Fungsi untuk mereset tabel, mengatur semua sel menjadi 0
function resetTable() {
    var table = document.getElementById("numberTable"); // Mengambil elemen tabel berdasarkan id

    // Melakukan iterasi melalui semua baris dan sel dalam tabel
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].textContent = "0"; // Mengatur isi teks setiap sel menjadi "0"
        }
    }
}

// Fungsi untuk memainkan suara saat tombol di klik.
function playClickSound() {
    var audio = document.getElementById("clickSound"); // Mengambil elemen audio berdasarkan id
    audio.play(); // Memainkan audio
}

// Mengambil parameter nama dari URL
const params = new URLSearchParams(window.location.search);
const nama = params.get('nama');

// Menampilkan pesan sapaan berdasarkan nama yang diterima dari URL, jika ada.
if (nama) {
    console.log(`Nama yang diterima dari URL: ${nama}`); // Menampilkan nama yang diterima dari URL di konsol
    document.getElementById('greeting').textContent = `Hi, ${nama}!`; // Menampilkan pesan sapaan dengan nama
} else {
    console.log("Nama tidak ditemukan dalam URL atau kosong."); // Menampilkan pesan jika nama tidak ada dalam URL atau kosong
}