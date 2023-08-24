export const NewArticle = ({title,text}) => {
  return (
    <article className="border-b-2 border-Grayishblue text-Off-white last:border-none py-7 h-[140px]">
        <h1 className="font-bold pb-2 hover:text-Softorange text-[20px] mb-3 cursor-pointer">{title}</h1>
        <p className="text-[15px]">{text}</p>
    </article>
  )
}