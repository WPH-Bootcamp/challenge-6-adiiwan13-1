"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
Object.defineProperty(exports, "__esModule", { value: true });
//   1. Import fungsi-fungsi yang sudah dibuat
const bookManager_1 = require("./functions/bookManager");
console.log('Book Management Application - Week 6');
console.log('=====================================');
//   2. Tambahkan beberapa data buku untuk testing
(0, bookManager_1.addBook)({
    title: 'Atomic Habits',
    author: 'James Clear',
    publicationYear: 2018,
});
(0, bookManager_1.addBook)({
    title: 'Clean Code',
    author: 'Robert C. Martin',
    publicationYear: 2008,
});
(0, bookManager_1.addBook)({
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    publicationYear: 1999,
});
//   3. Uji fungsi listBooks untuk melihat semua data
console.log('\nMenampilkan semua buku:');
(0, bookManager_1.listBooks)();
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Cari buku berdasarkan judul
console.log('\nMencari buku dengan kata "Atomic":');
(0, bookManager_1.searchBook)('Atomic');
// Cari buku yang tidak ada
console.log('\nMencari buku dengan kata "Java":');
(0, bookManager_1.searchBook)('Java');
// Mulai pengujian di bawah ini
// Panggil tanpa parameter (opsional)
console.log('\nSearch tanpa parameter:');
(0, bookManager_1.searchBook)();
