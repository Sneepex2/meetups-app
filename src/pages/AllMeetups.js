import axios from 'axios';
import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        'http://meetupsapp-env.eba-5urxrgty.eu-west-3.elasticbeanstalk.com/meetups'
      )
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((data) => {
        const meetups = [];

        for (const id in data) {
          const meetup = {
            id: id,
            ...data[id],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  console.log(loadedMeetups);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
