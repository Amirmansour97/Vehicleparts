import { v4 as uuid } from "uuid"

let inventory = [
  {
    categories: ["car parts"],
    name: "Summer Tyres",
    price: "1000",
    image: "/products/summertyres.png",
    description: "HoT Wheels",
    brand: "Amir Mansour",
    currentInventory: 4,
  },
  {
    categories: ["car parts", "new arrivals"],
    name: "Winter Tyres",
    price: "1000",
    image: "/products/winter.png",
    description: "Winter Wheels",
    brand: "Amir Mansour",
    currentInventory: 4,
  },
  {
    categories: ["car parts"],
    name: "Accessories",
    price: "400",
    image: "/products/access.png",
    description: "Accessories",
    brand: "Amir Mansour",
    currentInventory: 2,
  },
  {
    categories: ["new arrivals", "Gear"],
    name: "Gear Knob ",
    price: "800",
    image: "/products/gearknobtyota.png",
    description: "Gear Knob for Toyota",
    brand: "Amir Mansour",
    currentInventory: 8,
  },
  {
    categories: ["new arrivals", "oil"],
    name: "Car Oil",
    price: "900",
    image: "/products/caroil.png",
    description: "Just for Cars",
    brand: "Amir Mansour",
    currentInventory: 10,
  },
  {
    categories: ["on sale", "car parts"],
    name: "Summer Tyres",
    price: "1200",
    image: "/products/summertyres.png",
    description: "Hot Wheels",
    brand: "Amir Mansour",
    currentInventory: 7,
  },
  {
    categories: ["on sale", "car parts"],
    name: "Winter Tyres",
    price: "500",
    image: "/products/summertyres.png",
    description: "Cold Wheels",
    brand: "Amir Mansour",
    currentInventory: 13,
  },
  {
    categories: ["on sale", "car parts"],
    name: "Window Swiper",
    price: "650",
    image: "/products/winderswiper.png",
    description: "Window Swipers",
    brand: "Amir Mansour",
    currentInventory: 9,
  },
  {
    //livingroom
    categories: ["gear"],
    name: "gear Knob Toyota Hilux",
    price: "1230",
    image: "/products/gearknobtyota.png",
    description: "Gear Knob for Hilux Toyoya",
    brand: "Amir Mansour",
    currentInventory: 24,
  },

  {
    categories: ["gear"],
    name: "Gear Knob Maza ",
    price: "800",
    image: "/products/gearknobmazda.png",
    description: "Gear Knob for Mazda",
    brand: "Amir Mansour",
    currentInventory: 43,
  },
  {
    categories: ["new arrivals", "gear"],
    name: "Gear Knob for CRV",
    price: "900",
    image: "/products/gearshiftcrv.png",
    description: "Gear shift for CRV",
    brand: "Amir Mansour",
    currentInventory: 2,
  },
  // {
  //   categories: ["on sale", "gear"],
  //   name: "Dabit Matte Black",
  //   price: "1200",
  //   image: "/products/couch4.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   currentInventory: 14,
  // },

  {
    categories: ["on sale", "oil"],
    name: "Car Oil",
    price: "300",
    image: "/products/caroil.png",
    description: "Car Oil",
    brand: "Amir Mansour",
    currentInventory: 12,
  },
  {
    categories: ["on sale", "oil"],
    name: "Brake oil",
    price: "825",
    image: "/products/breakoil.png",
    description: "Break Oil",
    brand: "Amir Mansour",
    currentInventory: 13,
  },
  {
    categories: ["on sale", "oil"],
    name: "Gear Oil",
    price: "720",
    image: "/products/gearoil2.png",
    description: "Gear oil.",
    brand: "Amir Mansour",
    currentInventory: 33,
  },
  {
    categories: ["on sale", "oil"],
    name: "Steering Oil",
    price: "2000",
    image: "/products/steeringoil.png",
    description: "Steering Oil.",
    brand: "Amir Mansour",
    currentInventory: 23,
  },
  {
    categories: ["on sale", "oil"],
    name: "Gear oil",
    price: "1100",
    image: "/products/gearoil.png",
    description: "Gear oil",
    brand: "Amir Mansour",
    currentInventory: 13,
  },
  // {
  //   categories: ["on sale", "oil"],
  //   name: "Levo Tan Lounge Chair",
  //   price: "600",
  //   image: "/products/chair6.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   brand: "Amir Mansour",
  //   currentInventory: 15,
  // },

  // {
  //   categories: ["on sale", "oil"],
  //   name: "Anime Tint Recliner",
  //   price: "775",
  //   image: "/products/chair7.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   brand: "Amir Mansour",
  //   currentInventory: 44,
  // },
  // {
  //   categories: ["on sale", "oil"],
  //   name: "Josh Jones Red Chair",
  //   price: "1200",
  //   image: "/products/chair8.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   brand: "Amir Mansour",
  //   currentInventory: 17,
  // },
  // {
  //   categories: ["on sale", "oil"],
  //   name: "Black Sand Lounge",
  //   price: "1600",
  //   image: "/products/chair9.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   brand: "Amir Mansour",
  //   currentInventory: 28,
  // },
  // {
  //   categories: ["on sale", "oil"],
  //   name: "Mint Beige Workchair",
  //   price: "550",
  //   image: "/products/chair10.png",
  //   description:
  //     "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
  //   brand: "Amir Mansour",
  //   currentInventory: 31,
  // }, // {
]

inventory.map((i) => {
  i.id = uuid()
  return i
})

export default inventory
