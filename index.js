// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
function listBelanjaan (arrayDataBelanja) {
  const arrListingBelanjaan = [];
  for (let index = 0; index < arrayDataBelanja.length; index++) {
  arrListingBelanjaan.push("- "+arrayDataBelanja[index].nama + " X " +arrayDataBelanja[index].kuantitas);
      }

    return arrListingBelanjaan;
  
} 

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
function totalBelanjaan (arrayDataBelanja){
const jumlahBelanja = 0;
for (let index = 0; index < arrayDataBelanja.length; index++) {
  jumlahBelanja + (arrayDataBelanja[index].harga * arrayDataBelanja[index].kuantitas);
      }
      return jumlahBelanja;
}




// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
