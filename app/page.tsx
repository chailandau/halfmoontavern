import Modal from '~/components/DrinkInfo/Modal';

const Home = ({ spirits }) => (
  <div>
    hio
    {spirits?.map((spirit) => (
      <div className="spirit-section" id={spirit?.title?.toLowerCase()} key={spirit?.title}>
        <div className="wrapper">
          <div className="spirit-type">
            <h2 className="spirit-title">{spirit.title}</h2>
            <div className="drinks">
              {spirit?.drinks?.map((drink) => (
                <div className="drink-indiv" key={drink.title}>
                  <h3 className="drink-title">{drink.title}</h3>
                  {drink?.description && <p>{drink.description}</p>}
                  <Modal data={drink} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Home;
