import * as actionTypes from './actionTypes';

export const updateUserInfoActionCreator = info => ({
    type: actionTypes.update_user_info,
    payload: info,
});

export const addCategoryActionCreator = title => ({
    type: actionTypes.add_category,
    payload: title,
});

export const addTopicActionCreator = (title, categoryId) => ({
    type: actionTypes.add_topic,
    payload: {
        topic: title,
        categoryId: categoryID
    }
});

export const addNoteActionCreator = (note, categoryId, topicId) => ({
    type: actionTypes.add_note,
    payload: {
        note: note,
        categoryId: categoryId,
        topicId: topicId
}}
);