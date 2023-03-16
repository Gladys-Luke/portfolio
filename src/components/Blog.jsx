import React, { useState, useEffect } from 'react';
import query from './Hash';
import Post from './Post';





const Blog = ()=>{
  const [posts, setPosts]= useState([]);
  const [loading, setLoading]= useState(true);

  
  useEffect(() => {
    if(loading){
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    } 
    const  fetchPosts = async () => {
     
      const response = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
  
      const apiResponse = await response.json();
      const { posts } = apiResponse.data.user.publication;
  
      setPosts(posts)
   } 
   fetchPosts()
  }, [loading]);

  return (
      
          <div className='w-full' id='component3'>

          <div className='flex flex-col justify-center items-center m-[5rem] text-[50px] font-bold'>
            <h1 data-aos="fade-right" className='text-[#2e304b]'>BLOG</h1>
            <hr data-aos="fade-right"
            data-aos-delay="900" className='w-[5rem] h-[5px] top-0 bg-[#000000] flex items-center justify-center text-center m-auto'/>
          </div>
          
        
           <main className='flex gap-4 flex-col sm:flex-row'>
            {posts.map((post, index) => (
                <Post post={post} key={index} />
            ))}
          </main>
    
          </div>
        );



}




export default Blog