export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};

export const products = [
  {
    id: '2',
    title: 'The Wool Shirt',
    description:
      'The wool shirt made with a tailored fit. The true original, optimized for rugged outdoor adventures.',
    price: 40,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGJKYof4yQS64n2fQrrbdYXqYMUuC-RuLRQA&usqp=CAU',
  },
  {
    id: '3',
    title: 'Adult Nike T-Shirt',
    description: 'The Nike T-Shirt for adult, red color.',
    price: 19,
    imageUrl:
      'https://messisport-e281.kxcdn.com/25511-large_default/n4149-nike-f-c-t-shirt-noble-red.jpg',
  },
  {
    id: '4',
    title: 'Red Wing Leather Belt',
    description: "Men's Belt in Amber Pioneer Leather.",
    price: 39,
    imageUrl:
      'https://embed.widencdn.net/img/redwing/li8hzmk8tw/600x600px/RH96501C_WEB_NA_1016?position=S&crop=no&color=EDE8DD',
  },
  {
    id: '5',
    title: "Men's Golf Belt",
    description: 'Find the Nike Flat Edge Acu-Fit at Nike.com.',
    price: 33,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGyTdwXFNepn3UWT3i9mfgFG4lSJ4FyO6s_zxnBJaciMebvvHxpHLDkNtUBeu27Pqli7Bl1qCP&usqp=CAc',
  },
  {
    id: '6',
    title: 'Beta Belt',
    description: 'Beta Belt - Black Diamond Gear.',
    price: 24,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg1b7-qjnQhESWcE59-DtL2RMXaqHeDoPkQMt3NPL00GYWriPAvCw7sNjXP-hTb7B2IP6xfFU&usqp=CAc',
  },
];
