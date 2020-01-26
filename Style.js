
import { StyleSheet } from 'react-native';

const primaryColor = '#81b9bf';
const primaryDarkColor = '#52898f';
const darkGray = '#aaaaaa';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D2733',

    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    fillColumn: {
        flex: 1,
    },
    title: {
        textAlign: 'left',
        marginLeft: 25,
        marginVertical: 2,
        fontSize: 35,
        fontWeight: '900',
        color: '#f1f1f2',


    },

    title2: {
        textAlign: 'left',
        marginLeft: 25,
        marginVertical: 2,
        fontSize: 35,
        fontWeight: '900',
        color: '#f1f1f2',


    },

    title3: {
        textAlign: 'left',
        marginLeft: 25,
        marginVertical: 5,
        fontSize: 22,

        color: '#f1f1f2',

    },
    body: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 19,
    },
    cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        color: 'white',

        padding: 5,
        marginLeft: 20,
        marginRight: 25,
        margin: 10,
        height: 50,
        borderRadius: 5,
        fontSize: 18,
        backgroundColor: '#454f5d',
        textAlign: 'left',
    },
    separator: {
        marginVertical: 4,
        borderBottomColor: darkGray,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    primaryButton:
    {
        margin: 10,
        backgroundColor: primaryColor,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: primaryDarkColor,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryButton:
    {
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 5,
        borderColor: "#ffd5c0",
        justifyContent: 'center',

    },
    deleteButton:
    {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        marginTop: 30,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: '#ffd5c0',
        borderColor: '#ffd5c0',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',

    },
    iconButton: {
        margin: 10,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    plainList: {
        margin: 10
    },
    listViewItem: {
        alignSelf: 'stretch',
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        margin: 5,
        height: 40,
        color: "black",
        justifyContent: 'center',
    },
    listViewItemText: {
        fontSize: 17
    },
    marker: {
        borderRadius: 4,
        margin: 10,
        marginBottom: 0,
        fontSize: 17,
    },
    subtitle: {
        fontStyle: 'italic',
        textAlign: 'center',
        fontSize: 14,
        color: darkGray,
        marginBottom: 30
    },
    centre: {
      
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,

    },

    title2: {

        textAlign: 'left',
        marginLeft: 25,
        marginVertical: 4,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f1f1f2',


    },
    margin: {

        marginBottom: '4%',
        marginTop: '20%',
      
    },

    margin2: {

        marginBottom: '4%',
        backgroundColor: 'transparent',
    },

    marginCalendar: {

        marginBottom: '4%',
        marginLeft: "5%",
        alignItems: 'center',
        backgroundColor: '#ffd5c0',
        marginRight: "5%",
        borderRadius: 10
    },

    marginCalendar2: {

        marginBottom: '4%',
        backgroundColor: 'transparent',  
        borderRadius: 10,
        marginLeft: "6%",

    },

    buttonSignUp: {
        textAlign: 'center',
        fontSize: 17,
        color: '#f1f1f2',
        fontWeight: 'bold',
    },

    addEventText: {
        fontSize: 18,
        color: "white",
    },

    or: {

        textAlign: 'center',
        fontSize: 17,
        color: '#f1f1f2',
    },

    errorMessage: {
        textAlign: 'left',
      
    },

    error: {
        textAlign: 'left',
        marginLeft: 25,
        marginVertical: 5,
        fontSize: 15,
        fontWeight: '600',
        color: '#e11825',
        fontWeight: 'bold',
    },

    buttonLogOut: {

       
        textAlign: 'center',
        fontSize: 17,
        color: '#f1f1f2',
        fontWeight: 'bold',
    },

    textInput2: {
        color: 'white',
        padding: 10,
        margin: 2,
        borderRadius: 5,
        includeFontPadding: false,
        fontSize: 18,
        fontWeight: 'bold',

    },

    textinputsport: {
        color: 'white',
        padding: 10,
        fontSize: 18,
    },

    textinputsport5: {
        color: 'white',
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },

    textInput3: {
        color: 'white',
        padding: 3,
        marginLeft: 25,
        marginRight: 25,
        includeFontPadding: false,
        fontSize: 18,
        fontWeight: 'bold',
    },

    row: {
        flexDirection: 'row',
        marginRight: 20,
    },

    lastrow: {
        flexDirection: 'row',
        backgroundColor: "#ffd5c0",
        marginLeft: 20,
        marginRight: 20,
    },


    addButton: {
        margin: 5,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonSignUp2: {
        textAlign: 'center',
        fontSize: 15,
        color: '#ffd5c0',
    },

    endbuttons: {
        flexDirection: 'row',
        marginLeft: 30,
        width: 50,
        alignSelf: 'center'
    },

    endbuttons2: {
        flexDirection: 'row',
        height: 50,
        alignSelf: 'center',
        marginLeft: 5,
    },

    usernameview: {

        width: 160,
        height: 50,
        marginLeft: 15,
    },

    usernameview2: {

        width: 170,
        height: 50,
        marginLeft: 20,
    },

    sportview: {

        width: 130,
        height: 50,
        marginLeft: 20,
    },

    sportview2: {

        width: 110,
        height: 50,
        marginLeft: 5,
    },

    sportview3: {

        width: 250,
        height: 50,
        marginLeft: 5,
    },

    sportview4: {

        width: 160,
        height: 50,
        marginLeft: 15,
    },

    placeview: {

        width: 110,
        height: 50,
        marginLeft: 20,
    },

    placeview4: {

        width: 130,
        height: 50,
        marginLeft: 20,
    },

    bar: {

        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#222",
        height: 50,

    }

    ,

    tensteps: {


        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,

    },


    details: {
        color: 'white',
        padding: 5,
        marginLeft: 20,
        marginRight: 25,
        margin: 10,
        height: 50,
        borderRadius: 5,
        fontSize: 18,
        textAlign: 'left',
    },


    pink: {

        width: 150,
        height: 50,
        backgroundColor: "#ffd5c0"
    },

    logoutbutton:
    {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        borderColor: '#ffd5c0',
        width: 80,
        height: 50,
        justifyContent: 'center',
        fontWeight: 'bold',

    },

    logview: {
        flexDirection: 'row-reverse',
        marginLeft: 10,

    },

    saveFriend: {

        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        marginTop: 30,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: '#aed581',
        borderColor: '#007c00',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',


    },
    deleteFriend: {

        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        marginTop: 30,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: '#e11825',
        borderColor: '#7e0000',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',


    }

});

export default styles;