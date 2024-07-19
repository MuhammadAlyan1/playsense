export type StatisticsType = {
  totalMatches: number;
  totalKills: number;
  totalDamage: number;
  totalAssists: number;
  totalDowns: number;
  averageKills: number;
  averageDamage: number;
  averageAssists: number;
  averageDowns: number;
  eliminationReasons: {
    'Fair Fight': number;
    'Focused Fire': number;
    '3rd Partied': number;
    'Resource Deficit': number;
    'Zone Death': number;
    Others: number;
  };
  favoriteCharacters: {
    'Kings Canyon': number;
    'Broken Moon': number;
    'Storm Point': number;
    "World's Edge": number;
    Olympus: number;
    Others: number;
  };
  favoriteMaps: Record<string, number>;
  characterKills: Record<string, number>;
  weaponKills: Record<string, number>;
  position: {
    'First Place': number;
    'Second Place': number;
    'Early Game': number;
    'Top Three': number;
    'Top Five': number;
    'Top Ten': number;
    Others: number;
  };
};
