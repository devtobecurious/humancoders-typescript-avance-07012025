import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if(! app) {
  throw new Error('Please fix the app div found')
}

app.innerHTML = `
<div>
  <h1>My super game<h1>
</div>
`

//#region Infer 
type ExtractStringType<T> = T extends `${infer U} !` ? U : never;
type ResultType = ExtractStringType<'hello !'>

const result: ResultType = 'hello'

type Ship = {
  id: number,
  label: string
}

type ExtractFromSingleton<T> = T extends { [K in keyof T]: infer U } ? U : never

type ShipResult = ExtractFromSingleton<Ship>
const resultS: ShipResult = 'hello'
//#endregion



