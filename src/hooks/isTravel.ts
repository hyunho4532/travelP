export const isTravel = (
    travelIsChecked: boolean,
    setTravel: React.Dispatch<React.SetStateAction<string>>,
    setTravelIsChecked: (value: React.SetStateAction<boolean>) => void
) => {

    setTravelIsChecked(!travelIsChecked);

    switch(travelIsChecked) {
        case true: return setTravel("아직 여행을 안하고 있어요!!");
        case false: return setTravel("현재 여행을 하고 있어요!!");
    }
}