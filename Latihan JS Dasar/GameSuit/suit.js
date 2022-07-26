
var mainUlang = true;;
while ( mainUlang ) {
    var pilihanUser = prompt('pilih : gajah, semut, orang'),
        comp = Math.random(),
        hasil = '';

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if ( comp <= 0.34 && comp < 0.67 ) {
        comp = 'orang';
    } else {
        comp = 'semut'
    }

    if ( pilihanUser == comp ) {
        alert('Hasilnya seri');
    } else if ( pilihanUser == 'gajah') {
        hasil = ( comp === 'orang' ) ? 'SELAMAT ANDA MENANG!' : 'ANDA KURANG BERUNTUNG.';
    } else if ( pilihanUser == 'orang' ) {
        hasil = ( comp === 'semut' ) ? 'SELAMAT ANDA MENANG!' : 'ANDA KURANG BERUNTUNG.';
    } else if ( pilihanUser == 'semut' ) {
        hasil = ( comp === 'gajah' ) ? 'SELAMAT ANDA MENANG!' : 'ANDA KURANG BERUNTUNG.';
    } else {
        hasil = 'pilihan anda salah';
    }

    alert('Kamu memilih ' + pilihanUser + ' dan komputer memilih ' + comp + '\n \n'  + hasil);

    mainUlang = confirm('Mau main lagi?');
}

confirm('Terimakasih sudah bermain!');