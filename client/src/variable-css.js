const colors = {
    primary: '#ffefc7',
    primaryShade: '#3c2117',
    accent: '#3c2117',
    accentShade: 'white'
}

export const styles = {
    // typography
    headingBold: {
        fontSize: 40,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    subheadingBold: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 25,
        textAlign: 'center'
    },
    subheading2: {
        fontSize: 20,
        margin: 'auto',
        fontWeight: 'bold'
    },


    //AdminHomePage
    mainContainer: {
        padding: 10,
    },
    sectionHeadersContainer: {
        
    },
    sectionContentContainer: {
        
    },
    sectionHeaderCard: {
        margin: 10,
        padding: '5px 0',
        borderRadius: 4,
        backgroundColor: colors.accentShade,
        transition: '.3s'
    },
    sectionHeaderCardSelected: {
        margin: 10,
        padding: '5px 0',
        borderRadius: 4,
        backgroundColor: colors.accent,
        color: 'white',
        transition: '.3s'
    },

    // SectionChild
    sectionChildCard: {
        width: 350,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
    },


    // buttons
    buttonPrimary: {
        width: '120px',
        height: '40px',
        backgroundColor: colors.accent,
        marginLeft: '20px',
        marginRight: '20px',
        color: 'white',

        '&:hover': {
            color: 'black',
            backgroundColor: colors.accentShade
        }
    },

    buttonOpposite: {
        width: '120px',
        height: '40px',
        marginRight: '10px',
        backgroundColor: colors.accentShade,

        '&:hover': {
            color: 'white',
            backgroundColor: colors.accent
        }
    },
    // modal
    fileSelectModal: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 30,
        width: '100%',
        maxWidth: 1000,
    }
}