export const parseWord = (word: string): string => {
  return word.replace(/[^a-z,A-Z,ñ,Ñ]/g, (str: string): string =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  )
}
