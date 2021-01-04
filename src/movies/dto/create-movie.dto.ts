import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  //dto : 데이터 전송 객체 data transfer object
  //코드를 간결하게 만들어주고, nestjs가 들어오는 쿼리에 대한 유효성을 검사할수있게해준다.
  //readonly를 붙여서 사용자가 수정못하는 데이터를 정의한다.
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true }) //하나하나검사
  readonly genres: string[];
}
