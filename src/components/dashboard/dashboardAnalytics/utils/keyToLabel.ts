export const keyToLabel = (key: string) => {
  switch (key) {
    case 'totalMatches':
      return 'Total Matches';
    case 'totalKills':
      return 'Total Kills';
    case 'totalDamage':
      return 'Total Damage';
    case 'totalAssists':
      return 'Total Assists';
    case 'totalDowns':
      return 'Total Downs';
    case 'averageKills':
      return 'Average kills';
    case 'averageDamage':
      return 'Average Damage';
    case 'averageAssists':
      return 'Average Assists';
    case 'averageDowns':
      return 'Average Downs';
    case 'favoriteCharacters':
      return 'Favorite Character';
    case 'eliminationReasons':
      return 'Elimination Reason';
    case 'favoriteMaps':
      return 'Favorite Map';
    case 'characterKills':
      return 'Favorite Character';
    case 'weaponKills':
      return 'Favorite Weapon';
    case 'position':
      return 'Common Placement';
    default:
      return 'Statistic';
  }
};
