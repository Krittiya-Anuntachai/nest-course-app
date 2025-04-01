import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We love NestJS';
  }

  getName(): string {
    return 'Krittiya Anuntachai';
  }
  showInformation(): string {
    return 'Hello, I am Krittiya Anuntachai, I am 19 years old';
  }

  myJSON() {
    return {
      name: 'Krittiya',
      lastname: 'Anuntachai',
      age: 19,
    };
  }

  GitHub() {
    return 'Git and GitHub using';
  }

  usepostman() {
    return 'we use postman';
  }

  showjson() {
    return {
      name: 'Krittiya',
      lastname: 'Anuntachai',
      age: 19,
      version: process.env.API_VERSION,
    };
  }
}
