import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(25)
  @Matches(/((?=.*\d) | (?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "Password too weak",
  }) // pw contains at least one uppercase letter, at least one lowercase character, at least one number or special character
  password: string;
}
