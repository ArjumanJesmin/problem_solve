const books = [
  { title: "মধ্যরাত্রির শিশু", author: "সালমান রুশদি", year: 1981 },
  { title: "পথের পাঁচালী", author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়", year: 1929 },
  { title: "শেষের কবিতা", author: "রবীন্দ্রনাথ ঠাকুর", year: 1929 },
  { title: "দেবদাস", author: "শরৎচন্দ্র চট্টোপাধ্যায়", year: 1917 },
  { title: "চোখের বালি", author: "রবীন্দ্রনাথ ঠাকুর", year: 1903 },
];

function getBookTitles(booksArray) {
  return booksArray.map((book) => book.title);
}

const bookTitles = getBookTitles(books);
console.log(bookTitles); // Output: ['মধ্যরাত্রির শিশু', 'পথের পাঁচালী', 'শেষের কবিতা', 'দেবদাস', 'চোখের বালি']
