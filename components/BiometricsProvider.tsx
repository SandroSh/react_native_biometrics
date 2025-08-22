import { createContext, PropsWithChildren } from "react";





const BiometricsContext = createContext({});

const BiometricProvider = ({children}:PropsWithChildren ) => {
    return (
        <BiometricsContext.Provider value={{isUnlocked:false}}>
            {children}
        </BiometricsContext.Provider>
    )
}

export default BiometricProvider;