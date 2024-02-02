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
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedTitle = formData.title.trim();
        const trimmedDescription = formData.description.trim();

        if (trimmedTitle === '' || trimmedDescription === '') {
            setMessage('Title and description are required!');
            return;
        }
        try {
            getIdeasData(formData);
            setFormData(initialData);
            setAllTags([]);
            setMessage("Successfully submitted")
        } catch (error) {
            setMessage("An error occurred while submitting the form. Please try again.")
        }
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
      <div className="p-4 md:p-8 bg-gray-100  flex justify-center items-center flex-col">
          <h2 className="m-4 text-xl font-bold">{ message}</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full md:w-9/12 lg:w-2/3 justify-center items-center bg-white p-8">
                  <CustomInput type={'text'} name={'title'} placeholder={'Title'} onchange={handleInputChange} value={title} />
              <CustomInput type={'text'} name={'description'} placeholder={'Discription'} onchange={handleInputChange} value={description} />
              
              <div className="flex w-full gap-4 items-end justify-center flex-col md:flex-row">
                  <CustomInput type={'text'} name={'tags'} placeholder={'Tags'} onchange={e =>{setAddingTags(e.target.value) }} value={addingTags} />
                <button className="bg-blue-600  w-2/3 md:w-1/3 h-1/2  text-white font-bold py-2 px-4 rounded-full" onClick={addTags}>Add Tag</button>
              </div>
              <div className="flex flex-wrap gap-2">
              {allTags?.map((tag) => {
                    return <p className=" border-solid border-2 border-grey-500 text-indigo-500  py-2 px-4 font-bold text-sm rounded-lg " key={tag}>{tag}</p>
                
              })}
                     </div>
                <button type="submit" className="bg-blue-600  w-2/3 md:w-1/3 text-white font-bold py-2 px-4 rounded-full">Submit</button>
          </form>
    </div>
  )
}   

export default SubmitIdea