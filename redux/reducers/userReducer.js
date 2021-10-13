import * as actionType from '../actions/actionTypes';

const initialState = {
         uuid: undefined,
         username: undefined,
         password: undefined,
         email: undefined,
         categories: [],
};

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

const userReducer = (state = initialState, action) => {
    if (action.type === actionType.update_user_info) {
        const newInfo = action.payload;
        return {
            ...state,
            ...newInfo,
        };
    };

    if (action.type === actionType.add_category) {
        const newCategory = action.payload;
        const newCategories = [...state.categories, newCategory];
        return {
            ...state,
            categories: newCategories,
        };
    };

    if (action.type === actionType.add_topic) {
        const makeNewTopic = (topic) => {
            return {
                uuid: undefined,
                topicTitle: topic,
                isReady: false,
                notes: [],
            }
        }
        const makeNewCategories = (oldCategories, id) => {
            const categories = [...oldCategories];
            for (let i = 0; i < newArray.length; i = i + 1) {
                if (categories[i].uuid === id) {
                    categories[i].topics = [...categories[i].topics, makeNewTopic(newTopic)];
                }
            }
            return categories;
        };

        const newTopic = action.payload.topic;
        const topicCategoryId = action.payload.categoryID;

        //make a new categories array with all the same stuff, but replace the matching object with a new obj
        const newCategories = makeNewCategories(state.categories, topicCategoryId);

        return {
            ...state,
            categories: newCategories,
        };
    };
};

export default userReducer;