import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Task } from "../tasks/task.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mariadb",
  host: "localhost",
  username: "marci",
  password: "password",
  database: "green-fox",
  entities: [Task],
  synchronize: true,
};
