export interface FbAuthResponse {
  displayName: string,
  email: string,
  expiresIn: string,
  idToken: string,
  kind: string,
  localId: string,
  refreshToken: string,
  registered: boolean
}

export interface User {
  email: string,
  password: string,
  returnSecureToken?: boolean,
}

export interface Product {
  id?: string,
  image: string,
  title: string,
  price: number,
  category: string,
}
