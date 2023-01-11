// This module is for creating abstractions for create, update and delete
const apiRequest = async(url='', optionsObj=null, errMsag = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if(!response.ok) throw Error('Please reload the app');
    } catch (error) {
        errMsag = err.message
    } finally {
        return errMsag;
    }
};

export default apiRequest;