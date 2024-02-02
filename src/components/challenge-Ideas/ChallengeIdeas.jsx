
import { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';

function ChallengeIdeas({idea}) {
    const { title, description, tags, postedDate, upvotes } = idea;
    
    const [countVotes, setCountVotes] = useState(upvotes);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleClick = () => {
        if (!isButtonDisabled) {
            setCountVotes(countVotes + 1);
            setIsButtonDisabled(true);
        }
    }

  return (
      <div className="border-solid shadow-lg flex flex-col justify-evenly gap-8 p-4 rounded bg-white">
          <h2 className="text-xl text-indigo-600 font-bold">{title}</h2>
          <p>{description}</p>
          <div>
          <h4 className="font-bold text-indigo-600 mb-4">Tags</h4>
          <div className="flex gap-2 flex-wrap ">
              {
               tags?.map((tag)=><p className=" border-solid border-2 border-grey-500 text-indigo-500  py-2 px-4 font-bold text-sm rounded-lg " key={tag}>{tag}</p>)
              }
              
          </div>
         </div>
          <div className="flex justify-between items-center text-indigo-600">
              <p>{postedDate}</p>
              <div className="flex gap-2 items-center text-xl cursor">
                <AiFillLike onClick={handleClick} />
                <p>{countVotes }</p>
              </div>
          </div>
    </div>
  )
}

export default ChallengeIdeas