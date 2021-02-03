import SaveDataOnDB from './SaveDataOnDB';
import SortData from './SortData';

const FetchData = () => {
    return fetch('http://api.coronastatistics.live/countries',{
        method: 'GET'
    })
        .then((response) => response.json())
        .then((json) => {
            //console.log(json);
            /*Save fetched data on DB*/
            const sections = SortData(json);
            //console.log(sections);
            console.log("Data was updated!");
            SaveDataOnDB(sections);
            return sections;
        })
        .catch((error) => {
            console.error(error);
        });
};

export default FetchData;