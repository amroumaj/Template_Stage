import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
{/*                     <p>
                        <Link to ="/Login">Login</Link>
                    </p> */}
                </section>
            ) : (
                <section className="flex flex-col items-center p-4  w-full  justify-start rounded-3xl max-w-450px " >
                    <p ref={errRef} className={errMsg ? "errmsg text-firebrick font-bold p-2 mb-2" : "offscreen absolute left-[-9999px]"} aria-live="assertive"></p>
                    <h1 className="text-3xl font-bold flex-col p-14 m-10">Register</h1>
                    <form className="flex flex-col justify-evenly grow pb-1 " onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            <span className={validName ? "valid" : "hide hidden"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validName || !user ? "hide hidden" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input className="py-1 px-3 text-base justify-center rounded-3xl w-64 m-1 border-2 outline-none"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions text-xs rounded p-1 relative bottom-2 " : "offscreen absolute left-[-9999px] "}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            4 to 24 characters. <br/>
                            Must begin with a letter.<br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>



                        <label htmlFor="password">
                            Password:
                            <span className={validPwd ? "valid" : "hide hidden"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validPwd || !pwd ? "hide hidden" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </span>
                        </label>
                        <input className="py-1 px-3 text-base rounded-3xl m-1 w-64  border-2 outline-none"
                            type="password"
                            id="password"
                            onChange={(e)=>setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={()=>setPwdFocus(true)}
                            onBlur={()=>setPwdFocus(false)}
                        ></input>

                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions text-xs rounded p-1 relative bottom-2" : "offscreen absolute left-[-9999px]"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters,<br/> a number and a special character.<br />
                            Allowed special characters: 
                            <span aria-label="exclamation mark">!</span>
                            <span aria-label="at symbol">@</span>
                            <span aria-label="hashtag">#</span>
                            <span aria-label="dollar sign">$</span>
                            <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <span className={validMatch && matchPwd ? "valid" : "hide hidden"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validMatch || !matchPwd ? "hide hidden" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input className="py-1 px-3 text-base rounded-3xl w-64 m-1  border-2 outline-none"
                            type="password"
                            id="confirm_password"
                            onChange={(e)=>setMatchPwd(e.target.value)}
                            required
                            aria-onInvalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={()=>setMatchFocus(true)}
                            onBlur={()=>setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions text-xs rounded p-1 relative bottom-2" : "offscreen absolute left-[-9999px]"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the original password input field.
                        </p>

                        <button className="p-2 my-3 text-lg  rounded-3xl b" disabled={!validName || !validPwd ||validMatch ? true : false}>Sign Up</button>

                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                        <Link to ="/Login">Login</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register