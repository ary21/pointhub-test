# Pointhub-test

## Number 1
- running with :
 ```sh
   node index.js
 ```

- references :
  - https://javascript.plainenglish.io/understanding-recursion-by-implementing-the-tower-of-hanoi-in-javascript-a83a54a62f40
  - https://www.digitalocean.com/community/tutorials/tower-of-hanoi
  - https://www.freecodecamp.org/news/analyzing-the-algorithm-to-solve-the-tower-of-hanoi-problem-686685f032e3/

## Number 2
### Problem Statements :
```
John telah membuat aplikasi absensi untuk karyawan harian menggunakan geolocation, dimana setiap karyawan yang membuka web aplikasi tersebut akan muncul alamat yang didapat dari reverse geocoding dari layanan Google Maps
https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse?hl=id

Setiap karyawan rata-rata per hari perlu absen di 10 lokasi berbeda.
Problem dari John adalah layanan Google Maps menerapkan harga $5 per 1000 request lokasi.
1 user x 30 hari x 10 lokasi = 300 request

Kurang lebih biaya yang harus dikeluarkan John per 10 user adalah $15. 
Dan biaya tersebut jauh diatas pendapatan subscription yang hanya $10
Bagaimana cara anda untuk membantu John untuk menyelesaikan problem tersebut
```
### Suggested Solution Options :
- Using batch data like a day, so the step of flow will be :
  - user open app, system collect current coordinate (not show real address)
  - in last of day (or other periode) system call api reverse gmaps with this day data
  - the cons will be address can't show real time

- Try look another provider more cheap instead of google maps, some other option :
  - https://www.here.com/pricing 
  - https://app.flightmap.io/v2/signup

- references :
  - https://stackoverflow.com/questions/52727698/google-reverse-geocode-multiple-coordinates-with-one-api-call
  - https://developers.google.com/maps/documentation/geocoding/geocoding-strategies
  - https://www.shanelynn.ie/batch-geocoding-in-python-with-google-geocoding-api/
  - https://gis.stackexchange.com/questions/15052/avoiding-google-maps-geocode-limit
  - https://www.linkedin.com/pulse/google-maps-api-too-expensive-what-now-sunil-dutt-godiyal/