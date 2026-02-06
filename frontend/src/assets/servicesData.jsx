import liveChicken from './liveChicken.jpeg'
import hardBody from './hardBody.jpg'
import eggs1 from './30eggs.jpg'
import eggs2 from './60eggs.jpg'
import eggs3 from './90eggs.jpg'
import coal from './coal.jpeg'
import archaar from './archar.jpg'
import wood from './wood.png'
import boilerChicken from './boilerChicken.jpeg'

const servicesData = [
  {
    id: 0,
    category: 'Chickens',
    icon: liveChicken,
    items: [
      { 
        id: 0, 
        name: 'Live Chickens', 
        sec_name: 'Khuhu', 
        price: 'R100',
        image: liveChicken
      },
      { 
        id: 1, 
        name: 'Slaughted And Dressed Hard Body Chickens', 
        sec_name: 'Khuhu Dzo thuvhiwaho', 
        price: 'R110',
        image: hardBody
      }, {
        id: 2,
        name: 'Slaughted And Dressed Boiler Chickens', 
        sec_name: 'Khuhu Dzo thuvhiwaho', 
        price: 'R110',
        image: boilerChicken
      }
    ]
  },
  {
    id: 1,
    category: 'Eggs',
    icon: eggs1,
    items: [
      { 
        id: 0, 
        name: '30 Eggs', 
        sec_name: '', 
        price: 'R80',
        image: eggs1
      },
      { 
        id: 1, 
        name: '60 Eggs', 
        sec_name: '', 
        price: 'R155',
        image: eggs2
      },
      { 
        id: 2, 
        name: '90 Eggs', 
        sec_name: '', 
        price: 'R225',
        image: eggs3
      }
    ]
  },
  {
    id: 2,
    category: 'Archaar',
    icon: archaar,
    items: [
      { 
        id: 0, 
        name: 'Archaar 500g', 
        sec_name: '', 
        price: 'R20',
        image: archaar
      },
      { 
        id: 1, 
        name: 'Archaar 1Kg', 
        sec_name: '', 
        price: 'R40',
        image: archaar
      },
      { 
        id: 2, 
        name: 'Archaar 2Kg', 
        sec_name: '', 
        price: 'R80',
        image: archaar
      }
    ]
  },
  {
    id: 3,
    category: 'Coal',
    icon: coal,
    items: [
      { 
        id: 0, 
        name: 'Premium Coal', 
        sec_name: 'Makala', 
        price: 'R50',
        image: coal
      },
      { 
        id: 1, 
        name: 'Wood', 
        sec_name: 'Khuni', 
        price: 'R20',
        image: wood
      }
    ]
  }
];

export default servicesData;