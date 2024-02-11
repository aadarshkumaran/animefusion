"use server"

import Card, { AnimeProp } from "./components/Card"

const fetchData = async(page:number) => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=16&order=popularity`)
    const data = await response.json()
    // console.log(data);
    
    return data.map((anime:AnimeProp,index:number)=>(
        <Card key={anime.id} anime={anime} index={index}/>
      ))
}
 
export default fetchData;