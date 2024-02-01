import ChallengeIdeas from "../../components/challenge-Ideas/ChallengeIdeas"
import hackathonideas from '../../hackathonIdeas.json';

function HomePage() {
  return (
    <div className="grid  grid-cols-2 gap-4 p-8 bg-gray-100">
      {
        hackathonideas.map((ideas) => {
          return    <ChallengeIdeas key={ideas.title} idea={ideas} />
        })
      }
   
 
    </div>
  )
}

export default HomePage