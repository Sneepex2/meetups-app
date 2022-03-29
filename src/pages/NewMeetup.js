import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch('https://eht7cx8d3g.execute-api.eu-west-3.amazonaws.com/meetups', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      navigate('/meetups/', { replace: true });
    });
  }

  useEffect(() => {
    document.title = 'Create New Meetup';
  }, []);

  return (
    <section>
      <h1>Create New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
