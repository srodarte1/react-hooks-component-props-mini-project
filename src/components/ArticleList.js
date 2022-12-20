import Article from './Article'
const ArticleList = ({posts}) => {
    const mapPosts= posts.map(post => 
     <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    ) 
    return (
        <main>{mapPosts}</main>
    )
}
export default ArticleList