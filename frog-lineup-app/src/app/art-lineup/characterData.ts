import {
  Character,
  Generation,
  Rank,
  StatMod,
  _REDACTEDTXT,
} from '../character-details/character-details.component';

export const characterList: Character[] = [
  {
    img: 'Akumu.PNG',
    name: 'Akumu',
    description:
      'Self-proclaimed King Akumu, who teleported from his medieval-esque alternate universe to rule over planet Keron!',
    stats: {
      strength: 3,
      dexterity: 3,
      constitution: 3,
      intelligence: 5,
      wisdom: 4,
      charisma: 4,
      luck: 2,
    },
    age: 250,
    height: 24,
    serviceYrs: 0,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 4,
    generation: Generation.GEN_0,
    age_detailed: _REDACTEDTXT,
  },
  {
    img: 'Bucklolo.PNG',
    name: 'Bucklolo',
    description:
      'Newest PINPOINT member recruited from a Keronian culture reserve. A first of many brought in by the Keronian Homogenization Program.',
    stats: {
      strength: 5,
      dexterity: 3,
      constitution: 5,
      intelligence: 3,
      wisdom: 3,
      charisma: 2,
      luck: 3,
    },
    age: 40,
    serviceYrs: 1,
    height: 12,
    rank: Rank.PRIVATE_1ST,
    isActiveService: true,
    generation: Generation.GEN_2,
    adjustedImgScalePct: 160,
  },
  {
    img: 'Bulolo.PNG',
    name: 'Bulolo',
    description:
      'Galactic-scale hitman and serial killer rumored to be the notorious "29-1 Slaughterer" who had been publicly put to death.',
    ability: {
      name: 'Reflexive',
      description: '',
      statAffecting: 'dexterity',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Sensitive',
      description: '',
      statAffecting: 'constitution',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 4,
      dexterity: 5,
      constitution: 3,
      intelligence: 3,
      wisdom: 4,
      charisma: 2,
      luck: 3,
    },
    age: 35,
    serviceYrs: 9,
    height: 22,
    rank: Rank.CORPORAL_LANCE,
    isActiveService: false,
    adjustedImgScalePct: 4,
    generation: Generation.GEN_2,
    age_detailed: _REDACTEDTXT,
  },
  {
    img: 'Curoro.PNG',
    name: 'Curoro',
    description:
      'Cynical treasure hunter and army veteran who survived the attack of the "29-1 slaughterer.',
    stats: {
      strength: 4,
      dexterity: 4,
      constitution: 4,
      intelligence: 3,
      wisdom: 4,
      charisma: 2,
      luck: 3,
    },
    age: 32,
    serviceYrs: 12,
    height: 19,
    rank: Rank.SERGEANT,
    isActiveService: false,
    adjustedImgScalePct: 15,
    generation: Generation.GEN_2,
  },
  {
    img: 'Dalalu.PNG',
    name: 'Dalalu',
    description:
      'Son of a prevalent military family who quickly rose to a commissioned officer rank with the help of his father.',
    ability: {
      name: 'Authoritative',
      description: '',
      statAffecting: 'charisma',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Gullible',
      description: '',
      statAffecting: 'wisdom',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 3,
      dexterity: 3,
      constitution: 3,
      intelligence: 4,
      wisdom: 4,
      charisma: 5,
      luck: 2,
    },
    age: 26,
    serviceYrs: 12,
    height: 24,
    rank: Rank.OFFICER_WARRANT,
    isActiveService: true,
    adjustedImgScalePct: 6,
    generation: Generation.GEN_2,
  },
  {
    img: 'Dangaga.PNG',
    name: 'Dangaga',
    description:
      'Military man through and through. He even gave his body to the cause...but at a cost, of course.',
    ability: {
      name: 'Test Subject',
      description: '',
      statAffecting: 'strength',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Bulky',
      description: '',
      statAffecting: 'dexterity',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 5,
      dexterity: 3,
      constitution: 4,
      intelligence: 3,
      wisdom: 3,
      charisma: 3,
      luck: 3,
    },
    age: 29,
    serviceYrs: 15,
    height: 36,
    rank: Rank.SERGEANT_MAJOR,
    isActiveService: true,
    adjustedImgScalePct: 10,
    generation: Generation.GEN_2,
  },
  {
    img: 'Deromo.PNG',
    name: 'Deromo',
    description:
      'War veteran and family man just trying to keep up the family farm.',
    stats: {
      strength: 4,
      dexterity: 5,
      constitution: 3,
      intelligence: 3,
      wisdom: 3,
      charisma: 3,
      luck: 3,
    },
    age: 52,
    serviceYrs: 12,
    height: 20,
    rank: Rank.SERGEANT_MAJOR,
    isActiveService: false,
    adjustedImgScalePct: 7,
    generation: Generation.GEN_1,
  },
  {
    img: 'Gadodo.PNG',
    name: 'Gadodo',
    description:
      'War veteran raised by the military. A series of tragedies and horrific actions lead him to being incarcerated after retirement.',
    stats: {
      strength: 4,
      dexterity: 4,
      constitution: 3,
      intelligence: 3,
      wisdom: 3,
      charisma: 5,
      luck: 2,
    },
    age: 54,
    serviceYrs: 28,
    height: 21,
    rank: Rank.MAJOR,
    isActiveService: false,
    adjustedImgScalePct: 4,
    generation: Generation.GEN_1,
  },
  {
    img: 'Gosusu.PNG',
    name: 'Gosusu',
    description:
      'Self-proclaimed witch who wants to master the dark arts...and experience something truly unforgettable.',
    stats: {
      strength: 3,
      dexterity: 3,
      constitution: 2,
      intelligence: 5,
      wisdom: 4,
      charisma: 3,
      luck: 4,
    },
    age: -14,
    serviceYrs: 0,
    height: 19,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 20,
    generation: Generation.GEN_3,
    age_detailed: '19',
  },
  {
    img: 'Grahm.PNG',
    name: 'Grahm',
    description:
      'Magical megalomaniac who will do anything in exchange for a magical artifact...or even some wizard blood.',
    stats: {
      strength: 2,
      dexterity: 4,
      constitution: 3,
      intelligence: 4,
      wisdom: 4,
      charisma: 5,
      luck: 2,
    },
    age: 300,
    serviceYrs: 0,
    height: 21,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 9,
    generation: Generation.GEN_0,
    age_detailed: _REDACTEDTXT,
  },
  {
    img: 'Grododu.PNG',
    name: 'Grododu',
    description:
      'WIDESKY NCO in charge of communications and tech innovation. He purposefully has the most repugnant personality.',
    ability: {
      name: 'Genius',
      description: '',
      statAffecting: 'intelligence',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Disfigured',
      description: '',
      statAffecting: 'dexterity',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 2,
      dexterity: 2,
      constitution: 3,
      intelligence: 5,
      wisdom: 4,
      charisma: 3,
      luck: 5,
    },
    age: 24,
    serviceYrs: 6,
    height: 27,
    rank: Rank.CORPORAL,
    isActiveService: true,
    adjustedImgScalePct: 3,
    generation: Generation.GEN_2,
  },
  {
    img: 'Hitoto.PNG',
    name: 'Hitoto',
    description:
      'PINPOINT platoon botanist. Having been raised in an aristocratic lifestyle, she joined the military to escape an arranged marriage.',
    stats: {
      strength: 5,
      dexterity: 3,
      constitution: 3,
      intelligence: 3,
      wisdom: 4,
      charisma: 3,
      luck: 3,
    },
    age: 36,
    serviceYrs: 10,
    height: 19,
    rank: Rank.CORPORAL_LANCE,
    isActiveService: true,
    adjustedImgScalePct: 15,
    generation: Generation.GEN_2,
  },
  {
    img: 'Jamimi.PNG',
    name: 'Jamimi',
    description:
      'War veteran and currently one of the leading doctors on Keron.',
    stats: {
      strength: 3,
      dexterity: 3,
      constitution: 3,
      intelligence: 5,
      wisdom: 4,
      charisma: 2,
      luck: 4,
    },
    age: 48,
    serviceYrs: 6,
    height: 22,
    rank: Rank.CORPORAL_LANCE,
    isActiveService: false,
    adjustedImgScalePct: 13,
    generation: Generation.GEN_1,
  },
  {
    img: 'Jomara.PNG',
    name: 'Jomara',
    description:
      'WIDESKY hand-to-hand combat specialist. Her kindly sweetness dies quickly when in the face of bullshit.',
    ability: {
      name: 'Test Subject',
      description: '',
      statAffecting: 'strength',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Hasty',
      description: '',
      statAffecting: 'wisdom',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 5,
      dexterity: 4,
      constitution: 4,
      intelligence: 3,
      wisdom: 3,
      charisma: 2,
      luck: 3,
    },
    age: 20,
    serviceYrs: 5,
    height: 19,
    rank: Rank.PRIVATE_SUPERIOR,
    isActiveService: true,
    adjustedImgScalePct: 7,
    generation: Generation.GEN_2,
  },
  {
    img: 'Keroro.PNG',
    name: 'Keroro',
    description:
      'ARMPIT platoon leader. He has a knack for comedy and loves to build gundam.',
    stats: {
      strength: 4,
      dexterity: 3,
      constitution: 3,
      intelligence: 2,
      wisdom: 2,
      charisma: 5,
      luck: 5,
    },
    age: 35,
    serviceYrs: 0,
    height: 20,
    rank: Rank.SERGEANT,
    isActiveService: true,
    adjustedImgScalePct: 4,
    age_detailed: _REDACTEDTXT,
  },
  {
    img: 'Kiki.PNG',
    name: 'Kiki',
    description:
      'A puppet controlled by some infernal she-demon from another dimension.',
    stats: {
      strength: 3,
      dexterity: 4,
      constitution: 5,
      intelligence: 1,
      wisdom: 5,
      charisma: 1,
      luck: 5,
    },
    age: 500,
    serviceYrs: 0,
    height: 18,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 20,
    generation: Generation.GEN_0,
    age_detailed: _REDACTEDTXT,
  },
  {
    img: 'Knightenbottom.PNG',
    name: 'Knightenbottom',
    description: 'A haunted suit of armor which pledged loyalty to King Akumu.',
    stats: {
      strength: 4,
      dexterity: 4,
      constitution: 4,
      intelligence: 3,
      wisdom: 2,
      charisma: 5,
      luck: 2,
    },
    age: 200,
    serviceYrs: 0,
    height: 17,
    rank: Rank.NONE,
    isActiveService: true,
    adjustedImgScalePct: 40,
    generation: Generation.GEN_0,
    age_detailed: _REDACTEDTXT,
  },
  {
    img: 'Kujijil.PNG',
    name: 'Kujiji',
    description:
      'PINPOINT platoon leader. A bubbly and distracted woman who feels responsible for a tragedy that befell her platoon.',
    ability: {
      name: 'Charismatic',
      description: '',
      statAffecting: 'charisma',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Distracted',
      description: '',
      statAffecting: 'wisdom',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 4,
      dexterity: 3,
      constitution: 4,
      intelligence: 3,
      wisdom: 2,
      charisma: 5,
      luck: 3,
    },
    age: 68,
    serviceYrs: 30,
    height: 21,
    rank: Rank.SERGEANT_MAJOR,
    isActiveService: true,
    adjustedImgScalePct: 12,
    generation: Generation.GEN_1,
    age_detailed: '30',
  },
  {
    img: 'Kyohehe.PNG',
    name: 'Kyohehe',
    description:
      'PINPOINT platoon choreographer and drunkard. He has had feelings for Kujiji since they were kids, and laments never confessing.',
    stats: {
      strength: 5,
      dexterity: 3,
      constitution: 5,
      intelligence: 2,
      wisdom: 3,
      charisma: 4,
      luck: 3,
    },
    age: 68,
    serviceYrs: 30,
    height: 23,
    rank: Rank.SERGEANT,
    isActiveService: true,
    adjustedImgScalePct: 33,
    generation: Generation.GEN_1,
    age_detailed: '30',
  },
  {
    img: 'Lyudidi.PNG',
    name: 'Lyudidi',
    description:
      'A robot made with the skin of corpses. She has no AI and can only act when prompted or threatened.',
    stats: {
      strength: 5,
      dexterity: 5,
      constitution: 5,
      intelligence: 1,
      wisdom: 3,
      charisma: 0,
      luck: 5,
    },
    age: 7,
    serviceYrs: 0,
    height: 9,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 20,
    generation: Generation.GEN_0,
    age_detailed: _REDACTEDTXT,
  },
  {
    img: 'Murama.PNG',
    name: 'Murama',

    description:
      'WIDESKY platoon explosives expert. A lovable but slow-witted guy who cannot keep his hands to himself.',
    ability: {
      name: 'Test Subject',
      description: '',
      statAffecting: 'constitution',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Idiot',
      description: '',
      statAffecting: 'intelligence',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 4,
      dexterity: 3,
      constitution: 5,
      intelligence: 2,
      wisdom: 4,
      charisma: 5,
      luck: 1,
    },
    age: 20,
    serviceYrs: 5,
    height: 19,
    rank: Rank.CORPORAL_LANCE,
    isActiveService: true,
    adjustedImgScalePct: 6,
    generation: Generation.GEN_2,
  },
  {
    img: 'Murara.PNG',
    name: 'Murara',
    description: 'War veteran himbo who retired to be a stay-at-home dad.',
    stats: {
      strength: 4,
      dexterity: 4,
      constitution: 5,
      intelligence: 2,
      wisdom: 3,
      charisma: 3,
      luck: 3,
    },
    age: 50,
    serviceYrs: 8,
    height: 19,
    rank: Rank.CORPORAL,
    isActiveService: false,
    adjustedImgScalePct: 3,
    generation: Generation.GEN_1,
  },
  {
    img: 'Nanami.PNG',
    name: 'Nanami',
    description:
      'WIDESKY training assassin. She struggles with attention due to being the youngest of many.',
    stats: {
      strength: 2,
      dexterity: 5,
      constitution: 3,
      intelligence: 4,
      wisdom: 3,
      charisma: 4,
      luck: 3,
    },
    age: 18,
    serviceYrs: 1,
    height: 19,
    rank: Rank.PRIVATE_3RD,
    isActiveService: true,
    adjustedImgScalePct: 3,
    generation: Generation.GEN_2,
  },
  {
    img: 'Nenamo.PNG',
    name: 'Nenamo',

    description:
      'WIDESKY recon and infiltration expert. A shy sort who can see the feelings and intentions of others.',
    ability: {
      name: 'Attuned',
      description: '',
      statAffecting: 'wisdom',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Stunted',
      description: '',
      statAffecting: 'strength',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 2,
      dexterity: 5,
      constitution: 3,
      intelligence: 3,
      wisdom: 5,
      charisma: 3,
      luck: 3,
    },
    age: 23,
    serviceYrs: 8,
    height: 25,
    rank: Rank.CORPORAL,
    isActiveService: true,
    adjustedImgScalePct: 13,
    generation: Generation.GEN_2,
  },
  {
    img: 'Rizizu.PNG',
    name: 'Rizizu',
    description:
      'WIDESKY engineer specialist. She is cold and brutally honest, but loyal and caring to those who know her.',
    stats: {
      strength: 4,
      dexterity: 2,
      constitution: 3,
      intelligence: 5,
      wisdom: 4,
      charisma: 3,
      luck: 3,
    },
    age: 23,
    serviceYrs: 8,
    height: 16,
    rank: Rank.SERGEANT,
    isActiveService: true,
    adjustedImgScalePct: 4,
    generation: Generation.GEN_2,
  },
  {
    img: 'Romeme.PNG',
    name: 'Romeme',
    description:
      'Commanding officer of the many units making up squadron 80. He is trapped in a war of which he has grown tired of.',
    stats: {
      strength: 3,
      dexterity: 3,
      constitution: 3,
      intelligence: 4,
      wisdom: 4,
      charisma: 4,
      luck: 3,
    },
    age: 54,
    serviceYrs: 36,
    height: 20,
    rank: Rank.MAJOR,
    isActiveService: true,
    adjustedImgScalePct: 26,
    generation: Generation.GEN_1,
    age_detailed: '25',
  },
  {
    img: 'Ronana.PNG',
    name: 'Ronana',
    description:
      'Advocate for traumatized veterans, active protestor of the Keronian military government. She is loud and proud and will not back down.',
    stats: {
      strength: 3,
      dexterity: 2,
      constitution: 3,
      intelligence: 4,
      wisdom: 5,
      charisma: 4,
      luck: 3,
    },
    age: 46,
    serviceYrs: 0,
    height: 27,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 7,
    generation: Generation.GEN_1,
    age_detailed: 'DECEASED',
  },
  {
    img: 'Scototo.PNG',
    name: 'Scototo',
    description:
      'Mysterious Keronian who was found by WIDESKY on Pokopen. His ability to retain information is impressive and he already has extensive knowledge on Keronian tech..',
    stats: {
      strength: 3,
      dexterity: 3,
      constitution: 2,
      intelligence: 5,
      wisdom: 2,
      charisma: 5,
      luck: 4,
    },
    age: 25,
    serviceYrs: 0,
    height: 19,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 22,
    generation: Generation.GEN_2,
  },
  {
    img: 'Shadudu.PNG',
    name: 'Shadudu',
    description:
      'A shadow minion created by Akumu. Shad is all beef and no brain, but he has a good heart.',
    ability: {
      name: 'Powerhouse',
      description: '',
      statAffecting: 'strength',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Unmoveable',
      description: '',
      statAffecting: 'dexterity',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 5,
      dexterity: 3,
      constitution: 5,
      intelligence: 1,
      wisdom: 2,
      charisma: 5,
      luck: 3,
    },
    age: 34,
    serviceYrs: 0,
    height: 29,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 10,
    generation: Generation.GEN_0,
    age_detailed: _REDACTEDTXT,
  },
  {
    img: 'Shibibi.PNG',
    name: 'Shibibi',
    description:
      'Treasure hunter and sassy seasoned explorer. She loves nothing more than a good adventure (so long as there are riches to be had.)',
    stats: {
      strength: 4,
      dexterity: 4,
      constitution: 3,
      intelligence: 3,
      wisdom: 4,
      charisma: 2,
      luck: 4,
    },
    age: 27,
    serviceYrs: 0,
    height: 17,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 18,
    generation: Generation.GEN_2,
  },
  {
    img: 'Tenbu.PNG',
    name: 'Tenbu',
    description:
      'An ancient woman who travels between universes to aid mortals with their troubles, and hopefully answer long-sought questions.',
    ability: {
      name: 'Medium',
      description: '',
      statAffecting: 'wisdom',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Feeble',
      description: '',
      statAffecting: 'strength',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 3,
      dexterity: 3,
      constitution: 3,
      intelligence: 4,
      wisdom: 5,
      charisma: 2,
      luck: 4,
    },
    age: 300,
    serviceYrs: 0,
    height: 20,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 8,
    generation: Generation.GEN_0,
    age_detailed: '36',
  },
  {
    img: 'Teruru.PNG',
    name: 'Teruru',
    description:
      'Teruru is the top sniper stationed on planet Desandt. Lately he has been acting odd...scaring his coworkers...causing mayhem. The subject of nightmares.',
    ability: {
      name: 'Marksman',
      description: '',
      statAffecting: 'dexterity',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Animalistic',
      description: '',
      statAffecting: 'intelligence',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 3,
      dexterity: 5,
      constitution: 5,
      intelligence: 2,
      wisdom: 2,
      charisma: 4,
      luck: 3,
    },
    age: 350,
    serviceYrs: 28,
    height: 18,
    rank: Rank.LIEUTENANT_2ND,
    isActiveService: true,
    adjustedImgScalePct: 10,
    generation: Generation.GEN_0,
    age_detailed: '37',
  },
  {
    img: 'Tikoko.PNG',
    name: 'Tikoko',
    description:
      'Nerdy roboticist and army veteran who survived the attack of the "29-1 slaughterer.',
    ability: {
      name: 'Genius',
      description: '',
      statAffecting: 'intelligence',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Disfigured',
      description: '',
      statAffecting: 'dexterity',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 2,
      dexterity: 3,
      constitution: 3,
      intelligence: 5,
      wisdom: 4,
      charisma: 3,
      luck: 4,
    },
    age: 31,
    serviceYrs: 10,
    height: 16,
    rank: Rank.CORPORAL,
    isActiveService: true,
    adjustedImgScalePct: 4,
    generation: Generation.GEN_2,
  },
  {
    img: 'Ulerara.PNG',
    name: 'Ulerara',
    description:
      'Eccentric woman who crash landed into WIDESKY base of operations. Against better judgement, they dispelled her criminal charges for recruitment.',
    ability: {
      name: 'Undead',
      description: '',
      statAffecting: 'constitution',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Suspicous',
      description: '',
      statAffecting: 'charisma',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 3,
      dexterity: 5,
      constitution: 5,
      intelligence: 4,
      wisdom: 3,
      charisma: 3,
      luck: 1,
    },
    age: 21,
    serviceYrs: 0.5,
    height: 20,
    rank: Rank.PRIVATE_IN_TRAINING,
    isActiveService: true,
    adjustedImgScalePct: 6,
    generation: Generation.GEN_2,
  },
  {
    img: 'Usagi.PNG',
    name: 'Usagi',
    description:
      'A shadow minion created by Akumu. He cannot sit still or he will literally die.',
    ability: {
      name: 'Indestructible',
      description: '',
      statAffecting: 'constitution',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Reckless',
      description: '',
      statAffecting: 'charisma',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 2,
      dexterity: 5,
      constitution: 5,
      intelligence: 4,
      wisdom: 2,
      charisma: 3,
      luck: 3,
    },
    age: -33,
    serviceYrs: 0,
    height: 20,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 35,
    generation: Generation.GEN_0,
    age_detailed: _REDACTEDTXT,
  },
  {
    img: 'Xenono.PNG',
    name: 'Xenono',
    description:
      'Keronian-Shaasunian hybrid who struggles to connect with others. He also wants to kill all criminals.',
    stats: {
      strength: 3,
      dexterity: 5,
      constitution: 4,
      intelligence: 5,
      wisdom: 2,
      charisma: 1,
      luck: 4,
    },
    age: -10,
    serviceYrs: 0,
    height: 18,
    rank: Rank.NONE,
    isActiveService: false,
    generation: Generation.GEN_3,
    age_detailed: '17',
  },
  {
    img: 'Xi.PNG',
    name: 'Xi',
    description:
      'An elusive master of disguise. No one knows his true name. No one knows where he came from.',
    stats: {
      strength: 2,
      dexterity: 2,
      constitution: 3,
      intelligence: 5,
      wisdom: 3,
      charisma: 5,
      luck: 4,
    },
    age: 34,
    serviceYrs: 0,
    height: 20,
    rank: Rank.NONE,
    isActiveService: false,
    generation: Generation.GEN_2,
    age_detailed: _REDACTEDTXT,
  },
  {
    img: 'Yamoro.PNG',
    name: 'Yamoro',
    description:
      'Leader of the WIDESKY platoon. He struggles balancing professionalism with his proclivity to care.',
    ability: {
      name: 'Authoritative',
      description: '',
      statAffecting: 'charisma',
      statValue: 1,
      statModifier: StatMod.ADD,
    },
    weakness: {
      name: 'Alcoholic',
      description: '',
      statAffecting: 'constitution',
      statValue: 1,
      statModifier: StatMod.SUBTRACT,
    },
    stats: {
      strength: 4,
      dexterity: 3,
      constitution: 3,
      intelligence: 4,
      wisdom: 4,
      charisma: 5,
      luck: 1,
    },
    age: 23,
    serviceYrs: 8,
    height: 17,
    rank: Rank.SERGEANT_MAJOR,
    isActiveService: true,
    adjustedImgScalePct: 8,
    generation: Generation.GEN_2,
  },
  {
    img: 'Yonana.PNG',
    name: 'Yonana',
    description:
      'War veteran who shed her cold exterior for something open and loving after being inspired by a dear friend.',
    stats: {
      strength: 5,
      dexterity: 3,
      constitution: 3,
      intelligence: 3,
      wisdom: 3,
      charisma: 4,
      luck: 3,
    },
    age: 51,
    serviceYrs: 11,
    height: 16,
    rank: Rank.CAPTAIN,
    isActiveService: false,
    adjustedImgScalePct: 7,
    generation: Generation.GEN_1,
  },
  {
    img: 'Yotaku.PNG',
    name: 'Yotaku',
    description:
      'Advanced Keroid of unknown origin. His AI is prone to going homicidal, often siting his desire to be real during fits.',
    stats: {
      strength: 5,
      dexterity: 4,
      constitution: 5,
      intelligence: 5,
      wisdom: 1,
      charisma: 3,
      luck: 1,
    },
    age: 15,
    serviceYrs: 0,
    height: 23,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 15,
    generation: Generation.GEN_0,
    age_detailed: _REDACTEDTXT,
  },
  {
    img: 'Zyena.PNG',
    name: 'Zyena',
    description:
      'A Shaasunian who is obsessed with a phenomenon called "The Strikers Blessing" by her people.',
    stats: {
      strength: 2,
      dexterity: 4,
      constitution: 3,
      intelligence: 5,
      wisdom: 3,
      charisma: 4,
      luck: 3,
    },
    age: 20,
    serviceYrs: 0,
    height: 18,
    rank: Rank.NONE,
    isActiveService: false,
    adjustedImgScalePct: 5,
    generation: Generation.GEN_2,
    age_detailed: _REDACTEDTXT,
  },
];
