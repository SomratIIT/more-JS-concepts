function sayHello() {
    console.log("Hello!");
}
let intervalId = setInterval(sayHello, 1000); // প্রতি ১ সেকেন্ডে "Hello!" দেখাবে।

setTimeout(function () {
    clearInterval(intervalId); // ৫ সেকেন্ড পরে setInterval বন্ধ করে দেবে।
    console.log("Interval cleared!");
}, 5000); // ৫ সেকেন্ড (৫০০০ মিলিসেকেন্ড) পর কাজ বন্ধ হবে।

