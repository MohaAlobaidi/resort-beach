 import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from './../Context'
import Loading from './../component/Loading'


 function RoomContainer ({context}){ 
  const{ loading,sortedRooms,rooms} = context;
  if(loading){
  return  <Loading/>
  }
  return  <>
       
          <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </>
}
export default withRoomConsumer( RoomContainer )







// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from './../Context'
// import Loading from './../component/Loading'

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {
//         value => {
//          // console.log(value)
//           const {loading,sortedRooms,rooms} = value
//             if(loading){
//            return   <Loading/>
//             }
//        
//         }
//       }
//     </RoomConsumer>
   
//   )
// }
