import r301 from '../../../assets/weapons/images/r301.png';
import havoc from '../../../assets/weapons/images/havoc.png';
import flatline from '../../../assets/weapons/images/flatline.png';
import hemlok from '../../../assets/weapons/images/hemlok.png';
import nemesis from '../../../assets/weapons/images/nemesis.png';
import alternator from '../../../assets/weapons/images/alternator.png';
import prowler from '../../../assets/weapons/images/prowler.png';
import r99 from '../../../assets/weapons/images/r99.png';
import volt from '../../../assets/weapons/images/volt.png';
import car from '../../../assets/weapons/images/car.png';
import devotion from '../../../assets/weapons/images/devotion.png';
import lstar from '../../../assets/weapons/images/lstar.png';
import spitfire from '../../../assets/weapons/images/spitfire.png';
import rampage from '../../../assets/weapons/images/rampage.png';
import scout from '../../../assets/weapons/images/scout.png';
import tripleTake from '../../../assets/weapons/images/tripleTake.png';
import repeater from '../../../assets/weapons/images/repeater.png';
import bow from '../../../assets/weapons/images/bow.png';
import chargeRifle from '../../../assets/weapons/images/chargeRifle.png';
import kraber from '../../../assets/weapons/images/kraber.png';
import longbow from '../../../assets/weapons/images/longbow.png';
import sentinel from '../../../assets/weapons/images/sentinel.png';
import wingman from '../../../assets/weapons/images/wingman.png';
import p2020 from '../../../assets/weapons/images/p2020.png';
import re45 from '../../../assets/weapons/images/re45.png';
import mastiff from '../../../assets/weapons/images/mastiff.png';
import peacekeeper from '../../../assets/weapons/images/peacekeeper.png';
import mozambique from '../../../assets/weapons/images/mozambique.png';
import eva8 from '../../../assets/weapons/images/eva8.png';
import RepeaterIcon from '../../../assets/icons/weapons/30-30-repeater.svg?react';
import AlternatorIcon from '../../../assets/icons/weapons/alternator.svg?react';
import BocekBowIcon from '../../../assets/icons/weapons/bocek-bow.svg?react';
import CarIcon from '../../../assets/icons/weapons/car-smg.svg?react';
import ChargeRifleIcon from '../../../assets/icons/weapons/charge-rifle.svg?react';
import DevotionIcon from '../../../assets/icons/weapons/charge-rifle.svg?react';
import Eva8Icon from '../../../assets/icons/weapons/eva-8.svg?react';
import FlatlineIcon from '../../../assets/icons/weapons/flatline.svg?react';
import G7ScoutIcon from '../../../assets/icons/weapons/G-7-scout.svg?react';
import HavocIcon from '../../../assets/icons/weapons/havoc.svg?react';
import HemlokIcon from '../../../assets/icons/weapons/hemlok.svg?react';
import KraberIcon from '../../../assets/icons/weapons/kraber.svg?react';
import LongbowIcon from '../../../assets/icons/weapons/longbow.svg?react';
import LstarIcon from '../../../assets/icons/weapons/lstar.svg?react';
import MastiffIcon from '../../../assets/icons/weapons/mastiff.svg?react';
import MozambiqueIcon from '../../../assets/icons/weapons/mozambique.svg?react';
import NemesisIcon from '../../../assets/icons/weapons/nemesis.svg?react';
import P2020Icon from '../../../assets/icons/weapons/p2020.svg?react';
import PeacekeeperIcon from '../../../assets/icons/weapons/peacekeeper.svg?react';
import ProwlerIcon from '../../../assets/icons/weapons/prowler.svg?react';
import R99Icon from '../../../assets/icons/weapons/R-99.svg?react';
import R301Icon from '../../../assets/icons/weapons/R-301.svg?react';
import RampageIcon from '../../../assets/icons/weapons/rampage.svg?react';
import RE45Icon from '../../../assets/icons/weapons/RE-45.svg?react';
import SentinelIcon from '../../../assets/icons/weapons/sentinel.svg?react';
import SpitfireIcon from '../../../assets/icons/weapons/spitfire.svg?react';
import TripleTakeIcon from '../../../assets/icons/weapons/triple-take.svg?react';
import VoltIcon from '../../../assets/icons/weapons/volt.svg?react';
import WingmanIcon from '../../../assets/icons/weapons/wingman.svg?react';

