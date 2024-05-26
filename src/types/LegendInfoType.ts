export type legendInfoType = {
  name: string;
  class: string;
  image: string;
  abilities: {
    passive: {
      name: string;
      description: string;
      cooldown: string;
      additionalInfo: string[];
      icon: React.FC<React.SVGProps<SVGSVGElement>>;
    };
    tactical: {
      name: string;
      description: string;
      cooldown: string;
      additionalInfo: string[];
      icon: React.FC<React.SVGProps<SVGSVGElement>>;
    };
    ultimate: {
      name: string;
      description: string;
      cooldown: string;
      additionalInfo: string[];
      icon: React.FC<React.SVGProps<SVGSVGElement>>;
    };
  };
};
