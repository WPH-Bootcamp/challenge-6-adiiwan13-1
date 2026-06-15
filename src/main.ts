// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat

//   1. Import fungsi-fungsi yang sudah dibuat
import { addBook, listBooks, searchBook } from './functions/bookManager';

console.log('Book Management Application - Week 6');
console.log('=====================================');

//   2. Tambahkan beberapa data buku untuk testing
addBook({
  title: 'Atomic Habits',
  author: 'James Clear',
  publicationYear: 2018,
});
addBook({
  title: 'Clean Code',
  author: 'Robert C. Martin',
  publicationYear: 2008,
});

addBook({
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  publicationYear: 1999,
});

//   3. Uji fungsi listBooks untuk melihat semua data
console.log('\nMenampilkan semua buku:');
listBooks();

//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Cari buku berdasarkan judul
console.log('\nMencari buku dengan kata "Atomic":');
searchBook('Atomic');

// Cari buku yang tidak ada
console.log('\nMencari buku dengan kata "Java":');
searchBook('Java');

// Mulai pengujian di bawah ini

// Panggil tanpa parameter (opsional)
console.log('\nSearch tanpa parameter:');
searchBook();
