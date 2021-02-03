import SortData from './../Tools/SortData';

//Section tests
//1
test('sort with A title as first element of array',() => {
    myArray = [
        {country: "Yemen",cases: 2057,deaths: 597,recovered: 1344,population: 30025415,continent:"Asia"},
        {country: "Zambia",cases: 16035,deaths: 346,recovered: 15168,population: 18538864,continent: "Africa"},
        {country: "Canada",cases: 209148,deaths: 9862,recovered: 175805,population: 37844565,continent: "North America",},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Albania",cases: 18250,deaths: 465,recovered: 10395,population: 2876812,continent: "Europe"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Japan",cases: 94524,deaths: 1685,recovered: 87666,population: 126354762,continent: "Asia"}
    ]
    expect(SortData(myArray).covid[0].title).toBe('A');
})

//2
test('sort with C title as second element of array',() => {
    myArray = [
        {country: "Yemen",cases: 2057,deaths: 597,recovered: 1344,population: 30025415,continent:"Asia"},
        {country: "Zambia",cases: 16035,deaths: 346,recovered: 15168,population: 18538864,continent: "Africa"},
        {country: "Canada",cases: 209148,deaths: 9862,recovered: 175805,population: 37844565,continent: "North America",},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Albania",cases: 18250,deaths: 465,recovered: 10395,population: 2876812,continent: "Europe"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Japan",cases: 94524,deaths: 1685,recovered: 87666,population: 126354762,continent: "Asia"}
    ]
    expect(SortData(myArray).covid[1].title).toBe('C');
})

//3
test('sort with Z title as last element of array',() => {
    myArray = [
        {country: "Yemen",cases: 2057,deaths: 597,recovered: 1344,population: 30025415,continent:"Asia"},
        {country: "Zambia",cases: 16035,deaths: 346,recovered: 15168,population: 18538864,continent: "Africa"},
        {country: "Canada",cases: 209148,deaths: 9862,recovered: 175805,population: 37844565,continent: "North America",},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Albania",cases: 18250,deaths: 465,recovered: 10395,population: 2876812,continent: "Europe"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Japan",cases: 94524,deaths: 1685,recovered: 87666,population: 126354762,continent: "Asia"}
    ]
    expect(SortData(myArray).covid[5].title).toBe('Z');
})

//4
test('sort with A title as NOT as second element of array',() => {
    myArray = [
        {country: "Yemen",cases: 2057,deaths: 597,recovered: 1344,population: 30025415,continent:"Asia"},
        {country: "Zambia",cases: 16035,deaths: 346,recovered: 15168,population: 18538864,continent: "Africa"},
        {country: "Canada",cases: 209148,deaths: 9862,recovered: 175805,population: 37844565,continent: "North America",},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Albania",cases: 18250,deaths: 465,recovered: 10395,population: 2876812,continent: "Europe"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Japan",cases: 94524,deaths: 1685,recovered: 87666,population: 126354762,continent: "Asia"}
    ]
    expect(SortData(myArray).covid[1].title).not.toBe('A');
})

//5
test('sort with M title as second element of array',() => {
    myArray = [
        {country: "Togo",cases: 2139,deaths: 52,recovered: 1574,population: 8337512,continent: "Africa"},
        {country: "Tajikistan",cases: 10653,deaths: 81,recovered: 9724,population: 9602646,continent: "Asia"},
        {country: "Thailand",cases: 3719,deaths: 59,recovered: 3514,population: 69854639,continent: "Asia"},
        {country: "Monaco",cases: 281,deaths: 2,recovered: 233,population: 39328,continent: "Europe"},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Angola",cases: 8582,deaths: 260,recovered: 3305,population: 33172398,continent: "Africa"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Austria",cases: 71844,deaths: 941,recovered: 53970,population: 9022368,continent: "Europe",}
    ]
    expect(SortData(myArray).covid[1].title).toBe('M');
})

//6
test('sort with T title as last element of array',() => {
    myArray = [
        {country: "Togo",cases: 2139,deaths: 52,recovered: 1574,population: 8337512,continent: "Africa"},
        {country: "Tajikistan",cases: 10653,deaths: 81,recovered: 9724,population: 9602646,continent: "Asia"},
        {country: "Thailand",cases: 3719,deaths: 59,recovered: 3514,population: 69854639,continent: "Asia"},
        {country: "Monaco",cases: 281,deaths: 2,recovered: 233,population: 39328,continent: "Europe"},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Angola",cases: 8582,deaths: 260,recovered: 3305,population: 33172398,continent: "Africa"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Austria",cases: 71844,deaths: 941,recovered: 53970,population: 9022368,continent: "Europe",}
    ]
    expect(SortData(myArray).covid[2].title).toBe('T');
})

