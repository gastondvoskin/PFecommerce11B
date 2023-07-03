import React, { createContext } from 'react';

const Context = createContext({});
const InternalProvider = ({ children, context }) => {
    console.log(context)
    return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default InternalProvider;
export { Context };