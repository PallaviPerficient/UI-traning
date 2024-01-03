export async function  fetchPosts(){
    const response =await fetch('http://localhost:3000/posts')
    return response.json()
}
export async function  fetchPost(id){
    const response =await fetch(`http://localhost:3000/posts/${id}`)
    return response.json()
}

export async function  createPost(newpost){
    const response =await fetch(`http://localhost:3000/posts/`,{
        method:"POST",
        header :{
            "Content-Type" :"application/json"
        },
        body : JSON.stringify(newpost)
    });
    return response.json()
}