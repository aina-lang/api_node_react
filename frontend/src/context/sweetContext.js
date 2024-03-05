import React, { createContext, useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const SweetAlertContext = createContext();

export const UseSweetAlert = () => {
    const context = useContext(SweetAlertContext);
    if (!context) {
        throw new Error('useSweetAlert must be used within a SweetAlertProvider');
    }
    return context;
};

export const SweetAlertProvider = ({ children }) => {
    const showLoading = (title) => {
        MySwal.fire({
            title: title,
            didOpen: () => {
                MySwal.showLoading();
            },
        });
    };

    const close = () => {
        MySwal.close();
    };

    const fire = (options) => {
        MySwal.fire(options);
    };

    const value = {
        showLoading,
        close,
        fire,
    };

    return (
        <SweetAlertContext.Provider value={value}>
            {children}
        </SweetAlertContext.Provider>
    );
};
