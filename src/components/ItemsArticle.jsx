export const ItemsArticle = ({image,num,title,text}) => {
  return (
    <article className="flex h-[162px] md:w-[343px] md:flex-grow ">
        <div className="w-[100px] flex-none">
        <img src={image} alt="article"/>
        </div>
        <div className="pl-6 pt-1">
            <h1 className="text-Grayishblue text-3xl font-bold mb-[18px]">{num}</h1>
            <h2 className="text-Verydarkblue font-bold mb-[18px] hover:text-Softorange cursor-pointer">{title}</h2>
            <p className="text-Grayishblue text-[14px]">{text}</p>
        </div>
    </article>
  )
}