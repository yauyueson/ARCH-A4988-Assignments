// IMPORT JAVASCRIPT OBJECT

const cards =[
  {
   "Serial No": 1,
   "Name": "CryptoPunk #3100",
   "Collection": "CryptoPunks",
   "Last Price": "ETH 4200",
   "URL": "https:\/\/lh3.googleusercontent.com\/PWDq8erM2dMscd99OntjFRJFfvtvki7uxeYiBUT8e59Kdbn8s34dM59kCkVZ66b687B6i8KXMDspRfnU-JbLcB9Kc23EoSydJNkmgA=w600"
  },
  {
   "Serial No": 2,
   "Name": "CryptoPunk #9998",
   "Collection": "CryptoPunks",
   "Last Price": "ETH 124457.0675",
   "URL": "https:\/\/lh3.googleusercontent.com\/O0TPreCr-fnuhYTUGwHPfp3gZgqwAogRrdmkm60Aiozg9kTuyMeIKc_A0I_yBNIJfoISRuGllSHsatOjxxMWHMMxMOhMbpOJ43wM8A=w600"
  },
  {
   "Serial No": 3,
   "Name": "CryptoPunk #7804",
   "Collection": "CryptoPunks",
   "Last Price": "ETH 4200",
   "URL": "https:\/\/lh3.googleusercontent.com\/mR1utxNugWurPayNNDqc5Dmk4gO7WTpdmlMN-9N3rdrC3hIl-8Z2lEpBtX6D9mPry8uDDrBNYDjNaFHHdFE9HVWL6_htFwL7-KXj=w600"
  },
  {
   "Serial No": 4,
   "Name": "CryptoPunk #6965",
   "Collection": "CryptoPunks",
   "Last Price": "ETH 800",
   "URL": "https:\/\/lh3.googleusercontent.com\/ClS4KdMPO8_25m1yYx-oUJrgeFi_C85dJbfzOPFUJbR_SRCsyoHd4ZapoMvybh4jLWk3BFiMxUSn8CEA_EHrTsXy=w600"
  },
  {
   "Serial No": 5,
   "Name": "CryptoPunk #1482",
   "Collection": "CryptoPunks",
   "Last Price": "ETH 74.5",
   "URL": "https:\/\/lh3.googleusercontent.com\/DVO5lBicI3vBA24X4kM7hBe6ElMsa6waj95fa0ENasYnjfWrIvOx5az3d0YH2Wc_j8sLPB9LCwDA3tnpmItYlOORLY2h5COElQYv9Q=w600"
  },
  {
   "Serial No": 6,
   "Name": "CryptoPunk #5217",
   "Collection": "CryptoPunks",
   "Last Price": "ETH 2250",
   "URL": "https:\/\/lh3.googleusercontent.com\/x-8cxWfSABaoHdqyUvosBDeLr4c_6GO4YU17eHAKcF9-SwOj3FEMqQA_7mOwtg9glv7e6P8WnZuDR2_bPTiUvrai=w600"
  },
  {
   "Serial No": 7,
   "Name": "CryptoPunk #4036",
   "Collection": "CryptoPunks",
   "Last Price": "ETH63",
   "URL": "https:\/\/lh3.googleusercontent.com\/qqNZJwr0AEy5CuImQktvHem_4LBK_ST9IcstUeyj3D1o-fnMEjvdaT5fmpNDtnSkXvYZWA4QxxedRz1yB3CCcFg=w600"
  },
  {
   "Serial No": 8,
   "Name": "CryptoPunk #1321",
   "Collection": "CryptoPunks",
   "Last Price": "ETH15.5",
   "URL": "https:\/\/lh3.googleusercontent.com\/hBEz_urvzf15Y6AlCJPe0YCkt_XVNx5qBrnUsGMwPos57dvgQUC-0TEPdCVmiQ_OMpn3SlkWJacE2ZM35u_xBv2Q7dq5zj1crlP-Rw=w600"
  },
  {
   "Serial No": 9,
   "Name": "CryptoPunk #8334",
   "Collection": "CryptoPunks",
   "Last Price": "ETH91.23",
   "URL": "https:\/\/lh3.googleusercontent.com\/HjTz1VbefDyk0xTAOCmGVQVx66MVRorfj5MKnV5KmMuW--QMkBfjNA1ob7YmC4Pp3p-dDkTkN5n19SyEmMCdwiBl5Zo6Kn4cl6oFbIU=w600"
  },
  {
   "Serial No": 10,
   "Name": "CryptoPunk #7241",
   "Collection": "CryptoPunks",
   "Last Price": "ETH155",
   "URL": "https:\/\/lh3.googleusercontent.com\/2qpG_GbdDyoMP0qyZMYKbf9XAxWqYkCAtQeCSm288RrLbtxNw0NiEiGX3tA-LqpIwErMChcYe-C-tPpPUMD6wD8-lYJ1Jtw04ymXpw=w600"
  },
  {
   "Serial No": 11,
   "Name": "Bored Ape Yacht Club #3368",
   "Collection": "Bored Ape Yacht Club",
   "Last Price": "ETH 29.5",
   "URL": "https:\/\/lh3.googleusercontent.com\/u-2FnHbaJ3U_KCDlmg2McX9Yfo7brsAzOffqihNXCGkHljA89SPPzwdjQiVSWcsvxCoj_ydBcDNCuZvHEekaYekaMEH4XX32k9US=w600"
  },
  {
   "Serial No": 12,
   "Name": "Bored Ape Yacht Club #3650",
   "Collection": "Bored Ape Yacht Club",
   "Last Price": "ETH 69",
   "URL": "https:\/\/lh3.googleusercontent.com\/1up7IvZnXj99OAavLkjdahY4ROjwqOKDvgmPxceirndDuW_YJUOToHGJldUI0LjtFTUFbHfikAMN5nr_uWxi1tcVtjhJN45DAwV_QQ=w600"
  },
  {
   "Serial No": 13,
   "Name": "Bored Ape Yacht Club #9996",
   "Collection": "Bored Ape Yacht Club",
   "Last Price": "ETH 0.39",
   "URL": "https:\/\/lh3.googleusercontent.com\/oOxrPSqIusE3pR1vLRSTQwfn52LnwnsZ_a1nCXked6fwOHrOnhvMBM1uMpshUb8Q4lL-gnlV9YoteT9cXnDgIsz46Zkbo7CImK-yKw=w600"
  },
  {
   "Serial No": 14,
   "Name": "Bored Ape Yacht Club #122",
   "Collection": "Bored Ape Yacht Club",
   "Last Price": "ETH 23",
   "URL": "https:\/\/lh3.googleusercontent.com\/BLM8j8CkydHV2XuYC-ZB_bFiCFFjAbMPYCKr7BUVEPZpGnjfOdTcIwtJR-VKldUodiKn1qR-bypOLla0Ci9I_byu9OC70zjJHjZFWw=w600"
  },
  {
   "Serial No": 15,
   "Name": "Bored Ape Yacht Club #8470",
   "Collection": "Bored Ape Yacht Club",
   "Last Price": "ETH 51",
   "URL": "https:\/\/lh3.googleusercontent.com\/eqXJ2N23ycVCyKLKegfprn7sAdfeLUe4OpZ3i8i36lc07u-0jgiE6U2hM5bkHwRAvEyGhRktz2T1MD4Kbh4ojZn2f2GOKi-TB8Un2Q=w600"
  },
  {
   "Serial No": 16,
   "Name": "Bored Ape Yacht Club #955",
   "Collection": "Bored Ape Yacht Club",
   "Last Price": "ETH 140",
   "URL": "https:\/\/lh3.googleusercontent.com\/7Wg2BOR6Y19roz1O4ZbHucCQQvYiseV47tOYgy8Jp27vlLeUPGXPwrYH1aAQZJ8n88XL2F9McN56RzM8EBQbd-RUsNmHIbx6Swu60Jw=w600"
  },
  {
   "Serial No": 17,
   "Name": "Bored Ape Yacht Club #4303",
   "Collection": "Bored Ape Yacht Club",
   "Last Price": "ETH 95",
   "URL": "https:\/\/lh3.googleusercontent.com\/a0Hq33FbaDYQB5SqSlwyb2AUYOcZYaa2JoadJVoegfG26546E7ARj6BAlG3NX5yOGtNNTw6JcTwiRO8qEmcpNBcSyw8bg9W5eqw90Q=w600"
  },
  {
   "Serial No": 18,
   "Name": "Bored Ape Yacht Club #9419",
   "Collection": "Bored Ape Yacht Club",
   "Last Price": "ETH 73.5",
   "URL": "https:\/\/lh3.googleusercontent.com\/j_0RWoaLct0GOHnW4EGpT9p-u1yIpSkd6R8JWKbg_9AoiP9HMKTZj2GKETacOgIAlL--7irqVFwqTGqDrrgaxJMoaw2-NrR-IvE0=w600"
  },
  {
   "Serial No": 19,
   "Name": "Bored Ape Yacht Club #1455",
   "Collection": "Bored Ape Yacht Club",
   "Last Price": "ETH 47.99",
   "URL": "https:\/\/lh3.googleusercontent.com\/NTqLmufORLnsDfM7PXMy8CKAU9Hi4F1SoSqAVjDntISqNc0TPEi0oEM08MCYgOureqWAADfZt-h3x8NDzrD6Heme1gCqge4KYxrAWw=w600"
  },
  {
   "Serial No": 20,
   "Name": "Bored Ape Yacht Club #2180",
   "Collection": "Bored Ape Yacht Club",
   "Last Price": "ETH 97",
   "URL": "https:\/\/lh3.googleusercontent.com\/M8AUbgTlaOl6gMTDHh0maDiUXiyKFGlOPjspVoPDTs_Cd5Xujttwk7lvi4FFkCJXREND3edb99cERHc4wKpP4tiGMMekH-_Eva_R9A=w600"
  }
 ];

 
  //RENDER CARDS TO PAGE

  const ul = document.querySelector('ul');

  function renderCardsToPage(cards){
    for(i=0; i<cards.length; i++){
        let list_item = document.createElement('li');
        //card name
        let number = document.createElement("h2");
        number.textContent=cards[i]['Name'];
        //card price
        let price = document.createElement("h3");
        price.textContent=cards[i]['Last Price'];
        //card collection
        let collection = document.createElement("h3");
        collection.textContent=cards[i]['Collection'];
        //card image
        let image = document.createElement("img");
        image.setAttribute("src",cards[i]['URL']);
        list_item.appendChild(number);
        list_item.appendChild(price);
        list_item.appendChild(collection);
        list_item.appendChild(image);
        ul.appendChild(list_item);
    }
  }

  renderCardsToPage(cards);