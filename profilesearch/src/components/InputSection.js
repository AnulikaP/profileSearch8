

const InputSection = ({user, setItem}) => {
    const handleSubmit = (event) => {
  event.preventDefault()
    }

    const handleSearch = (event) =>{
        if (!event.target.value) {
            setItem(user)
        }
        const filteredData = (user.filter(function(person){
            return (
                person.id.toLowerCase().includes(event.target.value.toLowerCase()) || person.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
        }))
        setItem(filteredData)

    }


  
    return (

    <div className='input' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search by name...' className='inputHere' onChange={handleSearch}/>


    </div>
  )
}

    

    

export default InputSection