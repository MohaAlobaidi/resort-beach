import React,{useContext} from 'react'
import {RoomContext} from './../Context'
import Title from "./Title"

export default function RoomFilter({rooms}) {
  const context = useContext(RoomContext)
 const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfasf,pets} = context


 // get all unique values
const getUnique =(items,value)=>{
  return [...new Set(items.map(item=>item[value]))]

  // let SpecificItem =items.map(item=>item[value] )
  // //we use [value] becaus it property in the object (items)
  //  let setSpecificItem = new Set (SpecificItem)
  //  return [... setSpecificItem]
}

// get unique types 
let types = getUnique(rooms,'type')
//add all
types = ["all",...types]

//map to jsx
types = types.map((item,index)=>{
  return <option value={item} key={index}>{item}</option>
})


//people capacity
let poeple = getUnique(rooms,'capacity')
poeple = poeple.map((item,index)=> {
  return <option key={index} value={item}>{item}</option>
})

  return (
    <section className="filter-container">
      <Title title="search rooms"/>
      <form className="filter-form">
      {/* select type */}
        <div className="form-group">
          <label htmlFor="type"> room type</label>
          <select name="type" 
                  id="type" 
                  value={type} 
                  className="form-control"
                  onChange={handleChange}
                  >

            {types}

          </select>
        </div>
      {/* end select type */}


    {/* guests */}
    <div className="form-group">
      <label htmlFor="capacity" >Guests</label>
      <select name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}>
                  {poeple}
              </select>
    </div>

    {/* end guests */}


    {/* room price */}
    <div className="form-group">
    <label htmlFor="price">Room price : ${price}</label>
    <input type="range" name="price" id="price" min={minPrice}   max={maxPrice} value={price} onChange={handleChange}/>
      </div>
    {/* end room price */}
    
    {/* size */}

    <div className="form-group">
      <label htmlFor="size">room size</label>
      <div className="size-inputs">
        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className='size-input'/>

        <input type="number" name="maxSize" id='size' value={maxSize} onChange={handleChange}/>
      </div>
    </div>
    {/* end of size */}

    {/* extras */}
    <div className="form-group">
      <div className="single-extra">
        <input type="checkbox" name="breakfasf" id="breakfasf" checked={breakfasf} onChange={handleChange}/>
        <label htmlFor="breakfasf">breakfast</label>
      </div>


      <div className="single-extra">
        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
        <label htmlFor="pets">pets</label>
      </div>

    </div>
    {/* end extras */}

</form>
    </section>
  )
}
