import Link from "next/link";
import Sidebar from "../navbar/sidebar";
export default async function Posts() {
  const posts = await getServerPosts();

  return (
    
<div className="flex flex-row w-screen">

    <div className="w-3/4 bg-slate-800 p-5">
      <div className="flex justify-center uppercase text-3xl font-bold">Threads</div>
      {posts.data.map((items) => {
        
        return (
          
          <div className="flex flex-col p-5 bg-slate-900 hover:ring-offset-1 ring-2 ring-slate-700   m-2" >
            <Link className="flex flex-col" href={{pathname:`/posts/post/${items.id}`}}>
            <div className=" text-xl  hidden  ">{items.attributes.title}</div>
            <div className="font-extrabold text-xl">{items.attributes.question}</div>
            <div className="text-sm">{items.attributes.username}</div>
            </Link>
           <div>
            {/* {items.attributes.ListOfAnswers.answers.map((answer)=>{return( <div><div>{answer.text}</div><div>{answer.author}</div></div>)})} */}
           </div>
          </div>
        
        );
      })}
    </div>
      <Sidebar className="w-1/4"></Sidebar>
      </div>
      
  );
}

export async function getServerPosts() {
  let header = {
    Authorization:
      "Bearer 0acb9abf5049c2ba5e3103b2c574449bacca38fe2524ba64d552adb36ffd6fc009891e76976797027cb09bcde5fab877604039b2b60ff3077176e4330be6c7a3076d5354b36c4a138d71d2622a695165eebacb9b1753c7e62b261080b97b82cb881e8f2ff9c530b27f052b07a4847d7b472e6e3bf29c74bc3261be0cb80db066",
  };
  const a = await fetch("http://localhost:1337/api/forum-posts", {
    headers: header,
    next: { revalidate: 10 }
  });
  
  const posts = await a.json();

 

  return posts;
}
