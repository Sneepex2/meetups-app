import axios from 'axios';
import { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [sortType, setSortType] = useState({
    value: 'Newest',
  });

  useEffect(() => {
    document.title = 'All Meetups';
    setIsLoading(true);
    axios
      .get('https://eht7cx8d3g.execute-api.eu-west-3.amazonaws.com/meetups')
      .then((res) => {
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

  function newestHandler() {
    setSortType('Newest');
  }

  function oldestHandler() {
    setSortType('Oldest');
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <Collapsible trigger='Sort' transitionTime={100}>
        <button onClick={newestHandler}>Newest</button>
        <button onClick={oldestHandler}>Oldest</button>
      </Collapsible>
      <MeetupList meetups={loadedMeetups} sortType={sortType} />
    </section>
  );
}

export default AllMeetupsPage;
