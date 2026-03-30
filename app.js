
// ═══ SPLASH SCREEN ═══
(function(){
  const splash = document.getElementById('splash');
  const bar = document.getElementById('splash-progress-bar');
  const label = document.getElementById('splash-progress-label');
  const labels = ['Chargement...', 'Préparation...', 'Bienvenue !'];
  let pct = 0;
  let start = null;
  const DURATION = 2400; // ms total

  function step(ts){
    if(!start) start = ts;
    const elapsed = ts - start;
    pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
    bar.style.width = pct + '%';

    // Update label text
    if(pct < 40) label.textContent = labels[0];
    else if(pct < 80) label.textContent = labels[1];
    else label.textContent = labels[2];

    if(pct < 100){
      requestAnimationFrame(step);
    } else {
      // Done — fade out
      setTimeout(()=>{
        splash.classList.add('fade-out');
        setTimeout(()=>{ splash.style.display='none'; }, 850);
      }, 300);
    }
  }

  // Start after fonts settle
  window.addEventListener('load', ()=>{
    setTimeout(()=>{ requestAnimationFrame(step); }, 200);
  });
  // Fallback: max 5s
  setTimeout(()=>{
    if(splash.style.display !== 'none'){
      splash.classList.add('fade-out');
      setTimeout(()=>{ splash.style.display='none'; }, 850);
    }
  }, 5000);
})();

