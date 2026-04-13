import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL is not set')
}

const pool = new Pool({
  connectionString,
})

const db = new PrismaClient({
  adapter: new PrismaPg(pool),
})

const products = [
  {
    slug: 'the-last-of-us-part-ii',
    title: 'The Last of Us Part II',
    description:
      'A brutal, character-driven action game set in a post-pandemic America. It follows a path of revenge and survival through ruined cities and dangerous wilderness.',
    price: 6999,
    genre: 'Action',
    platform: 'PlayStation',
    imageUrl: 'https://picsum.photos/seed/the-last-of-us-part-ii/400/533',
    releaseYear: 2020,
    publisher: 'Sony Interactive Entertainment',
    isFeatured: true,
  },
  {
    slug: 'marvels-spider-man-2',
    title: "Marvel's Spider-Man 2",
    description:
      'A fast-moving superhero action adventure across a dense version of New York City. Players swing between iconic neighborhoods while facing threats that push Peter Parker and Miles Morales to their limits.',
    price: 6999,
    genre: 'Action',
    platform: 'PlayStation',
    imageUrl: 'https://picsum.photos/seed/marvels-spider-man-2/400/533',
    releaseYear: 2023,
    publisher: 'Sony Interactive Entertainment',
    isFeatured: false,
  },
  {
    slug: 'elden-ring',
    title: 'Elden Ring',
    description:
      'An open-world action RPG that blends cryptic lore with punishing combat. Its sprawling lands are filled with secret dungeons, bizarre bosses, and build variety that rewards experimentation.',
    price: 6999,
    genre: 'RPG',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/elden-ring/400/533',
    releaseYear: 2022,
    publisher: 'Bandai Namco Entertainment',
    isFeatured: true,
  },
  {
    slug: 'final-fantasy-vii-rebirth',
    title: 'Final Fantasy VII Rebirth',
    description:
      'A cinematic RPG that expands the journey beyond the city walls into a massive world of allies and danger. It combines tactical party combat with emotional story moments and rich exploration.',
    price: 6999,
    genre: 'RPG',
    platform: 'PlayStation',
    imageUrl: 'https://picsum.photos/seed/final-fantasy-vii-rebirth/400/533',
    releaseYear: 2024,
    publisher: 'Square Enix',
    isFeatured: false,
  },
  {
    slug: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    description:
      'A deep RPG built around player choice, party synergy, and reactive storytelling. Every encounter can bend in surprising directions depending on the allies you bring and the decisions you make.',
    price: 6999,
    genre: 'RPG',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/baldurs-gate-3/400/533',
    releaseYear: 2023,
    publisher: 'Larian Studios',
    isFeatured: true,
  },
  {
    slug: 'starfield',
    title: 'Starfield',
    description:
      'A large-scale RPG about exploration across settled systems and distant frontiers. It mixes ship travel, faction quests, and character progression in a spacefaring setting.',
    price: 6999,
    genre: 'RPG',
    platform: 'Xbox',
    imageUrl: 'https://picsum.photos/seed/starfield/400/533',
    releaseYear: 2023,
    publisher: 'Bethesda Softworks',
    isFeatured: false,
  },
  {
    slug: 'diablo-iv',
    title: 'Diablo IV',
    description:
      'A dark action RPG centered on loot, skill builds, and relentless demon hunting. Its combat focuses on momentum, seasonal progression, and replayable endgame systems.',
    price: 6999,
    genre: 'RPG',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/diablo-iv/400/533',
    releaseYear: 2023,
    publisher: 'Blizzard Entertainment',
    isFeatured: false,
  },
  {
    slug: 'ea-sports-fc-25',
    title: 'EA Sports FC 25',
    description:
      'A polished football simulation with updated squads, licensing, and competitive online modes. It aims to deliver quick matches, long-form career play, and tight controller-driven passing.',
    price: 6999,
    genre: 'Sports',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/ea-sports-fc-25/400/533',
    releaseYear: 2024,
    publisher: 'Electronic Arts',
    isFeatured: false,
  },
  {
    slug: 'nba-2k25',
    title: 'NBA 2K25',
    description:
      'A basketball sim built around crisp animation, deep team management, and online competition. It balances arcade flair with detailed player control and season-long progression.',
    price: 6999,
    genre: 'Sports',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/nba-2k25/400/533',
    releaseYear: 2024,
    publisher: '2K Sports',
    isFeatured: false,
  },
  {
    slug: 'madden-nfl-25',
    title: 'Madden NFL 25',
    description:
      'A licensed American football game that focuses on playbooks, player ratings, and franchise modes. It delivers tense drives, tactical defensive reads, and weekly multiplayer competition.',
    price: 6999,
    genre: 'Sports',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/madden-nfl-25/400/533',
    releaseYear: 2024,
    publisher: 'Electronic Arts',
    isFeatured: false,
  },
  {
    slug: 'forza-horizon-5',
    title: 'Forza Horizon 5',
    description:
      'An open-road racing game that turns driving into a festival across varied landscapes. Players collect cars, chase events, and compete in arcade-friendly races with generous spectacle.',
    price: 5999,
    genre: 'Sports',
    platform: 'Xbox',
    imageUrl: 'https://picsum.photos/seed/forza-horizon-5/400/533',
    releaseYear: 2021,
    publisher: 'Xbox Game Studios',
    isFeatured: false,
  },
  {
    slug: 'civilization-vii',
    title: 'Civilization VII',
    description:
      'A grand strategy game about founding cities, shaping diplomacy, and steering an empire through the ages. Each turn asks you to balance expansion, research, and military pressure against rival leaders.',
    price: 6999,
    genre: 'Strategy',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/civilization-vii/400/533',
    releaseYear: 2025,
    publisher: '2K',
    isFeatured: false,
  },
  {
    slug: 'frostpunk-2',
    title: 'Frostpunk 2',
    description:
      'A survival strategy game where governance matters as much as heat and food. You steer a fragile city through social unrest, resource scarcity, and impossible moral tradeoffs.',
    price: 5999,
    genre: 'Strategy',
    platform: 'PC',
    imageUrl: 'https://picsum.photos/seed/frostpunk-2/400/533',
    releaseYear: 2024,
    publisher: '11 bit studios',
    isFeatured: false,
  },
  {
    slug: 'age-of-empires-iv',
    title: 'Age of Empires IV',
    description:
      'A real-time strategy game focused on base building, scouting, and decisive battlefield timing. It pairs historic campaigns with competitive skirmishes built for careful macro decisions.',
    price: 4999,
    genre: 'Strategy',
    platform: 'PC',
    imageUrl: 'https://picsum.photos/seed/age-of-empires-iv/400/533',
    releaseYear: 2021,
    publisher: 'Xbox Game Studios',
    isFeatured: false,
  },
  {
    slug: 'manor-lords',
    title: 'Manor Lords',
    description:
      'A strategy game that blends settlement building with large-scale battlefield control. It emphasizes medieval planning, organic town layouts, and resource management rooted in realism.',
    price: 2999,
    genre: 'Strategy',
    platform: 'PC',
    imageUrl: 'https://picsum.photos/seed/manor-lords/400/533',
    releaseYear: 2024,
    publisher: 'Slavic Magic',
    isFeatured: false,
  },
  {
    slug: 'resident-evil-4',
    title: 'Resident Evil 4',
    description:
      'A tense horror action remake that reimagines a survival classic with modern controls and atmosphere. It keeps pressure high with inventory management, eerie villages, and relentless enemies.',
    price: 5999,
    genre: 'Horror',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/resident-evil-4/400/533',
    releaseYear: 2023,
    publisher: 'Capcom',
    isFeatured: false,
  },
  {
    slug: 'silent-hill-2',
    title: 'Silent Hill 2',
    description:
      'A psychological horror game built around grief, fog, and unsettling sound design. Its slow-burn exploration and symbolic monsters keep tension high throughout the story.',
    price: 6999,
    genre: 'Horror',
    platform: 'PlayStation',
    imageUrl: 'https://picsum.photos/seed/silent-hill-2/400/533',
    releaseYear: 2024,
    publisher: 'Konami',
    isFeatured: false,
  },
  {
    slug: 'alan-wake-2',
    title: 'Alan Wake 2',
    description:
      'A narrative horror thriller that shifts between light, darkness, and unreliable reality. It blends investigation, survival combat, and an uneasy supernatural mystery.',
    price: 5999,
    genre: 'Horror',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/alan-wake-2/400/533',
    releaseYear: 2023,
    publisher: 'Remedy Entertainment',
    isFeatured: false,
  },
  {
    slug: 'dredge',
    title: 'Dredge',
    description:
      'A strange fishing adventure with creeping horror under its calm surface. You upgrade a boat, explore remote waters, and uncover secrets best left below the waves.',
    price: 2999,
    genre: 'Adventure',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/dredge/400/533',
    releaseYear: 2023,
    publisher: 'Team17',
    isFeatured: false,
  },
  {
    slug: 'indiana-jones-and-the-great-circle',
    title: 'Indiana Jones and the Great Circle',
    description:
      'An archaeological adventure filled with puzzles, stealth, and pulpy set pieces. It follows a globe-spanning hunt that mixes exploration with cinematic spectacle.',
    price: 6999,
    genre: 'Adventure',
    platform: 'Xbox',
    imageUrl: 'https://picsum.photos/seed/indiana-jones-and-the-great-circle/400/533',
    releaseYear: 2024,
    publisher: 'Bethesda Softworks',
    isFeatured: false,
  },
  {
    slug: 'animal-well',
    title: 'Animal Well',
    description:
      'A compact adventure game about curiosity, secrets, and environmental puzzles. Its nonlinear map rewards careful observation and a willingness to experiment with obscure discoveries.',
    price: 2499,
    genre: 'Adventure',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/animal-well/400/533',
    releaseYear: 2024,
    publisher: 'Bigmode',
    isFeatured: false,
  },
  {
    slug: 'assassins-creed-shadows',
    title: "Assassin's Creed Shadows",
    description:
      'A stealth-driven adventure set in feudal Japan with two complementary protagonists. It mixes infiltration, open-world traversal, and story missions built around historical intrigue.',
    price: 6999,
    genre: 'Adventure',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/assassins-creed-shadows/400/533',
    releaseYear: 2025,
    publisher: 'Ubisoft',
    isFeatured: false,
  },
  {
    slug: 'persona-5-royal',
    title: 'Persona 5 Royal',
    description:
      'A stylish RPG about balancing high school life with supernatural dungeon crawling. Its turn-based combat and social systems make each day feel like a strategic choice.',
    price: 5999,
    genre: 'RPG',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/persona-5-royal/400/533',
    releaseYear: 2019,
    publisher: 'Atlus',
    isFeatured: false,
  },
  {
    slug: 'horizon-forbidden-west',
    title: 'Horizon Forbidden West',
    description:
      'An action adventure set among machine-filled ruins and frontier settlements. It combines ranged combat, climbing, and scavenging across a striking post-apocalyptic world.',
    price: 6999,
    genre: 'Action',
    platform: 'PlayStation',
    imageUrl: 'https://picsum.photos/seed/horizon-forbidden-west/400/533',
    releaseYear: 2022,
    publisher: 'Sony Interactive Entertainment',
    isFeatured: false,
  },
  {
    slug: 'ratchet-and-clank-rift-apart',
    title: 'Ratchet & Clank: Rift Apart',
    description:
      'A colorful action game built around gadget-heavy combat and quick dimensional jumps. Its constant motion, sharp humor, and vivid worlds make it easy to pick up and hard to put down.',
    price: 6999,
    genre: 'Action',
    platform: 'PlayStation',
    imageUrl: 'https://picsum.photos/seed/ratchet-and-clank-rift-apart/400/533',
    releaseYear: 2021,
    publisher: 'Sony Interactive Entertainment',
    isFeatured: false,
  },
  {
    slug: 'ghost-of-tsushima-directors-cut',
    title: "Ghost of Tsushima Director's Cut",
    description:
      'A cinematic action game about honor, stealth, and open-world exploration in feudal Japan. It pairs sword combat with guiding-wind traversal and a strong sense of place.',
    price: 5999,
    genre: 'Action',
    platform: 'PlayStation',
    imageUrl: 'https://picsum.photos/seed/ghost-of-tsushima-directors-cut/400/533',
    releaseYear: 2021,
    publisher: 'Sony Interactive Entertainment',
    isFeatured: false,
  },
  {
    slug: 'star-wars-jedi-survivor',
    title: 'Star Wars Jedi: Survivor',
    description:
      'An action adventure focused on lightsaber combat, platforming, and character growth. It continues a story of resistance while sending players through dangerous planets and ruined facilities.',
    price: 6999,
    genre: 'Action',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/star-wars-jedi-survivor/400/533',
    releaseYear: 2023,
    publisher: 'Electronic Arts',
    isFeatured: false,
  },
  {
    slug: 'dragon-age-the-veilguard',
    title: 'Dragon Age: The Veilguard',
    description:
      'A party-based RPG centered on companion bonds, spellcraft, and high-stakes fantasy conflict. It leans on story choices and tactical encounters to shape your path through Thedas.',
    price: 6999,
    genre: 'RPG',
    platform: 'Multi-Platform',
    imageUrl: 'https://picsum.photos/seed/dragon-age-the-veilguard/400/533',
    releaseYear: 2024,
    publisher: 'Electronic Arts',
    isFeatured: false,
  },
  {
    slug: 'south-of-midnight',
    title: 'South of Midnight',
    description:
      'A story-focused adventure rooted in Southern folklore and eerie magic. It follows a young hero through strange places, emotional encounters, and atmospheric traversal.',
    price: 5999,
    genre: 'Adventure',
    platform: 'Xbox',
    imageUrl: 'https://picsum.photos/seed/south-of-midnight/400/533',
    releaseYear: 2025,
    publisher: 'Xbox Game Studios',
    isFeatured: false,
  },
  {
    slug: 'super-mario-bros-wonder',
    title: 'Super Mario Bros. Wonder',
    description:
      'A bright adventure platformer that keeps every stage full of surprises and playful momentum. It turns classic side-scrolling into a constant stream of new gimmicks, secrets, and cooperative chaos.',
    price: 5999,
    genre: 'Adventure',
    platform: 'Nintendo Switch',
    imageUrl: 'https://picsum.photos/seed/super-mario-bros-wonder/400/533',
    releaseYear: 2023,
    publisher: 'Nintendo',
    isFeatured: false,
  },
]

async function main() {
  await db.product.deleteMany()
  await db.product.createMany({
    data: products,
  })
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
    await pool.end()
  })
