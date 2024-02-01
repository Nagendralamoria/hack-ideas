

function ChallengeIdeas({idea }) {
    const { title, description, tags,postedDate, upvotes } = idea;
    console.log(title, description, tags, upvotes)
  return (
      <div className="border-solid shadow-lg flex flex-col justify-evenly gap-8 p-4 rounded bg-white">
          <h2 className="text-xl text-indigo-600 font-bold">{title}</h2>
          <p>{description}</p>
          <div>
          <h4 className="font-bold text-indigo-600 mb-4">Tags</h4>
          <div className="flex gap-2 ">
              {
               tags.map((tag)=><p className=" border-solid border-2 border-grey-500 text-indigo-500  py-2 px-4 font-bold text-sm rounded-lg " key={tag}>{tag}</p>)
              }
              
          </div>
         </div>
          <div className="flex justify-between items-center">
              <p>{postedDate }</p>
              <p>{upvotes }</p>
          </div>
    </div>
  )
}

export default ChallengeIdeas