export const WeaponsInfo = [
  {
    name: 'R-301 Carbine',
    type: 'Assault Rifle',
    image: r301,
    icon: R301Icon,
    ammo: ['Light Rounds'],
    fireModes: ['single', 'auto'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 13,
      head: 23,
      torso: 10,
      damagePerSecond: 176
    }
  },
  {
    name: 'HAVOC Rifle',
    type: 'Assault Rifle',
    image: havoc,
    icon: HavocIcon,
    ammo: ['Energy Ammo'],
    fireModes: ['auto'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: false,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 18,
      head: 36,
      torso: 14,
      damagePerSecond: 198
    }
  },
  {
    name: 'VK-47 Flatline',
    type: 'Assault Rifle',
    image: flatline,
    icon: FlatlineIcon,
    ammo: ['Heavy Rounds'],
    fireModes: ['single', 'auto'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 18,
      head: 32,
      torso: 14,
      damagePerSecond: 190
    }
  },
  {
    name: 'Hemlok Burst AR',
    type: 'Assault Rifle',
    image: hemlok,
    icon: HemlokIcon,
    ammo: ['Heavy Rounds'],
    fireModes: ['single', 'burst'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 20,
      head: 35,
      torso: 15,
      damagePerSecond: 178
    }
  },
  {
    name: 'Nemesis Burst AR',
    type: 'Assault Rifle',
    image: nemesis,
    icon: NemesisIcon,
    ammo: ['Energy Ammo'],
    fireModes: ['burst'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 17,
      head: 34,
      torso: 13,
      damagePerSecond: 204
    }
  },
  {
    name: 'Alternator SMG',
    type: 'Sub Machine Gun',
    image: alternator,
    icon: AlternatorIcon,
    ammo: ['Light Rounds'],
    fireModes: ['auto'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: true
    },
    damage: {
      body: 16,
      head: 24,
      torso: 13,
      damagePerSecond: 160
    }
  },
  {
    name: 'Prowler Burst PDW',
    type: 'Sub Machine Gun',
    image: prowler,
    icon: ProwlerIcon,
    ammo: ['Heavy Rounds'],
    fireModes: ['burst'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: true
    },
    damage: {
      body: 15,
      head: 23,
      torso: 12,
      damagePerSecond: 184
    }
  },
  {
    name: 'R-99 SMG',
    type: 'Sub Machine Gun',
    image: r99,
    icon: R99Icon,
    ammo: ['Light Rounds'],
    fireModes: ['auto'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: true
    },
    damage: {
      body: 11,
      head: 17,
      torso: 9,
      damagePerSecond: 198
    }
  },
  {
    name: 'Volt SMG',
    type: 'Sub Machine Gun',
    image: volt,
    icon: VoltIcon,
    ammo: ['Energy Ammo'],
    fireModes: ['auto'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: true
    },
    damage: {
      body: 15,
      head: 23,
      torso: 12,
      damagePerSecond: 180
    }
  },
  {
    name: 'C.A.R SMG',
    type: 'Sub machine gun',
    image: car,
    icon: CarIcon,
    ammo: ['Light Rounds', 'Heavy Rounds'],
    fireModes: ['auto'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 12,
      head: 15,
      torso: 10,
      damagePerSecond: 186
    }
  },
  {
    name: 'Devotion LMG',
    type: 'Light Machine Gun',
    image: devotion,
    icon: DevotionIcon,
    ammo: ['Energy Ammo'],
    fireModes: ['auto'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 16,
      head: 24,
      torso: 12,
      damagePerSecond: 255
    }
  },
  {
    name: 'L-STAR EMG',
    type: 'Light Machine Gun',
    image: lstar,
    icon: LstarIcon,
    ammo: ['Energy Ammo'],
    fireModes: ['auto'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: false,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 17,
      head: 26,
      torso: 14,
      damagePerSecond: 180
    }
  },
  {
    name: 'M600 Spitfire',
    type: 'Light Machine Gun',
    image: spitfire,
    icon: SpitfireIcon,
    ammo: ['Light Rounds'],
    fireModes: ['auto'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 18,
      head: 27,
      torso: 15,
      damagePerSecond: 162
    }
  },
  {
    name: 'Rampage LMG',
    type: 'Light Machine Gun',
    image: rampage,
    icon: RampageIcon,
    ammo: ['Heavy Rounds'],
    fireModes: ['auto'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 28,
      head: 42,
      torso: 22,
      damagePerSecond: 140
    }
  },
  {
    name: 'G7 Scout',
    type: 'Marksman Weapon',
    image: scout,
    icon: G7ScoutIcon,
    ammo: ['Light Rounds'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 34,
      head: 60,
      torso: 26,
      damagePerSecond: 136
    }
  },
  {
    name: 'Triple Take',
    type: 'Marksman Weapon',
    image: tripleTake,
    icon: TripleTakeIcon,
    ammo: ['Energy Ammo'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 23,
      head: 46,
      torso: 18,
      damagePerSecond: 138
    }
  },
  {
    name: '30-30 Repeater',
    type: 'Marksman Weapon',
    image: repeater,
    icon: RepeaterIcon,
    ammo: ['Heavy Rounds'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 42,
      head: 74,
      torso: 34,
      damagePerSecond: 109
    }
  },
  {
    name: 'Bocek Compound Bow',
    type: 'Marksman Weapon',
    image: bow,
    icon: BocekBowIcon,
    ammo: ['Mythic Ammo'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: false,
      hasStandardStock: false,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 70,
      head: 123,
      torso: 54,
      damagePerSecond: 133
    }
  },
  {
    name: 'Charge Rifle',
    type: 'Sniper Rifle',
    image: chargeRifle,
    icon: ChargeRifleIcon,
    ammo: ['Energy Ammo'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: false,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 90,
      head: 116,
      torso: 75,
      damagePerSecond: 70
    }
  },
  {
    name: 'Kraber .50-CAL',
    type: 'Sniper Rifle',
    image: kraber,
    ammo: ['Mythic Ammo'],
    icon: KraberIcon,
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: false,
      hasStandardStock: false,
      hasOptics: false,
      hasLaserSight: false
    },
    damage: {
      body: 140,
      head: 280,
      torso: 112,
      damagePerSecond: 50
    }
  },
  {
    name: 'Longbow DMR',
    type: 'Sniper Rifle',
    image: longbow,
    icon: LongbowIcon,
    ammo: ['Sniper Ammo'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 55,
      head: 110,
      torso: 44,
      damagePerSecond: 99
    }
  },
  {
    name: 'Sentinel',
    type: 'Sniper Rifle',
    image: sentinel,
    icon: SentinelIcon,
    ammo: ['Sniper Ammo'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: true,
      hasStandardStock: true,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 70,
      head: 140,
      torso: 56,
      damagePerSecond: 68
    }
  },
  {
    name: 'Wingman',
    type: 'Pistol',
    image: wingman,
    icon: WingmanIcon,
    ammo: ['Heavy Rounds'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: false,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 45,
      head: 90,
      torso: 45,
      damagePerSecond: 117
    }
  },
  {
    name: 'P2020',
    type: 'Pistol',
    image: p2020,
    icon: P2020Icon,
    ammo: ['Light Rounds'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: true,
      hasStandardStock: false,
      hasOptics: true,
      hasLaserSight: true
    },
    damage: {
      body: 15,
      head: 23,
      torso: 15,
      damagePerSecond: 133
    }
  },
  {
    name: 'RE-45 Auto',
    type: 'Pistol',
    image: re45,
    icon: RE45Icon,
    ammo: ['Light Rounds'],
    fireModes: ['auto'],
    attachments: {
      hasBarrelStabilizer: true,
      hasExtendedMag: true,
      hasStandardStock: false,
      hasOptics: true,
      hasLaserSight: false
    },
    damage: {
      body: 12,
      head: 18,
      torso: 12,
      damagePerSecond: 150
    }
  },
  {
    name: 'Mozambique Shotgun',
    type: 'Shotgun',
    image: mozambique,
    icon: MozambiqueIcon,
    ammo: ['Shotgun Shells'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: false,
      hasStandardStock: false,
      hasOptics: true
    },
    damage: {
      body: 45,
      head: 60,
      torso: 45,
      damagePerSecond: 132
    }
  },
  {
    name: 'EVA-8 Auto',
    type: 'Shotgun',
    image: eva8,
    icon: Eva8Icon,
    ammo: ['Shotgun Shells'],
    fireModes: ['auto'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: false,
      hasStandardStock: false,
      hasOptics: true
    },
    damage: {
      body: 63,
      head: 77,
      torso: 63,
      damagePerSecond: 126
    }
  },
  {
    name: 'Mastiff Shotgun',
    type: 'Shotgun',
    image: mastiff,
    icon: MastiffIcon,
    ammo: ['Shotgun Shells'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: false,
      hasStandardStock: false,
      hasOptics: true
    },
    damage: {
      body: 88,
      head: 112,
      torso: 88,
      damagePerSecond: 77
    }
  },
  {
    name: 'Peacekeeper',
    type: 'Shotgun',
    image: peacekeeper,
    icon: PeacekeeperIcon,
    ammo: ['Shotgun Shells'],
    fireModes: ['single'],
    attachments: {
      hasBarrelStabilizer: false,
      hasExtendedMag: false,
      hasStandardStock: false,
      hasOptics: true
    },
    damage: {
      body: 99,
      head: 121,
      torso: 99,
      damagePerSecond: 78
    }
  }
];
