export default function (state, action) {

    switch (action.type) {
        case ('CHANGE_TYPE'):
            switch (action.payload.type) {
                case 'countWords':
                    if (action.payload.typeMath === 0) {
                        if (state.countWords > 0)
                        state.countWords--; else alert('Error - press plus');
                    } else {
                        if (state.countWords < 26)
                            state.countWords++; else alert('Error - press minus');
                    }
                    break;
                case 'lines':
                    if (action.payload.typeMath === 0) {
                        if (state.lines > 0)
                        state.lines--; else alert('Error - press plus');
                    } else  {
                        state.lines++;
                    }
                    break;
            }

            return (
                {
                    countWords: state.countWords,
                    lines: state.lines
                }
            );

        default:
            if (state === undefined) {
                return (
                    {
                        countWords: 5,
                        lines: 4
                    }
                )
            } else return state;
    }


}