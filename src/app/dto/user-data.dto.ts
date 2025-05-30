// Definition of the structure of the user data received from the API
export class UserDataDTO {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    },
    public phone: string,
    public website: string,
    public company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
  ) {}
}
