import style from "./result-box.module.css";

type Prop = {
  destinations: {
    origin: string;
    destiny: string;
  };
  passengers: {
    going: string;
    returns: string[];
  };
};

export const ResultBox = ({
  destinations: { destiny, origin },
  passengers: { going, returns },
}: Prop) => {
  return (
    <div className={style.resultArea}>
      <div className={style.resultBox}>
        <div className={style.title}>IDA</div>
        <div className={style.paxArea}>
          <div className={style.paxBox}>
            <p>Passenger: {going}</p>
            <input type="radio" name="going" />
          </div>
        </div>
      </div>
      <div className={style.resultBox}>
        <div className={style.title}>VUELTA</div>
        <div className={style.paxArea}>
          {returns.map((pax, index) => (
            <div key={index} className={style.paxBox}>
              <p>Passenger: {pax}</p>
              <input type="radio" name="return" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
