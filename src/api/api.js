import { Token } from "@mui/icons-material";
import axios from "axios";

const API_BASE_URL = "https://solar-energy-app.azurewebsites.net";
// const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

// const handleRequest = async (requestFunction) => {
//   try {
//     const response = await requestFunction();
//     console.log("response: ", response);
//     return [response.data, null];
//   } catch (error) {
//     console.log("Hata: ", error);
//     return [null, error];
//   }
// };
//burası chat düzeltti bir bakalım!!!!
const handleRequest = async (requestFunction) => {
  try {
    const response = await requestFunction();
    return [response.data, null];
  } catch (error) {
    return [null, error.response ? error.response.data : error];
  }
};

export const CUSTOMERS = {
  getAll: async (queryParams) => {
    console.log("query", queryParams);
    return handleRequest(() => api.get("/customers", { params: queryParams }));
  },
  byId: async (id) => {
    return handleRequest(() => api.get(`/customers/${id}`));
  },
  postCustomer: async (customer) => {
    return handleRequest(() => api.post("/customers", customer));
  },
  putCustomer: async (customer) => {
    return handleRequest(() => api.put(`/customers/${customer.id}`, customer));
  },
};

export const ADDRESS = {
  byId: async (id) => {
    return handleRequest(() => api.get(`/addresses/${id}`));
  },
  postAddress: async (address) => {
    return handleRequest(() => api.post("/addresses", address));
  },
  putAddress: async (address) => {
    return handleRequest(() => api.put(`/addresses/${address.id}`, address));
  },
};

export const COMPANY = {
  postCompany: async (company) => {
    return handleRequest(() => api.post("/companies/create-company", company));
  },
};

export const USER = {
  login: async (email, password) => {
    const userInformation = {
      email: email,
      password: password,
    };
    return handleRequest(() => api.post("/users/login", userInformation));
  },

  register: (user, company) => {
    COMPANY.postCompany(company)
      .then((companyResponse) => {
        console.log("responsecompany", companyResponse);

        // companyResponse içinden company_id'yi çıkarma
        const companyId = companyResponse[0]._id; // ya da companyResponse.data.id gibi bir yapı olabilir, API'nize bağlı.

        user.company_id = companyId;
        console.log("Company ID set for user:", companyId);
        user.role = "company";
        // Kullanıcı kaydı için bir sonraki adım
        // Burada, handleRequest fonksiyonunuzu Promise tabanlı olarak kullanmanız gerekebilir,
        // veya api.post(...) çağrısını doğrudan döndürebilirsiniz.
        return handleRequest(() => api.post("/users/register", user));
      })
      .catch((error) => {
        // Hata yönetimi
        console.error("Registration failed:", error);
        throw new Error(`Registration failed: ${error}`);
      });
  },

  getProfile: async () => {
    return handleRequest(() => api.get("/users/profile"));
  },

  updateProfile: async (userId, userData) => {
    return handleRequest(() => api.patch(`/users/${userId}`, userData));
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
};
