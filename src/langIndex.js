import S from 's-js'
export const langIndex = S.data(0)
export const toggleLang = () => {
  langIndex() === 0? langIndex(1): langIndex(0)
}
