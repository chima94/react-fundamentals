import NewMeetUpForm from "../components/meetups/NewMeetUpForm"
import { useNavigate } from 'react-router-dom'

function NewMeetUp(){

    const navigate = useNavigate()

    function addMeetupHandler(meetupData){
        fetch(
            'https://smart-attendance-35212.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'content-Type': 'application/json'
                }
            }
            ).then(() =>{
                navigate('/')
            })
    }

    return (
        <section>
           <h1>Add New Meetup</h1>
           <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetUp
