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
        const addNewTopicToCategories = (oldCategories, categoryId, topic) => {
            const categories = [...oldCategories];
            for (let i = 0; i < categories.length; i = i + 1) {
                if (categories[i].uuid === categoryId) {
                    if (categories[i].topics === undefined) {
                        categories[i].topics = [makeNewTopic(topic)];
                    } else {
                        categories[i].topics = [...categories[i].topics, makeNewTopic(topic)];
                    }
                }
            }
            return categories;
        };

        const newTopic = action.payload.topic;
        const topicCategoryId = action.payload.categoryID;

        //make a new categories array with all the same stuff, but replace the matching object with a new obj
        const newCategories = addNewTopicToCategories(state.categories, topicCategoryId, newTopic);

        return {
            ...state,
            categories: newCategories,
        };
    };

    if (action.type === actionType.add_note) {
        const newNote = {
            uuid: undefined,
            note: action.payload.note,
        }
        const categoryId = action.payload.categoryId;
        const topicId = action.payload.topicId;
        //add note to topics array
            //find category in categories array, find topic in topics array, then find note array and add note
        //make new categories array, reassign categories
        const addNewNoteToCategories = (oldCategories, categoryId, topicId) => {
            const categories = [...oldCategories];
            for (let i = 0; i < newArray.length; i = i + 1) {
                if (categories[i].uuid === categoryId) {
                    //if you find a category with a matching ID, loop tru topics
                    const topics = categories[i].topics;
                    for (let topicIndex = 0; topicIndex < topics.length; topicIndex = topicIndex + 1) {
                        if (topics[topicIndex].uuid === topicId) {
                            //if you find a matching topic ID, add note
                            if (topics[topicIndex].note === undefined) {
                                categories[i].topics[topicIndex].note = [newNote];
                            } else {
                                categories[i].topics[topicIndex].note = [...categories[i].topics[topicIndex].note, newNote];
                            }
                        }
                    }
                }
            }
            return categories;
        };

        const newCategories = addNewNoteToCategories(state.categories, categoryId, topicId);

        return {
            ...state,
            categories: newCategories,
        };
    };
};

export default userReducer;