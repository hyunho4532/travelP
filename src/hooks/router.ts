export const moveRouter = (key: number, setLoginOpen?: any, navigate?: any) => {
    switch (key) {
        case 0: {
            navigate("/introduce")
            break;
        }
        case 1: {
            navigate("/schedule")
            break;
        }
        case 2: {
            navigate("/tour")
            break;
        }
        case 3: {
            navigate("/course")
            break;
        }
        case 4: {
            setLoginOpen(true);
            break;
        }
        case 5: {
            navigate("/detail/tour");
            break;
        }
    }

    return navigate;
}