<?php
class Kalkulator {
    private $hasil = 0;

    public function tambah($angka) {
        $this->hasil += $angka;
        return $this; // Memungkinkan method chaining
    }

    public function kurang($angka) {
        $this->hasil -= $angka;
        return $this; // Memungkinkan method chaining
    }

    public function hasil($callback = null) {
        if ($callback) {
            return $callback($this->hasil); // Menjalankan callback dengan hasil sebagai parameter
        }
        return $this->hasil; // Default: mengembalikan hasil
    }
}

// Menggunakan method chaining dengan callback
$kalkulator = new Kalkulator();
$kalkulator->tambah(10)->kurang(3)->hasil(function($res) {
    echo "Hasil: " . $res; // Output: Hasil: 7
});


/*
PENJELASAN:
jadi saat kita menjalankan function dibawah ini

function($res) {
    echo "Hasil: " . $res;
}

dia akan secara otomatis menjadikan "$callback" pada "$callback($this->hasil)"
sebagai nama identifiernya dari function "$callback" dan parameter "$res" akan
secara otomatis mengambil nilai hasil, karena parameternya berisi "$this->hasil".
Kemudian dia akan menampilkannya "echo "Hasil: " . $res;"


*/