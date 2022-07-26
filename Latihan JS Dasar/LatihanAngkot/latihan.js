
var jmlAngkot = prompt('Masukkan jumlah angkot : '),
    nomorAngkot = 1,
    angkotLibur = prompt('Angkot yang tidak beroperasi : '),
    angkotBeroperasi = jmlAngkot - angkotLibur,
    angkotLembur = prompt('Nomor angkot yang lembur : ');
  
/* ini untuk penggunaan while & for
while(nomorAngkot <= angkotBeroperasi ) {
    console.log('angkot No. ' + nomorAngkot + ' sedang beroperasi.' );
    nomorAngkot++;
}

for(nomorAngkot = angkotBeroperasi + 1; nomorAngkot <= jmlAngkot; nomorAngkot++) {
    console.log('angkot No. ' + nomorAngkot + ' tidak beroperasi. ');
}  

*/

/* penerapan for if else */
for( nomorAngkot; nomorAngkot <= jmlAngkot; nomorAngkot++) {
    if( nomorAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + nomorAngkot + ' sedang beroperasi.');
    } else {
        console.log('Angkot No. ' + nomorAngkot + ' tidak beroperasi');
    }
}



/* penerapan else if
for( nomorAngkot; nomorAngkot <= jmlAngkot; nomorAngkot++) {
    if( nomorAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + nomorAngkot + ' sedang beroperasi.');
    } else if( nomorAngkot == angkotLembur || nomorAngkot == 10 ) {
        console.log('Angkot No. ' + nomorAngkot + ' sedang melembur.');
    } else {
        console.log('Angkot No. ' + nomorAngkot + ' tidak beroperasi');
    }
}

*/

// NOTES HAPUS DULU TANDA COMMENT SEBELUM DI COMPILE 

