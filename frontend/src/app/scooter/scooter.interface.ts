import { Coordinate } from '@src/app/shared/interfaces/coordinate.interface';

export enum ScooterType {
  LIME = 'Lime',
  BEAM = 'Beam',
  FLAMINGO = 'Flamingo'
}

export interface Scooter {
  type: ScooterType;
  coordinate: Coordinate;
}
