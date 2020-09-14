# useHttp React Custom Hook


This is custom react hook for getting http request wrapped using Axios library.
Dependency library: Axios  // Please install Axios library prior to this hook.
Hook Name: useHttp
parameters: url, method,data, headers, params , restConfig (order is same as mentioned)
            url (String), method (String),data (js object), headers (js object), params (js object) , restConfig (js object)
            restConfig is axios config ( reference : // https://github.com/axios/axios#request-config   #Request Config )
return : sendRequest, isError, errorMessage   //sendRequest (promise), isError boolean, errorMessage String


How to install:
Run command 1st step : npm config set registry https://npm.pkg.github.com/Abhinegi  
2nd step: npm i @Abhinegi/usehttp@1.0.0
