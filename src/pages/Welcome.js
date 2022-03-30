import classes from './Welcome.module.css';

function Welcome() {
  return (
    <section className={classes.welcome}>
      <h1>Welcome to Sussy Meetups</h1>
      <h2>You can Create, Explore and Sus da Meetups!</h2>
      <div className={classes.image}>
        <img src={require('../images/sus-logo.png')}></img>
      </div>
    </section>
  );
}

export default Welcome;
