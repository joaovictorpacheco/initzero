export const userAuth = () => localStorage.getItem('userLogin').split('.')[1] !== null;
export const parseJwt = () => {
    let base64 = localStorage.getItem('userLogin').split('.')[1];
    return JSON.parse(window.atob(base64))
}