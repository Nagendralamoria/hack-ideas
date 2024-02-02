import { useContext, useState } from "react"
import CustomInput from "../../components/custom-input/CustomInput"
import { IdeasContext } from "../../context/IdeasData.context";

const currentDate = new Date().toISOString().split('T')[0];
const initialData = {
    id:'',
    title: '',
    description: '',
    tags: [],
    upvotes: 0,
    postedDate: currentDate,

}

function SubmitIdea() {
    const [formData, setFormData] = useState(initialData);
    const { title, description} = formData;
    const { ideasData,getIdeasData } = useContext(IdeasContext)
    const [addingTags, setAddingTags] = useState();
    const [allTags, setAllTags] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        getIdeasData(formData);
        setFormData(initialData);
        setAllTags([]);
    }
    const addTags = (e) => {
        e.preventDefault();

  const newTag = addingTags.trim();
  
  if (newTag) {
    setAllTags((prevAllTags) => [...prevAllTags, newTag]);

    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: [...prevFormData.tags, newTag],
    }));

    setAddingTags('');
  }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value, id: ideasData.length + 1 }));
    };
   
    
  return (
      <div className="p-8 bg-gray-100  flex justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full md:w-9/12 lg:w-2/3 justify-center items-center bg-white p-8">
                  <CustomInput type={'text'} name={'title'} placeholder={'Title'} onchange={handleInputChange} value={title} />
              <CustomInput type={'text'} name={'description'} placeholder={'Discription'} onchange={handleInputChange} value={description} />
              
              <div className="flex w-full gap-4 items-end justify-center flex-col md:flex-row">
                  <CustomInput type={'text'} name={'tags'} placeholder={'Tags'} onchange={e =>{setAddingTags(e.target.value) }} value={addingTags} />
                <button className="bg-blue-600  w-1/3 h-1/2  text-white font-bold py-2 px-4 rounded-full" onClick={addTags}>Add Tag</button>
              </div>
              <div className="flex flex-wrap gap-2">
              {allTags?.map((tag) => {
                    return <p className=" border-solid border-2 border-grey-500 text-indigo-500  py-2 px-4 font-bold text-sm rounded-lg " key={tag}>{tag}</p>
                
              })}
                     </div>
                <button type="submit" className="bg-blue-600  w-1/3 text-white font-bold py-2 px-4 rounded-full">Submit</button>
          </form>
    </div>
  )
}   

export default SubmitIdea