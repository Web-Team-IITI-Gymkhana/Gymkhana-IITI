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


    //AdminHomePage
    mainContent: {
        // backgroundColor: '#d7d1ac',
        backgroundColor: colors.primaryShade,
        paddingTop: '15px',
        paddingLeft: '15px',
        height: '85vh',
        maxWidth: '95vw',
        borderRadius: '25px',
    },
    
    sectionHeader: {
        backgroundColor: colors.primary,
        alignItems: 'flex-start',
        alignContent: 'center',
        height: '80vh',
        width: '20vw',
        borderRadius: '10px 0px 0px 10px',
    },
    sectionContent: {
        backgroundColor: colors.primary,
        marginLeft: '15px',
        height: '80vh',
        width: '71vw',
        borderRadius: '0px 10px 10px 0px',
    },
    sectionHeaderCard: {
        padding: '2px',
        margin: '7px',
        borderRadius: '10px 0px 0px 10px',
        backgroundColor: colors.accentShade,
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
    }
}