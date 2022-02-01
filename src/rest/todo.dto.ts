export class TodoDto {
  id!: number;
  title!: string;
  userId: number | undefined;
  completed: boolean | undefined;

  constructor(data?: TodoDto) {
    if (data) {
      this.id = data.id;
      this.title = data.title;
      this.userId = data.userId;
      this.completed = data.completed;
    }
  }
}