// ═══ DATABASE ═══
const DB = [
  {id:1,name:"Riad Dar Zitoun",city:"Marrakech",cat:"Riads & Hôtels",price:850,badge:"Coup de cœur",rating:4.9,reviewCount:247,desc:"Riad authentique au cœur de la médina avec patio fleuri, hammam privé et cuisine marocaine traditionnelle. 8 chambres décorées à la main par des artisans locaux.",amenities:["WiFi","Piscine","Hammam","Petit-déjeuner","Climatisation","Transferts"],tags:["Romantique","Piscine","Médina"],img:"https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1548078018-4af13bdf1e3a?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Sophie L.",flag:"🇫🇷",rating:5,color:"#c4622d",text:"Un riad de rêve, le service est impeccable. Le patio est magnifique au lever du soleil."},{name:"Carlos M.",flag:"🇪🇸",rating:5,color:"#2d7a4f",text:"Expérience incroyable. Le hammam privé est un must. Cuisine délicieuse."},{name:"Anna K.",flag:"🇩🇪",rating:4,color:"#2c6b8a",text:"Très belle adresse. Le petit-déjeuner sur la terrasse est magique."}]},
  {id:2,name:"Riad Yasmine",city:"Marrakech",cat:"Riads & Hôtels",price:700,badge:"Populaire",rating:4.8,reviewCount:312,desc:"Riad de charme avec piscine d'eau de rose, hammam privé et chambres poétiques. Vue panoramique depuis la terrasse sur les toits de la médina.",amenities:["WiFi","Piscine","Hammam","Petit-déjeuner","Terrasse panoramique","Cours de cuisine"],tags:["Vue médina","Piscine","Romantique"],img:"https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1548078018-4af13bdf1e3a?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Marie D.",flag:"🇧🇪",rating:5,color:"#c4622d",text:"La piscine est absolument magnifique. Décoration soignée, personnel adorable."},{name:"James W.",flag:"🇬🇧",rating:5,color:"#2d7a4f",text:"Perfect stay. The rooftop view at sunset is unforgettable."}]},
  {id:3,name:"Restaurant Al Fassia",city:"Marrakech",cat:"Restaurants",price:280,badge:"Institution",rating:4.9,reviewCount:589,desc:"Restaurant gastronomique 100% géré par des femmes. La cuisine berbère la plus raffinée de Marrakech — tajines, couscous et pastilla au pigeon dans un cadre élégant.",amenities:["Terrasse","Vin marocain","Menu végétarien","Privatisation","Parking","Réservation recommandée"],tags:["Gastronomique","Traditionnel","Femmes chefs"],img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1476224203421-9ac39bcb3b42?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Pierre M.",flag:"🇫🇷",rating:5,color:"#c4622d",text:"La pastilla au pigeon est exceptionnelle. Service irréprochable."},{name:"Lucia B.",flag:"🇮🇹",rating:5,color:"#9c4820",text:"Best restaurant in Marrakech! The couscous was divine."}]},
  {id:4,name:"Hammam Al Bacha",city:"Marrakech",cat:"Hammams & Spas",price:150,badge:"Historique",rating:4.7,reviewCount:423,desc:"Hammam royal classé monument historique. Expérience ancestrale dans un cadre de marbre et zellige du XVIIIe siècle. Gommage argan et massage traditionnel.",amenities:["Gommage argan","Massage huile","Savon beldi","Privatisation","Produits naturels","Vestiaires"],tags:["Historique","Zellige","Authentique"],img:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1612198790700-bb3b8186b16e?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Nathalie R.",flag:"🇫🇷",rating:5,color:"#6a1b9a",text:"Une expérience hors du temps. Les zellige sont magnifiques."},{name:"Omar F.",flag:"🇲🇦",rating:4,color:"#2d7a4f",text:"Le meilleur hammam de Marrakech. Le gommage à l'argan est excellent."}]},
  {id:5,name:"Hôtel Casablanca Bay",city:"Casablanca",cat:"Riads & Hôtels",price:620,badge:"Moderne",rating:4.6,reviewCount:178,desc:"Hôtel contemporain avec vue sur la Corniche et l'Atlantique. Chambres élégantes, piscine sur le toit, spa et restaurant gastronomique.",amenities:["WiFi","Piscine rooftop","Spa","Restaurant","Bar","Parking"],tags:["Vue mer","Moderne","Business"],img:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Ahmed K.",flag:"🇲🇦",rating:5,color:"#185fa5",text:"Hôtel excellent, vue incroyable sur l'Atlantique."},{name:"Sarah J.",flag:"🇺🇸",rating:4,color:"#2d7a4f",text:"Great location. Staff very helpful. Breakfast was delicious."}]},
  {id:6,name:"Rick's Café",city:"Casablanca",cat:"Restaurants",price:350,badge:"Légendaire",rating:4.8,reviewCount:892,desc:"Restaurant emblématique inspiré du film Casablanca. Cuisine internationale et marocaine dans un décor art déco avec musique live chaque soir.",amenities:["Musique live","Bar","Cocktails","Vue patio","Menu végétarien","Carte des vins"],tags:["Légendaire","Musique live","Art Déco"],img:"https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Jean-Paul V.",flag:"🇫🇷",rating:5,color:"#1a1410",text:"Incontournable! L'ambiance, la musique, la cuisine... tout est parfait."},{name:"Emma T.",flag:"🇬🇧",rating:5,color:"#2d7a4f",text:"The pianist was amazing. A must-visit in Casablanca."}]},
  {id:7,name:"Riad Laaroussa",city:"Fès",cat:"Riads & Hôtels",price:950,badge:"Excellence",rating:5.0,reviewCount:156,desc:"Riad du XVe siècle entièrement restauré dans la médina de Fès el-Bali. Zellige et stuc d'exception. Vue imprenable depuis la terrasse panoramique.",amenities:["WiFi","Terrasse panoramique","Petit-déjeuner","Hammam","Visites guidées","Cuisine sur commande"],tags:["Luxe","Médina","Architecture"],img:"https://images.unsplash.com/photo-1548078018-4af13bdf1e3a?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1548078018-4af13bdf1e3a?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Isabelle P.",flag:"🇨🇭",rating:5,color:"#c4622d",text:"Le meilleur riad au Maroc! Chaque détail est parfait."},{name:"David R.",flag:"🇺🇸",rating:5,color:"#2d7a4f",text:"Absolutely stunning architecture. Service beyond expectations."}]},
  {id:8,name:"Tanneries Chouara",city:"Fès",cat:"Culture & Visites",price:120,badge:"UNESCO",rating:4.8,reviewCount:1240,desc:"Visite guidée des célèbres tanneries Chouara classées UNESCO. Vue depuis les terrasses sur les cuves colorées, avec guide francophone expert.",amenities:["Guide francophone","Vue rooftop","Artisanat","Photos libres","Groupe max 10","Entrée tanneries"],tags:["UNESCO","Incontournable","Artisanat"],img:"https://images.unsplash.com/photo-1558171813-8ca7a8c30282?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1558171813-8ca7a8c30282?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1531973486364-5fa64260d75b?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1597212618440-806262de4f8b?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"François B.",flag:"🇫🇷",rating:5,color:"#c9a84c",text:"Guide excellent, très pédagogue. Les tanneries sont spectaculaires."},{name:"Marta G.",flag:"🇪🇸",rating:5,color:"#2d7a4f",text:"Absolutamente increíble. El guía era fantástico."}]},
  {id:9,name:"Riad Dar Echchaouen",city:"Chefchaouen",cat:"Riads & Hôtels",price:420,badge:"Coup de cœur",rating:4.9,reviewCount:203,desc:"Riad bleu et blanc au cœur de la médina de Chefchaouen. Terrasse avec vue imprenable sur les toits bleus et les montagnes du Rif.",amenities:["WiFi","Terrasse vue médina","Petit-déjeuner","Thé berbère","Photos guidées","Randonnée"],tags:["Ville bleue","Vue Rif","Calme"],img:"https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1539650116574-75c0c6d73aeb?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Laura S.",flag:"🇮🇹",rating:5,color:"#2c6b8a",text:"La ciudad más bonita de Marruecos. El riad es perfecto."},{name:"Thomas M.",flag:"🇩🇪",rating:5,color:"#2d7a4f",text:"Chefchaouen is like a dream. Best rooftop view."}]},
  {id:10,name:"Surf School Taghazout",city:"Agadir",cat:"Surf & Plage",price:300,badge:"Top expérience",rating:4.9,reviewCount:634,desc:"École de surf au spot mythique de Taghazout. Cours tous niveaux avec instructeurs certifiés, matériel fourni. Sessions vidéo incluses.",amenities:["Planche fournie","Combinaison","Instructeur certifié","Vidéo analyse","Transferts","Café surfer"],tags:["Surf","Taghazout","Débutants OK"],img:"https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1455267847942-f6cda5e6e1c0?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Jake P.",flag:"🇦🇺",rating:5,color:"#2c6b8a",text:"Best surf experience! Great instructors, perfect waves."},{name:"Léa B.",flag:"🇫🇷",rating:5,color:"#c4622d",text:"Cours parfait pour débutante. Instructeur patient, ambiance géniale!"}]},
  {id:11,name:"Villa Maroc Essaouira",city:"Essaouira",cat:"Riads & Hôtels",price:780,badge:"Charme",rating:4.8,reviewCount:267,desc:"Maison d'hôtes dans les remparts d'Essaouira. Chambres artisanales uniques, terrasse avec vue sur l'Atlantique et les fortifications.",amenities:["WiFi","Terrasse mer","Petit-déjeuner","Hammam","Vélos","Excursions"],tags:["Vue mer","Remparts","Artisanal"],img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1539650116574-75c0c6d73aeb?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Clémence F.",flag:"🇫🇷",rating:5,color:"#2c6b8a",text:"Essaouira est magique et cette villa est parfaite."},{name:"Paul N.",flag:"🇬🇧",rating:4,color:"#2d7a4f",text:"Beautiful property with amazing sea views."}]},
  {id:12,name:"Bivouac Erg Chebbi",city:"Merzouga",cat:"Excursions",price:900,badge:"Inoubliable",rating:5.0,reviewCount:445,desc:"Nuit en haïma berbère de luxe avec dîner traditionnel au coin du feu, musique gnaoua live et lever du soleil sur les dunes de l'Erg Chebbi.",amenities:["Dîner inclus","Musique gnaoua","Dromadaires","Lever soleil","Transfert","Thé nomade"],tags:["Sahara","Dunes","Unique"],img:"https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Lucas B.",flag:"🇨🇭",rating:5,color:"#c9a84c",text:"Le lever de soleil sur les dunes... expérience de vie."},{name:"Aisha M.",flag:"🇲🇦",rating:5,color:"#c4622d",text:"Le Sahara sous les étoiles avec la musique gnaoua. Inoubliable."}]},
  {id:13,name:"Quad & Sandboard Merzouga",city:"Merzouga",cat:"Excursions",price:450,badge:"Adrénaline",rating:4.8,reviewCount:312,desc:"Circuit quad dans les dunes de l'Erg Chebbi + initiation sandboard. Guide expérimenté, casque et équipement fournis.",amenities:["Quad fourni","Casque","Sandboard","Guide","Photos/vidéos","Eau et snack"],tags:["Adrénaline","Dunes","Famille OK"],img:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Tom H.",flag:"🇬🇧",rating:5,color:"#c9a84c",text:"Absolutely epic! The dunes are massive and the quad was a blast."},{name:"Yasmine T.",flag:"🇫🇷",rating:5,color:"#c4622d",text:"Expérience folle! Le sandboard c'est addictif!"}]},
  {id:14,name:"Riad Dar Al Assil",city:"El Jadida",cat:"Riads & Hôtels",price:480,badge:"Nouvelle adresse",rating:4.7,reviewCount:89,desc:"Riad portugais face à la mer avec patio de zellige bleu et blanc. Vue sur la Cité Portugaise classée UNESCO.",amenities:["Vue mer","Patio zellige","Petit-déjeuner","WiFi","Transferts","Visite guidée"],tags:["Vue mer","UNESCO","Calme"],img:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1539650116574-75c0c6d73aeb?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Mohamed B.",flag:"🇲🇦",rating:5,color:"#2c6b8a",text:"La citerne portugaise vue du riad le soir... magique."},{name:"Claire V.",flag:"🇫🇷",rating:4,color:"#c4622d",text:"El Jadida est méconnue et magnifique. Belle surprise."}]},
  {id:15,name:"Hôtel La Tour Hassan",city:"Rabat",cat:"Riads & Hôtels",price:1100,badge:"Palace",rating:4.7,reviewCount:198,desc:"Palace emblématique de Rabat face à la Tour Hassan et le Mausolée Mohammed V. Jardins andalous, piscine et spa.",amenities:["WiFi","Piscine","Spa","Restaurant","Jardin andalou","Concierge"],tags:["Luxe","Palace","Vue Tour Hassan"],img:"https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",imgs:["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=400&q=80"],reviews:[{name:"Nadia A.",flag:"🇫🇷",rating:5,color:"#2d7a4f",text:"Palace magnifique. Vue sur la Tour Hassan depuis la chambre."},{name:"Richard P.",flag:"🇬🇧",rating:4,color:"#185fa5",text:"Wonderful historic hotel. The Andalusian garden is perfect."}]},
];

const SPORTS = [
  {id:'s1',name:'Club de Football Maarif',city:'Casablanca',type:'Football',price:80,unit:'MAD/h',img:'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=600&q=80',rating:4.7,loc:'Maarif'},
  {id:'s2',name:'Padel Arena Guéliz',city:'Marrakech',type:'Padel',price:120,unit:'MAD/h',img:'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=600&q=80',rating:4.8,loc:'Guéliz'},
  {id:'s3',name:'Surf School Taghazout',city:'Agadir',type:'Surf',price:300,unit:'MAD',img:'https://images.unsplash.com/photo-1455267847942-f6cda5e6e1c0?auto=format&fit=crop&w=600&q=80',rating:4.9,loc:'Taghazout'},
  {id:'s4',name:'Tennis Club Agdal',city:'Rabat',type:'Tennis',price:100,unit:'MAD/h',img:'https://images.unsplash.com/photo-1516834611397-8d633f9dd0af?auto=format&fit=crop&w=600&q=80',rating:4.6,loc:'Agdal'},
  {id:'s5',name:'Randonnée Jebel Rif',city:'Chefchaouen',type:'Randonnée',price:200,unit:'MAD',img:'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=600&q=80',rating:4.9,loc:'Jebel Rif'},
  {id:'s6',name:'Kitesurf Essaouira',city:'Essaouira',type:'Kitesurf',price:400,unit:'MAD',img:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80',rating:4.8,loc:'Plage'},
  {id:'s7',name:'Quad & Sandboard Dunes',city:'Merzouga',type:'Quad',price:450,unit:'MAD',img:'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=600&q=80',rating:5.0,loc:'Erg Chebbi'},
  {id:'s8',name:'Hammam Sport & Spa',city:'Fès',type:'Hammam',price:120,unit:'MAD',img:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',rating:4.7,loc:'Médina'},
  {id:'s9',name:'Terrain Football Hay Riad',city:'Rabat',type:'Football',price:90,unit:'MAD/h',img:'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80',rating:4.5,loc:'Hay Riad'},
  {id:'s10',name:'CrossFit Ain Diab',city:'Casablanca',type:'Fitness',price:60,unit:'MAD',img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',rating:4.8,loc:'Ain Diab'},
  {id:'s11',name:'Yoga Palmeraie',city:'Marrakech',type:'Yoga',price:150,unit:'MAD',img:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',rating:4.9,loc:'Palmeraie'},
  {id:'s12',name:'Surf Sidi Bouzid',city:'El Jadida',type:'Surf',price:250,unit:'MAD',img:'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80',rating:4.6,loc:'Sidi Bouzid'},
  {id:'s13',name:'Terrain Football Bernabeu Casa',city:'Casablanca',type:'Football',price:100,unit:'MAD/h',img:'https://images.unsplash.com/photo-1508098682722-e99c643e7f0c?auto=format&fit=crop&w=600&q=80',rating:4.8,loc:'Hay Hassani'},
  {id:'s14',name:'Padel Club Agdal',city:'Rabat',type:'Padel',price:130,unit:'MAD/h',img:'https://images.unsplash.com/photo-1612459285022-cac4e0d6de0f?auto=format&fit=crop&w=600&q=80',rating:4.7,loc:'Agdal'},
  {id:'s15',name:'Basketball Maârif',city:'Casablanca',type:'Basketball',price:70,unit:'MAD/h',img:'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80',rating:4.5,loc:'Maârif'},
  {id:'s16',name:'Tennis Royal Marrakech',city:'Marrakech',type:'Tennis',price:150,unit:'MAD/h',img:'https://images.unsplash.com/photo-1620742812397-7f9b45fa9879?auto=format&fit=crop&w=600&q=80',rating:4.9,loc:'Hivernage'},
  {id:'s17',name:'Natation Olympic Fès',city:'Fès',type:'Natation',price:50,unit:'MAD',img:'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=600&q=80',rating:4.6,loc:'Narjis'},
  {id:'s18',name:'Vélo Essaouira Tour',city:'Essaouira',type:'Cyclisme',price:180,unit:'MAD',img:'https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=600&q=80',rating:4.8,loc:'Médina'},
  {id:'s19',name:"Tir à l'Arc Agadir",city:'Agadir',type:"Tir à l'arc",price:120,unit:'MAD',img:'https://images.unsplash.com/photo-1518259102261-b40117eabbc9?auto=format&fit=crop&w=600&q=80',rating:4.7,loc:'Centre-ville'},
  {id:'s20',name:'Football Hay Riad Premium',city:'Rabat',type:'Football',price:110,unit:'MAD/h',img:'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=600&q=80',rating:4.9,loc:'Hay Riad'},
  {id:'s21',name:'Boxe & Arts Martiaux',city:'Casablanca',type:'Boxe',price:80,unit:'MAD',img:'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=600&q=80',rating:4.7,loc:'Centre-ville'},
  {id:'s22',name:'Golf Royal Dar Es Salam',city:'Rabat',type:'Golf',price:500,unit:'MAD',img:'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=600&q=80',rating:4.9,loc:'Dar Es Salam'},
  {id:'s23',name:'Escalade Atlas',city:'Marrakech',type:'Escalade',price:350,unit:'MAD',img:'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?auto=format&fit=crop&w=600&q=80',rating:4.8,loc:'Haut Atlas'},
];

// ═══ STATE ═══
let currentUser = JSON.parse(localStorage.getItem('vm_user')||'null');
let saved = JSON.parse(localStorage.getItem('vm_saved')||'[]');
let bkItem = null;
let bkTotal = 0;
let spCityFilter = '';
let spTypeFilter = '';
let listCityFilter = '';

// ═══ INIT ═══
document.addEventListener('DOMContentLoaded',()=>{
  const t = new Date(); t.setDate(t.getDate()+1);
  const t2 = new Date(); t2.setDate(t2.getDate()+7);
  const fmt = d=>d.toISOString().split('T')[0];
  ['hIn','bkIn'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=fmt(t);});
  ['hOut','bkOut'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=fmt(t2);});
  renderHome();
  if(currentUser) updateNav();
  // Animate stats
  animNum('cnt1',2400);
  animNum('cnt2',12500);
  window.addEventListener('scroll',()=>{
    document.querySelector('.nav').style.boxShadow = window.scrollY>20 ? '0 2px 20px rgba(0,0,0,.4)' : 'none';
  });
});

function animNum(id,target){
  const el=document.getElementById(id);
  if(!el)return;
  let v=0; const step=target/60;
  const t=setInterval(()=>{v=Math.min(v+step,target);el.textContent=Math.round(v).toLocaleString()+'+';if(v>=target)clearInterval(t);},16);
}

// ═══ PAGES ═══
function showPage(p){
  document.querySelectorAll('.page').forEach(pg=>pg.classList.remove('active'));
  const el=document.getElementById('page-'+p);
  if(!el){console.warn('No page: page-'+p);return;}
  el.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(p==='listings') renderListings();
  if(p==='sports'){ renderSports(); setTimeout(initLineUp,80); }
  if(p==='cars'){ renderCars(); }
}

// ═══ RENDER HOME ═══
function renderHome(){
  const el=document.getElementById('homeFeatured');
  if(el) el.innerHTML=DB.slice(0,6).map(buildCard).join('');
}

// ═══ CARD HTML ═══
function buildCard(item){
  const sv=saved.includes(item.id);
  const stars='★'.repeat(Math.floor(item.rating))+(item.rating%1>=.5?'★':'');
  const bc=item.badge==='Coup de cœur'||item.badge==='Inoubliable'?'':item.badge==='Top expérience'?'grn':'';
  return `<div class="card" onclick="openDetail(${item.id})">
    <div class="card-img">
      <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=600&q=80'">
      <span class="c-badge ${bc}">${item.badge}</span>
      <button class="c-save ${sv?'on':''}" onclick="event.stopPropagation();toggleSave(${item.id},this)"><i class="${sv?'fas':'far'} fa-heart"></i></button>
    </div>
    <div class="card-body">
      <div class="c-city"><i class="fas fa-map-marker-alt"></i> ${item.city} · ${item.cat}</div>
      <div class="c-name">${item.name}</div>
      <div class="c-rating"><span class="c-stars">${stars}</span><span class="c-rnum">${item.rating}</span><span class="c-rcnt">(${item.reviewCount.toLocaleString()} avis)</span></div>
      <div class="c-tags">${item.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="card-foot">
        <div><div class="c-pfrom">À partir de</div><span class="c-price">${item.price.toLocaleString()}</span><span class="c-punit"> MAD</span></div>
        <button class="btn-rsv" onclick="event.stopPropagation();openBooking(${item.id})">Réserver</button>
      </div>
    </div>
  </div>`;
}

// ═══ LISTINGS ═══
function renderListings(){
  let data=[...DB];
  const city=document.getElementById('lCity')?.value||listCityFilter;
  const cat=document.getElementById('lCat')?.value||'';
  const sort=document.getElementById('lSort')?.value||'rating';
  if(city) data=data.filter(d=>d.city===city);
  if(cat) data=data.filter(d=>d.cat===cat);
  if(sort==='price_asc') data.sort((a,b)=>a.price-b.price);
  else if(sort==='price_desc') data.sort((a,b)=>b.price-a.price);
  else data.sort((a,b)=>b.rating-a.rating);
  const g=document.getElementById('listGrid');
  if(g) g.innerHTML=data.length?data.map(buildCard).join(''):'<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:40px">Aucun résultat pour cette recherche.</p>';
  const rc=document.getElementById('resCnt');
  if(rc) rc.textContent=data.length+' résultat'+(data.length>1?'s':'');
}

function setCityFilter(city,btn){
  listCityFilter=city;
  document.querySelectorAll('.filter-row .fb').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  const sel=document.getElementById('lCity');
  if(sel) sel.value=city;
  renderListings();
}

// ═══ DETAIL ═══
function openDetail(id){
  const item=DB.find(x=>x.id===id);
  if(!item){showToast('Annonce introuvable');return;}
  const stars='★'.repeat(Math.floor(item.rating));
  const rvHTML=item.reviews.map(r=>`<div class="rev-card"><div class="rev-head"><div class="rev-av" style="background:${r.color}">${r.name[0]}</div><div><div class="rev-nm">${r.name} ${r.flag}</div><div class="rev-stars">${'★'.repeat(r.rating)}</div></div></div><div class="rev-txt">${r.text}</div></div>`).join('');
  const t=new Date();t.setDate(t.getDate()+1);const t2=new Date();t2.setDate(t2.getDate()+7);
  const fmt=d=>d.toISOString().split('T')[0];
  const nights=6,base=item.price*nights,fees=Math.round(base*.12),total=base+fees;
  document.getElementById('detailContent').innerHTML=`
  <div class="ph"><div class="ph-inner">
    <div class="bc"><span onclick="showPage('home')">Accueil</span><i class="fas fa-chevron-right"></i><span onclick="showPage('listings')">${item.cat}</span><i class="fas fa-chevron-right"></i><span>${item.name}</span></div>
    <h1>${item.name}</h1><p>${item.city} · ${item.cat}</p>
  </div></div>
  <div class="det-wrap">
    <div class="gallery">
      ${item.imgs.map((img,i)=>`<div class="gi" onclick="openLB(${JSON.stringify(item.imgs)},${i})"><img src="${img}" alt="" loading="lazy">${i===4?'<div class="gi-more">+5 photos</div>':''}</div>`).join('')}
    </div>
    <div class="det-layout">
      <div>
        <div class="det-city"><i class="fas fa-map-marker-alt"></i> ${item.city} · ${item.cat}</div>
        <h1 class="det-name">${item.name}</h1>
        <div class="det-meta">
          <div class="det-rating"><i class="fas fa-star"></i> ${item.rating}</div>
          <span style="font-size:13px;color:var(--muted)">${item.reviewCount.toLocaleString()} avis vérifiés</span>
          <span class="c-badge" style="position:static">${item.badge}</span>
        </div>
        <div class="c-tags" style="margin-bottom:16px">${item.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <p class="det-desc">${item.desc}</p>
        <div class="det-sec">
          <h3 class="det-sec-title">Ce qui est inclus</h3>
          <div class="am-grid">${item.amenities.map(a=>`<div class="am"><i class="fas fa-check-circle"></i> ${a}</div>`).join('')}</div>
        </div>
        <div class="det-sec">
          <h3 class="det-sec-title">Avis des voyageurs (${item.reviewCount.toLocaleString()})</h3>
          ${rvHTML}
        </div>
      </div>
      <div>
        <div class="bw">
          <div class="bw-price"><span class="bw-pval">${item.price.toLocaleString()}</span><span class="bw-punit"> MAD / nuit</span></div>
          <div class="bw-rating"><i class="fas fa-star" style="color:var(--gold)"></i> ${item.rating} · ${item.reviewCount.toLocaleString()} avis</div>
          <div class="date-row">
            <div class="df"><div class="df-lbl">Arrivée</div><input type="date" id="dIn" value="${fmt(t)}" onchange="wCalc(${item.id})"></div>
            <div class="df"><div class="df-lbl">Départ</div><input type="date" id="dOut" value="${fmt(t2)}" onchange="wCalc(${item.id})"></div>
          </div>
          <div class="g-field"><div class="df-lbl">Voyageurs</div><select style="border:none;outline:none;font-family:'Jost',sans-serif;font-size:14px;font-weight:600;color:var(--midnight);background:transparent"><option>1 pers.</option><option selected>2 pers.</option><option>3 pers.</option><option>4 pers.</option></select></div>
          <div class="pb" id="wPB">
            <div class="pr"><span id="wN">${item.price.toLocaleString()} × ${nights} nuits</span><span id="wNC">${base.toLocaleString()} MAD</span></div>
            <div class="pr"><span>Frais de service</span><span id="wF">${fees.toLocaleString()} MAD</span></div>
            <div class="pr tot"><span>Total</span><span id="wT" style="color:var(--terra)">${total.toLocaleString()} MAD</span></div>
          </div>
          <button class="btn-book-now" onclick="openBooking(${item.id})"><i class="fas fa-calendar-check"></i> Réserver maintenant</button>
          <p class="w-note"><i class="fas fa-shield-alt" style="color:var(--green)"></i> Annulation gratuite 48h avant</p>
        </div>
      </div>
    </div>
  </div>`;
  window._detItem=item;
  showPage('detail');
}

function wCalc(id){
  const item=DB.find(x=>x.id===id)||window._detItem;
  if(!item)return;
  const ci=new Date(document.getElementById('dIn')?.value);
  const co=new Date(document.getElementById('dOut')?.value);
  if(isNaN(ci)||isNaN(co)||co<=ci)return;
  const n=Math.round((co-ci)/864e5),base=item.price*n,fees=Math.round(base*.12),tot=base+fees;
  const s=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  s('wN',`${item.price.toLocaleString()} × ${n} nuit${n>1?'s':''}`);
  s('wNC',base.toLocaleString()+' MAD'); s('wF',fees.toLocaleString()+' MAD'); s('wT',tot.toLocaleString()+' MAD');
}

// ═══ SEARCH ═══
function doSearch(){
  const city=document.getElementById('hCity').value;
  const cat=document.getElementById('hCat')?.value||'';
  listCityFilter=city;
  if(city){const s=document.getElementById('lCity');if(s)s.value=city;}
  if(cat){
    const sc=document.getElementById('lCat');if(sc)sc.value=cat;
    const h=document.getElementById('listPageH1');if(h)h.innerHTML=(cat||'Toutes les')+' <em>'+(cat?'au Maroc':'annonces')+'</em>';
  } else {
    const sc=document.getElementById('lCat');if(sc)sc.value='';
  }
  showPage('listings');
}
function quickCity(city){
  listCityFilter=city;
  const s=document.getElementById('lCity');if(s)s.value=city;
  showPage('listings');
}
function syncCity(v){const s=document.getElementById('lCity');if(s)s.value=v;}
function filterCat(cat){
  listCityFilter='';
  const sc=document.getElementById('lCity');if(sc)sc.value='';
  const sl=document.getElementById('lCat');if(sl)sl.value=cat;
  // Update page header
  const h=document.getElementById('listPageH1');if(h)h.innerHTML=cat+' <em>au Maroc</em>';
  const s=document.getElementById('listPageSub');if(s)s.textContent='Les meilleures adresses de la catégorie '+cat;
  showPage('listings');
}

// ═══ SAVE ═══
function toggleSave(id,btn){
  if(!currentUser){openAuth('login');showToast('Connectez-vous pour sauvegarder');return;}
  if(saved.includes(id)){saved=saved.filter(x=>x!==id);btn.classList.remove('on');btn.innerHTML='<i class="far fa-heart"></i>';showToast('Retiré des favoris');}
  else{saved.push(id);btn.classList.add('on');btn.innerHTML='<i class="fas fa-heart"></i>';showToast('❤️ Ajouté aux favoris !','ok');}
  localStorage.setItem('vm_saved',JSON.stringify(saved));
}

// ═══ SPORTS ═══
function renderSports(){
  let data=spCityFilter?SPORTS.filter(s=>s.city===spCityFilter):SPORTS;
  if(spTypeFilter) data=data.filter(s=>s.type===spTypeFilter);
  const football=data.filter(s=>s.type==='Football');
  const others=data.filter(s=>s.type!=='Football');
  const fg=document.getElementById('footballGrid');
  if(fg)fg.innerHTML=football.length?football.map(buildSportCard).join(''):'<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:20px;font-size:14px">Aucun terrain de football dans cette ville.</p>';
  const sg=document.getElementById('sportsGrid');
  if(sg)sg.innerHTML=others.length?others.map(buildSportCard).join(''):'<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:20px;font-size:14px">Aucune activité trouvée.</p>';
  const rc=document.getElementById('spResCnt');
  if(rc)rc.textContent=data.length+' activité'+(data.length>1?'s':'');
}

function buildSportCard(s){
  return `<div class="card" onclick="openSportDetail('${s.id}')">
    <div class="card-img">
      <img src="${s.img}" alt="${s.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80'">
      <span class="c-badge">${s.type}</span>
      <div class="c-save" onclick="event.stopPropagation()" style="cursor:default"><i class="fas fa-star" style="color:var(--gold)"></i></div>
    </div>
    <div class="card-body">
      <div class="c-city"><i class="fas fa-map-marker-alt"></i> ${s.city} · ${s.loc}</div>
      <div class="c-name">${s.name}</div>
      <div class="c-rating"><span class="c-stars">${'★'.repeat(Math.floor(s.rating))}</span><span class="c-rnum">${s.rating}</span><span class="c-rcnt">Activité vérifiée</span></div>
      <div class="card-foot">
        <div><div class="c-pfrom">À partir de</div><span class="c-price">${s.price.toLocaleString()}</span><span class="c-punit"> ${s.unit}</span></div>
        <button class="btn-rsv" onclick="event.stopPropagation();openSportBooking('${s.id}')">Réserver</button>
      </div>
    </div>
  </div>`;
}

function openSportDetail(sid){
  const s=SPORTS.find(x=>x.id===sid);
  if(!s)return;
  // Sport amenities based on type
  const amenMap={
    'Football':['Terrain synthétique','Vestiaires','Douches','Éclairage','Parking','Arbitre disponible'],
    'Padel':['Court couvert','Raquettes louées','Vestiaires','Bar/Café','Cours possible','Tournois'],
    'Surf':['Planche fournie','Combinaison','Instructeur certifié','Vidéo analyse','Transferts','Snack bar'],
    'Tennis':['Court en dur','Raquettes louées','Balles incluses','Coach possible','Vestiaires','Parking'],
    'Randonnée':['Guide certifié','Équipement rando','Eau et snack','Photos du parcours','Transfert','Assurance'],
    'Kitesurf':['Matériel fourni','Instructeur','Plage privée','Combinaison','GoPro incluse','Transport'],
    'Quad':['Quad fourni','Casque','Guide','Photos/vidéos','Eau et snack','Assurance'],
    'Hammam':['Gommage argan','Massage huile','Savon beldi','Thé à la menthe','Serviettes','Produits naturels'],
    'Fitness':['Salle équipée','Coach disponible','Vestiaires','Douches','Casiers','WiFi'],
    'Yoga':['Tapis fourni','Instructeur','Espace plein air','Thé offert','Vestiaires','Meditation'],
    'Basketball':['Terrain couvert','Maillots loués','Arbitre disponible','Vestiaires','Douches','Parking'],
    'Natation':['Piscine olympique','Couloir réservé','Casier','Serviette','Coach','Douches'],
    'Cyclisme':['Vélo fourni','Casque','Carte parcours','Eau incluse','Guide','Assurance'],
    "Tir à l'arc":['Arc fourni','Flèches','Instructeur','Cibles','Espace couvert','Parking'],
    'Boxe':['Gants fournis','Protège-dents','Coach certifié','Punching-bag','Vestiaires','Ring'],
    'Golf':['18 trous','Chariot','Coach disponible','Club loué','Driving range','Restaurant'],
    'Escalade':['Harnais fourni','Chaussons','Instructeur','Corde','Photos','Assurance'],
    'default':['Équipement fourni','Guide','Vestiaires','Parking','Assurance','Support 24h']
  };
  const am = amenMap[s.type] || amenMap['default'];
  document.getElementById('detailContent').innerHTML=`
  <div class="ph"><div class="ph-inner">
    <div class="bc">
      <span onclick="showPage('home')">Accueil</span><i class="fas fa-chevron-right"></i>
      <span onclick="showPage('sports')">Sports</span><i class="fas fa-chevron-right"></i>
      <span>${s.name}</span>
    </div>
    <h1>${s.name}</h1>
    <p>${s.city} · ${s.type} · ${s.loc}</p>
  </div></div>
  <div class="det-wrap">
    <div class="gallery">
      ${(()=>{const sportImgs=[s.img,'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80'];return sportImgs.map((img,i)=>`<div class="gi" onclick="openLB(${JSON.stringify(sportImgs)},${i})"><img src="${img}" alt="" style="height:100%;width:100%;object-fit:cover">${i===4?'<div class="gi-more">+3 photos</div>':''}</div>`).join('');})()}
    </div>
    <div class="det-layout">
      <div>
        <div class="det-city"><i class="fas fa-map-marker-alt"></i> ${s.city} · ${s.type}</div>
        <h1 class="det-name">${s.name}</h1>
        <div class="det-meta">
          <div class="det-rating"><i class="fas fa-star"></i> ${s.rating}</div>
          <span style="font-size:13px;color:var(--muted)">Activité vérifiée VistaMorocco</span>
          <span class="c-badge" style="position:static">${s.type}</span>
        </div>
        <div class="c-tags" style="margin-bottom:16px">
          <span class="tag">${s.city}</span>
          <span class="tag">${s.type}</span>
          <span class="tag">${s.loc}</span>
        </div>
        <p class="det-desc">
          Activité ${s.type.toLowerCase()} de qualité à ${s.city}, idéalement situé à ${s.loc}.
          Équipement professionnel, encadrement expert et expérience inoubliable garantis.
          Réservation flexible — annulation gratuite jusqu'à 24h avant.
        </p>
        <div class="det-sec">
          <h3 class="det-sec-title">Ce qui est inclus</h3>
          <div class="am-grid">${am.map(a=>`<div class="am"><i class="fas fa-check-circle"></i> ${a}</div>`).join('')}</div>
        </div>
        ${s.type==='Football'?`<div onclick="openLineUp()" style="cursor:pointer;display:flex;align-items:center;gap:20px;background:linear-gradient(135deg,#071a0b,#0a2410);border:1.5px solid rgba(0,200,83,.3);border-radius:16px;padding:20px 24px;margin-bottom:24px;transition:all .3s" onmouseover="this.style.borderColor='rgba(0,200,83,.7)'" onmouseout="this.style.borderColor='rgba(0,200,83,.3)'">
          <div style="font-size:36px">⚽</div>
          <div style="flex:1"><div style="font-size:10px;color:#00c853;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:4px">Outil interactif</div><div style="font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:3px;color:#fff">Créer ma formation</div><div style="font-size:12px;color:rgba(255,255,255,.45);margin-top:2px">Composez votre équipe · Drag & Drop · Export PNG</div></div>
          <div style="background:linear-gradient(135deg,#00c853,#007c33);color:#000;font-family:'Bebas Neue',sans-serif;font-size:13px;letter-spacing:1px;padding:10px 18px;border-radius:10px;white-space:nowrap">Ouvrir →</div>
        </div>`:''}
        <div class="det-sec">
          <h3 class="det-sec-title">Informations pratiques</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div style="padding:14px;border-radius:10px;border:1px solid var(--border);background:#fff">
              <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px">Localisation</div>
              <div style="font-weight:600;color:var(--midnight)">${s.loc}, ${s.city}</div>
            </div>
            <div style="padding:14px;border-radius:10px;border:1px solid var(--border);background:#fff">
              <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px">Type d'activité</div>
              <div style="font-weight:600;color:var(--midnight)">${s.type}</div>
            </div>
            <div style="padding:14px;border-radius:10px;border:1px solid var(--border);background:#fff">
              <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px">Note</div>
              <div style="font-weight:700;color:var(--gold)">${'★'.repeat(Math.floor(s.rating))} ${s.rating}/5</div>
            </div>
            <div style="padding:14px;border-radius:10px;border:1px solid var(--border);background:#fff">
              <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px">Statut</div>
              <div style="font-weight:600;color:var(--green)"><i class="fas fa-check-circle"></i> Disponible</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="bw">
          <div class="bw-price"><span class="bw-pval">${s.price.toLocaleString()}</span><span class="bw-punit"> ${s.unit}</span></div>
          <div class="bw-rating"><i class="fas fa-star" style="color:var(--gold)"></i> ${s.rating} · Activité vérifiée</div>
          <div style="background:var(--sand);border-radius:10px;padding:14px;margin-bottom:14px">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);margin-bottom:8px">Inclus dans le tarif</div>
            ${am.slice(0,4).map(a=>`<div style="font-size:13px;color:var(--midnight);padding:3px 0;display:flex;align-items:center;gap:6px"><i class="fas fa-check" style="color:var(--green);font-size:10px"></i>${a}</div>`).join('')}
          </div>
          <button class="btn-book-now" onclick="openSportBooking('${s.id}')">
            <i class="fas fa-calendar-check"></i> Réserver maintenant
          </button>
          <p class="w-note"><i class="fas fa-shield-alt" style="color:var(--green)"></i> Annulation gratuite 24h avant</p>
          ${s.type==='Football'?'<button onclick="openLineUp()" style="width:100%;margin-top:12px;padding:13px;border-radius:12px;border:2px solid #00c853;background:linear-gradient(135deg,#071a0b,#0a2410);color:#00c853;font-family:Bebas Neue,sans-serif;font-size:17px;letter-spacing:2px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">⚽ Créer ma formation</button>':''}
          <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border);font-size:13px;color:var(--muted);text-align:center">
            <i class="fas fa-phone" style="color:var(--terra)"></i> Besoin d'aide ? <a href="#" style="color:var(--terra);text-decoration:none">Contactez-nous</a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  showPage('detail');
}

function filterSportsCity(city,btn){
  spCityFilter=city;
  document.querySelectorAll('#sportsCityFilter .comp-badge').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  renderSports();
}

function filterSportsType(type,btn){
  spTypeFilter=type;
  document.querySelectorAll('#sportsTypeFilter .comp-badge').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  renderSports();
}

function openSportBooking(sid){
  const s=SPORTS.find(x=>x.id===sid);
  if(!s){showToast('Activité introuvable');return;}
  bkItem={id:sid,name:s.name,city:s.city,cat:s.type,price:s.price,img:s.img,isSport:true,unit:s.unit,isFootball:s.type==='Football'};
  bkTotal=s.price;
  const set=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  const setS=(id,v)=>{const el=document.getElementById(id);if(el)el.src=v;};
  set('bkTitle',s.name);
  setS('bkImg',s.img);
  set('bkName',s.name);
  set('bkLoc',s.city+' · '+s.type+' · '+s.loc);
  set('bkPriceLbl',s.price.toLocaleString()+' '+s.unit);
  set('bkTotal2',s.price.toLocaleString()+' '+s.unit);
  const pb=document.getElementById('bkPB');
  if(pb){
    pb.style.display='block';
    set('pbN','Tarif '+s.type);
    set('pbNC',s.price.toLocaleString()+' '+s.unit);
    set('pbF','Inclus');
    set('pbT',s.price.toLocaleString()+' '+s.unit);
  }
  // Show/hide football lineup section in booking
  const fbSection=document.getElementById('bkFootballSection');
  if(fbSection) fbSection.style.display=s.type==='Football'?'block':'none';
  resetBkSteps();
  openModal('bookingModal');
}

// ═══ BOOKING ═══
let bkPlayers=[];
function bkAddPlayer(){
  const id=Date.now();
  bkPlayers.push({id,name:'',num:bkPlayers.length+1,pos:'MID'});
  bkRenderPlayers();
}
function bkRemovePlayer(id){bkPlayers=bkPlayers.filter(p=>p.id!==id);bkRenderPlayers();}
function bkRenderPlayers(){
  const list=document.getElementById('bkPlayersList');
  if(!list)return;
  list.innerHTML=bkPlayers.map(p=>`<div style="display:grid;grid-template-columns:1fr 56px 80px 32px;gap:6px;align-items:center;margin-bottom:4px"><input type="text" value="${p.name}" placeholder="Nom du joueur" onchange="bkPlayers.find(x=>x.id===${p.id}).name=this.value" style="padding:8px 10px;border-radius:8px;border:1.5px solid rgba(0,200,83,.2);background:rgba(255,255,255,.05);color:#fff;font-family:Jost,sans-serif;font-size:13px;outline:none"><input type="number" value="${p.num}" min="1" max="99" onchange="bkPlayers.find(x=>x.id===${p.id}).num=this.value" style="padding:8px 6px;border-radius:8px;border:1.5px solid rgba(0,200,83,.2);background:rgba(255,255,255,.05);color:#fff;font-family:Jost,sans-serif;font-size:13px;outline:none;text-align:center"><select onchange="bkPlayers.find(x=>x.id===${p.id}).pos=this.value" style="padding:8px 6px;border-radius:8px;border:1.5px solid rgba(0,200,83,.2);background:#0d2018;color:#fff;font-family:Jost,sans-serif;font-size:12px;outline:none"><option ${p.pos==='GK'?'selected':''}>GK</option><option ${p.pos==='DEF'?'selected':''}>DEF</option><option ${p.pos==='MID'?'selected':''}>MID</option><option ${p.pos==='FWD'?'selected':''}>FWD</option></select><button onclick="bkRemovePlayer(${p.id})" style="background:rgba(255,50,50,.15);border:none;border-radius:8px;color:#ff5555;cursor:pointer;font-size:14px;padding:8px 0">✕</button></div>`).join('');
}
function openBooking(id){
  if(!currentUser){openAuth('login');showToast('Connectez-vous pour réserver');return;}
  const item=DB.find(x=>x.id===id);
  if(!item)return;
  bkItem=item;
  document.getElementById('bkTitle').textContent=item.name;
  document.getElementById('bkImg').src=item.img;
  document.getElementById('bkName').textContent=item.name;
  document.getElementById('bkLoc').textContent=item.city+' · '+item.cat;
  document.getElementById('bkPriceLbl').textContent=item.price.toLocaleString()+' MAD / nuit';
  resetBkSteps();
  calcBk();
  openModal('bookingModal');
}

function resetBkSteps(){
  [1,2,3].forEach(n=>{
    document.getElementById('bp'+n).classList.toggle('on',n===1);
    const bs=document.getElementById('bs'+n);
    bs.classList.remove('on','done');
    if(n===1)bs.classList.add('on');
  });
}

function calcBk(){
  if(!bkItem||!bkItem.price||typeof bkItem.price!=='number')return;
  if(bkItem.isSport) return; // Sport pricing already set in openSportBooking
  const ci=new Date(document.getElementById('bkIn').value);
  const co=new Date(document.getElementById('bkOut').value);
  const pb=document.getElementById('bkPB');
  if(isNaN(ci)||isNaN(co)||co<=ci){if(pb)pb.style.display='none';return;}
  const n=Math.round((co-ci)/864e5);
  const base=bkItem.price*n,fees=Math.round(base*.12),tot=base+fees;
  bkTotal=tot;
  if(pb)pb.style.display='block';
  const s=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  s('pbN',`${bkItem.price.toLocaleString()} MAD × ${n} nuit${n>1?'s':''}`);
  s('pbNC',base.toLocaleString()+' MAD'); s('pbF',fees.toLocaleString()+' MAD');
  s('pbT',tot.toLocaleString()+' MAD');
  s('bkTotal2',tot.toLocaleString()+' MAD');
}

function bkNext(){
  const ci=document.getElementById('bkIn').value,co=document.getElementById('bkOut').value;
  if(!bkItem?.isSport && (!ci||!co||new Date(co)<=new Date(ci))){showToast('Sélectionnez des dates valides');return;}
  document.getElementById('bp1').classList.remove('on');
  document.getElementById('bp2').classList.add('on');
  document.getElementById('bs1').classList.remove('on');document.getElementById('bs1').classList.add('done');
  document.getElementById('bs2').classList.add('on');
}

function selPay(el,m){
  document.querySelectorAll('.pm').forEach(p=>p.classList.remove('on'));
  el.classList.add('on');
  document.getElementById('cardFlds').style.display=m==='card'?'block':'none';
}

function processPayment(){
  const btn=document.getElementById('payBtn');
  btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Traitement en cours...';
  btn.disabled=true;
  setTimeout(()=>{
    btn.innerHTML='<i class="fas fa-lock"></i> Payer maintenant';btn.disabled=false;
    document.getElementById('bp2').classList.remove('on');
    document.getElementById('bp3').classList.add('on');
    document.getElementById('bs2').classList.remove('on');document.getElementById('bs2').classList.add('done');
    document.getElementById('bs3').classList.add('on');
    const ref='VM-'+Date.now().toString(36).toUpperCase().slice(-6);
    document.getElementById('confRef').textContent=ref;
    const ci=document.getElementById('bkIn').value,co=document.getElementById('bkOut').value;
    document.getElementById('confDetails').innerHTML=`
      ${bkItem?.isSport ? '⚽' : '🏨'} <strong>${bkItem?.name||''}</strong><br>
      📍 ${bkItem?.city||''}<br>
      ${bkItem?.isSport ? '🏆 '+bkItem.cat : '📅 '+ci+' → '+co}<br>
      👥 ${document.getElementById('bkGuests').value}<br>
      💳 Total payé : <strong style="color:var(--terra)">${bkTotal.toLocaleString()} MAD</strong>`;
    showToast('✅ Réservation confirmée ! Email envoyé.','ok');
  },2000);
}

// ═══ AUTH ═══
function openAuth(tab='login'){switchAuth(tab);openModal('authModal');}
function switchAuth(tab){
  document.getElementById('atLogin').classList.toggle('on',tab==='login');
  document.getElementById('atReg').classList.toggle('on',tab==='register');
  document.getElementById('formLogin').style.display=tab==='login'?'block':'none';
  document.getElementById('formReg').style.display=tab==='register'?'block':'none';
}
function doLogin(){
  const email=document.getElementById('lEmail').value.trim();
  const pwd=document.getElementById('lPwd').value;
  if(!email.includes('@')){showToast('Email invalide');return;}
  if(pwd.length<4){showToast('Mot de passe requis');return;}
  const stored=JSON.parse(localStorage.getItem('vm_reg')||'null');
  currentUser=stored&&stored.email===email?stored:{firstName:email.split('@')[0],email};
  localStorage.setItem('vm_user',JSON.stringify(currentUser));
  closeModal('authModal');updateNav();showToast(`Bienvenue, ${currentUser.firstName}! 👋`,'ok');
}
function doRegister(){
  const first=document.getElementById('rFirst').value.trim();
  const email=document.getElementById('rEmail').value.trim();
  const pwd=document.getElementById('rPwd').value;
  if(!first){showToast('Prénom requis');return;}
  if(!email.includes('@')){showToast('Email invalide');return;}
  if(pwd.length<8){showToast('Mot de passe : min. 8 caractères');return;}
  currentUser={firstName:first,lastName:document.getElementById('rLast').value.trim(),email};
  localStorage.setItem('vm_user',JSON.stringify(currentUser));
  localStorage.setItem('vm_reg',JSON.stringify(currentUser));
  closeModal('authModal');updateNav();showToast(`Bienvenue, ${first}! Compte créé 🎉`,'ok');
}
function socialLogin(p){
  currentUser={firstName:p==='Google'?'Mohammed':'Yasmine',email:`user@${p.toLowerCase()}.com`};
  localStorage.setItem('vm_user',JSON.stringify(currentUser));
  closeModal('authModal');updateNav();showToast(`Connexion ${p} réussie! 🎉`,'ok');
}
function updateNav(){
  const a=document.getElementById('navActions');
  if(!a)return;
  if(currentUser){
    a.innerHTML=`<div class="user-badge"><div class="user-av">${currentUser.firstName[0].toUpperCase()}</div><span class="user-nm">${currentUser.firstName}</span></div>
    <button class="btn-ghost" onclick="logout()" style="font-size:12px">Déconnexion</button>`;
  }
}
function logout(){currentUser=null;localStorage.removeItem('vm_user');document.getElementById('navActions').innerHTML='<button class="btn-ghost" onclick="openAuth(\'login\')">Connexion</button><button class="btn-primary" onclick="openAuth(\'register\')">S\'inscrire</button>';showToast('Déconnecté');}
function chkPwd(v){let s=0;if(v.length>=8)s++;if(/[A-Z]/.test(v))s++;if(/[0-9]/.test(v))s++;if(/[^A-Za-z0-9]/.test(v))s++;const f=document.getElementById('pwdFill');if(!f)return;const lvl=[['#e74c3c','20%'],['#e67e22','45%'],['#f1c40f','70%'],['#2d7a4f','100%']];const[c,w]=lvl[Math.min(s,3)];f.style.width=v.length?w:'0%';f.style.background=c;}

// ═══ UTILS ═══
function openModal(id){document.getElementById(id).classList.add('open');document.body.style.overflow='hidden';}
function closeModal(id){document.getElementById(id).classList.remove('open');document.body.style.overflow='';}
function closeOv(e,id){if(e.target.id===id)closeModal(id);}
function showToast(msg,type=''){
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  t.className='toast'+(type?' '+type:'');t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}
function fmtCard(i){let v=i.value.replace(/\D/g,'').slice(0,16);i.value=v.match(/.{1,4}/g)?.join(' ')||v;}
function fmtExp(i){let v=i.value.replace(/\D/g,'').slice(0,4);if(v.length>=2)v=v.slice(0,2)+'/'+v.slice(2);i.value=v;}

// ═══ CARS DATA ═══
const CARS = [
  {id:'c1',name:'Dacia Sandero',type:'Citadine',city:'Casablanca',price:180,unit:'MAD/j',rating:4.6,seats:5,fuel:'Essence',transmission:'Manuelle',img:'https://images.unsplash.com/photo-1541443131876-a80aafd5d9d8?auto=format&fit=crop&w=600&q=80',badge:'Économique',tags:['Clim','Bluetooth','GPS']},
  {id:'c2',name:'Renault Clio',type:'Citadine',city:'Marrakech',price:200,unit:'MAD/j',rating:4.7,seats:5,fuel:'Essence',transmission:'Automatique',img:'https://images.unsplash.com/photo-1609752439401-c84d1b34c5e4?auto=format&fit=crop&w=600&q=80',badge:'Top vente',tags:['Clim','USB','Caméra recul']},
  {id:'c3',name:'Dacia Duster',type:'SUV',city:'Agadir',price:350,unit:'MAD/j',rating:4.8,seats:5,fuel:'Diesel',transmission:'Manuelle',img:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80',badge:'4x4 Piste',tags:['4x4','Clim','GPS','Grand coffre']},
  {id:'c4',name:'Toyota Land Cruiser',type:'SUV',city:'Merzouga',price:800,unit:'MAD/j',rating:4.9,seats:7,fuel:'Diesel',transmission:'Automatique',img:'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=600&q=80',badge:'Sahara Ready',tags:['4x4','7 places','GPS','Frigo']},
  {id:'c5',name:'Mercedes Classe E',type:'Berline',city:'Casablanca',price:650,unit:'MAD/j',rating:4.8,seats:5,fuel:'Essence',transmission:'Automatique',img:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80',badge:'Premium',tags:['Luxe','Clim','Cuir','Chauffeur dispo']},
  {id:'c6',name:'BMW Série 5',type:'Berline',city:'Rabat',price:700,unit:'MAD/j',rating:4.9,seats:5,fuel:'Essence',transmission:'Automatique',img:'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80',badge:'Coup de cœur',tags:['Luxe','Toit ouvrant','Cuir','Sound system']},
  {id:'c7',name:'Porsche Cayenne',type:'SUV',city:'Marrakech',price:1200,unit:'MAD/j',rating:5.0,seats:5,fuel:'Essence',transmission:'Automatique',img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',badge:'Prestige',tags:['Luxe','Sport','Panoramique','360°']},
  {id:'c8',name:'Ford Mustang Cabriolet',type:'Sportive',city:'Agadir',price:900,unit:'MAD/j',rating:4.9,seats:4,fuel:'Essence',transmission:'Automatique',img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80',badge:'Cabriolet 🌞',tags:['Cabriolet','V8','Son Racing','Photo shoot']},
  {id:'c9',name:'Mercedes Vito',type:'Utilitaire',city:'Fès',price:450,unit:'MAD/j',rating:4.6,seats:8,fuel:'Diesel',transmission:'Manuelle',img:'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80',badge:'Groupe',tags:['8 places','Grand coffre','Clim','GPS']},
  {id:'c10',name:'Peugeot 208',type:'Citadine',city:'Fès',price:170,unit:'MAD/j',rating:4.5,seats:5,fuel:'Essence',transmission:'Manuelle',img:'https://images.unsplash.com/photo-1592853598064-d6b0d028a905?auto=format&fit=crop&w=600&q=80',badge:'Économique',tags:['Clim','Bluetooth','Faible conso']},
  {id:'c11',name:'Audi Q7',type:'SUV',city:'Casablanca',price:950,unit:'MAD/j',rating:4.9,seats:7,fuel:'Diesel',transmission:'Automatique',img:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80',badge:'VIP',tags:['7 places','Luxe','360°','Massage']},
  {id:'c12',name:'Renault Kangoo',type:'Utilitaire',city:'Rabat',price:280,unit:'MAD/j',rating:4.4,seats:2,fuel:'Diesel',transmission:'Manuelle',img:'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',badge:'Utilitaire',tags:['Grand volume','Hayon','Fiable']},
];

let carTypeActive = '';

function renderCars(){
  const data = carTypeActive ? CARS.filter(c=>c.type===carTypeActive) : CARS;
  const g = document.getElementById('carsGrid');
  if(!g) return;
  g.innerHTML = data.map(c=>{
    const stars = '★'.repeat(Math.floor(c.rating));
    return `<div class="card" onclick="openCarDetail('${c.id}')">
      <div class="card-img">
        <img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1541443131876-a80aafd5d9d8?auto=format&fit=crop&w=600&q=80'">
        <span class="c-badge">${c.badge}</span>
        <div style="position:absolute;bottom:10px;left:12px;display:flex;gap:6px">
          <span style="background:rgba(0,0,0,.65);color:#fff;font-size:10px;font-weight:600;padding:3px 8px;border-radius:4px">👥 ${c.seats} places</span>
          <span style="background:rgba(0,0,0,.65);color:#fff;font-size:10px;font-weight:600;padding:3px 8px;border-radius:4px">⛽ ${c.fuel}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="c-city"><i class="fas fa-map-marker-alt"></i> ${c.city} · ${c.type}</div>
        <div class="c-name">${c.name}</div>
        <div class="c-rating"><span class="c-stars">${stars}</span><span class="c-rnum">${c.rating}</span><span class="c-rcnt">${c.transmission}</span></div>
        <div class="c-tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-foot">
          <div><div class="c-pfrom">À partir de</div><span class="c-price">${c.price.toLocaleString()}</span><span class="c-punit"> ${c.unit}</span></div>
          <button class="btn-rsv" onclick="event.stopPropagation();openCarBooking('${c.id}')">Louer</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCarType(type, btn){
  carTypeActive = type;
  document.querySelectorAll('#carTypeFilter .comp-badge').forEach(b=>b.classList.remove('on'));
  if(btn) btn.classList.add('on');
  renderCars();
}

function openCarDetail(cid){
  const c = CARS.find(x=>x.id===cid);
  if(!c) return;
  showToast(`🚗 ${c.name} — ${c.price} ${c.unit}`,'ok');
  openCarBooking(cid);
}

function openCarBooking(cid){
  const c = CARS.find(x=>x.id===cid);
  if(!c){showToast('Voiture introuvable');return;}
  bkItem={id:cid,name:c.name,city:c.city,cat:'Location Voitures',price:c.price,img:c.img,isSport:true,unit:c.unit};
  bkTotal=c.price;
  const set=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  const setS=(id,v)=>{const el=document.getElementById(id);if(el)el.src=v;};
  set('bkTitle','Location — '+c.name);
  setS('bkImg',c.img);
  set('bkName',c.name);
  set('bkLoc',c.city+' · '+c.type+' · '+c.transmission);
  set('bkPriceLbl',c.price.toLocaleString()+' '+c.unit);
  const pb=document.getElementById('bkPB');
  if(pb){
    pb.style.display='block';
    set('pbN','Tarif journalier');
    set('pbNC',c.price.toLocaleString()+' '+c.unit);
    set('pbF','Assurance incluse');
    set('pbT',c.price.toLocaleString()+' '+c.unit);
  }
  set('bkTotal2',c.price.toLocaleString()+' '+c.unit);
  resetBkSteps();
  openModal('bookingModal');
}

// ═══ CAR WASH ═══
let cwExtra = 0;
function openCarWash(){ document.getElementById('carWashModal').style.display='block'; document.body.style.overflow='hidden'; updateCWPrice(); }
function closeCarWash(){ document.getElementById('carWashModal').style.display='none'; document.body.style.overflow=''; }
function selectCWFormula(el, extra){
  cwExtra = extra;
  document.querySelectorAll('.cw-formula').forEach(f=>{ f.style.border='1.5px solid rgba(255,255,255,.1)'; f.style.background='rgba(255,255,255,.04)'; });
  el.style.border='1.5px solid #1e88e5'; el.style.background='rgba(30,136,229,.12)';
  updateCWPrice();
}
function updateCWPrice(){
  const base = parseInt(document.getElementById('cwVehicle')?.value||150) + cwExtra;
  const el1=document.getElementById('cwPriceBase'), el2=document.getElementById('cwPriceTotal');
  if(el1) el1.textContent = base + ' MAD';
  if(el2) el2.textContent = base + ' MAD';
}
function bookCarWash(){
  const addr=document.getElementById('cwAddress')?.value.trim();
  const date=document.getElementById('cwDate')?.value.trim();
  if(!addr){showToast('Entrez votre adresse');return;}
  if(!date){showToast('Entrez la date souhaitée');return;}
  showToast('✅ Lavage réservé ! Notre technicien vous contacte.','ok');
  setTimeout(()=>closeCarWash(),1800);
}

// ═══ PWA INSTALL ═══
let deferredPrompt = null;

// Detect iOS
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
const isInStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if(!localStorage.getItem('vm_pwa_dismissed') && !isInStandalone) {
    setTimeout(()=>{ const b=document.getElementById('pwa-banner'); if(b) b.classList.add('show'); }, 2000);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if(!localStorage.getItem('vm_pwa_dismissed') && !isInStandalone) {
    // Show for iOS (no beforeinstallprompt) or as fallback after splash
    setTimeout(()=>{
      const b=document.getElementById('pwa-banner');
      if(b && !b.classList.contains('show')) b.classList.add('show');
    }, 3200);
  }
});

function installPWA(){
  if(deferredPrompt){
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(r=>{
      if(r.outcome==='accepted'){
        showToast('✅ VistaMorocco installée avec succès !','ok');
        dismissPWA();
      }
      deferredPrompt=null;
    });
  } else if(isIOS){
    // iOS instructions
    showToast("📲 Appuyez sur 􀈂 puis 'Sur l'écran d'accueil'", 'ok');
    setTimeout(()=>dismissPWA(), 4000);
  } else {
    showToast("📲 Menu navigateur → 'Installer l'application'", 'ok');
    setTimeout(()=>dismissPWA(), 4000);
  }
}

function dismissPWA(){
  const b=document.getElementById('pwa-banner');
  if(b){
    b.style.transition='all .35s ease';
    b.style.opacity='0';
    b.style.transform='translateY(10px) scale(.97)';
    setTimeout(()=>b.classList.remove('show'),350);
  }
  localStorage.setItem('vm_pwa_dismissed','1');
}

window.addEventListener('appinstalled', ()=>{
  showToast('🎉 VistaMorocco installée !','ok');
  dismissPWA();
});

// ═══ LINEUP ═══
let luP=[
  {id:1,name:'خالد',num:1,pos:'GK',color:'#c62828',img:null,x:50,y:87,cap:false},
  {id:2,name:'يوسف',num:2,pos:'DEF',color:'#1565c0',img:null,x:25,y:67,cap:false},
  {id:3,name:'عمر',num:5,pos:'DEF',color:'#1565c0',img:null,x:75,y:67,cap:false},
  {id:4,name:'كريم',num:7,pos:'MID',color:'#1565c0',img:null,x:25,y:40,cap:false},
  {id:5,name:'أنس',num:8,pos:'MID',color:'#1565c0',img:null,x:75,y:40,cap:false},
  {id:6,name:'سامي',num:10,pos:'FWD',color:'#1565c0',img:null,x:50,y:16,cap:true},
];
let luB=[{id:7,name:'رضا',num:5,img:null},{id:8,name:'فيصل',num:11,img:null}];
let luNid=9,luActiv=null,luUpId=null,luUpType='p',luColor='#1565c0';
const luForms={'1-2-2':[{x:50,y:87},{x:26,y:66},{x:74,y:66},{x:26,y:38},{x:74,y:38},{x:50,y:14}],'1-1-2-1':[{x:50,y:87},{x:50,y:68},{x:26,y:46},{x:74,y:46},{x:50,y:26},{x:50,y:12}],'1-3-1':[{x:50,y:87},{x:22,y:60},{x:50,y:56},{x:78,y:60},{x:50,y:28},{x:50,y:12}],'1-1-3':[{x:50,y:87},{x:50,y:67},{x:18,y:40},{x:50,y:35},{x:82,y:40},{x:50,y:14}],'1-2-1-1':[{x:50,y:87},{x:26,y:68},{x:74,y:68},{x:50,y:50},{x:50,y:28},{x:50,y:12}],'diamond':[{x:50,y:87},{x:50,y:70},{x:20,y:50},{x:80,y:50},{x:50,y:30},{x:50,y:12}]};

function luRender(){luRenderPitch();luRenderList();luRenderBench();}

function luRenderPitch(){
  const layer=document.getElementById('lu-players');if(!layer)return;
  layer.innerHTML='';
  luP.forEach(p=>{
    const el=document.createElement('div');
    el.className='lu-player'+(p.id===luActiv?' sel':'');
    el.style.cssText=`left:${p.x}%;top:${p.y}%`;
    el.innerHTML=`<div class="lu-pw">
      <div class="lu-pc" style="--lc:${p.color}" onclick="luEdit(${p.id})">${p.img?`<img src="${p.img}" alt="">`:`<span style="color:#fff;font-weight:900;font-family:'Bebas Neue',sans-serif;font-size:17px">${p.name.charAt(0).toUpperCase()}</span>`}</div>
      <div class="lu-pnum">${p.num}</div>
      <div class="lu-pcam" onclick="luTrigUp(${p.id},'p')">📷</div>
      ${p.cap?'<div class="lu-cap">©</div>':''}
    </div><div class="lu-ntag">${p.name.toUpperCase()}</div>`;
    luDrag(el,p);layer.appendChild(el);
  });
}

function luRenderList(){
  const list=document.getElementById('lu-list');if(!list)return;
  list.innerHTML='';
  luP.forEach(p=>{
    const d=document.createElement('div');
    d.className='lu-pli'+(p.id===luActiv?' on':'');
    d.innerHTML=`<div class="lu-pnum2">${p.num}</div>
    <div class="lu-pphoto" onclick="luTrigUp(${p.id},'p')">${p.img?`<img src="${p.img}" alt="">`:p.name.charAt(0)}</div>
    <div class="lu-pinfo"><input type="text" class="lu-pname" value="${p.name}" onchange="luSetName(${p.id},this.value)" onclick="luSel(${p.id})"><div class="lu-ppos">${p.pos}</div></div>
    <div class="lu-pbtns">
      <button class="lu-pb cap${p.cap?' on':''}" onclick="luCap(${p.id})">©</button>
      <button class="lu-pb del" onclick="luDel(${p.id})">✕</button>
    </div>`;
    list.appendChild(d);
  });
}

function luRenderBench(){
  const row=document.getElementById('lu-bench');if(!row)return;
  row.innerHTML='';
  luB.forEach(p=>{
    const el=document.createElement('div');el.className='lu-bp';
    el.innerHTML=`<div class="lu-bph" onclick="luTrigUp(${p.id},'b')">${p.img?`<img src="${p.img}" alt="">`:p.name.charAt(0)}</div><div class="lu-bnm">${p.name}</div>`;
    row.appendChild(el);
  });
}

function luDrag(el,player){
  let drag=false;
  const gp=e=>{const t=e.touches?e.touches[0]:e;return{cx:t.clientX,cy:t.clientY};};
  const down=e=>{e.preventDefault();drag=true;luSel(player.id);document.addEventListener('mousemove',move);document.addEventListener('touchmove',move,{passive:false});document.addEventListener('mouseup',up);document.addEventListener('touchend',up);};
  const move=e=>{if(!drag)return;e.preventDefault();const{cx,cy}=gp(e);const pitch=document.getElementById('lu-pitch').getBoundingClientRect();player.x=Math.max(6,Math.min(94,((cx-pitch.left)/pitch.width)*100));player.y=Math.max(6,Math.min(94,((cy-pitch.top)/pitch.height)*100));el.style.left=player.x+'%';el.style.top=player.y+'%';};
  const up=()=>{drag=false;document.removeEventListener('mousemove',move);document.removeEventListener('touchmove',move);document.removeEventListener('mouseup',up);document.removeEventListener('touchend',up);};
  el.addEventListener('mousedown',down);el.addEventListener('touchstart',down,{passive:false});
}

function luSel(id){luActiv=id;luRenderList();luRenderPitch();}
function luSetName(id,v){const p=luP.find(x=>x.id===id);if(p){p.name=v;luRenderPitch();}}
function luCap(id){luP.forEach(p=>p.cap=false);const p=luP.find(x=>x.id===id);if(p)p.cap=true;luRender();}
function luDel(id){luP=luP.filter(x=>x.id!==id);if(luActiv===id)luActiv=null;luRender();}
function luAddPlayer(){const id=luNid++;luP.push({id,name:'لاعب',num:id,pos:'MID',color:luColor,img:null,x:50,y:50,cap:false});luRender();luSel(id);}
function luAddBench(){const id=luNid++;luB.push({id,name:'احتياطي',num:id,img:null});luRenderBench();}
function luSetForm(key,btn){document.querySelectorAll('.lu-form-btn').forEach(b=>b.classList.remove('on'));btn.classList.add('on');const pos=luForms[key];if(!pos)return;luP.forEach((p,i)=>{if(pos[i]){p.x=pos[i].x;p.y=pos[i].y;}});luRenderPitch();}
function luSetColor(c,el){luColor=c;document.querySelectorAll('.lu-sw').forEach(s=>s.classList.remove('on'));el.classList.add('on');if(luActiv){const p=luP.find(x=>x.id===luActiv);if(p){p.color=c;luRenderPitch();}}}
function luUpdateTeam(t){const v=document.getElementById('lu-t'+t)?.value;const el=document.getElementById('lu-td'+t);if(el)el.textContent=v;}
function luUpdateInfo(){const g=id=>document.getElementById(id)?.value||'';const s=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};s('lu-bDate',g('lu-date'));s('lu-bVenue',g('lu-venue'));s('lu-bComp',g('lu-comp'));}
function luEdit(id){const p=luP.find(x=>x.id===id);if(!p)return;const n=prompt('اسم اللاعب:',p.name);if(n!=null)p.name=n.trim()||p.name;const num=prompt('رقم:',p.num);if(num!=null&&!isNaN(num))p.num=parseInt(num)||p.num;const pos=prompt('المنصب (GK/DEF/MID/FWD):',p.pos);if(pos!=null)p.pos=pos.trim()||p.pos;luRender();}
function luTrigUp(id,type){luUpId=id;luUpType=type;document.getElementById('lu-upPlayer').click();}
function luHandleImg(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{if(luUpType==='p'){const p=luP.find(x=>x.id===luUpId);if(p){p.img=ev.target.result;luRender();}}else{const p=luB.find(x=>x.id===luUpId);if(p){p.img=ev.target.result;luRenderBench();}}};r.readAsDataURL(f);e.target.value='';}
function luUploadLogo(team){document.getElementById('lu-upLogo'+team).click();}
function luHandleLogo(e,team){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{const el=document.getElementById('lu-logo'+team);if(el)el.innerHTML=`<img src="${ev.target.result}" alt="">`;};r.readAsDataURL(f);e.target.value='';}
function luReset(){if(!confirm('Réinitialiser ?'))return;luP.forEach(p=>{p.img=null;p.cap=false;});luSetForm('1-2-2',document.querySelector('.lu-form-btn.on')||document.querySelector('.lu-form-btn'));luRender();}
function luExport(){if(window.html2canvas){_luExp();return;}const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';s.onload=_luExp;document.head.appendChild(s);}
function _luExp(){html2canvas(document.getElementById('lu-pitch'),{backgroundColor:null,scale:2,useCORS:true}).then(c=>{const a=document.createElement('a');a.download='lineup.png';a.href=c.toDataURL('image/png');a.click();showToast('📸 Image sauvegardée!','ok');});}
function luShare(){const url=location.href.split('?')[0];navigator.clipboard.writeText(url).then(()=>showToast('🔗 Lien copié!','ok'));}
function openLineUp(){
  const m=document.getElementById('lineupModal');
  if(!m){showToast('Chargement en cours...');return;}
  m.style.display='flex';
  m.style.flexDirection='column';
  document.body.style.overflow='hidden';
  setTimeout(()=>{
    const layer=document.getElementById('lu-players');
    if(!layer||!layer.children.length){
      const btn=document.querySelector('#lu-fgrid .lu-form-btn.on')||document.querySelector('#lu-fgrid .lu-form-btn');
      if(btn) luSetForm('1-2-2',btn);
      luRender();
      luUpdateInfo();
    }
  },80);
}
function closeLineUp(){const m=document.getElementById('lineupModal');if(m)m.style.display='none';document.body.style.overflow='';}
function initLineUp(){if(!document.getElementById('lu-players')?.children.length){const btn=document.querySelector('#lu-fgrid .lu-form-btn.on')||document.querySelector('#lu-fgrid .lu-form-btn');if(btn)luSetForm('1-2-2',btn);luRender();luUpdateInfo();}}

// ═══ SERVICE WORKER (inline via Blob) ═══
(function registerSW(){
  if(!('serviceWorker' in navigator)) return;

  const swCode = `
const CACHE = 'vistamorocco-v1';
const ASSETS = []; // Single HTML file — cache on first fetch

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Cache-first for same-origin, network-first for external (fonts, images)
  const url = new URL(e.request.url);
  if(url.origin !== location.origin) {
    // External: network with cache fallback
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  // Same-origin: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      const network = fetch(e.request).then(res => {
        caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      });
      return cached || network;
    })
  );
});
  `;

  const blob = new Blob([swCode], {type:'application/javascript'});
  const swURL = URL.createObjectURL(blob);

  navigator.serviceWorker.register(swURL, {scope: './'})
    .then(reg => {
      console.log('[VistaMorocco] SW registered:', reg.scope);
    })
    .catch(err => {
      // Blob SW may be blocked in some browsers — silent fail is OK
      console.log('[VistaMorocco] SW not available:', err.message);
    });
})();

// ═══ HERO SLIDESHOW ═══
(function initHeroSlideshow(){
  const slides=document.querySelectorAll('.hero-slide');
  const dotsContainer=document.getElementById('heroDots');
  if(!slides.length||!dotsContainer)return;
  let cur=0;
  // Build dots
  slides.forEach((_,i)=>{
    const d=document.createElement('button');
    d.className='hero-dot'+(i===0?' active':'');
    d.onclick=()=>goSlide(i);
    dotsContainer.appendChild(d);
  });
  function goSlide(n){
    slides[cur].classList.remove('active');
    document.querySelectorAll('.hero-dot')[cur].classList.remove('active');
    cur=(n+slides.length)%slides.length;
    slides[cur].classList.add('active');
    document.querySelectorAll('.hero-dot')[cur].classList.add('active');
  }
  setInterval(()=>goSlide(cur+1),5000);
})();

// ═══ LIGHTBOX ═══
let lbImgs=[];
let lbIdx=0;
function openLB(imgs,idx){
  lbImgs=imgs; lbIdx=idx;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow='hidden';
  lbRender();
  // keyboard nav
  document.addEventListener('keydown',lbKey);
}
function closeLB(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow='';
  document.removeEventListener('keydown',lbKey);
}
function lbNav(dir){lbIdx=(lbIdx+dir+lbImgs.length)%lbImgs.length;lbRender();}
function lbKey(e){if(e.key==='ArrowLeft')lbNav(-1);else if(e.key==='ArrowRight')lbNav(1);else if(e.key==='Escape')closeLB();}
function lbRender(){
  const img=document.getElementById('lb-img');
  img.style.opacity='0';
  setTimeout(()=>{img.src=lbImgs[lbIdx];img.style.opacity='1';},150);
  document.getElementById('lb-counter').textContent=(lbIdx+1)+' / '+lbImgs.length;
  const thumbs=document.getElementById('lb-thumbs');
  thumbs.innerHTML=lbImgs.map((src,i)=>`<img class="lb-thumb${i===lbIdx?' active':''}" src="${src}" onclick="lbIdx=${i};lbRender()">`).join('');
}

