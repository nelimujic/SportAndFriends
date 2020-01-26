import * as firebase from 'firebase';
import firebaseConfig from '../Config';
import { PersistContainer } from 'unstated-persist';
import { Linking, AsyncStorage  } from 'react-native';

const ref = firebase.database(firebaseConfig).ref();
const friendsRef = ref.child('users');

export default class CredentialsContainer extends PersistContainer {

     state = {
        name: "",
        surname: "",
        email: "",
        sport: "",
        password: "",
        username: "",
        displayName: "",
        errorMessageSignUp: null,
        errorMessageLogin: null

    };
    
    setNewPassword = (password) => {
        this.setState({password:password});
    };
    
    setNewUsername = (username) => {
        this.setState({username:username});
    };
    
    setNewEmail = (email) => {
        this.setState({email:email});
    };
    
    setNewSport = (sport) => {
		this.setState({sport:sport});
    };
    
    setNewName = (name) => {
		this.setState({name:name});
    };

    setNewSurname = (surname) => {
		this.setState({surname:surname});
    };


    handleSignUp = () => {


        if (this.state.name == "" || this.state.surname == "" || this.state.sport == "" || this.state.username == "") {
            this.setState({ errorMessageSignUp: 'You have to fill all the credentials' })

        }
        else {
            friendsRef.push({
                username: this.state.username,
                sport: this.state.sport,
                name: this.state.name,
                surname: this.state.surname,
            });

            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(userCredentials => {
                    return userCredentials.user.updateProfile({
                        displayName: this.state.email
                    });
                })
                .catch(error => this.setState({ errorMessage: error.message }));
        }
    };


    handleLogin = () => {

        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => this.setState({errorMessageLogin: error.message }));

            
    };

    signOutUser = () => {

        firebase
            .auth()
            .signOut();

        this.setState({email: "", password: "", errorMessage: null, name: "", surname: "", sport: "", username: "", displayname: ""});

     
    };


    change = () => {
     this.props.navigation.navigate("SignUpScreen");

    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    persist = {
		key: 'credentials',
		version: 1,
		storage: AsyncStorage,
	  };
    
}