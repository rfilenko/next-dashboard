interface PageTitleProps {
  title: string
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <span className="my-4 flex items-center space-x-1 text-md leading-none text-muted-foreground">{title}</span>
  )
}

export default PageTitle