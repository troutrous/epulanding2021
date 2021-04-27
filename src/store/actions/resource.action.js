import * as actionTypes from "./actionTypes";
import store from "../index";
import axios from "../../api/index";

const getStart = () => {
  return {
    type: actionTypes.GET_RESOURCE_START,
  };
};
const getFailed = (error) => {
  return {
    type: actionTypes.GET_RESOURCE_FAILED,
    payload: {
      error: error,
    },
  };
};

const getProvidesSuccess = (dataSuccess) => {
  return {
    type: actionTypes.GET_PROVIDES_SUCCESS,
    payload: dataSuccess,
  };
};
const getDistrictsSuccess = (dataSuccess) => {
  return {
    type: actionTypes.GET_DISTRICTS_SUCCESS,
    payload: dataSuccess,
  };
};
const getWardsSuccess = (dataSuccess) => {
  return {
    type: actionTypes.GET_WARDS_SUCCESS,
    payload: dataSuccess,
  };
};

const getLandingSuccess = (dataSuccess) => {
  return {
    type: actionTypes.GET_LANDING_SUCCESS,
    payload: dataSuccess,
  };
};

const getProducts = (dataSuccess) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: dataSuccess,
  };
};

export const getProvides = () => {
  return async (dispatch) => {
    try {
      dispatch(getStart());

      const landingResponse = await axios.get("/api/user/getbyid/33/shop");
      dispatch(getLandingSuccess(landingResponse.data.data));
      let productsResponse = [];
      const productResponse117 = await axios.get(
        "/api/public/getProduct?productID=117&shop_token=61V4SIaFH077s02ciOAEkmo6zWFAp88C"
      );
      const productResponse118 = await axios.get(
        "/api/public/getProduct?productID=118&shop_token=61V4SIaFH077s02ciOAEkmo6zWFAp88C"
      );
      const productResponse119 = await axios.get(
        "/api/public/getProduct?productID=119&shop_token=61V4SIaFH077s02ciOAEkmo6zWFAp88C"
      );
      const productResponse120 = await axios.get(
        "/api/public/getProduct?productID=120&shop_token=61V4SIaFH077s02ciOAEkmo6zWFAp88C"
      );
      productsResponse = [
        productResponse117.data.data,
        productResponse118.data.data,
        productResponse119.data.data,
        productResponse120.data.data,
      ];
      dispatch(getProducts(productsResponse));
      const providesResponse = await axios.get("/api/address/province");
      dispatch(getProvidesSuccess(providesResponse.data.data));
      let provideCode = providesResponse.data.data.find(
        (provide) =>
          landingResponse.data.data?.address?.split("||")[3].trim() ===
          provide.name
      );
      if (!provideCode.id) provideCode.id = "201";
      const districtsResponse = await axios.get(
        `/api/address/district/${provideCode?.id}`
      );
      dispatch(getDistrictsSuccess(districtsResponse.data.data));
      let districtCode = districtsResponse.data.data.find(
        (district) =>
          landingResponse.data.data?.address?.split("||")[2].trim() ===
          district.name
      );
      if (!districtCode.id) districtCode.id = "1482";
      const wardsResponse = await axios.get(
        `/api/address/ward/${districtCode.id}`
      );
      dispatch(getWardsSuccess(wardsResponse.data.data));
    } catch (error) {
      dispatch(getFailed(error));
    }
  };
};
export const getDistricts = () => {
  return async (dispatch) => {
    try {
      dispatch(getStart());
      const productResponse = await axios.get("/category/getall");
      dispatch(getDistrictsSuccess(productResponse.data));
    } catch (error) {
      dispatch(getFailed(error.response));
    }
  };
};
export const getWards = () => {
  return async (dispatch) => {
    try {
      dispatch(getStart());
      const productResponse = await axios.get("/category/getall");
      dispatch(getWardsSuccess(productResponse.data));
    } catch (error) {
      dispatch(getFailed(error.response));
    }
  };
};

export const updateProvide = (idProvide) => {
  return async (dispatch) => {
    try {
      dispatch(getStart());
      const districtsResponse = await axios.get(
        `/api/address/district/${idProvide}`
      );
      dispatch(getDistrictsSuccess(districtsResponse.data.data));
      const wardsResponse = await axios.get(
        `/api/address/ward/${districtsResponse.data.data[0].id}`
      );
      dispatch(getWardsSuccess(wardsResponse.data.data));
    } catch (error) {
      dispatch(getFailed(error.response));
    }
  };
};

export const updateDistrict = (idDistrict) => {
  return async (dispatch) => {
    try {
      dispatch(getStart());
      const wardsResponse = await axios.get(`/api/address/ward/${idDistrict}`);
      dispatch(getWardsSuccess(wardsResponse.data.data));
    } catch (error) {
      dispatch(getFailed(error.response));
    }
  };
};

export const updateLanding = (formValue, filesUpload) => {
  return async (dispatch) => {
    try {
      dispatch(getStart());

      if (filesUpload.length) {
        const formData = new FormData();
        filesUpload.forEach((file) => formData.append("file", file));
        const imageResponse = await axios({
          method: "POST",
          url: "/upload/shop/logo",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const updateResponse = await axios.post("/api/shopinfo/ins", {
          ...store.getState().resource.landing,
          title: formValue?.title || "",
          logo: imageResponse.data.data[0],
          address: `${formValue?.detailAddress} || ${formValue?.ward} || ${formValue?.district} || ${formValue?.provide}`,
          email: formValue.email,
          manager: formValue.manager,
          phone: formValue.phone,
          telegram: formValue.telegram,
          website: formValue.website,
          youtube: formValue.youtube,
        });
        dispatch(getLandingSuccess(updateResponse.data.data));
      } else {
        const updateResponse = await axios.post("/api/shopinfo/ins", {
          ...store.getState().resource.landing,
          title: formValue?.title || "",
          address: `${formValue?.detailAddress} || ${formValue?.ward} || ${formValue?.district} || ${formValue?.provide}`,
          email: formValue.email,
          manager: formValue.manager,
          phone: formValue.phone,
          telegram: formValue.telegram,
          website: formValue.website,
          youtube: formValue.youtube,
        });
        dispatch(getLandingSuccess(updateResponse.data.data));
      }
    } catch (error) {
      dispatch(getFailed(error.response));
    }
  };
};
