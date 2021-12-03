import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from 'react'


function AllMeetUps(){
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() =>{
    setIsLoading(true)
    fetch(
      'https://smart-attendance-35212.firebaseio.com/meetups.json'
    ).then(response =>{
      return response.json()
    }).then(data => {
      const meetups = []
      for(const key in data){
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setIsLoading(false)
      setLoadedMeetups(meetups)
    })
  }, [])

  
    
  if(isLoading){
    return (
      <section>
        <p>Loading......</p>
      </section>
    )
  }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    )
}

export default AllMeetUps
