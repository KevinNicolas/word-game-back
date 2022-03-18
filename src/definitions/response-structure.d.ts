export type ResponseStructure = {
  api_owner: APIOwner
  body: Body
}

export type APIOwner = {
  author: string
  web: string
  cafecito: string
  instagram: string
  github: string
  linkedin: string
  twitter: string
  wordle_friendproject: string
}

export type Body = {
  Word: string
  Definition: string
  Author: string
  ErrorMessage: null
  EncodingWebName: string
  WordOrigin: null
  UrlDefinitionSource: null
  urls: Urls
  DefinitionMD: string
  Related: Related[]
}

export type Related = {
  Word: string
  urls: Urls
}

export type Urls = {
  url: string
  wiktionary: string
  wikipedia: string
  thumbnail: string
  image: string
}
