

import matter from 'gray-matter'
import moment from 'moment'
export default function BlogBar () {
    var props = GetBlogList();
    return (
        <div className="blogbar">{
            props.sort((a,b)=> moment(a.document.data.date).isBefore(moment(b.document.data.date)) ? 1:-1).map(post=>(
        <p>{post.document.data.date} {post.document.data.title}</p>
    )) }</div>)
}


function GetBlogList () {
    // get almd files from the src/posts dir
    const posts = (context => {
      // grab all the files matching this context
      const keys = context.keys()
      // grab the values from these files
      const values = keys.map(context)
      // go through each file
      const data = keys.map((key, index) => {
        // Create slug from filename
        const slug = key
          .replace(/^.*[\\\/]/, '')
          .split('.')
          .slice(0, -1)
          .join('.')
        // get the current file value
        const value = values[index]
        // Parse frontmatter & markdownbody for the current file
        const document = matter(value.default)
        // return the .md content & pretty slug
        return {
          document,
          slug,
        }
      })
      // return all the posts
      return data
    })(require.context('../blog', true, /\.md$/))
    return posts;
  }