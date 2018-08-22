export class Notes {
  constructor(
    public Id : number,
    public Title : string,
    public Text : string,
    public PinStat: boolean,
    public label : Label[],
    public checklist : Checklist[]
  ){}

}
class Label {
  public label:string;
}
class Checklist{
  public list : string;
}

