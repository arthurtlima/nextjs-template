type MainProps = {
  title?: string
}

export default function Main({ title = 'test' }: MainProps) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}
