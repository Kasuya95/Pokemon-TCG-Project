import Product from '@/components/product.vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [{
      name: 'ริโอลุ',
      imageUrl: 'https://asia.pokemon-card.com/th/archive/special/card/sva/assets/images/startset-card-1-2.png',  
      Id: '1',
    },
    {
      name: 'ลูคาริโอ้',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00005216.png',
      Id: '2',
    },{
      name: 'ฮิโตคาเงะ',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00007802.png',
        Id: '3',
    },
    {
      name: 'ลิซาโดะ',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00006661.png',
      Id: '4',
    },{
      name: 'ลิซาด้อน',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00006662.png',
        Id: '5',
    },
    {
      name: 'มุคุโร่',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00009643.png',
      Id: '6',
    },{
      name: 'ฟุคุซึโร',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00009644.png',
        Id: '7',
    },
    {
      name: 'จูไนเปอร์',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00009645.png',
      Id: '8',
    },{
      name: 'ฮิบานี',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00009658.png',
        Id: '9',
    },
    {
      name: 'แรบบิฟุต',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00009659.png',
      Id: '10',
    },{
      name: 'เอสเบิร์น',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00009660.png',
        Id: '11',
    },
    {
      name: 'โซรัว',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00009727.png',
      Id: '12',
    },{
      name: 'โซโรอาร์ค',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00009728.png',
        Id: '13',
    },
    {
      name: 'อีเวลทอล',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00009732.png',
      Id: '14',
    },{
      name: 'อีวุย',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00009759.png',
        Id: '15',
    },
    {
      name: 'เซนิกาเมะ',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00007803.png',
      Id: '16',
    },{
      name: 'คาเมล',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00006353.png',
        Id: '17',
    },
    {
      name: 'คาเม็ก',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00006107.png',
      Id: '18',
    },{
      name: 'ฟุชิกิดาเนะ',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00006348.png',
        Id: '19',
    },
    {
      name: 'ฟุชิกิโซ',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00006100.png',
      Id: '20',
    },{
      name: 'ฟุชิกิบานะ',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00006101.png',
        Id: '21',
    },
    {
      name: 'กราด้อน',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00006882.png',
      Id: '23',
    },
    {
      name: 'อาร์เซอุส',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00004919.png',
      Id: '24',
    },
    {
      name: 'โดราเมชิยะ',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00008261.png',
      Id: '25',
    },
    {
      name: 'โดรอนจิ',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00008262.png',
      Id: '26',
    },
    {
      name: 'โดราพัลท์',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00008263.png',
      Id: '27',
    },
    {
      name: 'ฟุคามารุ',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00006579.png',
      Id: '28',
    },
    {
      name: 'กาไบต์',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00008749.png',
      Id: '29',
    },
    {
      name: 'กาเบรียส',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00004901.png',
      Id: '30',
    },
    {
      name: 'พิคาชู',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00006393.png',
      Id: '31',
    },
    {
      name: 'ไรชู',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00008558.png',
      Id: '32',
    },
    {
      name: 'คิวคอน',
      imageUrl: 'https://asia.pokemon-card.com/th/card-img/th00006503.png',
      Id: '33',
    }
    ]
  }),
  actions: {
    filterProducts (searchText) {
      return this.list.filter(Product => Product.name.includes(searchText))
    }
  }
})
