import styles from "./CountriesCard.module.css";

function CountriesCard(props) {
  return (
  <div data-testid="country-card" className={styles.container} key={props.unq}>
      <div>
        Country: <b data-testid="country-card-name">{props.country}</b>
      </div>
      <div>
        Population: <b data-testid="country-card-population">{props.population}</b>
      </div>
    </div>
  );
}

export default CountriesCard;
