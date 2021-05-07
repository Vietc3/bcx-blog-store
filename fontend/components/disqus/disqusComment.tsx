import {DiscussionEmbed} from "disqus-react"

interface Props {
    post: any
}

const DisqusComments = ({ post }:Props) => {
  const disqusShortname = "blogstore-1"
  const disqusConfig = {
    url: "https://localhost:3000/"+post.id,
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;