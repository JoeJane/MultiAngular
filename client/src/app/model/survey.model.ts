export class Survey
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: number,
    public userId?: number,
    public surveyId?: number,
    public title?: string,
    public description?: string,
    public date?: Date
  ){}

  public toString(): string
  {
    return `
    Survey
    -------------------------------
    User Id      : ${this.userId}
    Survey Id    : ${this.surveyId}
    Title        : ${this.title}
    Description  : ${this.description}
    Date         : ${this.date}
    -------------------------------
    `;
  }
}
