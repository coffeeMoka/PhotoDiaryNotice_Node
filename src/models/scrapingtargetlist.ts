type Cast = {
  castName: string;
  shopName: string;
  postedDate: Date;
}

type LoginUser = {
  user: string,
  password: string
}

type ScrapingTarget = {
  hp: string,
  url: string,
  loginUser: LoginUser
}


export { Cast, LoginUser, ScrapingTarget }