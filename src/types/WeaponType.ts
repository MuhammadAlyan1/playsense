export type WeaponType = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  kills: number;
  assists: number;
  downs: number;
  damage: number;
  isSelected: boolean;
};
