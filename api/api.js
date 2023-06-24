const foods = [
  {
    name: "Cinta de garbanzo con espinas y salsa de setas portobello",
    diets: ["Sin TACC", "Vegano"],
    image:
      "https://content-cocina.lecturas.com/medio/2023/04/24/cintas_de_garbanzo_con_espinacas_y_salsa_de_setas_portobello_7f4208fc_1200x1200.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "Pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Pasta de camarones y vino blanco",
    diets: ["Sin TACC"],
    image:
      "https://www.cuerpomente.com/medio/2023/06/01/delicias-de-raviolis-de-maiz-con-relleno-de-setas-portobello-y-boletus-a-la-trufa_00000000_230601170012_1063x718.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Delicia de Raviolis de maíz con relleno de setas portobello y boletus a la trufa",
    diets: ["Vegetariano"],
    image:
      "https://www.cuerpomente.com/medio/2023/06/01/panzerotti-o-medialunas-de-arroz-con-relleno-de-pera-y-ricotta_00000000_230601103938_1063x717.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Panzerotti o meidalunas de arroz con relleno de pera y ricotta",
    diets: ["Sin TACC", "Vegetariano", "Vegano"],
    image:
      "https://www.cuerpomente.com/medio/2023/06/01/tallarines-de-trigo-sarraceno-integral-con-salsa-arrabbiata_00000000_230601103730_1063x718.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Tallarines de trigo sarraceno integral con salsa arrabiata ",
    diets: ["Vegetariano", "Vegano"],
    image:
      "https://www.cuerpomente.com/medio/2023/06/01/noquis-de-patata-y-trigo-sarraceno-con-salsa-pesto-de-rucula-y-nueces_00000000_230601103837_1063x717.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Raviolones caseros",
    diets: ["Sin TACC"],
    image:
      "https://www.cuerpomente.com/medio/2023/06/01/noquis-de-patata-y-trigo-sarraceno-con-salsa-pesto-de-rucula-y-nueces_00000000_230601103837_1063x717.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Pasta con atún en salsa de chipotle",
    diets: ["Sin TACC", "Sin Lactosa"],
    image:"https://www.lucchetti.com.mx/wp-content/uploads/2019/03/DESKTOP_MOBILE_imagenes_de_1024x683-5.png",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Pasta rellena",
    diets: ["Vegetariano"],
    image:
      "https://img-global.cpcdn.com/recipes/7041b21955686cf2/1360x964cq70/pasta-rellenas-sin-tacc-sin-gluten-vegan-foto-principal.webp",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Pasta con salteado de verduras",
    diets: ["Vegetariano", "Vegano"],
    image:
      "https://img-global.cpcdn.com/recipes/6e877bb633a841aa/1360x964cq70/pastas-con-salteado-de-verduras-sin-gluten-foto-principal.webp",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Fideos de arroz con vegetales horneados",
    diets: ["Sin TACC", "Vegetariano", "Vegano"],
    image:
      "https://img-global.cpcdn.com/recipes/bcf9698a5a0fdeb4/1360x964cq70/fideos-de-arroz-con-vegetales-horneados-pasta-apta-celiacos-foto-principal.webp",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Tagliatelle con salsa de seitán con manzanas",
    diets: ["Vegetariano"],
    image:
      "https://saborgourmet.com/wp-content/uploads/recetas-de-pasta-vegana-Tagliatelle-con-salsa-de-seit%C3%A1n-con-manzanas-istock-600x294.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Tallarines con té de matcha y regú de zanahoria dulce",
    diets: ["Sin Lactosa"],
    image:
      "https://saborgourmet.com/wp-content/uploads/recetas-de-pasta-vegana-Tagliatelle-con-t%C3%A9-matcha-y-ragu-de-zanahoria-dulce-istock.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Penne con pesto de tomate seco",
    diets: ["Vegetariano"],
    image:
      "https://saborgourmet.com/wp-content/uploads/recetas-de-pasta-vegana-Penne-con-pesto-de-tomate-seco-istock-600x323.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Tortiglioni con uvas y pan rallado",
    diets: ["Sin Lactosa", "Vegetariano"],
    image:
      "https://saborgourmet.com/wp-content/uploads/recetas-de-pasta-vegana-Tortiglioni-con-uvas-y-pan-rallado-istock-600x289.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Tortiglioni con coles de bruselas y col negra",
    diets: ["Sin Lactosa"],
    image:
      "https://saborgourmet.com/wp-content/uploads/recetas-de-pasta-vegana-Tortiglioni-con-brotes-y-col-negra-istock-600x288.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Pasta con pesto de pistachos",
    diets: ["Vegetariano"],
    image:
      "https://saborgourmet.com/wp-content/uploads/recetas-de-pasta-vegana-Pasta-con-pesto-de-pistachos-istock-600x294.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Pasta con aceitunas y tomates secos y piñones",
    diets: ["Vegetariano"],
    image:
      "https://saborgourmet.com/wp-content/uploads/recetas-de-pasta-vegana-Pasta-con-aceitunas-y-tomates-secos-y-pi%C3%B1ones-istock-600x280.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Pasta alfredo vegana",
    diets: ["Vegano"],
    image:
      "https://danzadefogones.com/wp-content/uploads/2014/04/Pasta-Alfredo-vegana-danzadefogones.com-vegan-pasta-alfredo-gf.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Boloñesa de lentejas",
    diets: ["Vegetariano"],
    image:
      "https://danzadefogones.com/wp-content/uploads/2017/06/BoloC3B1esa-de-lentejas-4.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Espaguetis con salsa verde de coco",
    diets: ["Sin Lactosa", "Vegetariano"],
    image:
      "https://danzadefogones.com/wp-content/uploads/2018/07/Espaguetis-con-salsa-verde-de-coco.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Pasta con salsa de pimientos del piquillo",
    diets: ["Vegetariano", "Vegano"],
    image:
      "https://danzadefogones.com/wp-content/uploads/2015/02/Pasta-con-salsa-de-pimientos-del-Piquillo-2.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Pasta arrabiata",
    diets: ["Vegano"],
    image:
      "https://danzadefogones.com/wp-content/uploads/2017/08/Pasta-arrabiata-3.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Pasta Primavera",
    diets: ["Vegetariano"],
    image:
      "https://danzadefogones.com/wp-content/uploads/2018/03/Pasta-primavera-2.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Espaguetis a la carbonada",
    diets: ["Sin Lactoda"],
    image:
      "https://www.recetassinlactosa.com/wp-content/uploads/2015/06/Espaguetis-Carbonara-1.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },
  {
    name: "Pasta alfredo",
    diets: ["Vegetariano"],
    image:
      "https://kaikusinlactosa.com/blog/wp-content/uploads/2016/06/Kaiku-Sin-Lactosa-Cocina-Facil-Sin-Lactosa.jpg",
    description:
      "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
    category: "pasta",
    initial_price: 50,
    discount: 0,
    final_price: 50,
    status: true,
    total_score: 0,
  },

  {
    name: "Bistec a la parrilla",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Un jugoso bistec a la parrilla con sabrosas especias y acompañamientos.",
    image:
      "https://assets.kraftfoods.com/recipe_images/opendeploy/94128_640x428.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Chuletas de cerdo al horno",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Deliciosas chuletas de cerdo horneadas con hierbas y condimentos, acompañadas de guarniciones.",
    image:
      "https://imag.bonviveur.com/chuletas-de-cerdo-al-horno-con-patatas.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Filete mignon con salsa de champiñones",
    diets: ["Sin TACC"],
    description:
      "Un exquisito filete mignon acompañado de una deliciosa salsa de champiñones.",
    image:
      "https://img-global.cpcdn.com/recipes/7e9073272fa4a4c9/1200x630cq70/photo.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Albóndigas en salsa de tomate",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Sabrosas albóndigas caseras en una deliciosa salsa de tomate, perfectas para acompañar pasta o arroz.",
    image:
      "https://cdn.aarp.net/content/dam/aarp/food/recipes/2020/04/1140-meatballs-in-tomato-sauce-esp.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Lomo de res a la provenzal",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Un jugoso lomo de res marinado con hierbas provenzales y especias, perfecto para los amantes de la carne.",
    image:
      "https://www.demoslavueltaaldia.com/sites/default/files/lomo-la-provenzal-papas-natural.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Costillas de cerdo BBQ",
    diets: ["Sin TACC"],
    description:
      "Deliciosas costillas de cerdo asadas a la parrilla con una irresistible salsa barbacoa casera.",
    image:
      "http://locosxlaparrilla.com/wp-content/uploads/2015/02/costillas-cerdo-marinada-macerar-parrilla-barbacoa-locosxlaparrilla.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Pollo a la parrilla con limón y hierbas",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Jugoso pollo a la parrilla sazonado con limón, hierbas aromáticas y especias, acompañado de ensalada fresca.",
    image:
      "https://mejoresrecetas.me/wp-content/uploads/2023/04/Pollo-a-la-Parrilla-con-Salsa-de-Limon-y-Hierbas.webp",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Carne asada estilo argentino",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Un clásico corte de carne asada a la parrilla al estilo argentino, tierno y lleno de sabor.",
    image:
      "https://saboryestilo.com.mx/wp-content/uploads/2020/05/parrilla-argentina-1.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Estofado de ternera con verduras",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Un reconfortante estofado de ternera con tiernos trozos de carne y verduras en un sabroso caldo.",
    image:
      "https://unareceta.com/wp-content/uploads/2016/08/Estofado-de-ternera-con-verduras.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Tacos de carne al pastor",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Deliciosos tacos rellenos de carne marinada al pastor, acompañados de cebolla, cilantro y salsa.",
    image:
      "https://www.seriouseats.com/thmb/4kbwN13BlZnZ3EywrtG2AzCKuYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Fajitas de carne con pimientos y cebolla",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Fajitas de carne marinadas en especias y jugo de limón, salteadas con pimientos y cebolla en una sartén caliente.",
    image:
      "https://img-global.cpcdn.com/recipes/cfb9eabb352b7775/680x482cq70/carne-de-res-con-pimientos-y-cebolla-foto-principal.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Pechuga de pollo rellena de jamón y queso",
    diets: ["Sin TACC"],
    description:
      "Pechuga de pollo jugosa rellena de jamón y queso, horneada hasta obtener un dorado perfecto y acompañada de una salsa suave.",
    image: "https://www.annarecetasfaciles.com/files/cordon-bleub.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Asado de tira al chimichurri",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Un suculento asado de tira marinado en chimichurri argentino, asado a la parrilla y lleno de sabor.",
    image:
      "https://pronacatqma.com/images/com_yoorecipe/banner_superior/17396_1.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Cordero al horno con hierbas",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Tierno cordero asado al horno con hierbas aromáticas y especias, perfecto para una ocasión especial.",
    image:
      "https://pierorestaurante.com/wp-content/uploads/2022/05/portada-cordero-al-horno-con-hierbas.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Pollo al curry con arroz",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Pollo tierno cocinado en una sabrosa salsa de curry, acompañado de arroz aromático y verduras salteadas.",
    image:
      "https://www.frutamare.com/wp-content/uploads/2021/04/arroz-con-pollo-al-curry.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Tacos de carne deshebrada",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Tacos deliciosos rellenos de carne deshebrada sazonada con especias y condimentos, acompañados de tu salsa favorita.",
    image:
      "https://tacos10.com/wp-content/uploads/2019/01/tacos-de-res-deshebrada1-e1546657228282.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Pavo asado con relleno de hierbas",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Pavo jugoso asado al horno con un relleno de hierbas aromáticas, perfecto para celebraciones y festividades.",
    image: "https://enrilemoine.com/wp-content/uploads/2011/11/5-MG_2068.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Carne guisada con patatas",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Carne tierna y jugosa guisada a fuego lento con patatas, cebolla, zanahorias y especias, un plato reconfortante.",
    image:
      "https://www.cocinatis.com/archivos/202207/CTIS0210-Receta-carne-guisada-con-patatas_large_16x9.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Lomo de cerdo a la mostaza",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Lomo de cerdo jugoso y tierno marinado con mostaza y hierbas, asado a la perfección y servido con una salsa irresistible.",
    image:
      "https://www.cocinacaserayfacil.net/wp-content/uploads/2021/12/Solomillo-de-cerdo-a-la-mostaza-y-miel.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Pechuga de pollo a la plancha con ensalada",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Pechuga de pollo a la plancha jugosa y tierna, servida con una fresca ensalada de vegetales y aderezo ligero.",
    image:
      "https://recetinas.com/wp-content/uploads/2018/03/pechuga-de-pollo-a-la-plancha-con-ensalada-receta.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Empanadas de carne argentinas",
    diets: ["Sin Lactosa"],
    description:
      "Deliciosas empanadas argentinas rellenas de carne jugosa, cebolla, aceitunas y especias, horneadas hasta obtener un dorado perfecto.",
    image:
      "https://www.pequerecetas.com/wp-content/uploads/2023/01/empanadas-de-carne-argentinas-tradicionales.jpeg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Shawarma de carne de cordero",
    diets: ["Sin TACC", "Sin Lactosa"],
    description:
      "Shawarma de carne de cordero tierna y sabrosa, marinada con especias y asada en un asador vertical, servida con pan pita y salsas.",
    image:
      "https://enterate24backup.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/10/23142307/1713.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Ensalada de espinacas",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una deliciosa ensalada de espinacas frescas con tomates cherry, aguacate, nueces y aderezo de vinagreta balsámica.",
    image:
      "https://amilinea.com/wp-content/uploads/2019/05/ensalada-de-espinacas.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada César",
    diets: ["Vegetariano"],
    description:
      "La clásica ensalada César con lechuga romana, crutones, queso parmesano y aderezo César cremoso.",
    image:
      "https://d22fxaf9t8d39k.cloudfront.net/17d16895112437af88b786e19ac669ee0923c5eba134bff92dbe65ad23a0b14d111915.png",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de quinoa",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una nutritiva ensalada de quinoa con vegetales frescos, aceitunas, pepino y aderezo de limón y cilantro.",
    image:
      "https://macabites.com/wp-content/uploads/2017/12/ensalada-de-quinoa-550x550.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada Caprese",
    diets: ["Sin TACC", "Vegetariano"],
    description:
      "Una ensalada Caprese clásica con tomates frescos, mozzarella de búfala, hojas de albahaca y aceite de oliva.",
    image:
      "https://www.comedera.com/wp-content/uploads/2017/07/ensalada-caprese.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de frutas",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una refrescante ensalada de frutas variadas como sandía, melón, uvas y piña, con un toque de menta fresca.",
    image:
      "https://cdn0.recetasgratis.net/es/posts/7/6/4/ensalada_de_frutas_para_diabeticos_57467_600_square.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de garbanzos",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una ensalada de garbanzos con pepino, tomate, cebolla roja, pimiento y aderezo de yogur y comino.",
    image:
      "https://deliciaskitchen.com/wp-content/uploads/2021/08/ensalada-de-garbanzos-veraniega.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de aguacate",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una ensalada de aguacate con tomate cherry, cilantro, cebolla roja y aliño de limón y aceite de oliva.",
    image:
      "https://cdn.colombia.com/gastronomia/2011/07/26/ensalada-de-aguacate-y-tomate-1496.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada mixta",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una ensalada mixta clásica con lechuga, tomate, zanahoria, pepino y aderezo de vinagreta casera.",
    image: "https://imag.bonviveur.com/imagen-de-la-ensalada-mixta.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de zanahoria rallada",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una ensalada fresca de zanahoria rallada con pasas, nueces, cilantro y aderezo de limón y miel.",
    image:
      "https://www.comedera.com/wp-content/uploads/2021/11/ensalada-de-zanahoria.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de tomate y mozzarella",
    diets: ["Vegetariano"],
    description:
      "Una ensalada clásica de tomate y mozzarella con hojas de albahaca fresca y aceite de oliva virgen extra.",
    image:
      "https://www.solucionesparaladiabetes.com/magazine-diabetes/wp-content/uploads/tomate-mozzarella-696x464.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada Waldorf",
    diets: ["Vegetariano"],
    description:
      "Una ensalada Waldorf tradicional con apio, manzanas, uvas, nueces y aderezo de yogur y mayonesa.",
    image:
      "https://www.paulinacocina.net/wp-content/uploads/2021/11/Ensalada-waldorf.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de pepino y yogur",
    diets: ["Vegetariano"],
    description:
      "Una ensalada refrescante de pepino con yogur griego, ajo, eneldo y un toque de jugo de limón.",
    image:
      "https://recetas.mx/wp-content/uploads/2019/03/ensalada-raita-con-yogur-1500x850.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de remolacha",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una colorida ensalada de remolacha asada con rúcula, queso de cabra, nueces y aderezo de vinagreta balsámica.",
    image:
      "https://www.ensaladade.net/wp-content/uploads/2020/04/plato-ensalada-de-remolacha.png",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de pasta",
    diets: ["Vegetariano"],
    description:
      "Una ensalada de pasta fría con vegetales mixtos, aceitunas, queso feta y aderezo de aceite y vinagre.",
    image:
      "https://www.paulinacocina.net/wp-content/uploads/2022/03/ensalada-de-pasta-receta.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada griega",
    diets: ["Vegetariano"],
    description:
      "Una ensalada griega clásica con pepino, tomate, cebolla roja, aceitunas kalamata y queso feta.",
    image:
      "https://www.paulinacocina.net/wp-content/uploads/2022/03/ensalada-de-pasta-receta.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de col rizada",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una saludable ensalada de col rizada con manzanas, nueces, pasas y aderezo de vinagreta de mostaza y miel.",
    image:
      "https://images-gmi-pmc.edge-generalmills.com/c362415b-4428-40c3-88c5-57f4d6b7d1d6.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de lentejas",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una satisfactoria ensalada de lentejas con vegetales, cilantro, limón y un aliño de aceite de oliva y comino.",
    image:
      "https://images.hola.com/imagenes/cocina/recetas/20200701171317/ensalada-lentejas-thermomix/0-842-785/ensalada-lentejas-thermomix-t.jpg?tx=w_680",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de garbanzos y aguacate",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una combinación deliciosa de garbanzos, aguacate, tomates cherry, cebolla roja y aderezo de limón y cilantro.",
    image:
      "https://elmundoenrecetas.s3.amazonaws.com/uploads/recipe/picture/623/ensalada_de_garbanzos_y_aguacate_2.webp",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de patatas",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una ensalada clásica de patatas con mayonesa, apio, cebolla, mostaza, eneldo y sal y pimienta al gusto.",
    image: "https://cocinaabuenashoras.com/files/ensalada-de-patatas.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de rúcula y parmesano",
    diets: ["Vegetariano"],
    description:
      "Una ensalada simple pero sabrosa de rúcula fresca, queso parmesano en láminas y aderezo de limón y aceite de oliva.",
    image: "https://queapetito.com/wp-content/uploads/2019/05/rucula-1.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de naranja y aguacate",
    diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una refrescante ensalada de naranja, aguacate, espinacas baby y aderezo de vinagreta de naranja y miel.",
    image:
      "https://okdiario.com/img/2018/08/18/receta-de-ensalada-de-aguacate-y-naranja-1.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
];

module.exports = {
  foods,
};
