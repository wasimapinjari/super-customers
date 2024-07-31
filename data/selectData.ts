const selectData = [
  {
    city: "Delhi",
    state: "Delhi",
  },
  {
    city: "Mumbai",
    state: "Maharashtra",
  },
  {
    city: "Kolkata",
    state: "West Bengal",
  },
  {
    city: "Bangalore",
    state: "Karnataka",
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
  },
  {
    city: "Hyderabad",
    state: "Telangana",
  },
  {
    city: "Pune",
    state: "Maharashtra",
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
  },
  {
    city: "Sūrat",
    state: "Gujarat",
  },
  {
    city: "Lucknow",
    state: "Uttar Pradesh",
  },
  {
    city: "Jaipur",
    state: "Rajasthan",
  },
  {
    city: "Kanpur",
    state: "Uttar Pradesh",
  },
  {
    city: "Mirzapur",
    state: "Uttar Pradesh",
  },
  {
    city: "Nagpur",
    state: "Maharashtra",
  },
  {
    city: "Ghaziabad",
    state: "Uttar Pradesh",
  },
  {
    city: "Supaul",
    state: "Bihar",
  },
  {
    city: "Vadodara",
    state: "Gujarat",
  },
  {
    city: "Rajkot",
    state: "Gujarat",
  },
  {
    city: "Vishakhapatnam",
    state: "Andhra Pradesh",
  },
  {
    city: "Indore",
    state: "Madhya Pradesh",
  },
  {
    city: "Thane",
    state: "Maharashtra",
  },
  {
    city: "Bhopal",
    state: "Madhya Pradesh",
  },
  {
    city: "Pimpri-Chinchwad",
    state: "Maharashtra",
  },
  {
    city: "Patna",
    state: "Bihar",
  },
  {
    city: "Bilaspur",
    state: "Chhattisgarh",
  },
  {
    city: "Ludhiana",
    state: "Punjab",
  },
  {
    city: "Agra",
    state: "Uttar Pradesh",
  },
  {
    city: "Madurai",
    state: "Tamil Nadu",
  },
  {
    city: "Jamshedpur",
    state: "Jharkhand",
  },
  {
    city: "Prayagraj",
    state: "Uttar Pradesh",
  },
  {
    city: "Nasik",
    state: "Maharashtra",
  },
  {
    city: "Faridabad",
    state: "Haryana",
  },
  {
    city: "Meerut",
    state: "Uttar Pradesh",
  },
  {
    city: "Jabalpur",
    state: "Madhya Pradesh",
  },
  {
    city: "Kalyan",
    state: "Maharashtra",
  },
  {
    city: "Vasai-Virar",
    state: "Maharashtra",
  },
  {
    city: "Najafgarh",
    state: "Delhi",
  },
  {
    city: "Varanasi",
    state: "Uttar Pradesh",
  },
  {
    city: "Srinagar",
    state: "Jammu and Kashmir",
  },
  {
    city: "Aurangabad",
    state: "Maharashtra",
  },
  {
    city: "Dhanbad",
    state: "Jharkhand",
  },
  {
    city: "Amritsar",
    state: "Punjab",
  },
  {
    city: "Aligarh",
    state: "Uttar Pradesh",
  },
  {
    city: "Guwahati",
    state: "Assam",
  },
  {
    city: "Haora",
    state: "West Bengal",
  },
  {
    city: "Ranchi",
    state: "Jharkhand",
  },
  {
    city: "Gwalior",
    state: "Madhya Pradesh",
  },
  {
    city: "Chandigarh",
    state: "Chandigarh",
  },
  {
    city: "Haldwani",
    state: "Uttarakhand",
  },
  {
    city: "Vijayavada",
    state: "Andhra Pradesh",
  },
  {
    city: "Jodhpur",
    state: "Rajasthan",
  },
  {
    city: "Raipur",
    state: "Chhattisgarh",
  },
  {
    city: "Kota",
    state: "Rajasthan",
  },
  {
    city: "Bhayandar",
    state: "Maharashtra",
  },
  {
    city: "Loni",
    state: "Uttar Pradesh",
  },
  {
    city: "Ambattūr",
    state: "Tamil Nadu",
  },
  {
    city: "Salt Lake City",
    state: "West Bengal",
  },
  {
    city: "Bhatpara",
    state: "West Bengal",
  },
  {
    city: "Kūkatpalli",
    state: "Telangana",
  },
  {
    city: "Dasarhalli",
    state: "Karnataka",
  },
  {
    city: "Muzaffarpur",
    state: "Bihar",
  },
  {
    city: "Oulgaret",
    state: "Tamil Nadu",
  },
  {
    city: "New Delhi",
    state: "Delhi",
  },
  {
    city: "Tiruvottiyūr",
    state: "Tamil Nadu",
  },
  {
    city: "Puducherry",
    state: "Puducherry",
  },
  {
    city: "Byatarayanpur",
    state: "Karnataka",
  },
  {
    city: "Pallavaram",
    state: "Tamil Nadu",
  },
  {
    city: "Secunderabad",
    state: "Telangana",
  },
  {
    city: "Shimla",
    state: "Himachal Pradesh",
  },
  {
    city: "Puri",
    state: "Odisha",
  },
  {
    city: "Murtazabad",
    state: "Uttar Pradesh",
  },
  {
    city: "Shrirampur",
    state: "West Bengal",
  },
  {
    city: "Chandannagar",
    state: "West Bengal",
  },
  {
    city: "Sultanpur Mazra",
    state: "Delhi",
  },
  {
    city: "Krishnanagar",
    state: "West Bengal",
  },
  {
    city: "Barakpur",
    state: "West Bengal",
  },
  {
    city: "Bhalswa Jahangirpur",
    state: "Delhi",
  },
  {
    city: "Nangloi Jat",
    state: "Delhi",
  },
  {
    city: "Balasore",
    state: "Odisha",
  },
  {
    city: "Dalūpura",
    state: "Delhi",
  },
  {
    city: "Yelahanka",
    state: "Karnataka",
  },
  {
    city: "Titagarh",
    state: "West Bengal",
  },
  {
    city: "Dam Dam",
    state: "West Bengal",
  },
  {
    city: "Bansbaria",
    state: "West Bengal",
  },
  {
    city: "Madhavaram",
    state: "Tamil Nadu",
  },
  {
    city: "Abbigeri",
    state: "Karnataka",
  },
  {
    city: "Baj Baj",
    state: "West Bengal",
  },
  {
    city: "Garhi",
    state: "Uttar Pradesh",
  },
  {
    city: "Mirpeta",
    state: "Telangana",
  },
  {
    city: "Nerkunram",
    state: "Tamil Nadu",
  },
  {
    city: "Kendraparha",
    state: "Odisha",
  },
  {
    city: "Sijua",
    state: "Jharkhand",
  },
  {
    city: "Manali",
    state: "Tamil Nadu",
  },
  {
    city: "Kankuria",
    state: "West Bengal",
  },
  {
    city: "Chakapara",
    state: "West Bengal",
  },
  {
    city: "Pappakurichchi",
    state: "Tamil Nadu",
  },
  {
    city: "Herohalli",
    state: "Karnataka",
  },
  {
    city: "Madipakkam",
    state: "Tamil Nadu",
  },
  {
    city: "Sabalpur",
    state: "Bihar",
  },
  {
    city: "Bauria",
    state: "West Bengal",
  },
  {
    city: "Salua",
    state: "West Bengal",
  },
  {
    city: "Chik Banavar",
    state: "Karnataka",
  },
  {
    city: "Jalhalli",
    state: "Karnataka",
  },
  {
    city: "Chinnasekkadu",
    state: "Tamil Nadu",
  },
  {
    city: "Jethuli",
    state: "Bihar",
  },
  {
    city: "Nagtala",
    state: "West Bengal",
  },
  {
    city: "Pakri",
    state: "Bihar",
  },
  {
    city: "Hunasamaranhalli",
    state: "Karnataka",
  },
  {
    city: "Hesarghatta",
    state: "Karnataka",
  },
  {
    city: "Bommayapalaiyam",
    state: "Tamil Nadu",
  },
  {
    city: "Gundūr",
    state: "Tamil Nadu",
  },
  {
    city: "Punadih",
    state: "Bihar",
  },
  {
    city: "Hariladih",
    state: "Jharkhand",
  },
  {
    city: "Alawalpur",
    state: "Bihar",
  },
  {
    city: "Madnaikanhalli",
    state: "Karnataka",
  },
  {
    city: "Bagalūr",
    state: "Karnataka",
  },
  {
    city: "Kadiganahalli",
    state: "Karnataka",
  },
  {
    city: "Khanpur Zabti",
    state: "Uttar Pradesh",
  },
  {
    city: "Mahuli",
    state: "Bihar",
  },
  {
    city: "Zeyadah Kot",
    state: "West Bengal",
  },
  {
    city: "Arshakunti",
    state: "Karnataka",
  },
  {
    city: "Mirchi",
    state: "Bihar",
  },
  {
    city: "Sonudih",
    state: "Bihar",
  },
  {
    city: "Bayandhalli",
    state: "Karnataka",
  },
  {
    city: "Sondekoppa",
    state: "Karnataka",
  },
  {
    city: "Babura",
    state: "Bihar",
  },
  {
    city: "Madavar",
    state: "Karnataka",
  },
  {
    city: "Kadabgeri",
    state: "Karnataka",
  },
  {
    city: "Nanmangalam",
    state: "Tamil Nadu",
  },
  {
    city: "Taliganja",
    state: "West Bengal",
  },
  {
    city: "Tarchha",
    state: "Bihar",
  },
  {
    city: "Belgharia",
    state: "West Bengal",
  },
  {
    city: "Kammanhalli",
    state: "Karnataka",
  },
  {
    city: "Ambapuram",
    state: "Andhra Pradesh",
  },
  {
    city: "Sonnappanhalli",
    state: "Karnataka",
  },
  {
    city: "Kedihati",
    state: "West Bengal",
  },
  {
    city: "Doddajivanhalli",
    state: "Karnataka",
  },
  {
    city: "Simli Murarpur",
    state: "Bihar",
  },
  {
    city: "Sonawan",
    state: "Bihar",
  },
  {
    city: "Devanandapur",
    state: "West Bengal",
  },
  {
    city: "Tribeni",
    state: "West Bengal",
  },
  {
    city: "Huttanhalli",
    state: "Karnataka",
  },
  {
    city: "Nathupur",
    state: "Bihar",
  },
  {
    city: "Bali",
    state: "Bihar",
  },
  {
    city: "Vajarhalli",
    state: "Karnataka",
  },
  {
    city: "Alija Kotla",
    state: "Telangana",
  },
  {
    city: "Saino",
    state: "Bihar",
  },
  {
    city: "Shekhpura",
    state: "Bihar",
  },
  {
    city: "Cachohalli",
    state: "Karnataka",
  },
  {
    city: "Andheri",
    state: "Maharashtra",
  },
  {
    city: "Narayanpur Kola",
    state: "Bihar",
  },
  {
    city: "Gyan Chak",
    state: "Bihar",
  },
  {
    city: "Kasgatpur",
    state: "Karnataka",
  },
  {
    city: "Kitanelli",
    state: "Karnataka",
  },
  {
    city: "Harchandi",
    state: "Bihar",
  },
  {
    city: "Santoshpur",
    state: "West Bengal",
  },
  {
    city: "Bendravadi",
    state: "Karnataka",
  },
  {
    city: "Kodagihalli",
    state: "Karnataka",
  },
  {
    city: "Harna Buzurg",
    state: "Bihar",
  },
  {
    city: "Mailanhalli",
    state: "Karnataka",
  },
  {
    city: "Sultanpur",
    state: "Bihar",
  },
  {
    city: "Adakimaranhalli",
    state: "Karnataka",
  },
];

export default selectData;
