import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Grid, Stack, Typography, TextField, Button } from "@mui/material";
import { CUSTOMERS, ADDRESS } from "../../api/api";

export default function AddCustomer() {
  const { customerId } = useParams(); 
  const navigate = useNavigate(); 
  const [customerData, setCustomerData] = useState({
    name: "",
    surname: "",
    email: "",
    street: "",
    houseNumber: "",
    country: "",
    city: "",
    postCode: "",
    addition: "",
    vatNumber: "",
    vatOffice: "",
    phone: "",
    mobile: "",
    notes: "",
  });

  useEffect(() => {
    const fetchCustomerAndAddressData = async () => {
      if (customerId && customerId !== "undefined") {
        const [customerResponse, customerError] = await CUSTOMERS.byId(
          customerId
        );
        if (customerError) {
          console.error(
            "Müşteri bilgisi yüklenirken hata oluştu:",
            customerError
          );
          return;
        }

        const [addressResponse, addressError] = await ADDRESS.byId(
          customerResponse.address_id
        );
        if (addressError) {
          console.error("Adres bilgisi yüklenirken hata oluştu:", addressError);
          return;
        }

        setCustomerData({
          name: customerResponse.name || "",
          surname: customerResponse.surname || "",
          email: customerResponse.email || "",
          street: addressResponse.street || "",
          houseNumber: addressResponse.house_number || "",
          country: addressResponse.country || "",
          city: addressResponse.city || "",
          postCode: addressResponse.postcode || "",
          addition: addressResponse.addition || "",
          vatNumber: customerResponse.vat_number || "",
          vatOffice: customerResponse.vat_office || "",
          phone: customerResponse.phone || "",
          mobile: customerResponse.mobile || "",
          notes: customerResponse.notes || "",
        });
      }
    };

    fetchCustomerAndAddressData();
  }, [customerId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  // Adres güncelleme işlemi
  const addressData = {
    street: customerData.street,
    house_number: customerData.houseNumber,
    country: customerData.country,
    city: customerData.city,
    postcode: customerData.postCode,
    addition: customerData.addition,
  };

  // Adres ID'sini almak için önce müşteri bilgisini çekin
  const [customerResponse, customerError] = await CUSTOMERS.byId(customerId);

  if (customerError) {
    console.error("Müşteri bilgisi yüklenirken hata:", customerError);
    return;
  }

  // Adresi güncelle
  const [addressUpdateResponse, addressUpdateError] = await ADDRESS.putAddress({
    ...addressData,
    id: customerResponse.address_id, // Adresin ID'si buraya eklenmelidir
  });

  if (addressUpdateError) {
    console.error("Adres güncellenirken hata oluştu:", addressUpdateError);
    return;
  }

  // Müşteri bilgilerini güncelle (email hariç)
  const customerUpdateData = {
    name: customerData.name,
    surname: customerData.surname,
    // Email adresi burada güncellenmiyor
    phone: customerData.phone,
    mobile: customerData.mobile,
    notes: customerData.notes,
    vat_number: customerData.vatNumber,
    vat_office: customerData.vatOffice,
    // Adres ID'si değişmeyeceği için burada adres bilgisi gönderilmiyor
  };

  const [customerUpdateResponse, customerUpdateError] = await CUSTOMERS.putCustomer({
    ...customerUpdateData,
    id: customerId, // Müşterinin ID'si buraya eklenmelidir
  });

  if (customerUpdateError) {
    console.error("Müşteri güncellenirken hata oluştu:", customerUpdateError);
    return;
  }

  console.log("Müşteri ve adres başarıyla güncellendi");
  navigate("/customers");
};

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography color="inherit" variant="h5" component="h1">
            Personal Information
          </Typography>
          <Stack direction="row" spacing={2} sx={{ width: "100%", mb: 2 }}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="standard"
              value={customerData.name}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="standard"
            value={customerData.email}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />

          <Typography
            color="inherit"
            variant="h5"
            component="h1"
            sx={{ mt: 2 }}
          >
            Address Information
          </Typography>
          <TextField
            id="street"
            name="street"
            label="Street"
            variant="standard"
            value={customerData.street}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Stack direction="row" spacing={2} sx={{ width: "100%", mb: 2 }}>
            <TextField
              id="houseNumber"
              name="houseNumber"
              label="House Number"
              variant="standard"
              value={customerData.houseNumber}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              id="country"
              name="country"
              label="Country"
              variant="standard"
              value={customerData.country}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ width: "100%", mb: 2 }}>
            <TextField
              id="city"
              name="city"
              label="City"
              variant="standard"
              value={customerData.city}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              id="postCode"
              name="postCode"
              label="Post Code"
              variant="standard"
              value={customerData.postCode}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
          <TextField
            id="addition"
            name="addition"
            label="Addition"
            variant="standard"
            value={customerData.addition}
            onChange={handleChange}
            multiline
            rows={2}
            fullWidth
            sx={{ mb: 2 }}
          />

          <Typography
            color="inherit"
            variant="h5"
            component="h1"
            sx={{ mt: 2 }}
          >
            Contact Information
          </Typography>
          <Stack direction="row" spacing={2} sx={{ width: "100%", mb: 2 }}>
            <TextField
              id="vatNumber"
              name="vatNumber"
              label="VAT Number"
              variant="standard"
              value={customerData.vatNumber}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              id="vatOffice"
              name="vatOffice"
              label="VAT Office"
              variant="standard"
              value={customerData.vatOffice}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ width: "100%", mb: 2 }}>
            <TextField
              id="phone"
              name="phone"
              label="Phone"
              variant="standard"
              value={customerData.phone}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              id="mobile"
              name="mobile"
              label="Mobile"
              variant="standard"
              value={customerData.mobile}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
          <TextField
            id="notes"
            name="notes"
            label="Notes"
            variant="standard"
            value={customerData.notes}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ width: "100%" }}
          >
            Save
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            display: "flex",
            background: "#eaeff1",
            justifyContent: "center",
            alignItems: "center",
            height: "98%",
          }}
        >
          <Box
            component="img"
            sx={{
              display: "flex",
              background: "#eaeff1",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
            alt="The house from the offer."
            src="https://f.hubspotusercontent30.net/hubfs/6069238/images/blogs/meauring-roofs.jpg"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
