import GetBlogList from "../modals/GetBlogList";
import Link from "next/link";
export default function BlogBar () {
    var props = GetBlogList();
    return (
      <div className="blogbar">
        {
          props.map(post=>(
              <Link href={"/blog/"+post.slug}><div className="post-link">{post.document.data.date} {post.document.data.title}</div></Link>
            )
          )
        }
      </div>
    );
}


