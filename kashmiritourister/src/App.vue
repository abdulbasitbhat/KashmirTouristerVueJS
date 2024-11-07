<script>
import axios from 'axios';
export default {
  data() {
    return {
      landmarks:null
      //landmarks:
        // [
        //   {
        //     "id": 1,
        //     "landmark": "Gulmarg",
        //     "location": "Baramulla",
        //     "type": "Tourist Attraction",
        //     "properties": ["Meadows", "Forests", "Landscapes"],
        //     "image": "https://www.shraddharane.com/wp-content/uploads/2022/08/the-gondola-ride-in-gulmarg.png",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13222.945235994677!2d74.36274135681509!3d34.0506346205176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1af91308dd977%3A0x7a5cc65c8fb01df7!2sGulmarg%20193403!5e0!3m2!1sen!2sin!4v1730737779132!5m2!1sen!2sin",
        //     "highlights": [
        //       "Gondola ride offers breathtaking views, reaching an altitude of 3,979 meters and considered one of the highest cable cars in the world.",
        //       "Known as India's skiing paradise, it features international-standard ski slopes and snowboarding options during the winter.",
        //       "Gulmarg Golf Course, set amid stunning landscapes, is one of the highest golf courses globally and is a popular summer attraction."
        //     ],
        //     "about": "Gulmarg, often called the 'Meadow of Flowers,' is a premier hill station in Kashmir that transforms into a winter sports hub, especially for skiing enthusiasts. Its scenic beauty, with lush meadows, alpine forests, and panoramic views of the Pir Panjal range, make it a year-round favorite among travelers. In summer, its meadows burst into color, while winter blankets it in snow, creating a picturesque setting perfect for adventure and relaxation alike.",
        //     "best_time_to_visit": "December to March for skiing, and April to June for summer activities and golfing."
        //   },
        //   {
        //     "id": 2,
        //     "landmark": "Pahalgam",
        //     "location": "Anantnag",
        //     "type": "Tourist Attraction",
        //     "properties": ["Valleys", "River", "Hiking trails"],
        //     "image": "https://suvidhatravel.com/wp-content/uploads/2021/10/pahalgam-3-870x555.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.4331077942!2d75.29502489236299!3d34.01040333302159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f2a7b9509df%3A0x8c1cff001fb18c5!2sPahalgam!5e0!3m2!1sen!2sin!4v1730656520081!5m2!1sen!2sin",
        //     "highlights": [
        //       "Lidder River offers opportunities for trout fishing and riverside picnics, enhancing the natural charm of the valley.",
        //       "Starting point for the Amarnath Yatra pilgrimage, which brings thousands of devotees every year.",
        //       "Surrounded by valleys like Betaab Valley and Aru Valley, providing breathtaking views and a serene atmosphere ideal for nature lovers."
        //     ],
        //     "about": "Pahalgam, located in the heart of the Kashmir Valley, is known for its tranquil ambiance and pristine natural beauty. It’s not only a popular destination for nature walks and trekking but also serves as the base camp for the annual Amarnath Yatra. With rivers, forests, and panoramic views, Pahalgam is a beloved escape for those seeking peace, adventure, or spirituality.",
        //     "best_time_to_visit": "March to June for pleasant weather, and September to November for beautiful autumn scenery."
        //   },
        //   {
        //     "id": 3,
        //     "landmark": "Sonamarg",
        //     "location": "Ganderbal",
        //     "type": "Tourist Attraction",
        //     "properties": ["Mountains", "Glaciers", "Meadows"],
        //     "image": "https://travelmykashmir.com/wp-content/uploads/2023/07/749dc192-f172-4e06-8fc5-2de4bd343e1f.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6591.741658430233!2d75.28657174359522!3d34.302835692254305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e234e197d78061%3A0x5ccdc93dd4660335!2sSonamarg!5e0!3m2!1sen!2sin!4v1730737957355!5m2!1sen!2sin",
        //     "highlights": [
        //       "Thajiwas Glacier is a major attraction, offering opportunities for trekking, sledding, and camping amid breathtaking icy landscapes.",
        //       "The meadows turn golden under sunlight, earning Sonamarg the name 'Meadow of Gold.'",
        //       "Serves as the gateway to the Ladakh region and is a favored camping and trekking spot in the summer months."
        //     ],
        //     "about": "Sonamarg, meaning 'Meadow of Gold,' is a beautiful destination known for its stunning meadows, towering mountains, and the famous Thajiwas Glacier. It is a perfect base for treks to high-altitude lakes and the Amarnath pilgrimage. During summer, it’s a green paradise, and in winter, it transforms into a snowy wonderland, attracting tourists year-round.",
        //     "best_time_to_visit": "April to October for trekking and camping, and December to February for snow lovers."
        //   },
        //   {
        //     "id": 4,
        //     "landmark": "Dal Lake",
        //     "location": "Srinagar",
        //     "type": "Water Body",
        //     "properties": ["Houseboats", "Shikaras", "Floating gardens"],
        //     "image": "https://www.ekashmirtourism.com/wp-content/uploads/2022/12/dal-lake-in-winter.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52852.416864938554!2d74.81354490098762!3d34.113681871975764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185c268876847%3A0xbf6def9295995179!2sDal%20Lake!5e0!3m2!1sen!2sin!4v1730737992671!5m2!1sen!2sin",
        //     "highlights": [
        //       "Famous for houseboat stays, allowing visitors a unique experience of living on the water with all amenities.",
        //       "Shikara rides provide a serene way to explore the lake, especially during sunrise and sunset.",
        //       "Floating gardens and markets offer a glimpse of traditional Kashmiri lifestyle and aquatic farming."
        //     ],
        //     "about": "Dal Lake is the heart of Srinagar and a symbol of Kashmir's natural beauty and culture. It is famous for its shikara rides, houseboats, and the unique ecosystem that supports floating gardens and markets. With mountains in the backdrop, Dal Lake is a visual treat, especially during early mornings and winter when it partly freezes.",
        //     "best_time_to_visit": "May to November for boating and scenic views; December to February to witness the frozen lake."
        //   },
        //   {
        //     "id": 5,
        //     "landmark": "Mughal Gardens",
        //     "location": "Srinagar",
        //     "type": "Garden",
        //     "properties": ["Terraced gardens", "Fountains", "Flowers"],
        //     "image": "https://www.ekashmirtourism.com/wp-content/uploads/2022/08/fountain-mughal-gardan.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52852.42546061249!2d74.81354484850048!3d34.11366811594599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18427e6eb2bad%3A0xfd1fee426b5f903d!2sShalimar%20Bagh%20Mughal%20Garden!5e0!3m2!1sen!2sin!4v1730738043589!5m2!1sen!2sin",
        //     "highlights": [
        //       "Shalimar Bagh and Nishat Bagh are famous for their terraced lawns, cascading fountains, and vibrant flower beds.",
        //       "Chashme Shahi Garden is known for its fresh spring waters, believed to have medicinal properties.",
        //       "The gardens reflect Persian-style landscaping and are a legacy of Mughal Emperor Jahangir's love for Kashmir."
        //     ],
        //     "about": "The Mughal Gardens in Srinagar, built in Persian style, are a testament to the Mughal dynasty's architectural and artistic achievements. Each garden is intricately designed with terraced layouts, symmetrical pathways, and natural spring water fountains, offering visitors a serene and culturally rich experience amid floral landscapes.",
        //     "best_time_to_visit": "March to October, especially during the spring and summer months when the gardens are in full bloom."
        //   },
        //   {
        //     "id": 6,
        //     "landmark": "Betaab Valley",
        //     "location": "Pahalgam",
        //     "type": "Valley",
        //     "properties": ["Picturesque landscapes", "Forests", "Rivers"],
        //     "image": "https://i0.wp.com/www.vibrantfootsteps.com/wp-content/uploads/2023/06/20230602_072849-PS-scaled.jpg?fit=2560%2C1920&ssl=1",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.5819135764!2d75.3611343255606!3d34.054594223156066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e240b888816139%3A0xf506e0ee7ebc9986!2sHajan%20Valley!5e0!3m2!1sen!2sin!4v1730738068604!5m2!1sen!2sin",
        //     "highlights": [
        //       "Known for its enchanting scenery, featured in Bollywood films like 'Betaab,' which gave it its name.",
        //       "Surrounded by dense pine forests and flowing rivers, making it a favorite for nature photography and picnics.",
        //       "Perfect for hikes and leisurely walks along the river, providing a peaceful retreat from bustling tourist spots."
        //     ],
        //     "about": "Betaab Valley, named after a popular Bollywood film, is one of Kashmir's most scenic spots. Known for its lush landscapes, pine forests, and crystal-clear streams, it attracts nature lovers, hikers, and photographers. Its unspoiled natural beauty and serene environment make it an idyllic getaway in Pahalgam.",
        //     "best_time_to_visit": "May to October for pleasant weather, ideal for hiking and sightseeing."
        //   },
        //   {
        //     "id": 7,
        //     "landmark": "Wular Lake",
        //     "location": "Bandipora",
        //     "type": "Lake",
        //     "properties": ["Largest freshwater lake", "Bird watching"],
        //     "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/13/61/e0/wular-lake.jpg?w=1200&h=1200&s=1",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105406.19447398151!2d74.49578902517928!3d34.351914046171906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e10b7d1a6438ed%3A0xb3ebfa5078d4e7d1!2sWular%20Lake!5e0!3m2!1sen!2sin!4v1730738106897!5m2!1sen!2sin",
        //     "highlights": [
        //       "One of the largest freshwater lakes in Asia, supporting a diverse ecosystem of flora and fauna.",
        //       "A haven for bird-watchers, with migratory and resident species adding to its scenic appeal.",
        //       "Known for its fishing communities and unique floating vegetation, enhancing its ecological importance."
        //     ],
        //     "about": "Wular Lake, located in the Bandipora district, is one of Asia's largest freshwater lakes. It plays a crucial role in Kashmir's ecosystem, supporting local fishing communities and diverse birdlife. The lake offers a serene environment for boating and bird-watching, with picturesque mountains in the backdrop.",
        //     "best_time_to_visit": "March to October for bird-watching and boating, especially during spring and autumn migrations."
        //   },
        //   {
        //     "id": 8,
        //     "landmark": "Aru Valley",
        //     "location": "Pahalgam",
        //     "type": "Valley",
        //     "properties": ["Meadows", "Forests", "Streams"],
        //     "image": "https://www.ekashmirtourism.com/wp-content/uploads/2023/11/photography-pahalgam.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6608.477359126941!2d75.25862754355681!3d34.089025542572536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23936e84245af%3A0x133a49bc1d1c79c8!2sAru%20Valley!5e0!3m2!1sen!2sin!4v1730738140723!5m2!1sen!2sin",
        //     "highlights": [
        //       "Starting point for treks to Kolahoi Glacier and Tarsar Lake, making it a popular spot for trekkers.",
        //       "Known for its untouched meadows, dense forests, and pristine streams, offering a tranquil experience.",
        //       "Popular for camping and a favored spot for photographers due to its picturesque scenery."
        //     ],
        //     "about": "Aru Valley, located in Pahalgam, is a serene escape known for its lush meadows, forests, and proximity to high-altitude treks. It serves as the starting point for treks to Kolahoi Glacier and Tarsar Lake, making it a hub for adventurers. Its peaceful atmosphere and stunning landscapes make it ideal for camping and nature photography.",
        //     "best_time_to_visit": "May to September for trekking, camping, and enjoying lush green landscapes."
        //   },
        //   {
        //     "id": 9,
        //     "landmark": "Dachigam National Park",
        //     "location": "Srinagar",
        //     "type": "Wildlife Sanctuary",
        //     "properties": ["Wildlife", "Forests", "Mountains"],
        //     "image": "https://www.indiasinvitation.com/wp-content/uploads/2016/07/Dachigam-National-Park.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.3579377976366!2d75.03517507556433!3d34.13718357312507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18ff66de4f5a1%3A0x5d09f338a9bf1496!2sDachigam%20National%20Park!5e0!3m2!1sen!2sin!4v1730738180027!5m2!1sen!2sin",
        //     "highlights": [
        //       "Home to the endangered Hangul deer, also known as the Kashmir stag, which is the only surviving species of red deer in India.",
        //       "Diverse ecosystem includes rare species like the Himalayan black bear, musk deer, and leopards, offering a rich wildlife experience.",
        //       "Divided into two sections—Lower and Upper Dachigam—where the lower areas are easier to access, and the upper regions attract trekking enthusiasts for their rugged terrain and scenic beauty."
        //     ],
        //     "about": "Dachigam National Park, spread across 141 square kilometers, is one of Kashmir's most cherished natural reserves. Named after the ten villages relocated to create it, Dachigam is known for its lush landscapes, cascading streams, and dense forests. It's the only habitat for the rare Hangul deer and hosts a variety of flora and fauna that thrive in its unique altitude range, making it a must-visit for wildlife and nature enthusiasts alike. The park's varying altitudes also offer both gentle walks and challenging treks, attracting hikers and nature photographers.",
        //     "best_time_to_visit": "April to October for pleasant weather and wildlife viewing, especially April and May for bird-watching and September to November for sighting the Hangul deer."
        //   },

        //   {
        //     "id": 10,
        //     "landmark": "Nishat Bagh",
        //     "location": "Srinagar",
        //     "type": "Garden",
        //     "properties": ["Terraced gardens", "Fountains", "Flower beds"],
        //     "image": "https://www.ekashmirtourism.com/wp-content/uploads/2022/08/nishat-bagh.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.873678684942!2d74.87761537556365!3d34.12398352313008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1871edfa24f95%3A0x163329e00253085!2sNishat%20Garden!5e0!3m2!1sen!2sin!4v1730738215375!5m2!1sen!2sin",
        //     "highlights": [
        //       "One of the largest Mughal gardens in Kashmir, offering breathtaking views of Dal Lake and the Zabarwan mountain range.",
        //       "Famous for its beautifully laid-out terraced lawns, vibrant flower beds, and elaborate fountains.",
        //       "Ideal for leisurely strolls, photography, and experiencing the rich Mughal architecture."
        //     ],
        //     "about": "Nishat Bagh, meaning 'Garden of Joy,' is a stunning Mughal garden built in the 17th century by Asif Khan, brother of Empress Noor Jahan. Spanning 55 acres, it features a series of terraces and a symmetrical layout adorned with vibrant flowers and lush greenery. Visitors can enjoy breathtaking views of Dal Lake, making it a perfect spot for relaxation and photography.",
        //     "best_time_to_visit": "April to October, particularly during spring for blooming flowers and pleasant weather."
        //   },
        //   {
        //     "id": 11,
        //     "landmark": "Lolab Valley",
        //     "location": "Kupwara",
        //     "type": "Valley",
        //     "properties": ["Meadows", "Streams", "Natural beauty"],
        //     "image": "https://assets.telegraphindia.com/telegraph/2022/Aug/1660476049_4-bangus-valley1.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.0041313120255!2d74.37810158295086!3d34.5281233033162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e119591520c88f%3A0xbb151cdb482a1cf2!2sLolab%20valley%20Kupwara!5e0!3m2!1sen!2sin!4v1730738281983!5m2!1sen!2sin",
        //     "highlights": [
        //       "Renowned for its lush green meadows, pristine streams, and breathtaking landscapes, perfect for nature lovers.",
        //       "Offers opportunities for trout fishing, trekking, and camping amidst scenic surroundings.",
        //       "Less commercialized than other tourist spots, providing a tranquil escape for visitors."
        //     ],
        //     "about": "Lolab Valley, often referred to as the 'Heaven on Earth,' is known for its stunning natural beauty and serene environment. The valley is adorned with lush meadows, crystal-clear streams, and picturesque views, making it a hidden gem for tourists. It's a great destination for adventure activities like trekking and fishing, as well as for those seeking peace and tranquility in nature.",
        //     "best_time_to_visit": "April to October, especially during summer for pleasant weather and clear views."
        //   },
        //   {
        //     "id": 12,
        //     "landmark": "Kokernag",
        //     "location": "Anantnag",
        //     "type": "Tourist Attraction",
        //     "properties": ["Gardens", "Water Springs", "Nature"],
        //     "image": "https://sandeepachetan.com/wp-content/uploads/2013/11/tumblr_mwi24lefpd1s2js0yo1_1280.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6648.075920613009!2d75.31251429346595!3d33.578363643356106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391df5032d954065%3A0xcfb5e70eede071a4!2sKokernag%2C%20Bindoo%20Zalan%20Gam%20192202!5e0!3m2!1sen!2sin!4v1730738320004!5m2!1sen!2sin",
        //     "highlights": [
        //       "Famous for its beautiful gardens and natural springs.",
        //       "Known for its tranquil environment and lush greenery.",
        //       "Offers opportunities for nature walks and relaxation."
        //     ],
        //     "about": "Kokernag is a scenic town known for its beautiful gardens, springs, and tranquil surroundings. It's a perfect spot for those looking to enjoy nature and relax in a serene environment.",
        //     "best_time_to_visit": "April to October for pleasant weather."
        //   },
        //   {
        //     "id": 13,
        //     "landmark": "Nubra Valley",
        //     "location": "Leh-Ladakh",
        //     "type": "Valley",
        //     "properties": ["Sand Dunes", "Buddhist Monasteries", "Adventure"],
        //     "image": "https://mysterioushimachal.wordpress.com/wp-content/uploads/2021/07/nubra-valley.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13122.991270055934!2d77.55698825727467!3d34.6863136667929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fc367354176591%3A0x8bc4556bab23cae9!2sNubra%20Valley!5e0!3m2!1sen!2sin!4v1730738346819!5m2!1sen!2sin",
        //     "highlights": [
        //       "Known for its stunning landscapes and sand dunes.",
        //       "Home to the famous Diskit Monastery and the Nubra River.",
        //       "Offers adventure activities like camel rides and trekking."
        //     ],
        //     "about": "Nubra Valley is a beautiful valley located in the northern part of Ladakh, known for its stunning landscapes, unique sand dunes, and rich cultural heritage. The valley is home to several Buddhist monasteries and offers various adventure activities.",
        //     "best_time_to_visit": "April to October for pleasant weather."
        //   },
        //   {
        //     "id": 14,
        //     "landmark": "Yusmarg",
        //     "location": "Budgam",
        //     "type": "Tourist Attraction",
        //     "properties": ["Meadows", "Forests", "River"],
        //     "image": "https://sandeepachetan.com/wp-content/uploads/2014/06/IN_YUS201306212665.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6628.579471529708!2d74.65236479351074!3d33.83063794296476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1ebec1a2e5857%3A0x4a7a26a00667903!2sYousmarg!5e0!3m2!1sen!2sin!4v1730738376463!5m2!1sen!2sin",
        //     "highlights": [
        //       "Known for its stunning meadows surrounded by mountains.",
        //       "Less commercialized, offering peace and tranquility.",
        //       "Ideal for picnics, trekking, and nature walks."
        //     ],
        //     "about": "Yusmarg is a lesser-known yet breathtaking meadow located in the Pir Panjal range. Surrounded by pine forests and stunning mountain views, it provides a perfect escape for nature lovers looking for tranquility.",
        //     "best_time_to_visit": "April to October for outdoor activities."
        //   },
        //   {
        //     "id": 15,
        //     "landmark": "Harwan Garden",
        //     "location": "Srinagar",
        //     "type": "Garden",
        //     "properties": ["Terraced Garden", "Flowers", "Natural Beauty"],
        //     "image": "https://charzanholidays.com/wp-content/uploads/2024/08/Harwan_garden_charzan_holidays.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.5371089807536!2d74.89721558283811!3d34.1581829038021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e186e944d1c20d%3A0x113b8fe451a3aa86!2sHarwan%20Garden!5e0!3m2!1sen!2sin!4v1730738432852!5m2!1sen!2sin",
        //     "highlights": [
        //       "Famous for its terraced layout and variety of flowers.",
        //       "A peaceful escape from the hustle and bustle of the city.",
        //       "Offers beautiful views of the surrounding landscapes."
        //     ],
        //     "about": "Harwan Garden is a beautiful terraced garden located near Srinagar, known for its rich variety of flowers and peaceful ambiance. It serves as a perfect spot for relaxation and enjoying nature.",
        //     "best_time_to_visit": "April to October for blooming flowers."
        //   },
        //   {
        //     "id": 16,
        //     "landmark": "Shalimar Bagh",
        //     "location": "Srinagar",
        //     "type": "Garden",
        //     "properties": ["Mughal Garden", "Water Features", "Landscapes"],
        //     "image": "https://www.tripsontrack.com/wp-content/uploads/2023/02/Mughal-Garden-Shalimar-in-Srinagar.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.859190322827!2d74.8711110755648!3d34.1499444231204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18427e6eb2bad%3A0xfd1fee426b5f903d!2sShalimar%20Bagh%20Mughal%20Garden!5e0!3m2!1sen!2sin!4v1730738463263!5m2!1sen!2sin",
        //     "highlights": [
        //       "A stunning example of Mughal garden design.",
        //       "Features beautiful water channels, terraces, and flower beds.",
        //       "A UNESCO World Heritage Site with historical significance."
        //     ],
        //     "about": "Shalimar Bagh is a magnificent Mughal garden located in Srinagar, renowned for its beautiful layout, terraced lawns, and exquisite flowerbeds. It is one of the most popular tourist attractions in Kashmir.",
        //     "best_time_to_visit": "April to October for the best floral display."
        //   },
        //   {
        //     "id": 17,
        //     "landmark": "Kashmir Great Lakes Trek",
        //     "location": "Sonamarg",
        //     "type": "Trekking Route",
        //     "properties": ["Lakes", "Mountains", "Adventure"],
        //     "image": "https://trekthehimalayas.com/images/HomePageImages/Desktop/492f0cc0-f525-4a2e-883a-2705e7834f41_Kashmir-Great-Lake-Day-3.webp",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.9035463485648!2d75.28663368288186!3d34.302002003611236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23522f093399d%3A0x2fdae0e5af8d63bf!2sKashmir%20Great%20Lakes%20Trek!5e0!3m2!1sen!2sin!4v1730738567770!5m2!1sen!2sin",
        //     "highlights": [
        //       "Known for its stunning alpine lakes and breathtaking landscapes.",
        //       "Offers a challenging trek with varied terrain and views.",
        //       "Perfect for adventure seekers and nature enthusiasts."
        //     ],
        //     "about": "The Kashmir Great Lakes Trek is a popular trekking route that takes you through some of the most stunning landscapes in Kashmir, featuring numerous alpine lakes, lush meadows, and breathtaking mountain views. It is ideal for adventure seekers looking for a memorable experience.",
        //     "best_time_to_visit": "July to September for trekking."
        //   },
        //   {
        //     "id": 18,
        //     "landmark": "Zanskar Valley",
        //     "location": "Ladakh",
        //     "type": "Valley",
        //     "properties": ["Remote", "Buddhist Monasteries", "Adventure"],
        //     "image": "https://swantour.com/blogs/wp-content/uploads/2019/05/Zanskar-Valley-tourism.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13298.585801841497!2d76.97745525646734!3d33.56256107352101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390291f2ae1b57bb%3A0x736eba6f94fd593a!2sZanskar%20194302!5e0!3m2!1sen!2sin!4v1730738593371!5m2!1sen!2sin",
        //     "highlights": [
        //       "Known for its remote and rugged landscapes.",
        //       "Home to ancient Buddhist monasteries and unique culture.",
        //       "Offers adventure activities like trekking and river rafting."
        //     ],
        //     "about": "Zanskar Valley is a remote and stunning region known for its dramatic landscapes, including mountains, rivers, and ancient Buddhist monasteries. It offers various adventure activities and is perfect for those seeking off-the-beaten-path experiences.",
        //     "best_time_to_visit": "June to September for accessibility."
        //   },
        //   {
        //     "id": 19,
        //     "landmark": "Aharbal Waterfall",
        //     "location": "Kulgam",
        //     "type": "Waterfall",
        //     "properties": ["Scenic Beauty", "Adventure", "Nature"],
        //     "image": "https://live.staticflickr.com/3762/9652380073_89e389a8c2_b.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.3129684662863!2d74.7808640755426!3d33.649051673311384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1fcaaca60c81d%3A0x91dbe833c17bed62!2sAharbal%20Waterfall!5e0!3m2!1sen!2sin!4v1730738616284!5m2!1sen!2sin",
        //     "highlights": [
        //       "Known as the 'Niagara of Kashmir' due to its stunning beauty.",
        //       "Offers opportunities for trekking and photography.",
        //       "Surrounded by lush greenery and beautiful landscapes."
        //     ],
        //     "about": "Aharbal Waterfall is a breathtaking waterfall located in the Kulgam district, known for its scenic beauty and serene environment. It's a popular spot for trekking, photography, and enjoying nature.",
        //     "best_time_to_visit": "April to September for the best views."
        //   },
        //   {
        //     "id": 20,
        //     "landmark": "Achabal Gardens",
        //     "location": "Anantnag",
        //     "type": "Mughal Garden",
        //     "properties": ["Terraced Garden", "Floral Display", "Historical Significance"],
        //     "image": "https://live.staticflickr.com/7011/6741248487_1d0015e43f_b.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.995765488127!2d75.21878442554403!3d33.68317382329822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e2094a5d51fb0d%3A0x47f4cea52b7397e8!2sMughal%20Garden%20Achabal%2C%20(Anantnag)!5e0!3m2!1sen!2sin!4v1730738649454!5m2!1sen!2sin",
        //     "highlights": [
        //       "A beautiful Mughal garden known for its terraced layout.",
        //       "Features a variety of flowers and water channels.",
        //       "A peaceful retreat with historical significance."
        //     ],
        //     "about": "Achabal Gardens is a stunning Mughal garden located in Anantnag, famous for its terraced layout and floral displays. It serves as a peaceful retreat for visitors and offers a glimpse into the historical architecture of the region.",
        //     "best_time_to_visit": "April to October for blooming flowers."
        //   },
        //   {
        //     "id": 21,
        //     "landmark": "Gurez Valley",
        //     "location": "Bandipora",
        //     "type": "Valley",
        //     "properties": ["Remote", "Biodiversity", "Culture"],
        //     "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/78/27/05/gurez-valley-kel-to-taobat.jpg?w=900&h=500&s=1",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105032.76405306082!2d74.69273663927576!3d34.64778568652616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1432a23b9b275%3A0xccbcb398e000ad16!2sGurez%20Valley%2C%20Forest%20Block!5e0!3m2!1sen!2sin!4v1730738671890!5m2!1sen!2sin",
        //     "highlights": [
        //       "Known for its pristine beauty and remote location.",
        //       "Rich in biodiversity and home to the local Gujjar community.",
        //       "Offers opportunities for trekking and exploring traditional culture."
        //     ],
        //     "about": "Gurez Valley is a remote and beautiful valley in Bandipora district, known for its stunning landscapes and rich biodiversity. It is home to the local Gujjar community and offers various adventure activities and cultural experiences.",
        //     "best_time_to_visit": "May to October for accessibility and pleasant weather."
        //   },
        //   {
        //     "id": 22,
        //     "landmark": "Naranag",
        //     "location": "Ganderbal",
        //     "type": "Village",
        //     "properties": ["Trekking", "Historical Sites", "Natural Beauty"],
        //     "image": "https://i0.wp.com/alpinelakestrek.com/wp-content/uploads/2022/10/Nundkhol-stream.jpg?resize=1009%2C561&ssl=1",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420133.4442790295!2d74.445486244441!3d34.64731443240089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e3d5f1d4294d43%3A0xc1ae7bf7efe3ced9!2sNaranaag!5e0!3m2!1sen!2sin!4v1730738700252!5m2!1sen!2sin",
        //     "highlights": [
        //       "Known for ancient temples and trekking routes.",
        //       "Gateway to the beautiful Gangbal Lake and the famous Naranag trek.",
        //       "Offers breathtaking views of the Himalayas."
        //     ],
        //     "about": "Naranag is a scenic village in Ganderbal district, famous for its ancient temples and as a starting point for treks to Gangbal Lake. It's an ideal destination for trekkers and nature lovers.",
        //     "best_time_to_visit": "May to October for trekking."
        //   },
        //   {
        //     "id": 23,
        //     "landmark": "Khilanmarg",
        //     "location": "Gulmarg",
        //     "type": "Meadow",
        //     "properties": ["Natural Beauty", "Adventure", "Scenic Views"],
        //     "image": "https://img.traveltriangle.com/blog/wp-content/uploads/2024/08/Khilanmarg-.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26448.07742809397!2d74.3412972424586!3d34.0436228322192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1ae292a62dcbd%3A0xc89f6b08b2af987c!2sKhelanmarg!5e0!3m2!1sen!2sin!4v1730738739503!5m2!1sen!2sin",
        //     "highlights": [
        //       "A beautiful meadow known for its stunning views and tranquility.",
        //       "Ideal for trekking, skiing, and photography.",
        //       "Less crowded than Gulmarg, offering a peaceful retreat."
        //     ],
        //     "about": "Khilanmarg is a serene meadow located near Gulmarg, offering breathtaking views of the surrounding mountains. It's a perfect spot for trekking and enjoying the natural beauty of Kashmir.",
        //     "best_time_to_visit": "April to October for trekking and sightseeing."
        //   },
        //   {
        //     "id": 24,
        //     "landmark": "Sonmarg Glacier",
        //     "location": "Ganderbal",
        //     "type": "Glacier",
        //     "properties": ["Adventure", "Scenic Beauty", "Nature"],
        //     "image": "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/11/18e52bc12162e1c9bba99485f843261a_1000x1000.jpg",
        //     "iframesrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26370.967392468756!2d75.2598625431703!3d34.29009047633816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e235177d83db21%3A0x5ec6d4cb827cde23!2sThajiwas%20Glacier!5e0!3m2!1sen!2sin!4v1730738773324!5m2!1sen!2sin",
        //     "highlights": [
        //       "A beautiful glacier located in Sonamarg, offering stunning views.",
        //       "Ideal for trekking and adventure activities.",
        //       "Surrounded by beautiful meadows and mountains."
        //     ],
        //     "about": "Sonmarg Glacier is a breathtaking glacier located in Sonamarg, known for its stunning views and adventure opportunities. It's a popular destination for trekkers and nature enthusiasts.",
        //     "best_time_to_visit": "May to October for trekking and sightseeing."
        //   }
        // ]
    }
  },
  mounted(){
    axios.get('/proxy/api/Landmarks/allLandmarks').then(response => {this.landmarks=response.data;console.log(response.data)}).catch(error => console.error(error));
  }
}
</script>

<template>

  <div class="app-container"> 
      <card-item class="card-container" v-for="(landmark, index) in landmarks" :key="index"
        :id="landmark.id" :landmark="landmark.landmark" :location="landmark.location" :type="landmark.type"
        :properties="landmark.properties" :image="landmark.image" />
  </div>

  <!-- <landmark-item :landmark="landmarks[1].landmark" :location="landmarks[1].location" :type="landmarks[1].type"
    :properties="landmarks[1].properties" :image="landmarks[1].image" :iframesrc="landmarks[1].iframesrc"
    :highlights="landmarks[1].highlights" :about="landmarks[1].about" :bestVisit="landmarks[1].best_time_to_visit" /> -->

</template>

<style>
.app-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 200px;
  margin: 35px;
  align-items: center;
  justify-content: center;
}

.card-container {
  margin: 25px;
}
</style>