//7
test('sort with A title as NOT as last element of array',() => {
    myArray = [
        {country: "Togo",cases: 2139,deaths: 52,recovered: 1574,population: 8337512,continent: "Africa"},
        {country: "Tajikistan",cases: 10653,deaths: 81,recovered: 9724,population: 9602646,continent: "Asia"},
        {country: "Thailand",cases: 3719,deaths: 59,recovered: 3514,population: 69854639,continent: "Asia"},
        {country: "Monaco",cases: 281,deaths: 2,recovered: 233,population: 39328,continent: "Europe"},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Angola",cases: 8582,deaths: 260,recovered: 3305,population: 33172398,continent: "Africa"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Austria",cases: 71844,deaths: 941,recovered: 53970,population: 9022368,continent: "Europe",}
    ]
    result = SortData(myArray);
    expect(SortData(myArray).covid[2].title).not.toBe('A');
})




//Size Tests
//8
test('length is 6 of sections array',() => {
    myArray = [
        {country: "Yemen",cases: 2057,deaths: 597,recovered: 1344,population: 30025415,continent:"Asia"},
        {country: "Zambia",cases: 16035,deaths: 346,recovered: 15168,population: 18538864,continent: "Africa"},
        {country: "Canada",cases: 209148,deaths: 9862,recovered: 175805,population: 37844565,continent: "North America",},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Albania",cases: 18250,deaths: 465,recovered: 10395,population: 2876812,continent: "Europe"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Japan",cases: 94524,deaths: 1685,recovered: 87666,population: 126354762,continent: "Asia"}
    ]
    expect(SortData(myArray).covid.length).toBe(6);
})

//9
test('length is 3 of sections array',() => {
    myArray = [
        {country: "Togo",cases: 2139,deaths: 52,recovered: 1574,population: 8337512,continent: "Africa"},
        {country: "Tajikistan",cases: 10653,deaths: 81,recovered: 9724,population: 9602646,continent: "Asia"},
        {country: "Thailand",cases: 3719,deaths: 59,recovered: 3514,population: 69854639,continent: "Asia"},
        {country: "Monaco",cases: 281,deaths: 2,recovered: 233,population: 39328,continent: "Europe"},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Angola",cases: 8582,deaths: 260,recovered: 3305,population: 33172398,continent: "Africa"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Austria",cases: 71844,deaths: 941,recovered: 53970,population: 9022368,continent: "Europe",}
    ]
    expect(SortData(myArray).covid.length).toBe(3);
})

//10
test('length is 2 of data array of section A',() => {
    myArray = [
        {country: "Yemen",cases: 2057,deaths: 597,recovered: 1344,population: 30025415,continent:"Asia"},
        {country: "Zambia",cases: 16035,deaths: 346,recovered: 15168,population: 18538864,continent: "Africa"},
        {country: "Canada",cases: 209148,deaths: 9862,recovered: 175805,population: 37844565,continent: "North America",},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Albania",cases: 18250,deaths: 465,recovered: 10395,population: 2876812,continent: "Europe"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Japan",cases: 94524,deaths: 1685,recovered: 87666,population: 126354762,continent: "Asia"}
    ]
    expect(SortData(myArray).covid[0].data.length).toBe(2);
})

//11
test('length is 3 of data array of section T',() => {
    myArray = [
        {country: "Togo",cases: 2139,deaths: 52,recovered: 1574,population: 8337512,continent: "Africa"},
        {country: "Tajikistan",cases: 10653,deaths: 81,recovered: 9724,population: 9602646,continent: "Asia"},
        {country: "Thailand",cases: 3719,deaths: 59,recovered: 3514,population: 69854639,continent: "Asia"},
        {country: "Monaco",cases: 281,deaths: 2,recovered: 233,population: 39328,continent: "Europe"},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Angola",cases: 8582,deaths: 260,recovered: 3305,population: 33172398,continent: "Africa"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Austria",cases: 71844,deaths: 941,recovered: 53970,population: 9022368,continent: "Europe",}
    ]
    expect(SortData(myArray).covid[2].data.length).toBe(3);
})




//Data Tests
//12
test('data of seciton A sorted so Albania is the first element',() => {
    myArray = [
        {country: "Yemen",cases: 2057,deaths: 597,recovered: 1344,population: 30025415,continent:"Asia"},
        {country: "Zambia",cases: 16035,deaths: 346,recovered: 15168,population: 18538864,continent: "Africa"},
        {country: "Canada",cases: 209148,deaths: 9862,recovered: 175805,population: 37844565,continent: "North America",},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Albania",cases: 18250,deaths: 465,recovered: 10395,population: 2876812,continent: "Europe"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Japan",cases: 94524,deaths: 1685,recovered: 87666,population: 126354762,continent: "Asia"}
    ]
    expect(SortData(myArray).covid[0].data[0].country).toBe('Albania');
})

//13
test('data of seciton A sorted so Armenia is NOT the first element',() => {
    myArray = [
        {country: "Yemen",cases: 2057,deaths: 597,recovered: 1344,population: 30025415,continent:"Asia"},
        {country: "Zambia",cases: 16035,deaths: 346,recovered: 15168,population: 18538864,continent: "Africa"},
        {country: "Canada",cases: 209148,deaths: 9862,recovered: 175805,population: 37844565,continent: "North America",},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Albania",cases: 18250,deaths: 465,recovered: 10395,population: 2876812,continent: "Europe"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Japan",cases: 94524,deaths: 1685,recovered: 87666,population: 126354762,continent: "Asia"}
    ]
    expect(SortData(myArray).covid[0].data[0].country).not.toBe('Armenia');
})

