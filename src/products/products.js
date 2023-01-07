import darkSeal from '../assets/product-images/Dark-Seal.webp';
import deathsDance from '../assets/product-images/deaths-dance.webp';
import doransRing from '../assets/product-images/Dorans-Ring.webp';
import galeforce from '../assets/product-images/galeforce.webp';
import horizonFocus from '../assets/product-images/horizon-focus.webp';
import liandrysAnguish from '../assets/product-images/liandrys-anguish.webp';
import nightHarvester from '../assets/product-images/night-harvester.webp';
import randuinsOmen from '../assets/product-images/randuins-omen.webp';
import theCollector from '../assets/product-images/the-collector.webp';
import voidStaff from '../assets/product-images/void-staff.webp';

export const products = [
  {
    name: 'Dark Seal',
    id: 1,
    price: 350,
    image: darkSeal,
    description:
      'The Dark Seal has a stack system named Glory, which will give the user two stacks per Champion kill and 1 per assist, up to 10 stacks. Every Glory stack will give the user 4 AP points. Great item for Magicians in the Mid Lane.',
  },
  {
    name: `Death's Dance`,
    id: 2,
    price: 3300,
    image: deathsDance,
    description:
      'This is another item for Brawlers, which helps the user handle more while in team fights. It stores 30% of the damage received (10% if you have a ranged Champ), whether physical or magical damage. Then, it will start inflicting it as true damage over 3 seconds, but if the user kills the Champ who dealt them damage and activated the bleeding, the user will get a big amount of HP.',
  },
  {
    name: `Doran's Ring`,
    id: 3,
    price: 400,
    image: doransRing,
    description: `This ring will make the user deal 5 AD on-hit damage against Minions and restore 1.25 of their mana over 10 seconds when they damage a Champion. If the user can't get mana or their mana bar is full, it will heal they 50% of those values—a great item for those Champions that needs mana-sustain stats.`,
  },
  {
    name: 'Galeforce',
    id: 4,
    price: 3400,
    image: galeforce,
    description:
      'This one is for ADCs that lack mobility as it gives the user a dash that will also fire three projectiles to the most wounded objective. Its mythic passive gives the other items 2% Movement Speed.',
  },
  {
    name: 'Horizon Focus',
    id: 5,
    price: 3000,
    image: horizonFocus,
    description:
      'This is a good item for Magicians that want extra HP and can burst enemies easily.',
  },
  {
    name: `Liandry's Anguish`,
    id: 6,
    price: 3200,
    image: liandrysAnguish,
    description: `The Magician Mid and Top Laners usually use this item because of the burning damage it causes (the more AP the user has, the more damage this item deals) and the mana it grants. Also, it's great for Champs like Lux as its mythic passive grants 5 Ability Haste to the other Legendary items.`,
  },
  {
    name: 'Night Harvester',
    id: 7,
    price: 3200,
    image: nightHarvester,
    description: `This one is for AP Assassins, like Diana. It will deal more magic damage for every ability or basic attack landed on an enemy Champion—also, this item's mythic passive grants the other items 5 Ability Haste.`,
  },
  {
    name: 'Randuins Omen',
    id: 8,
    price: 2700,
    image: randuinsOmen,
    description:
      'This one is for Supports that are playing against heavy ADC threats with Critical Strike Chances as it has an Active that unleashes a wave that slows objectives and reduces their Crit Chance.',
  },
  {
    name: 'The Collector',
    id: 9,
    price: 3000,
    image: theCollector,
    description:
      'If the user lets their target on 5% of their maximum HP, this item will execute them.',
  },
  {
    name: 'Void Staff',
    id: 10,
    price: 2800,
    image: voidStaff,
    description: `Great item for when enemies build magic resistance. Void Staff's magic penetration becomes more effective as the target's magic resistance increases.`,
  },
];
