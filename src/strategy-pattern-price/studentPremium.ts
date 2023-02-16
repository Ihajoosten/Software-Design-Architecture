import { IPremiumBehaviour } from "./IPremiumBehaviour";

export class StudentPremium implements IPremiumBehaviour {
  getPremiumPrice(isPremium: boolean): number {
    return isPremium ? 2 : 0;
  }
}
