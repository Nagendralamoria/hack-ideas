import { useContext, useEffect, useState } from "react";
import ChallengeIdeas from "../../components/challenge-Ideas/ChallengeIdeas";
import { IdeasContext } from "../../context/IdeasData.context";


function HomePage() {
  const {ideasData} = useContext(IdeasContext);
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState('desc'); 
  const [posts, setPosts] = useState(ideasData); 
  
  useEffect(() => {
    const sortPosts = () => {
      let sortedPosts = [...posts];

      sortedPosts.sort((a, b) => {
        if (sortBy === 'upvotes') {
          return sortOrder === 'asc' ? a.upvotes - b.upvotes : b.upvotes - a.upvotes;
        } else if (sortBy === 'date') {
          const dateA = new Date(a.postedDate);
          const dateB = new Date(b.postedDate);
          return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        }
  
        return 0; 
      });
  
      setPosts(sortedPosts);
    };
    sortPosts();
  }, [sortBy,sortOrder])
  
 
 
  return (
    <div className="p-8 bg-gray-100 flex flex-col gap-8">
      <div className="flex justify-evenly items-center bg-white rounded-lg p-4 gap-4">
        <h2 className="text-xl text-indigo-600 font-bold w-full">Filters</h2>
        <div className="w-full">
          <select
            id="sortby"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          >
            <option value="date">Date</option>
            <option value="upvotes">Upvotes</option>
          </select>
        </div>
        <div className="w-full">
          <select
            id="order"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="grid  lg:grid-cols-2 gap-4 md:grid-cols-1 sm:grid-cols-1 ">
        {posts.map((ideas) => {
          return <ChallengeIdeas key={ideas.id} idea={ideas} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