//14
test('data of seciton M sorted so Mexico is the first element',() => {
    myArray = [
        {country: "Togo",cases: 2139,deaths: 52,recovered: 1574,population: 8337512,continent: "Africa"},
        {country: "Tajikistan",cases: 10653,deaths: 81,recovered: 9724,population: 9602646,continent: "Asia"},
        {country: "Thailand",cases: 3719,deaths: 59,recovered: 3514,population: 69854639,continent: "Asia"},
        {country: "Monaco",cases: 281,deaths: 2,recovered: 233,population: 39328,continent: "Europe"},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Angola",cases: 8582,deaths: 260,recovered: 3305,population: 33172398,continent: "Africa"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Austria",cases: 71844,deaths: 941,recovered: 53970,population: 9022368,continent: "Europe",}
    ]
    expect(SortData(myArray).covid[1].data[0].country).toBe('Mexico');
})

//15
test('data of seciton T sorted so Togo is NOT the first element',() => {
    myArray = [
        {country: "Togo",cases: 2139,deaths: 52,recovered: 1574,population: 8337512,continent: "Africa"},
        {country: "Tajikistan",cases: 10653,deaths: 81,recovered: 9724,population: 9602646,continent: "Asia"},
        {country: "Thailand",cases: 3719,deaths: 59,recovered: 3514,population: 69854639,continent: "Asia"},
        {country: "Monaco",cases: 281,deaths: 2,recovered: 233,population: 39328,continent: "Europe"},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Angola",cases: 8582,deaths: 260,recovered: 3305,population: 33172398,continent: "Africa"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Austria",cases: 71844,deaths: 941,recovered: 53970,population: 9022368,continent: "Europe",}
    ]
    expect(SortData(myArray).covid[2].data[0].country).not.toBe('Togo');
})

//16
test('data of seciton T sorted so Thailand is the second element',() => {
    myArray = [
        {country: "Togo",cases: 2139,deaths: 52,recovered: 1574,population: 8337512,continent: "Africa"},
        {country: "Tajikistan",cases: 10653,deaths: 81,recovered: 9724,population: 9602646,continent: "Asia"},
        {country: "Thailand",cases: 3719,deaths: 59,recovered: 3514,population: 69854639,continent: "Asia"},
        {country: "Monaco",cases: 281,deaths: 2,recovered: 233,population: 39328,continent: "Europe"},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Angola",cases: 8582,deaths: 260,recovered: 3305,population: 33172398,continent: "Africa"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Austria",cases: 71844,deaths: 941,recovered: 53970,population: 9022368,continent: "Europe",}
    ]
    expect(SortData(myArray).covid[2].data[1].country).toBe('Thailand');
})

//17
test('data of seciton A sorted so Austria is the last element',() => {
    myArray = [
        {country: "Togo",cases: 2139,deaths: 52,recovered: 1574,population: 8337512,continent: "Africa"},
        {country: "Tajikistan",cases: 10653,deaths: 81,recovered: 9724,population: 9602646,continent: "Asia"},
        {country: "Thailand",cases: 3719,deaths: 59,recovered: 3514,population: 69854639,continent: "Asia"},
        {country: "Monaco",cases: 281,deaths: 2,recovered: 233,population: 39328,continent: "Europe"},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Angola",cases: 8582,deaths: 260,recovered: 3305,population: 33172398,continent: "Africa"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Austria",cases: 71844,deaths: 941,recovered: 53970,population: 9022368,continent: "Europe",}
    ]
    expect(SortData(myArray).covid[0].data[2].country).toBe('Austria');
})

//18
test('data of seciton A sorted so Angola is the first element',() => {
    myArray = [
        {country: "Togo",cases: 2139,deaths: 52,recovered: 1574,population: 8337512,continent: "Africa"},
        {country: "Tajikistan",cases: 10653,deaths: 81,recovered: 9724,population: 9602646,continent: "Asia"},
        {country: "Thailand",cases: 3719,deaths: 59,recovered: 3514,population: 69854639,continent: "Asia"},
        {country: "Monaco",cases: 281,deaths: 2,recovered: 233,population: 39328,continent: "Europe"},
        {country: "Mexico",cases: 874171,deaths: 87894,recovered: 636391,population: 129350970,continent: "North America"},
        {country: "Angola",cases: 8582,deaths: 260,recovered: 3305,population: 33172398,continent: "Africa"},
        {country: "Armenia",cases: 70836,deaths: 1131,recovered: 49787,population: 2964973,continent: "Asia"},
        {country: "Austria",cases: 71844,deaths: 941,recovered: 53970,population: 9022368,continent: "Europe",}
    ]
    expect(SortData(myArray).covid[0].data[0].country).toBe('Angola');
})