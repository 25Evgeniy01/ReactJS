const btnSettingsLines = (type, typeMath) => {
    return {
        type: 'CHANGE_TYPE',
        payload: {
            type: type,
            typeMath: typeMath
        }
    }
};

export {
    btnSettingsLines
}



