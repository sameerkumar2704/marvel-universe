

import md5 from "md5";
const timestamp = Date.now();
const publicKey = "d910e64d1739909cb11545b120a9d4ed";
const privateKey = "9aab5870862885d45ea9dbb19e5704bdfcebf37a";
const hashCode = md5(timestamp + privateKey + publicKey);

function getComicDeatisWithTitle(title) {
  const url = "https://gateway.marvel.com:443/v1/public/";

  // &startYear=2011&hasDigitalIssue=true

  return (
    url + `comics?title=${title}`+ `&limit=3&apikey=${publicKey}&hash=${hashCode}&ts=${timestamp}`
  );
}
async function getData(title){
  try{
    const url  = getComicDeatisWithTitle(title)
    console.log(url)
    let data = await fetch(url)
    data = data.json()
    return data
  }catch(e){
    console.log(e.message)
    throw new Error("something went wrong")
  }

}
export default getComicDeatisWithTitle;
export {getData}
