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
        fontWeight: 'bold',
        textDecoration: 'underline'
    },


    //AdminHomePage
    mainContainer: {
        padding: 20,
    },
    sectionHeaderCard: {
        marginInline: 5,
        marginBlock: 2,
        padding: 5,
        borderRadius: 4,
        backgroundColor: colors.accentShade,
        transition: '.3s',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionHeaderCardSelected: {
        marginInline: 5,
        marginBlock: 2,
        padding: 5,
        borderRadius: 4,
        backgroundColor: colors.accent,
        color: 'white',
        transition: '.3s',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    // Section
    section: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 20,
    },
    sectionHeadersContainer: {

    },
    sectionContentContainer: {

    },

    // SectionChild
    sectionChildCard: {
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        backgroundColor: '#ffc8b3',
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
    },
    cropImageModal: {
        backgroundColor: 'transparent',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
}