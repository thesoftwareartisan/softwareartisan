import GlobalFooter from "../../components/globalfooter";
import GlobalHead from "../../components/globalhead";
import NavigationBar from "../../components/navigationbar";
import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'



export default function PostTemplate({ content, data }) {
    // This holds the data between `---` from the .md file
    const frontmatter = data

    return (
      <div className="container">
        <GlobalHead/>
        <NavigationBar/>
        <main>
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            Posted: {frontmatter.date}

            <hr/>
            <ReactMarkdown source={content} />
        </div>
        </main>
        <GlobalFooter/>
      </div>
    )
  }

  PostTemplate.getInitialProps = async (context) => {
    const { slug } = context.query
    // Import our .md file using the `slug` from the URL
    const content = await import(`../../blog/${slug}.md`)
    // Parse .md data through `matter`
    const data = matter(content.default)
    // Pass data to the component props
    return { ...data }
  }