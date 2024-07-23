import Pocketbase from 'pocketbase';

const pb = new Pocketbase('http://127.0.0.1:8090');

export async function signup(username: string, email: string, password: string) {
    const data = {
      username: username,
      email: email,
      password: password,
      passwordConfirm: password,
    };
    await pb.collection("users").create(data);
}

export async function login(email: string, password: string) {
try {
    await pb.collection("users").authWithPassword(email, password);
    window.location.reload();
} catch(e) {
    alert(e);
}


}

export function signout() {
pb.authStore.clear();
window.location.reload();
}

export async function signInGithub(){
    const authData = await pb.collection('users').authWithOAuth2({ provider: 'github' });
}

export default pb;