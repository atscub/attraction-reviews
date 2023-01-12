'use strict';

const {useState, useEffect} = React;

const apiCall = async (url, options = {}) => {
  const response = await fetch(url, options);
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(response.status);
}

const getAllAttractions = async () => await apiCall('/attractions/all');

const getAttractionsByReviewScore = async (score) => await apiCall(`/attractions/search?score=${score}`);

const getAttractions = async (score) => {
  if (score && !isNaN(score) && score >= 1 && score <= 10) {
    try {
      return await getAttractionsByReviewScore(score);
    } catch (err) {
      // console.log(err);
    }
  }

  return await getAllAttractions();
}

const Filter = ({onFilter}) => {
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
  }

  return (
    <div className="filters">
      <label htmlFor="data-filter">Show me things to do that have an average score higher than</label>
      <input data-filter type="text" id="data-filter" value={filter} onChange={handleChange} />
    </div>
  );
}

const AttractionList = () => {
  const [attractions, setAttractions] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getAttractions(score).then(setAttractions);
  }, [score]);

  return (
    <div>
      <Filter onFilter={setScore} />
      {attractions.map(attraction => (
        <div key={attraction.id} className="attraction">
          <div className="attraction-score">{attraction.average_review_score?.toFixed?.(1) ?? '-'}</div>
          <div className="attraction-name">{attraction.name}</div>
        </div>
      ))}
    </div>
  );
}

const container = document.querySelector('#react-attractions');
const root = ReactDOM.createRoot(container);
root.render(<AttractionList />);