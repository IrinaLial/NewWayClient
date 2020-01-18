import {ResponseDetail} from './response.detail';

export class AuthResponse {
  status: ResponseDetail;
  token: Token;
}

export class Token {
  token: string;
}
