console.log("App starting...");

// if (1 + 1 == 2) {
//   console.log("Berhasil");
// } else {
//   console.log("Gagal");
// }

// const password = prompt("Masukkan password");

// if (password.length >= 6) {
//   console.log("Password valid");
// } else {
//   console.log("Password minimal 6 karakter");
// }

// const studentRow = [
//   ["Olivia", "Liam", "Naoh"],
//   ["Amelia", "Oliver", "Ava", "Elijah"],
//   ["Shopia", "Mateo", "Isabella", "Lucas"],
// ];

// for (let i = 0; i < studentRow.length; i++) {
//   const students = studentRow[i];

//   console.log(`Student from array key #${i}`);

//   for (let j = 0; j < students.length; j++) {
//     const student = students[j];

//     console.log(`   ${student}`);
//   }
// }

// START TEBAK ANGKA
let maximum;

if (!maximum) {
  maximum = parseInt(prompt("Masukkan nilai maksimal!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guessCount = 1;
let countValue = guessCount == 1 ? "pertama" : `ke-${guessCount}`;

let guess = parseInt(prompt(`Isi tebakan ${countValue} kamu!`));

while (guess != targetNum) {
  if (guess > targetNum) {
    guess = parseInt(prompt(`Bukan ${guess}, terlalu tinggi! Ayo tebak lagi`));
  } else {
    guess = parseInt(prompt(`Bukan ${guess}, terlalu rendah! Ayo tebak lagi`));
  }
}

alert(`Yeay, berhasil! Jawabannya adalah ${guess}`);

// END TEBAK ANGKA
