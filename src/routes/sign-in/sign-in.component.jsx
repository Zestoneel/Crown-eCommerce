
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

    async function fetchData () {
            const response = await getRedirectResult(auth);
            console.log (response);
            
        }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // eslint-disable-next-line no-unused-vars
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;