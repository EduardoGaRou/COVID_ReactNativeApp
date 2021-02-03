
const SortData = (myInfo) => {
    var sections = [];
    /*Add all the data*/ //Status: Complete (needs testing)
    var letter, auxCountries, auxContinent, auxPopulation; 
    var auxCases, auxDeaths, auxRecovered;
    var addSectionFlag = true;
    for(let i=0 ; i<myInfo.length ; i+=1){
        addSectionFlag = true;
        auxCountries = myInfo[i].country;
        auxContinent = myInfo[i].continent;
        auxPopulation = myInfo[i].population;
        auxCases = myInfo[i].cases;
        auxDeaths = myInfo[i].deaths;
        auxRecovered = myInfo[i].recovered;
        letter = auxCountries.substring(0,1).toUpperCase();
        /*Add section if necessary*/
        for (let j=0 ; j<sections.length ; j+=1){
            if(sections[j].title===letter) addSectionFlag = false;
        }
        if(addSectionFlag) sections.push({title: letter, data: []});
        /*Build data object and add it to a section*/
        const objd = {
            country: auxCountries,
            continent: auxContinent,
            population: auxPopulation,
            cases: auxCases,
            deaths: auxDeaths,
            recovered: auxRecovered
        };
        for (let j=0 ; j<sections.length ; j+=1){
            if(sections[j].title===letter){
                sections[j].data.push(objd);
            }
        }
        //console.log(sections[i]);
    }
    /*Sort sections alphabetically (if needed)*/ //Status: Complete (needs testing)
    sections.sort((a, b) => {
        if (a.title < b.title) { return -1; } 
        else if (a.title > b.title) { return 1; }
        return 0;
    });
    /*Sort data in each section*/ //Status: Complete (needs testing)
    for (let i=0 ; i<sections.length ; i+=1){   
        sections[i].data.sort((a, b) => {
            if (a.country < b.country) { return -1; } 
            else if (a.country > b.country) { return 1; }
            return 0;
        });
    }
    const result = {covid: sections};
    return result;
};

export default SortData;