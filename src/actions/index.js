import * as types from '../constant/ActionType';
export const login = (data) => {
    fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(response => {
            if (response.authorize === 'true') {
                const obj = {
                    isAuthenticate: true,
                    username: data.username,
                    password: data.password
                }
                localStorage.setItem('user', JSON.stringify(obj))
                return {
                    type: types.LOGIN,
                    data : obj
                }
            }
            else {
                return {
                    type: types.LOGIN,
                    data : null
                }
            }
        })
        .catch(error => console.error('Error:', error));
}

