import { CONSTANTS } from './constant'
import Axios from 'axios'

Axios.defaults.baseURL = CONSTANTS.serverURL



export const register = async(user_data) => {
    // console.log(Axios)
    const DATA = await Axios.post(CONSTANTS.signupURL, user_data).then((res) => {
        if (res.status == 200) {
            console.log(res.data);
            return res.data;
        }
    }).catch((err) => {
        console.log(err);
    })
    return DATA
}

export const login = async(user_data) => {
    // console.log(Axios)
    const DATA = await Axios.post(CONSTANTS.loginURL, user_data).then((res) => {
        if (res.status == 200) {
            console.log(res.data);
            return res.data;
        }
    }).catch((err) => {
        console.log(err);
    });
    return DATA
}

export const singleUploader = async(file) => {
    const DATA = await Axios.post(CONSTANTS.singleUpURL, file).then((res) => {
        if (res.status == 200) {
            console.log(res.data)
            return res.data
        }
    }).catch((err) => {
        console.log(err)
    })
    return DATA
}

export const singleDownload = async(file_name) => {
    console.log("start")
    const DATA = await Axios.post(CONSTANTS.singleDownURL, file_name, { responseType: 'arraybuffer' }).then((res) => {
        if (res.status == 200) {
            var saveData = (function() {
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";
                return function(data, fileName) {
                    var blob = new Blob([data], { type: 'application/pdf' });
                    var url = window.URL.createObjectURL(blob);
                    a.href = url;
                    a.download = fileName;
                    a.click();
                    window.URL.revokeObjectURL(url);
                };
            }());

            var data = res.data,
                fileName = "my-download.pdf";
                console.log(data)

            saveData(data, fileName);

        }
    }).catch((err) => {
        console.log(err)
    })
    return DATA
}

export const registerReader = async(data) => {
    const DATA = await Axios.post(CONSTANTS.registerReaderURL, data).then((res) => {
        if(res.status == 200){
            console.log(res.data)
            return res.data
        }
    }).catch((err) => {
        console.log(err)
    })
    return DATA
}

export const loginReader = async(data) => {
    const DATA = await Axios.post(CONSTANTS.loginReaderURL, data).then((res) => {
        if(res.status == 200){
            console.log(res.data)
            return res.data
        }
    }).catch((err) => {
        console.log(err)
    })
    return DATA
}

export const getReaders = async(data) => {
    const DATA = await Axios.post(CONSTANTS.getReaderDataURL, data).then((res) => {
        if(res.status == 200){
            return res.data
        }
    }).catch((err) => {
        console.log(err)
    })
    return DATA
}