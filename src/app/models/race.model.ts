import { PonyModel } from './pony.model';

export type RaceModel = { id: number; name: string; ponies: PonyModel[]; startInstant: string };
