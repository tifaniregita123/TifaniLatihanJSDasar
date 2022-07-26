/*object literal

var siswa = {
    nama : prompt('masukkan nama siswa : '),
    absen : '24',
    email : 'tifaniregita123gmail.com',
    jurusan : 'Rekayasa Perangkat Lunak'
}

//function declaration
function objectSiswa(nama, absen, email, jurusan) {
    var murid = {};
    murid.nama = nama;
    murid.absen = absen;
    murid.email = email;
    murid.jurusan = jurusan;
    return murid;
}
var murid1 = objectSiswa(prompt('Nama siswa : '), '34', 'tifaniregita123@mail.com', 'RPL' );

//constructor
function Murid1(nama, absen, email, jurusan) {
    this. nama = nama;
    this.absen = absen;
    this.email = email;
    this.jurusan = jurusan;
}
var siswa2 = new Murid1('Tifani', '28', 'tifaniregita123@gmail.com', 'rpl');



let siswa = {
    nama: 'Tifani',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

let siswa2 = {
    nama: 'Wendi',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

//declaration

const methodSiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, energi kamu bertambah jadi ${this.energi}`);
    },

    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, sisa energi kamu ${this.energi}`);
    },

    tidur: function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Selamat tidur! Energi kamu bertambah menjadi ${this.energi}`);
    }
};

function Siswa (nama, energi) {
    let siswa = Object.create(methodSiswa);
    siswa.nama = nama;
    siswa.energi = energi;

    return siswa;
}

let tifani = new Siswa('Tifani', 10);
let wendi = new Siswa('Wendi', 10);

*/

///prototype
function Siswa (nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Siswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, energi kamu bertambah setelah makan menjadi ${this.energi}`;
}
Siswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, energi kamu berkurang setelah main menjadi ${this.energi}`;
}
Siswa.prototype.tidur = function(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, energi kamu bertambah setelah tidur menjadi ${this.energi}`;
}

let tifani = new Siswa('Tifani', 10);
let wendi = new Siswa('Wendi', 10);