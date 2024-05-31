import { create } from 'zustand';
import { getJWT, setJWT, removeJWT, getMe } from '../api/api-utils';
import { endpoints } from '../api/config';

export const useStore = create((set) => ({
    isAuth: false,
    user: null,
    token: null,
    login: (user, token) => {
        set({ isAuth: true, user, token });
        setJWT(token);
    },
    logout: () => {
        set({ isAuth: false, user: null, token: null });
        removeJWT();
    },
    checkAuth: async () => {
        const jwt = getJWT();
        if (jwt) {
            const user = await getMe(endpoints.me, jwt);
            if (user) {
              set({ isAuth: true, user, token: jwt });
              setJWT(jwt);
            } else {
<<<<<<< HEAD
                set({ isAuth: true, user: { ...user, id: user._id }, token: jwt });
                setJWT(jwt);
=======
              set({ isAuth: false, user: null, token: null });
              removeJWT();
>>>>>>> 2787a055440f745cc2d42b19c3226c87a45508d7
            }
        } else {
            set({ isAuth: false, user: null, token: null });
        }
    },
<<<<<<< HEAD
    openPopup: (typeForm) => {
        set({ popupIsOpened: true, typeForm })
    },
    closePopup: () => {
        set({ popupIsOpened: false, typeForm: null })
    },

})); 
=======
}));
>>>>>>> 2787a055440f745cc2d42b19c3226c87a45508d7
