
interface ICommentsProps{
    comments: Array<{
        body: string
    }>
}

const Comments = (props: ICommentsProps) => {
    return (
        <div>
          {
            props.comments.map((item, i) => <div key={i}>{item.body}</div>)
          }
        </div>
    )
}

export default Comments;