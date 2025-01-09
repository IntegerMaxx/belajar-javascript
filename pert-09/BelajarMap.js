const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250],
]);

productMap.has


justPrint(typeof productMap);
// LATIHAN MAP
const mahasiswa = new Map([
    [2210, {
        nama: 'Sunarto utina',
        jurusan: 'Teknik Kemanusiaan',
        kelas: 'C',
        semester: {
            semester1: {
                'Bahasa Inggris' : 89,
                'Matematika teknik ' : 100,
            }
        }
    }], 
    [2211, {
        nama: 'Otong',
        jurusan: 'Teknik Pesawat',
        kelas: 'D',
        semester: {
            semester1: {
                'Bahasa Inggris' : 92,
                'Matematika teknik ' : 34,
            }
        }
    }], 
]);


mahasiswa.set(
    2212, {
        nama: 'Marni',
        jurusan: 'Teknik Kapal Ringan',
        kelas: 'B',
        semester: {
            semester1: {
                'Bahasa Inggris' : 200,
                'Matematika teknik ' : 1000,
            },
            semester2: {
                'Bahasa Inggris' : 200,
                'Matematika teknik ' : 1000,
            },
        }
    },
);

mahasiswa.forEach((data, key) => {
    justPrint(`Nim : ${key}`);
    justPrint(`Nama : ${data.nama}`)
    justPrint(`Jurusan : ${data.jurusan}`)
    justPrint(`Kelas : ${data.kelas}`)

    Object.entries(data.semester).forEach(([semester, grades]) => {
        console.log(`  ${semester.charAt(0).toUpperCase() + semester.slice(1)}:`, grades);
    });

    console.log('-----------------------------');
});




























function justPrint(...args){
    console.log(...args);
}