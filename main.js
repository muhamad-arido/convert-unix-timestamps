const formatTime = (unixTimestamps) => {
  return new Intl.DateTimeFormat("id-ID", {
    timeZone: "Asia/Jakarta",
    dateStyle: "full",
    timeStyle: "short",
  }).format(unixTimestamps);
};

//UNIX-Timestamps
const waktu = Date.now();

console.log(formatTime(waktu)); // => Selasa, 08 Oktober 2024 pukul 22.17
