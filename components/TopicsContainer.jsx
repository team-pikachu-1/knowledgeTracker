import React from 'react';
import ReactDom from 'react-dom';
import Topic from "./Topic.jsx";
import dataSample from "./dataSample";
import SubmissionForm from "./SubmissionForm";

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

function TopicsContainer(props) {
    const topicsArray = []
  // console.log("datttaaaa: ", dataSample)
  // pushing the category components into the topics array
  const createTopics = () => {
    console.log("DATA SAMPLE: ", dataSample.categories)
    for (let i = 0; i < dataSample.categories[0].topics.length; i += 1) {
      topicsArray.push(<Topic key={dataSample.categories[0].topics[i].topicTitle} topicName={dataSample.categories[0].topics[i].topicTitle} />);
    }
  }
  createTopics();
  // console.log('topicsArray is', topicsArray)

  return (
    <div>
        {topicsArray}
        <SubmissionForm />
    </div>

  )
}

export default TopicsContainer;