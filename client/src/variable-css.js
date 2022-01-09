const colors = {
    primary: '#69A3FA',
    primaryShade: '#1F5673',
    accent: '#deb400',
    accentShade: '#403400'
}

export const styles = {
    // typography
    heading1: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    subheading: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    // buttons
    buttonPrimary: {
        width: '120px',
        height: '40px',
        backgroundColor: colors.accent,

        '&:hover': {
            color: 'white',
            backgroundColor: colors.accentShade
        }
    },
}