export class UserDto {
  id!: number;
  name!: string;
  username: string = '';
  email: string = '';
  phone: string = '';
  website: string = '';

  constructor(data?: UserDto) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.username = data.username;
      this.email = data.email;
      this.phone = data.phone;
      this.website = data.website;
    }
  }
}
