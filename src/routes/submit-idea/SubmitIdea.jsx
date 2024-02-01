import { useState } from "react"
import CustomInput from "../../components/custom-input/CustomInput"

const initialData = {
    title: '',
    discription: '',
    tags: ''
}

function SubmitIdea() {
    const [formData, setFormData] = useState(initialData);
    const { title, discription, tags } = formData;
    const handleSubmit = () => {
        console.log("hey");
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  return (
      <div className="p-8 bg-gray-100  flex justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-2/3 justify-center items-center bg-white p-8">
              <CustomInput type={'text'} name={'title'} placeholder={'Title'} onchange={handleInputChange} value={title} />
              <CustomInput type={'text'} name={'discription'} placeholder={'Discription'} onchange={handleInputChange} value={discription} />
              <CustomInput type={'text'} name={'tags'} placeholder={'Tags'} onchange={handleInputChange} value={tags} />
                <button type="submit" className="bg-blue-600  w-1/3 text-white font-bold py-2 px-4 rounded-full">Submit</button>
          </form>
    </div>
  )
}   

export default SubmitIdea