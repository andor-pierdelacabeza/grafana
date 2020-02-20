import { Vector } from '../types/vector';
import { vectorToArray } from './vectorToArray';

export class ScaledVector extends Vector<number> {
  constructor(private source: Vector<number>, private scale: number) {
    super();
  }

  get length(): number {
    return this.source.length;
  }

  get(index: number): number {
    return this.source.get(index) * this.scale;
  }

  toArray(): number[] {
    return vectorToArray(this);
  }

  toJSON(): number[] {
    return vectorToArray(this);
  }
}
