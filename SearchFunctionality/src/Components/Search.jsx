import React, { useState } from 'react'

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const list = [
        "Acura", "Alfa Romeo", "Aston Martin", "Audi",
        "BMW", "Bentley Motors", "Bollinger Motors", "Bugatti", "Buick",
        "Cadillac", "Canoo", "Chevrolet", "Chrysler",
        "DeLorean Motor Company", "Dodge",
        "Ferrari", "Fiat", "Fisker", "Ford",
        "GMC", "Genesis",
        "Honda", "Hummer", "Hyundai",
        "Ineos", "Infiniti",
        "Jaguar", "Jeep",
        "Karma", "Kia",
        "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lordstown Motors", "Lotus", "Lucid Motors",
        "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-AMG", "Mercedes-Benz", "Mercury", "Mini", "Mitsubishi",
        "Nissan",
        "Oldsmobile",
        "Polestar", "Pontiac", "Porsche", "Plymouth",
        "Ram", "Rivian", "Rolls-Royce",
        "Saab", "Saturn", "Scion", "Smart", "Subaru", "Subaru",
        "Tesla", "Tesla",
        "Volkswagen", "VinFast", "Volvo"
    ];


    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const searchResult = list.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    )
    //console.log(searchResult)
    return (
        <div>
            <h1>List Items</h1>
            <div>
                <label>Search</label>
                <input type="text" value={searchQuery} onChange={handleChange} />
            </div>
            <div>
                <ul>
                    {
                        searchResult.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>


        </div>
    )
}

export default Search