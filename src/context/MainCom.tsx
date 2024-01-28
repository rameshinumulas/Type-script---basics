import { useContext } from "react";
import { getContextPrvd } from "./ContextProvider";

export const MainCom = () => {
    const mainStyContext = useContext(getContextPrvd);
    return (
        <div style={{ backgroundColor: mainStyContext?.primary?.mainBackground, color: mainStyContext?.primary?.mainText }}>
            <h2>this is the context provider styles we are using</h2>
        </div>
    )
}