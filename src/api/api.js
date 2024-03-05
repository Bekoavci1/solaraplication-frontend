import axios from 'axios';

const API_BASE_URL = 'https://solar-energy-app.azurewebsites.net';
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

const handleRequest = async (requestFunction) => {
    try {
        const response = await requestFunction();
        return [response.data, null];
    } catch (error) {
        console.log("Hata: ",error)
        return [null, error];
    }
}

export const CUSTOMERS= {
    getAll: async (queryParams) => {
        // console.log("wqeü",queryParams)
        return handleRequest(() => api.get('/customers', { params: queryParams }));
    },    
    byId: async (id) => {
        return handleRequest(() => api.get(`/customers/${id}`));
    },
    postCustomer: async (customer) => {
        return handleRequest(() => api.post('/customers', customer));
    },
    putCustomer: async (customer) => {
        return handleRequest(() => api.put(`/customers/${customer.id}`, customer));
    },
}

export const USER= {
    login: async (email,password) => {
        const userInformation = {
            email:email,
            password:password
        }
        return handleRequest(() => api.post('/users/login',userInformation));
    },
    
    byId: async (id) => {
        return handleRequest(() => api.get(`/customers/${id}`));
    },
    // postCustomer: async (customer) => {
    //     return handleRequest(() => api.post('/customers', customer));
    // },
    putCustomer: async (customer) => {
        return handleRequest(() => api.put(`/customers/${customer.id}`, customer));
    },
}




