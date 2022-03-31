import classes from './MeetupList.module.css';
import MeetupItem from './MeeupItem';

function MeetupList(props) {
  const sortType = props.sortType;
  if (sortType == 'Newest') {
    return (
      <ul className={classes.list}>
        {props.meetups.reverse().map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
      </ul>
    );
  } else {
    return (
      <ul className={classes.list}>
        {props.meetups.reverse().map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
      </ul>
    );
  }
}

export default MeetupList;
