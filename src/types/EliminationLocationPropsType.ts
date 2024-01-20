export type EliminationLocationPropsType = {
  selectedMap: string;
  coordinates: { x: number; y: number };
  setCoordinates: (value: { x: number; y: number }) => void;
};
