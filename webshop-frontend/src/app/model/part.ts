import {Brand} from './brand';

export class Part {

  public name: string;
  public description: string;
  public price: number;
  public priceOnSale: number;
  public onSale: boolean;
  public onStock: boolean;
  public stockNumber: number;
  public brand: Brand;

}
