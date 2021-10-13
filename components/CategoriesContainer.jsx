import React from 'react';
import ReactDom from 'react-dom';
import Category from "./Category";
import dataSample from "./dataSample";

// const dataSample = {
//      uuid: 1,
//      username: 'kingKai',
//      password: 'kairules',
//      email: 'kingkai@gmail.com',
//      categories: [
//         {
//             uuid: 1,
//             categoryTitle: 'algos',
//             isReady: false,
//             topics: [
//                 {
//                     uuid: 1,
//                     topicTitle: 'twoSum',
//                     isReady: false,
//                     notes: [
//                         {
//                             uuid: 1,
//                             note: 'check out hash map solution'
//                         },
//                         {
//                             uuid: 2,
//                             note: 'google more solutions'
//                         },
//                         {
//                             uuid: 3,
//                             note: 'ask Jonnie for more pointers'
//                         },
//                     ],
//                 },
//                 {
//                     uuid: 2,
//                     topicTitle: 'subSetSum',
//                     isReady: false,
//                     notes: [
//                         {
//                             uuid: 1,
//                             note: 'check out hash map solution'
//                         },
//                         {
//                             uuid: 2,
//                             note: 'google more solutions'
//                         },
//                         {
//                             uuid: 3,
//                             note: 'ask Jonnie for more pointers'
//                         },
//                     ],
//                 }
//             ],
//         }
//     ],
// };
// IMPORTING COMPONENTS

function CategoriesContainer() {
    const categoriesArray = []
  
  // pushing the category components into the categories array
  const createCategories = () => {
    console.log("DATA SAMPLE: ", dataSample.categories)
    for (let i = 0; i < dataSample.categories.length; i += 1) {
      categoriesArray.push(<Category key={dataSample.categories[i].categoryTitle} categoryName={dataSample.categories[i].categoryTitle} />);
    }
  }
  createCategories();
  console.log(categoriesArray)

  return (
    <div>
        {categoriesArray}
    </div>

  )
}

export default CategoriesContainer;