export const BlogsAndDestinationLoader = async() =>{
    const blogData = await fetch('https://travel-bliss-server.vercel.app/blogs');
    const blogs = await blogData.json()

    const desinatinData = await fetch('https://travel-bliss-server.vercel.app/destinations');
    const destinations = await desinatinData.json()
    return { blogs,destinations }
}