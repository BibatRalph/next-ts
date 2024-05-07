async function getData() {
  const res = await fetch('https://www.boredapi.com/api/activity') 

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {

  const { fact } = await getData(); 
 
  return {fact} 

}