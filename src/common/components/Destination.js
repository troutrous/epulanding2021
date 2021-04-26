import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProvide, updateDistrict } from "../../store/actions";
import camera_png from "../../assets/images/camera.png";

const Destination = () => {
  const dispatch = useDispatch();
  const providesData = useSelector((state) => state.resource.provides);
  const districtsData = useSelector((state) => state.resource.districts);
  const wardsData = useSelector((state) => state.resource.wards);
  const landingData = useSelector((state) => state.resource.landing);

  const [filesUpload, setFilesUpload] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [formValue, setFormValue] = useState({
    title: "",
    logo: "",
    phone: "",
    email: "",
    manager: "",
    telegram: "",
    youtube: "",
    website: "",
    detailAddress: "",
    ward: "",
    district: "",
    provide: "",
  });

  useEffect(() => {
    setFormValue({
      title: landingData?.title || "",
      logo: landingData?.logo || "",
      phone: landingData?.phone || "",
      email: landingData?.email || "",
      manager: landingData?.manager || "",
      telegram: landingData?.telegram || "",
      youtube: landingData?.youtube || "",
      website: landingData?.website || "",
      detailAddress: landingData?.address?.split("||")[0].trim() || "",
      ward: landingData?.address?.split("||")[1].trim() || "",
      district: landingData?.address?.split("||")[2].trim() || "",
      provide: landingData?.address?.split("||")[3].trim() || "",
    });
  }, [landingData]);

  const handleUpdateLanding = (e) => {
    e.preventDefault();
  };

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setFilesUpload((prevFiles) =>
        prevFiles.concat(Array.from(e.target.files))
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevFiles) => prevFiles.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };
  const renderPhotos = (source) => {
    return source.map((photo, index) => {
      return (
        <img height="100px" width="100px" src={photo} alt={index} key={photo} />
      );
    });
  };
  return (
    <div className="container small bg-white padding-form border-radius">
      <h3 className="title-form text-center mb-4">
        Update Landing Information
      </h3>
      <form className="wrap-form" onSubmit={handleUpdateLanding}>
        <div className="form-group">
          <div className="form-group-upload-image border-radius position-relative">
            <div className="content d-flex align-items-center justify-content-center border-radius">
              <img className="mr-2" src={camera_png} alt="" />
              <span>Chose a file or drag image it here</span>
            </div>
            <input
              accept="image/*"
              className="position-absolute h-100 w-100"
              id="contained-button-file"
              type="file"
              onChange={handleImageChange}
            />
            <div className="preview border-radius">
              <img
                className="border-radius"
                src={camera_png}
                alt="Preview Logo Landing"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="titleLanding">Title</label>
          <input
            type="text"
            className="form-control"
            id="titleLanding"
            value={formValue.title}
            onChange={(e) =>
              setFormValue({ ...formValue, title: e.target.value })
            }
          />
        </div>
        <div className="row">
          <div className="form-group col-4">
            <label htmlFor="select-ward">Ward</label>
            <select
              name=""
              className="form-control"
              id="select-ward"
              value={formValue?.ward}
              onChange={(e) =>
                setFormValue({ ...formValue, ward: e.target.value })
              }
              defaultValue={wardsData[0]}
            >
              <option value="">Phường/Xã</option>
              {wardsData &&
                wardsData.map((ward) => {
                  return (
                    <option value={ward.name} key={ward.id}>
                      {ward.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form-group col-4">
            <label htmlFor="select-district">District</label>
            <select
              name=""
              className="form-control"
              id="select-district"
              value={formValue?.district}
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  district: e.target.value,
                  ward: "",
                });
                const districtCode = districtsData.find(
                  (district) => e.target.value === district.name
                );
                dispatch(updateDistrict(districtCode.id));
              }}
              defaultValue={districtsData[0]}
            >
              <option value="">Quận/Huyện</option>
              {districtsData &&
                districtsData.map((district) => {
                  return (
                    <option value={district.name} key={district.id}>
                      {district.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form-group col-4">
            <label htmlFor="select-provide">Province</label>
            <select
              name=""
              className="form-control"
              id="select-provide"
              value={formValue?.provide}
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  provide: e.target.value,
                  district: "",
                  ward: "",
                });
                const provideCode = providesData.find(
                  (provide) => e.target.value === provide.name
                );
                dispatch(updateProvide(provideCode?.id));
              }}
              defaultValue={providesData[0]}
            >
              <option value="">Tỉnh/Thành phố</option>
              {providesData &&
                providesData.map((provide) => {
                  return (
                    <option value={provide.name} key={provide.id}>
                      {provide.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="detailAddress">Detail Address</label>
          <input
            type="address"
            className="form-control"
            id="detailAddress"
            value={formValue?.detailAddress}
            onChange={(e) =>
              setFormValue({ ...formValue, detailAddress: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneLanding">Phone</label>
          <input
            type="phone"
            className="form-control"
            id="phoneLanding"
            value={formValue?.phone}
            onChange={(e) =>
              setFormValue({ ...formValue, phone: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailLanding">Email</label>
          <input
            type="email"
            className="form-control"
            id="emailLanding"
            value={formValue?.email}
            onChange={(e) =>
              setFormValue({ ...formValue, email: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="managerLanding">Manager</label>
          <input
            type="name"
            className="form-control"
            id="managerLanding"
            autoComplete="name"
            value={formValue?.manager}
            onChange={(e) =>
              setFormValue({ ...formValue, manager: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="telegramLanding">Telegram</label>
          <input
            type="phone"
            autoComplete="phone"
            className="form-control"
            id="telegramLanding"
            value={formValue?.telegram}
            onChange={(e) =>
              setFormValue({ ...formValue, telegram: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="youtubeLanding">Youtube Channel</label>
          <input
            type="text"
            className="form-control"
            id="youtubeLanding"
            value={formValue?.youtube}
            onChange={(e) =>
              setFormValue({ ...formValue, youtube: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="websiteLanding">Website</label>
          <input
            type="text"
            className="form-control"
            id="websiteLanding"
            value={formValue?.website}
            onChange={(e) =>
              setFormValue({ ...formValue, website: e.target.value })
            }
          />
        </div>
        <button className="btn bg-main" type="submit">
          Cập nhật
        </button>
      </form>
    </div>
  );
};

export default Destination;
