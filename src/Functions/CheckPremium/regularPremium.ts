import { IPremiumBehaviour } from "./IPremiumBehaviour";

export class RegularPremium implements IPremiumBehaviour {

  getPremiumPrice(isPremium: boolean): number {
    return isPremium ? 3 : 0;
  }

}